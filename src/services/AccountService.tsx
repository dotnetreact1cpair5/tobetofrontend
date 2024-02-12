// AccountService.js
import axios from "axios";
import { Account } from "../models/accountModel";

class AccountService {
  async getProfileData(): Promise<Account | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/Accounts?PageIndex=0&PageSize=10"
      );
      const userData = response.data?.items[0];
      if (userData) {
        const formattedData: Account = {
          firstName: userData.firstName,
          lastName: userData.lastName,
          birthDate: userData.birthDate,
          phoneNumber: userData.phoneNumber,
          email: userData.email
        };
        return formattedData;
      } else {
        return null; 
      }
    } catch (error) {
      throw new Error("Account service error: "); 
    }
  }
}

export default AccountService;
