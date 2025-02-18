import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = `${process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY}`
const genAI = new GoogleGenerativeAI(apiKey)


const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
})

const generationConfig = {
    temperature: 1,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 1024,
}

export const chatSession = model.startChat({
    generationConfig: generationConfig,
    history: [],
})