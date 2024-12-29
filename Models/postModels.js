import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    sports: {
        type: String,
        required: true
    },
    Feature: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Professional Badminton Player" },
            { subheading: "Coach/Trainer" },
            { subheading: "Sports Analyst/Commentator" },
            { subheading: "Umpire/Match Official" },
            { subheading: "Fitness Trainer" },
            { subheading: "Administrator/Manager" },
            { subheading: "Success Stories" },
            { subheading: "Earnings and Growth" }
        ]
    },
    Ruls: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Warm-Up" },
            { subheading: "Technical Skills" },
            { subheading: "Tactical Training" },
            { subheading: "Physical Conditioning" },
            { subheading: "Nutrition Plan" }
        ]
    },
    physical_helth: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Fitness Requirements" },
            { subheading: "Recommended Exercises" }
        ]
    },
    mental_helth: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Health Standards" },
            { subheading: "Preventive Measures" },
            { subheading: "Common Injuries in Badminton" }
        ]
    },
    scholarship_12th: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Achievements" },
            { subheading: "Academic Standards" },
            { subheading: "Documentation" }
        ]
    },
    scholarship_collage: {
        type: [
            {
                subheading: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true,
        default: [
            { subheading: "Sports Achievements" },
            { subheading: "Academic Criteria" },
            { subheading: "Selection Process" },
            { subheading: "Bonus Points" }
        ]
    }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
