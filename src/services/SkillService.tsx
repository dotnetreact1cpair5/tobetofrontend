import axios from "axios";
import { Skill } from "../models/skillModel";

class SkillService {
  async getSkillData(): Promise<Skill | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/Skills?PageIndex=0&PageSize=10"
      );
      const userData = response.data?.items[0];
      if (userData) {
        const formattedData: Skill = {
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

export default SkillService;
