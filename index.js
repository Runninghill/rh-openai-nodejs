

import { Configuration, OpenAIApi } from 'openai';
const apiKey = process.env.OPEN_API_KEY || '<REPLACE_WITH_YOUR_API_KEY>';


const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

/**
 * The `runCompletion` function takes a prompt as input, sends it to the OpenAI API for chat completion
 * using the GPT-3.5-turbo model, and logs the generated completion message to the console. It also
 * calculates and logs the time taken for the completion process.
 * @param prompt - The `prompt` parameter is a string that represents the user's message or prompt in
 * the conversation. It is used to provide context or ask a question to the model.
 */
async function runCompletion(prompt) {
  const startTime = Date.now();
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });
  console.log(chatCompletion.data.choices[0].message.content);
  calculateTimeTaken(startTime)
  
}

/**
 * The function calculates the time taken for a request to complete and logs the result.
 * @param startTime - The `startTime` parameter is the starting time of a request or process, typically
 * represented as a timestamp in milliseconds.
 */
function calculateTimeTaken(startTime){
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(`Request took ${timeTaken} milliseconds`);
}
runCompletion("what are the main factors contributing to gender bias");