
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const askAssistant = async (question: string) => {
  const apiKey = process.env.API_KEY || '';
  
  if (!apiKey) {
    console.error("API Key is missing. Please set GEMINI_API_KEY in Vercel environment variables.");
    return "L'assistant n'est pas configuré. Veuillez vérifier la clé API (GEMINI_API_KEY).";
  }

  try {
    // Initialize lazily to prevent crash on startup if key is missing
    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `
    Tu es l'assistant IA du portfolio de ${PORTFOLIO_DATA.name}. 
    Ton rôle est de répondre aux questions des visiteurs sur son parcours, ses compétences et ses projets.
    
    Voici les informations clés sur ses projets récents:
    - EduBot IA (2024): Projet Full-Stack majeur. Chatbot d'orientation e-learning (Node.js, Express, PostgreSQL, JWT). Utilise des APIs LLM (Groq/OpenAI) pour recommander des cours selon le profil utilisateur.
    - SpendWise (2024): Gestion financière (PHP, MySQL, Firebase).
    - NBA Prediction: Machine Learning avec XGBoost.
    - Pokémon Classification: Computer Vision avec PyTorch et SVM.

    Détails sur ${PORTFOLIO_DATA.name}:
    - Titre: ${PORTFOLIO_DATA.title}
    - École: ECE Paris (Bachelor Data & IA, futur Master Data Engineer)
    - Bio: ${PORTFOLIO_DATA.bio}
    - Expérience: ${PORTFOLIO_DATA.experience.map(e => `${e.role} chez ${e.company} (${e.period})`).join('; ')}
    
    Réponds de manière professionnelle, chaleureuse et concise. Si on te demande des détails techniques sur EduBot IA, mentionne l'architecture Node/PostgreSQL et la stratégie de prompting (coach IA).
  `;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur s'est produite lors de la communication avec l'assistant. Vérifiez la console pour plus de détails.";
  }
};
