import ApiBase from "./api_base.js";
import { default as FormData } from "form-data"
import * as fs from 'fs';

class Ocr extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatDataOcrInvoice (filePath, providers, language) {
    const user = new FormData();
      const key = [
        "files",
        "providers",
        "language",
      ];
      const value = [
        fs.createReadStream(filePath),
        JSON.stringify(providers),
        language
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  formatDataOcr (filePath, providers, language) {
    const user = new FormData();
      const key = [
        "providers",
        "files",
        "language",
      ];
      const value = [
        JSON.stringify(providers),
        fs.createReadStream(filePath),
        language
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  ocrInvoice = (files, providers, language) => {
    const userData = this.formatDataOcrInvoice(files, providers, language)
    return this.post(userData, "v1/pretrained/ocr/ocr_invoice")
  }

  ocr = (files, providers, language) => {
    const userData = this.formatDataOcr(files, providers, language);
    return this.post(userData, 'v1/pretrained/ocr/ocr')
  }

}

export default Ocr