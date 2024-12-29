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
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Professional Badminton Player", content: "Details about being a professional player." },
      { subheading: "Coach/Trainer", content: "Guidance for becoming a coach or trainer." },
      { subheading: "Sports Analyst/Commentator", content: "Information about a career as a sports analyst." },
      { subheading: "Umpire/Match Official", content: "How to become an umpire or match official." },
      { subheading: "Fitness Trainer", content: "Fitness trainer career path details." },
      { subheading: "Administrator/Manager", content: "Roles and responsibilities of administrators." },
      { subheading: "Success Stories", content: "Inspirational success stories." },
      { subheading: "Earnings and Growth", content: "Details about earning potential and career growth." },
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
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Warm-Up", content: "Details about warm-up routines." },
      { subheading: "Technical Skills", content: "Technical skills required for excellence." },
      { subheading: "Tactical Training", content: "Tactical training methods." },
      { subheading: "Physical Conditioning", content: "Physical conditioning tips." },
      { subheading: "Nutrition Plan", content: "Recommended nutrition plans." },
    ],
  },
  physical_helth: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Fitness Requirements", content: "Fitness standards required." },
      { subheading: "Recommended Exercises", content: "Exercises to enhance fitness." },
    ],
  },
  mental_helth: {
    type: [
      {
        subheading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Health Standards", content: "Overview of health standards." },
      { subheading: "Preventive Measures", content: "Preventive measures for safety." },
      { subheading: "Common Injuries in Badminton", content: "Details about common injuries." },
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
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Achievements", content: "Achievements required for scholarships." },
      { subheading: "Academic Standards", content: "Academic criteria for eligibility." },
      { subheading: "Documentation", content: "Required documents for application." },
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
          default: "Content for this subheading will go here.",
        },
      },
    ],
    required: true,
    default: [
      { subheading: "Sports Achievements", content: "Sports achievements for scholarships." },
      { subheading: "Academic Criteria", content: "Academic standards for college scholarships." },
      { subheading: "Selection Process", content: "Details about the selection process." },
      { subheading: "Bonus Points", content: "Information about bonus points." },
    ],
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
