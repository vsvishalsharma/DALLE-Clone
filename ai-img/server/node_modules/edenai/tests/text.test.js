import dotenv from 'dotenv'
dotenv.config()
import Text from "../edenai/api/text.js"

var apiKey = process.env.API_KEY
var badApiKey = "badApiKey"
var provider = ['amazon']
var badProvider = ['jeanmichel']
var text = "Salut à tous comment allez-vous aujourd'hui ? Moi je vais très bien."
var badText = []
var language = "fr-FR"
var badLanguage = "badLanguage"

function testRequestSentimentAnalysis(apiKey, text, provider, language){
  const testRequest = new Text(apiKey)
  return testRequest.sentimentAnalysis(text, provider , language)
};

function testRequestSyntaxAnalysis(apiKey, text, provider, language){
  const testRequest = new Text(apiKey)
  return testRequest.syntaxAnalysis(text, provider , language)
};

function testRequestKeywordExtraction(apiKey, text, provider, language){
  const testRequest = new Text(apiKey)
  return testRequest.keywordExtraction(text, provider , language)
};

function testRequestNamedEntityRecognition(apiKey, text, provider, language){
  const testRequest = new Text(apiKey)
  return testRequest.namedEntityRecognition(provider , language, text)
};

// SENTIMENT ANALYSIS

describe('Read data from Sentiment Analysis API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestSentimentAnalysis(apiKey, text, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    });
  });
  
  test('Read data from API with wrong apiKey', async () => {
    try {
      await testRequestSentimentAnalysis(badApiKey, text, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestSentimentAnalysis(apiKey, text, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestSentimentAnalysis(apiKey, badText, provider, language)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestSentimentAnalysis(apiKey, text, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});


// SYNTAX ANALYSIS

describe('Read data from Syntax Analysis API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestSyntaxAnalysis(apiKey, text, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestSyntaxAnalysis(badApiKey, text, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestSyntaxAnalysis(apiKey, text, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestSyntaxAnalysis(apiKey, badText, provider, language)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestSyntaxAnalysis(apiKey, text, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});

// KEYWORD EXTRACTION

describe('Read data from Keyword Extraction API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestKeywordExtraction(apiKey, text, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestKeywordExtraction(badApiKey, text, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestKeywordExtraction(apiKey, text, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestKeywordExtraction(apiKey, badText, provider, language)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestKeywordExtraction(apiKey, text, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});

// NAMED ENTITY RECOGNITION

describe('Read data from NER API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestNamedEntityRecognition(apiKey, text, provider, language).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestNamedEntityRecognition(badApiKey, text, provider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestNamedEntityRecognition(apiKey, text, badProvider, language)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong text', async () => {
    try {
      await testRequestNamedEntityRecognition(apiKey, badText, provider, language)
    } catch (error) {
      expect(error.message.length).toBeGreaterThan(0);
    }
  });

  test('Read data from API witch wrong language', async () => {
    try {
      await testRequestNamedEntityRecognition(apiKey, text, provider, badLanguage)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});