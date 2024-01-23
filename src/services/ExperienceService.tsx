export const fetchExperiences = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

    if (!response.ok) {
      throw new Error("Veri çekme hatası!");
    }

    const { items } = await response.json();

    if (
      !responseData ||
      !responseData.items ||
      !Array.isArray(responseData.items)
    ) {
      console.error("Alınan veri beklenen formatta değil:", responseData);
      throw new Error("Alınan veri beklenen formatta değil");
    }

    return items;
  } catch (error) {
    console.error("Veri alınırken hata oluştu!:", error);
    throw error;
  }
};
