import axios from "axios";
import { SocialMedia } from "../models/socialMediaModel";

class SocialMediaService {
  static async getSocialMediaData(): Promise<SocialMedia | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/SocialMediaPlatforms?PageIndex=0&PageSize=10"
      );
      const socialMediaData = response.data?.items[0];
      if (socialMediaData) {
        const formattedData: SocialMedia = {
            name:socialMediaData.name
        };
        return formattedData;
      } else {
        return null; 
      }
    } catch (error) {
      throw new Error("Social Media service error: "); 
    }
  }
}

export default SocialMediaService;

