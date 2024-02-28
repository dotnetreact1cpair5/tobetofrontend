import axios from "axios";
import { Skill } from "../models/skillModel";
import { BASE_API_URL } from "../environment/environment";
import { City } from "../models/cityModel";
import { District } from "../models/districtModel";

class DistrictService {
  static async getDistrictData(): Promise<District[] | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/Skills?PageIndex=0&PageSize=40"
        BASE_API_URL + "District?PageIndex=0&PageSize=100"
      );
      const districtData = response.data?.items;
      if (districtData) {
        // const formattedData: Skill = {
        //   name: cityData.name,
        // };
        console.log(districtData);
        return districtData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Skill service error: ");
    }
  }
}

export default DistrictService;
