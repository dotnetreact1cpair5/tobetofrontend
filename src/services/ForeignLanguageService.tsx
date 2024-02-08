import axios from "axios";
import { ForeignLanguage } from "../models/foreignLanguageModel";

class ForeignLanguageService {
  async getForeignLanguageData(): Promise<ForeignLanguage | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/ForeignLanguage?PageIndex=0&PageSize=10"
      );
      const userData = response.data?.items[0];
      if (userData) {
        const formattedData: ForeignLanguage = {
          name: userData.name
        };
        return formattedData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Veri getirilemedi.");
    }
  }
}

export default ForeignLanguageService;
