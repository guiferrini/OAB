import axios from 'axios';

const api = axios.create({
  baseURL: 'https://77digitalmarketing.api-us1.com/',
  params: {
    'api_key': `664dbbb7f5af474e0c6e087fafcc73927cec39c10a5c26dea2e0a8901e067c159af02892`,
  }
});
    

export default api;

      //funciona, acessa api
      // const api = axios.create({
      //   // baseURL: 'https://77digitalmarketing.api-us1.com/admin/api.php?api_key=664dbbb7f5af474e0c6e087fafcc73927cec39c10a5c26dea2e0a8901e067c159af02892&api_action=list_view&id=7',
      //   baseURL: 'https://77digitalmarketing.api-us1.com/admin/api.php',
      //   params: {
      //     api_key: `664dbbb7f5af474e0c6e087fafcc73927cec39c10a5c26dea2e0a8901e067c159af02892`,
      //     api_action: 'list_view',
      //     api_output: 'json',
      //     id: 7,
      //   }
      // });