

import { Configuration, OpenAIApi } from 'openai';
const apiKey = process.env.OPEN_API_KEY || ''


const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

async function runCompletion(prompt) {
  const startTime = Date.now();
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });
  console.log(chatCompletion.data.choices[0].message.content);
  calculateTimeTaken(startTime)
  
}

function calculateTimeTaken(startTime){
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(`Request took ${timeTaken} milliseconds`);
}
runCompletion("what are the main factors contributing to gender bias");