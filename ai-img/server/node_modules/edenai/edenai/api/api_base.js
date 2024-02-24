import axios from 'axios'
import url from '../utils/constants.js'

class ApiBase {
  constructor(frontApiKey) {
    if (this.constructor === ApiBase) {
      throw new TypeError('Abstract class "ApiBase" cannot be instantiated directly');
    };
    
    this.apiKey = frontApiKey
  }

  post(payload, path) {
    return axios.request({
      method: 'POST',
      url: url + path,
      data: payload,
      headers: {
        'Authorization' : `Bearer ${this.apiKey}`,
        ...payload.getHeaders()
      },
    })
  }

  get(path) {
    return axios.request({
      method: 'GET',
      url: url + path,
      headers: {
        'Authorization' : `Bearer ${this.apiKey}`
      },
    })
  }
}


export default ApiBase