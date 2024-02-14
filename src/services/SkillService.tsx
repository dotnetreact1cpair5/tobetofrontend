import axios from "axios";
import { Skill } from "../models/skillModel";

class SkillService {
  static async getSkillData(): Promise<Skill | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/Skills?PageIndex=0&PageSize=10"
      );
      const skillData = response.data?.items[0];
      if (skillData) {
        const formattedData: Skill = {
          name:skillData.name
        };
        return formattedData;
      } else {
        return null; 
      }
    } catch (error) {
      throw new Error("Skill service error: "); 
    }
  }
}

export default SkillService;
