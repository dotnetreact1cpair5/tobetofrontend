import axios from "axios";
import { Certificate } from "../models/certificateModel";
import { BASE_API_URL } from "../environment/environment";

class CertificateService {
  static async getCertificateData(): Promise<Certificate | null> {
    try {
      const response = await axios.get<any>(
        // "http://localhost:5045/api/AccountCertificates?PageIndex=0&PageSize=10"
        BASE_API_URL + "AccountCertificate?PageIndex=0&PageSize=10"
      );
      const CertificateData = response.data?.items;

      return CertificateData;
    } catch (error) {
      throw new Error("Certificate service error: ");
    }
  }
}

export default CertificateService;
