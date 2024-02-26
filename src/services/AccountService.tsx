import axios from "axios";
import { Account } from "../models/accountModel";
import { BASE_API_URL } from "../environment/environment";

class AccountService {
  static async getProfileData(): Promise<Account | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/Account?PageIndex=0&PageSize=5"
        BASE_API_URL + "Account?PageIndex=0&PageSize=5"
      );
      const userData = response.data?.items[0];
      console.log(userData);

      return userData;
    } catch (error) {
      throw new Error("Account service error: ");
    }
  }
}

export default AccountService;
