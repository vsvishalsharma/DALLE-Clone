import dotenv from 'dotenv'
dotenv.config()
import Ocr from "../edenai/api/ocr.js"

var apiKey = process.env.API_KEY
var badApiKey = "badApiKey"
var provider = ['microsoft']
var badProvider = ['jeanmichel']
var fileToOcr = "./testData/ChineseDoc.jpg"
var badFileToOcr = "./testData/soundSample.mp3"
var language = "fr-FR"
var badLanguage = "badLanguage"

function testRequestOcr(apiKey, file, provider, language){
  const testRequest = new Ocr(apiKey)
  return testRequest.ocr(file, provider , language)
};

function testRequestOcrInvoice(apiKey, file, provider, language){
  const testRequest = new Ocr(apiKey)
  return testRequest.ocrInvoice(file, provider , language)
};

// OCR CLASSIC

describe('Read data from Ocr Classic API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestOcr(apiKey, fileToOcr, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestOcr(badApiKey, fileToOcr, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestOcr(apiKey, fileToOcr, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong file', async () => {
    try {
      await testRequestOcr(apiKey, badFileToOcr, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestOcr(apiKey, badFileToOcr, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});


// OCR INVOICE

describe('Read data from Ocr Invoice API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestOcrInvoice(apiKey, fileToOcr, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestOcrInvoice(badApiKey, fileToOcr, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestOcrInvoice(apiKey, fileToOcr, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong file', async () => {
    try {
      await testRequestOcrInvoice(apiKey, badFileToOcr, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestOcrInvoice(apiKey, fileToOcr, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});
