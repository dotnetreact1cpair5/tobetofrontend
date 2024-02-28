import axios from "axios";
import { ForeignLanguage } from "../models/foreignLanguageModel";
import { BASE_API_URL } from "../environment/environment";
class ForeignLanguageService {
  static async getForeignLanguageData(): Promise<ForeignLanguage[] | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/ForeignLanguage?PageIndex=0&PageSize=20"
        BASE_API_URL + "AccountForeignLanguage?PageIndex=0&PageSize=10"
      );
      const languageData = response.data?.items;
      if (languageData) {
        // const formattedData: ForeignLanguage = {
        //   name: languageData.name,
        // };
        console.log(languageData);
        return languageData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Foreign language service error: ");
    }
  }
}

export default ForeignLanguageService;
