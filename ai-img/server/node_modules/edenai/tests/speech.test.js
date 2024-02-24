import dotenv from 'dotenv'
dotenv.config()
import Speech from "../edenai/api/speech.js"

var apiKey = process.env.API_KEY
var badApiKey = "badApiKey"
var provider = ['microsoft']
var badProvider = ['jeanmichel']
var badFileToSpeech = "./testData/ChineseDoc.jpg"
var fileToSpeech = "./testData/soundSample.mp3"
var language = "en-US"
var badLanguage = "badLanguage"
var option = "MALE"
var badOption = "BADOPTION"
var text = "Hello guys how are you ?"
var badText = []

function testRequestSpeechToText(apiKey, provider, file, language){
  const testRequest = new Speech(apiKey)
  return testRequest.speechToText(provider , file, language)
};

function testRequestTextToSpeech(apiKey, text, provider, language, option){
  const testRequest = new Speech(apiKey)
  return testRequest.textToSpeech(text, provider , language, option)
};

// SPEECH TO TEXT

describe('Read data from Speech to Text API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestSpeechToText(apiKey, provider, fileToSpeech, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestSpeechToText(badApiKey, provider, fileToSpeech, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestSpeechToText(apiKey, badProvider, fileToSpeech, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong file', async () => {
    try {
      await testRequestSpeechToText(apiKey, provider, badFileToSpeech, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestSpeechToText(apiKey, provider, fileToSpeech, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});


// TEXT TO SPEECH testTextToSpeech(apiKey, text, provider, language, option)

describe('Read data from Text to Speech API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestTextToSpeech(apiKey, text, provider, language, option).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestTextToSpeech(badApiKey, text, provider, language, option)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestTextToSpeech(apiKey, text, badProvider, language, option)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong option', async () => {
    try {
      await testRequestTextToSpeech(apiKey, text, provider, language, badOption)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestTextToSpeech(apiKey, text, provider, badLanguage, option)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestTextToSpeech(apiKey, badText, provider, language, option)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });
  
});
