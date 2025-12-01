import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are an expert electronics engineer and consultant for "AG ELECTRONICS". 
Your goal is to assist customers with:
1. School and College Projects: Suggest ideas based on difficulty (simple, medium, advanced) using Arduino, IoT, or Embedded Systems.
2. Custom PCB Design: Explain the process and requirements (Gerber files, layers).
3. Audio Systems: Advise on amplifier configurations (2.1 vs 5.1, wattage requirements).
4. Home Automation: Suggest smart solutions.

Keep answers concise, helpful, and professional. Always mention that AG ELECTRONICS can build these custom solutions.
Do not provide code implementations, but describe the logic and components needed.`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Format history for the API
    // The SDK chat helper manages history state usually, but for a stateless service call pattern
    // or if we want to manually control the context window, we can construct it.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try asking about our products directly via WhatsApp.";
  }
};