import axios from "axios";
import { Skill } from "../models/skillModel";
import { BASE_API_URL } from "../environment/environment";
import { City } from "../models/cityModel";
import { University } from "../models/universityModel";

class UniversityService {
  static async getUniData(): Promise<University[] | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/Skills?PageIndex=0&PageSize=40"
        BASE_API_URL + "Universities?PageIndex=0&PageSize=200"
      );
      const uniData = response.data?.items;
      if (uniData) {
        // const formattedData: Skill = {
        //   name: cityData.name,
        // };
        console.log(uniData);
        return uniData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Skill service error: ");
    }
  }
}

export default UniversityService;
