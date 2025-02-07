import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  sports: {
    type: String,
    required: true,
  },
  Feature: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Professional Player", content: "" },
      { subheading: "Coach/Trainer", content: " " },
      { subheading: "Sports Analyst/Commentator", content: "" },
      { subheading: "Umpire/Match Official", content: "" },
      { subheading: "Fitness Trainer", content: "" },
      { subheading: "Administrator/Manager", content: "" },
      { subheading: "Success Stories", content: "" },
      { subheading: "Earnings and Growth", content: "" },
    ],
  },
  Ruls: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "International Rules", content: "" },
      { subheading: "Domestic Rules", content: "" },
      
    ],
  },
  physical_strength: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Fitness Requirements", content: "" },
      { subheading: "Recommended Exercises", content: "" },
    ],
  },
  mental_strength: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Health Standards", content: "" },
      { subheading: "Preventive Measures", content: " "},
      { subheading: "Common Injuries", content: "" },
    ],
  },
  scholarship_12th: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Infolink", content: "" },
    ],
  },
  scholarship_collage: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Infolink", content: "" },
    ],
  },
  Achivement_for_Jobs: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Infolink", content: "" },
    ],
  },
  Roadmap: {
    roadmapImg: {
      type: String, // Assuming you store the image URL as a string
      required: false,
      default: "",
    },
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;