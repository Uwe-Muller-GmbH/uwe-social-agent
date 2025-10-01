import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generatePost(machine) {
  const prompt = `
Du bist Social-Media-Agent für Uwe Müller GmbH.
Erstelle einen Social-Media-Post für folgende Maschine:

Kategorie: ${machine.kategorie || "Verkauf"}
Maschine: ${machine.titel}
Details: ${machine.details}
Link: https://www.baumaschinen-mueller.de

Struktur:
1. Headline mit Emoji
2. 1–2 Sätze Beschreibung
3. 3 Vorteile in Bulletpoints
4. Call-to-Action mit Link
5. 5–7 Hashtags

Sprache: professionell & ansprechend für Bauunternehmen.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 200,
  });

  return response.choices[0].message.content.trim();
}
