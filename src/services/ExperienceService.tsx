export const fetchExperiences = async () => {
    try {
      const response = await fetch("http://localhost:5045/api/Experiences?PageIndex=0&PageSize=5");
  
      if (!response.ok) {
        throw new Error('Veri çekme hatası!');
      }
  
      const responseData = await response.json();
  
      if (!responseData || !responseData.items || !Array.isArray(responseData.items)) {
        console.error('Alınan veri beklenen formatta değil:', responseData);
        throw new Error('Alınan veri beklenen formatta değil');
      }
  
      return responseData.items;
    } catch (error) {
      console.error('Veri alınırken hata oluştu!:', error);
      throw error;
    }
  };