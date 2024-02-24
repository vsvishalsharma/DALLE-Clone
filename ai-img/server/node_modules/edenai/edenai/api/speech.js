import ApiBase from "./api_base.js";
import { default as FormData } from "form-data"
import * as fs from 'fs';

class Speech extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatDataSpeechToText (providers, filePath, language) {
    const user = new FormData();
      const key = [
        "providers",
        "files",
        "language"
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
  
  formatDataTextToSpeech (text, providers, language, option) {
    const user = new FormData();
      const key = [
        "text",
        "providers",
        "language",
        "option",
      ];
      const value = [
        text,
        JSON.stringify(providers),
        language,
        option
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  speechToText = (providers, file, language) => {
    const userData = this.formatDataSpeechToText(providers, file, language)
    return this.post(userData, 'v1/pretrained/audio/speech_recognition')
  }

  textToSpeech = (text, providers, language, option) => {
    const userData = this.formatDataTextToSpeech(text, providers, language, option)
    return this.post(userData, 'v1/pretrained/audio/text_to_speech')
  }

}

export default Speech