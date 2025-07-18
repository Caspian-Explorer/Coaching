'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setResponse(data.result);
    setLoading(false);
  };

  return (
    <main className="max-w-xl mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat Tool</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="p-2 border rounded"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the AI something..."
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}
