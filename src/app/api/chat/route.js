export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.choices || !data.choices[0]) {
      console.error("OpenAI API error:", data);
      return new Response(JSON.stringify({ error: "OpenAI error", details: data }), { status: 500 });
    }

    return Response.json({ result: data.choices[0].message.content });
  } catch (err) {
    console.error("Server crash:", err);
    return new Response(JSON.stringify({ error: "Server error", details: err.message }), { status: 500 });
  }
}
