import ApiBase from "./api_base.js";
import { default as FormData } from "form-data";

class Text extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatData (text, providers, language) {
    const user = new FormData();
      const key = [
        "text",
        "providers",
        "language",
      ];
      const value = [
        text,
        JSON.stringify(providers),
        language
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  sentimentAnalysis = (text, providers, language) => {
    const userData = this.formatData(text, providers, language)
    return this.post(userData, 'v1/pretrained/text/sentiment_analysis')
  }

  syntaxAnalysis = (text, providers, language) => {
    const userData = this.formatData(text, providers, language)
    return this.post(userData, 'v1/pretrained/text/syntax_analysis')
  }

  keywordExtraction = (text, providers, language) => {
    const userData = this.formatData(text, providers, language)
    return this.post(userData, 'v1/pretrained/text/keyword_extraction')
  }


  namedEntityRecognition = (providers, language, text) => {
    const userData = this.formatData(text, providers, language);
    return this.post(userData, 'v1/pretrained/text/named_entity_recognition')
  }

}

export default Text