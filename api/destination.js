const axios = require('axios');
// id: '7157bb98-aaac-495f-9bf0-01cdb83eeec0'
const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_e0b32f6d943046efa5d4bc10860dde28' 
};

const data = {
  name: 'My Destination',
  to_url: 'https://14a5-2409-4056-eca-7cda-f164-591e-5d53-9bcb.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));