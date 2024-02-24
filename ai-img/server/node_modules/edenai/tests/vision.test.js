import dotenv from 'dotenv'
dotenv.config()
import Vision from "../edenai/api/vision.js"

var apiKey = process.env.API_KEY
var badApiKey = "badApiKey"
var provider = ['amazon']
var badProvider = ['jeanmichel']
var fileToVision = "./testData/teamaicompare.jpg"
var badFileToVision = "./testData/soundSample.mp3"

function testRequestObjectDetection(apiKey, provider, file){
  const testRequest = new Vision(apiKey)
  return testRequest.objectDetection(provider , file)
};

function testRequestFaceDetection(apiKey, provider, file){
  const testRequest = new Vision(apiKey)
  return testRequest.faceDetection(provider , file)
};

function testRequestExplicitContentDetection(apiKey, provider, file){
  const testRequest = new Vision(apiKey)
  return testRequest.explicitContentDetection(provider , file)
};


// OBJECT DETECTION

describe('Read data from Object Detection API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestObjectDetection(apiKey, provider, fileToVision).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestObjectDetection(badApiKey, provider, fileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestObjectDetection(apiKey, badProvider, fileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong file', async () => {
    try {
      await testRequestObjectDetection(apiKey, provider, badFileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});

// FACE DETECTION

describe('Read data from Face Detection API', () => {
  test('Read data from API witch correct data', () => {
    return testRequestFaceDetection(apiKey, provider, fileToVision).then(r => {
      expect(r.data).toBeDefined();
      expect(r.data.result.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(700);
    });
  });
  
  test('Read data from API witch wrong apiKey', async () => {
    try {
      await testRequestFaceDetection(badApiKey, provider, fileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong provider', async () => {
    try {
      await testRequestFaceDetection(apiKey, badProvider, fileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });

  test('Read data from API witch wrong file', async () => {
    try {
      await testRequestFaceDetection(apiKey, provider, badFileToVision)
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBeGreaterThan(399)
      expect(error.response.status).toBeLessThan(500);
    }
  });
  
});