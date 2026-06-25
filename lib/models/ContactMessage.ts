import mongoose, { Schema, model, models } from "mongoose";

interface IContactMessage {
  name: string;
  email: string;
  message: string;
  status: "new" | "read" | "followedUp";
  createdAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Please provide a message."],
    trim: true,
  },
  status: {
    type: String,
    enum: ["new", "read", "followedUp"],
    default: "new",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactMessage = models.ContactMessage || model<IContactMessage>("ContactMessage", ContactMessageSchema);

export default ContactMessage;
