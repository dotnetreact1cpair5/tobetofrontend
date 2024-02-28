import axios from "axios";
import { Skill } from "../models/skillModel";
import { BASE_API_URL } from "../environment/environment";

class SkillService {
  static async getSkillData(): Promise<Skill[] | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/Skills?PageIndex=0&PageSize=40"
        BASE_API_URL + "AccountSkill?PageIndex=0&PageSize=10"
      );
      const skillData = response.data?.items;
      if (skillData) {
        // const formattedData: Skill = {
        //   name: skillData.name,
        // };
        console.log(skillData);
        return skillData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Skill service error: ");
    }
  }
}

export default SkillService;
