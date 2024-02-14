import axios from "axios";
import { Certificate } from "../models/certificateModel";

class CertificateService {
  static async getCertificateData(): Promise<Certificate | null> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5045/api/AccountCertificates?PageIndex=0&PageSize=10"
      );
      const CertificateData = response.data?.items[0];
      if (CertificateData) {
        const formattedData: Certificate = {
          accountId: CertificateData.accountId,
          name: CertificateData.name,
        };
        return formattedData;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Certificate service error: ");
    }
  }
}

export default CertificateService;
