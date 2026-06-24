"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HighlightForm {
  _id?: string;
  imageSrc: string;
  title: string;
  ar_title: string;
  description: string;
  ar_description: string;
  link: string;
  order: number;
}

const emptyForm: HighlightForm = {
  imageSrc: "",
  title: "",
  ar_title: "",
  description: "",
  ar_description: "",
  link: "#",
  order: 0,
};

export default function MorphoSCTHighlightsDashboard() {
  const router = useRouter();
  const [highlights, setHighlights] = useState<HighlightForm[]>([]);
  const [form, setForm] = useState<HighlightForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchHighlights = async () => {
    try {
      const res = await fetch("/api/morpho-sct-highlights");
      const data = await res.json();
      if (data.highlights) setHighlights(data.highlights);
    } catch (err) {
      console.error("Failed to fetch highlights", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "order" ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        await fetch(`/api/morpho-sct-highlights/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/morpho-sct-highlights", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setForm(emptyForm);
      setEditingId(null);
      await fetchHighlights();
    } catch (err) {
      console.error("Failed to save highlight", err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (h: HighlightForm) => {
    setForm(h);
    setEditingId(h._id!);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this highlight?")) return;
    try {
      await fetch(`/api/morpho-sct-highlights/${id}`, { method: "DELETE" });
      await fetchHighlights();
    } catch (err) {
      console.error("Failed to delete highlight", err);
    }
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          MorphoSCT Highlights Management
        </h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {editingId ? "Edit Highlight" : "Add New Highlight"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
              <input type="text" name="imageSrc" value={form.imageSrc} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Order</label>
              <input type="number" name="order" value={form.order} onChange={handleChange} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title (English)</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title (Arabic)</label>
              <input type="text" name="ar_title" value={form.ar_title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (English)</label>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={3} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (Arabic)</label>
              <textarea name="ar_description" value={form.ar_description} onChange={handleChange} required rows={3} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Link (optional)</label>
              <input type="text" name="link" value={form.link} onChange={handleChange} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button type="submit" disabled={saving} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 disabled:opacity-50">
              {saving ? "Saving..." : editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Title (EN)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Title (AR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {highlights.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">No highlights found.</td>
                </tr>
              ) : (
                highlights.map((h) => (
                  <tr key={h._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4">
                      <img src={h.imageSrc} alt={h.title} className="w-16 h-10 object-cover rounded" />
                    </td>
                    <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{h.title}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{h.ar_title}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{h.order}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(h)} className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                      <button onClick={() => handleDelete(h._id!)} className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
