// lib/models/Service.ts
import mongoose, { Schema, model, models } from "mongoose";

interface IService {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ServiceSchema = new Schema<IService>({
  imageSrc: {
    type: String,
    required: [true, "Please provide an image URL."],
  },
  title: {
    type: String,
    required: [true, "Please provide a title."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
    trim: true,
  },
  link: {
    type: String,
    default: "#", // Default link
  },
});

const Service = models.Service || model<IService>("Service", ServiceSchema);

export default Service;
