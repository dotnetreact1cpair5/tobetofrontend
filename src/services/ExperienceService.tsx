import axios from "axios";

import { BASE_API_URL } from "../environment/environment";
import { Experience } from "../models/experienceModel";

class ExperienceService {
  static async getExperienceData(): Promise<Experience | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/SocialMediaPlatforms?PageIndex=0&PageSize=10"
        BASE_API_URL + "AccountExperience?PageIndex=0&PageSize=10"
      );
      console.log(response);
      const experienceData = response.data.items;
      console.log(experienceData);
      if (experienceData) {
        // const formattedData: Experience = {
        //   name: experienceData.companyName,
        // };
        return experienceData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Experience service error: ");
    }
  }
}

export default ExperienceService;
