import ApiBase from "./api_base.js";
import { default as FormData } from "form-data"
import * as fs from 'fs';

class Vision extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatData (providers, filePath) {
    const user = new FormData();
      const key = [
        "providers",
        "files",
      ];
      const value = [
        JSON.stringify(providers),
        fs.createReadStream(filePath),
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  objectDetection = (providers, file) => {
    const userData = this.formatData(providers, file);
    return this.post(userData, "v1/pretrained/vision/object_detection")
  }

  faceDetection = (providers, file) => {
    const userData = this.formatData(providers, file);
    return this.post(userData, "v1/pretrained/vision/face_detection")
  }

  explicitContentDetection = (providers, file) => {
    const userData = this.formatData(providers, file);
    return this.post(userData, "v1/pretrained/vision/explicit_content_detection")
  }

}

export default Vision