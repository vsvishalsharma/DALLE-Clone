import ApiBase from "./api_base.js";
import { default as FormData } from "form-data"
import axios from "axios"

class Translation extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatDataTranslate (text, providers, source_language, target_language) {
    const user = new FormData();
      const key = [
        "text_to_translate",
        "providers",
        "source_language",
        "target_language",
      ];
      const value = [
        text,
        JSON.stringify(providers),
        source_language,
        target_language,
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }
  
  formatDataLanguageDetection (text, providers) {
    const user = new FormData();
      const key = [
        "text",
        "providers"
      ];
      const value = [
        text,
        JSON.stringify(providers)
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  translate = (text, providers, source_language, target_language) => {
    const userData = this.formatDataTranslate(text, providers, source_language, target_language)
    return this.post(userData, "v1/pretrained/translation/automatic_translation")
  }

  languageDetection = (text, providers) => {
    const userData = this.formatDataLanguageDetection(text, providers)
    return this.post(userData, "v1/pretrained/translation/language_detection")
  }

  getLanguages = () => {
    return this.get("static/translate.json")
  }

}

export default Translation