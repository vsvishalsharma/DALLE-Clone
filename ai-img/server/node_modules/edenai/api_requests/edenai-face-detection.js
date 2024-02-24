var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('files', fs.createReadStream('PATH TO YOUR FILE'));
data.append('providers', '['PROVIDER(S)']');

var config = {
  method: 'post',
  url: 'https://api.edenai.run/v1/pretrained/vision/face_detection',
  headers: { 
    'Authorization': 'Bearer your_api_key', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
