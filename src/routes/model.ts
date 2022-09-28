import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      trim: true,
      required: true,
    },
    job: {
      type: String,
      trim: true,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Profile", schema);
