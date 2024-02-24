var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('providers', '['PROVIDER(S)']');
data.append('files', fs.createReadStream('PATH TO YOUR FILE'));
data.append('language', 'LANGUAGE');

var config = {
  method: 'post',
  url: 'https://api.edenai.run/v1/pretrained/vision/ocr',
  headers: { 
    'Authorization': 'Bearer your_api_key', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
