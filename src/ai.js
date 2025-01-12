import OpenAI from "openai";

const key = import.meta.env.VITE_OPEN_AI_API_KEY;
const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

export async function getRecipeFromOpenAI(ingredients) {
  const ingredientString = ingredients.join(", ");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "I have these ingredients: " + ingredientString,
        },
        { role: "user", content: "Can you suggest a recipe?" },
      ],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error(error.message);
  }
}
