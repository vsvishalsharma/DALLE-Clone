import dotenv from 'dotenv'
dotenv.config()
import Translation from "../edenai/api/translation.js"

var apiKey = process.env.API_KEY
var badApiKey = "badApiKey"
var provider = ['microsoft']
var badProvider = ['jeanmichel']
var text = "Salut à tous comment allez-vous aujourd'hui ? Moi je vais très bien."
var badText = []
var targetLanguage = "en-US"
var badTargetLanguage = "badLanguage"
var sourceLanguage = "fr-FR"
var badSourceLanguage = "badLanguage"

function testRequestLanguageDetection(apiKey, text, provider){
  const testRequest = new Translation(apiKey)
  return testRequest.languageDetection(text, provider)
};

function testRequestTranslate(apiKey, text, provider, source_language, target_language){
  const testRequest = new Translation(apiKey)
  return testRequest.translate(text, provider , source_language, target_language)
};

// LANGUAGE DETECTION

describe('Read data from Language Detection API', () => {
  test('Read data from API with correct data', () => {
    return testRequestLanguageDetection(apiKey, text, provider).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    });
  });
  
  test('Read data from API with wrong apiKey', async () => {
    try {
      await testRequestLanguageDetection(badApiKey, text, provider)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestLanguageDetection(apiKey, text, badProvider)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestLanguageDetection(apiKey, badText, provider)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });
  
});


// TRANSLATION

describe('Read data from Translation API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestTranslate(apiKey, text, provider, sourceLanguage, targetLanguage).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestTranslate(badApiKey, text, provider, sourceLanguage, targetLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestTranslate(apiKey, text, badProvider, sourceLanguage, targetLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestTranslate(apiKey, badText, provider, sourceLanguage, targetLanguage)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });

  test('Read data from API witch wrong source language', async () => {
    try {
      await testRequestTranslate(apiKey, text, provider, badSourceLanguage, targetLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong target language', async () => {
    try {
      await testRequestTranslate(apiKey, text, provider, sourceLanguage, badTargetLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});