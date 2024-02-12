import axios from 'axios';

const ForeignLanguageService = {
  async getForeignLanguageData() {
    const response = await axios.get('http://localhost:5045/api/ForeignLanguages?PageIndex=0&PageSize=10');
    return response.data;
  }
};

export default ForeignLanguageService;
