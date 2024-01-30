import { useEffect, useState } from "react";
import axios from "axios";

interface ProfileData {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
}

const useProfileData = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>(
          "http://localhost:5045/api/Account?PageIndex=0&PageSize=10"
        );
        const userData = response.data?.items[0];
        if (userData) {
          const formattedData: ProfileData = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            birthDate: userData.birthDate,
            phoneNumber: userData.phoneNumber,
            email: userData.email
          };
          setProfileData(formattedData);
        } else {
          setError("Veri alınamadı.");
        }
      } catch (error) {
        setError("Veri getirilemedi.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { profileData, loading, error };
};

export default useProfileData;
