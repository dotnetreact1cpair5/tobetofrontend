import axios from "axios";
import { SocialMedia } from "../models/socialMediaModel";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class SocialMediaService {
  static async getSocialMediaData(): Promise<SocialMedia[] | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/SocialMediaPlatforms?PageIndex=0&PageSize=10"
        BASE_API_URL + "AccountSocialMedias?PageIndex=0&PageSize=10"
      );
      const socialMediaData = response.data?.items;

      return socialMediaData;
    } catch (error) {
      throw new Error("Social Media service error: ");
    }
  }

  static async postSocialMedia(socialMediaId: number): Promise<any> {
    const response = await axiosInstance.post<SocialMedia>(
      BASE_API_URL + `/AccountSocialMedias=${socialMediaId}`
    );
    console.log(response.data);
    return response.data.socialMediaPlatformName;
  }
}

export default SocialMediaService;
