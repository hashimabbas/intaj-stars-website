import mongoose, { Schema, model, models } from "mongoose";

interface IMorphoSCTHighlight {
  imageSrc: string;
  title: string;
  ar_title: string;
  description: string;
  ar_description: string;
  link: string;
  order: number;
}

const MorphoSCTHighlightSchema = new Schema<IMorphoSCTHighlight>({
  imageSrc: {
    type: String,
    required: [true, "Please provide an image URL."],
  },
  title: {
    type: String,
    required: [true, "Please provide a title."],
    trim: true,
  },
  ar_title: {
    type: String,
    required: [true, "Please provide an Arabic title."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
    trim: true,
  },
  ar_description: {
    type: String,
    required: [true, "Please provide an Arabic description."],
    trim: true,
  },
  link: {
    type: String,
    default: "#",
  },
  order: {
    type: Number,
    default: 0,
  },
});

const MorphoSCTHighlight = models.MorphoSCTHighlight || model<IMorphoSCTHighlight>("MorphoSCTHighlight", MorphoSCTHighlightSchema);

export default MorphoSCTHighlight;
