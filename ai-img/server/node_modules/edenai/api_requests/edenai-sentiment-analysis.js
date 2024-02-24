import requests

url = "https://api.edenai.run/v1/pretrained/text/sentiment_analysis"

payload={'text': ''YOUR TEXT'',
'providers': '['PROVIDER(S)']',
'language': 'LANGUAGE'}
files=[

]
headers = {
  'Authorization': 'Bearer your_api_key'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)
