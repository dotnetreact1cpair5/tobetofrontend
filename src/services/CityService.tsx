import axios from "axios";
import { Skill } from "../models/skillModel";
import { BASE_API_URL } from "../environment/environment";
import { City } from "../models/cityModel";

class CityService {
  static async getCityData(): Promise<City | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/Skills?PageIndex=0&PageSize=40"
        BASE_API_URL + "City?PageIndex=0&PageSize=100"
      );
      const cityData = response.data?.items;
      if (cityData) {
        // const formattedData: Skill = {
        //   name: cityData.name,
        // };
        console.log(cityData);
        return cityData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Skill service error: ");
    }
  }
}

export default CityService;
