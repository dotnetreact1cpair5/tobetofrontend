import axios from "axios";
import { ForeignLanguage } from "../models/foreignLanguageModel";

class ForeignLanguageService {
  static async getForeignLanguageData(): Promise<ForeignLanguage | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/ForeignLanguages?PageIndex=0&PageSize=10"
      );
      const languageData = response.data?.items[0];
      if (languageData) {
        const formattedData: ForeignLanguage = {
          name: languageData.name
        };
        return formattedData;
      } else {
        return null; 
      }
    } catch (error) {
      throw new Error("Foreign language service error: "); 
    }
  }
}

export default ForeignLanguageService;