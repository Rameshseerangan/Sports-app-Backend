import Post from "../Models/postModels.js";


export const createPost = async (req, res) => {
  try {
    const {
      sports,
      feature,
      sportsRegimens,
      physicalFitness,
      medicalFitness,
      scholarship12th,
      scholarshipCollege,
    } = req.body;

    const newPost = new Post({
      sports,
      feature: {
        professionalPlayer: feature.professionalPlayer,
        coachTrainer: feature.coachTrainer,
        sportsAnalyst: feature.sportsAnalyst,
        umpire: feature.umpire,
        fitnessTrainer: feature.fitnessTrainer,
        administratorManager: feature.administratorManager,
        successStories: feature.successStories,
        earningsAndGrowth: feature.earningsAndGrowth,
      },
      sportsRegimens: {
        warmUp: sportsRegimens.warmUp,
        technicalSkills: sportsRegimens.technicalSkills,
        tacticalTraining: sportsRegimens.tacticalTraining,
        physicalConditioning: sportsRegimens.physicalConditioning,
        nutritionPlan: sportsRegimens.nutritionPlan,
      },
      physicalFitness: {
        fitnessRequirements: physicalFitness.fitnessRequirements,
        recommendedExercises: physicalFitness.recommendedExercises,
      },
      medicalFitness: {
        healthStandards: medicalFitness.healthStandards,
        preventiveMeasures: medicalFitness.preventiveMeasures,
        commonInjuries: medicalFitness.commonInjuries,
      },
      scholarship12th: {
        achievements: scholarship12th.achievements,
        academicStandards: scholarship12th.academicStandards,
        documentation: scholarship12th.documentation,
      },
      scholarshipCollege: {
        sportsAchievements: scholarshipCollege.sportsAchievements,
        academicCriteria: scholarshipCollege.academicCriteria,
        selectionProcess: scholarshipCollege.selectionProcess,
        bonusPoints: scholarshipCollege.bonusPoints,
      },
    });

    await newPost.save();

    res
      .status(200)
      .json({ message: "Post Created Successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getPostsBySports = async (req, res) => {
  const { sports } = req.params; // Extract 'sports' parameter from the request
  try {
    // Find posts matching the sport
    const posts = await Post.find({ sports: sports });
    if (posts.length === 0) {
      return res.status(404).json({ message: `No posts found for the sport: ${sports}` });
    }
    res.status(200).json({ message: "Posts retrieved successfully", data: posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsBySport = async (req, res) => {
  const { sportName } = req.query; // Extract sportName from query parameter
  
  if (!sportName) {
    return res.status(400).json({ message: 'Sport name is required' });
  }

  try {
    // Find the posts that match the sportName from the database
    const posts = await Post.find({ sports: { $regex: new RegExp(`^${sportName}$`, 'i') } });

    if (posts.length === 0) {
      return res.status(404).json({ message: `No posts found for the sport: ${sportName}` });
    }

    res.status(200).json({ message: "Posts retrieved successfully", data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch posts due to an error.' });
  }
};

