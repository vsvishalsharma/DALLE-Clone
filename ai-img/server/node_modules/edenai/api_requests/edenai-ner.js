var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('text', ''YOUR TEXT'');
    data.append('providers', '['PROVIDER(S)']');
    data.append('language', 'LANGUAGE');
    
    var config = {
      method: 'post',
      url: 'https://api.edenai.run/v1/pretrained/text/named_entity_recognition',
      headers: { 
        'Authorization': 'Bearer your_api_key', 
        ...data.getHeaders()
      },
      data : data
    };
    
    axios(config)
