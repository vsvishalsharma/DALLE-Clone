var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('text_to_translate', ''YOUR TEXT'');
data.append('providers', '['PROVIDER(S)']');
data.append('source_language', 'SOURCE LANGUAGE');
data.append('target_language', 'TARGET LANGUAGE');

var config = {
  method: 'post',
  url: 'https://api.edenai.run/v1/pretrained/text/automatic_translation',
  headers: { 
    'Authorization': 'Bearer Yyour_api_key', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
