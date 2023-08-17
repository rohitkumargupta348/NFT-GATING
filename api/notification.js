//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_e0b32f6d943046efa5d4bc10860dde28'
};

const data = {
  name: 'NFT Transfer',
  expression: 'DQoodHhfbG9nc190b3BpYzEgPX4gJ2I4YWNmRjBmMTA5Q2E1MjY4MDVBN0RBODVBOTU1RDZBZDFENEUxZWEnKSAvL2FjY291bnQgYWRkcmVzcyB3aGljaCB3ZSB3YW50IHRvIG1vbml0ZXIgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweGQ0RkI3YUM2ZDgwOTY5YzBiMTUzMzFhNGNiNzA0ZjYzZjQ3MzRlQzgnKSAvL2NvbnRyYWN0IGFkZHJlc3MgJiYgDQoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicp',
  network: 'mumbai',
  destinationIds: ['7157bb98-aaac-495f-9bf0-01cdb83eeec0']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ 'b8acfF0f109Ca526805A7DA85A955D6Ad1D4E1ea') //account address which we want to moniter && 
// (tx_logs_address == '0xd4FB7aC6d80969c0b15331a4cb704f63f4734eC8') //contract address && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')