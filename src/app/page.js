// src/app/page.js

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">AI-Powered Insight Interviews</h1>
      <p className="text-lg max-w-2xl mb-6 text-gray-700">
        Upload your PDF or PowerPoint. Our AI reads it, interviews you via voice, and evaluates your knowledge and commitment.
        Get a custom report with powerful insights in minutes.
      </p>

      <div className="flex gap-4">
        <Link href="/chat">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Try the Chat
          </button>
        </Link>
        <Link href="/tools">
          <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            View Tools
          </button>
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        Built with ❤️ using Next.js, OpenAI, and Vercel
      </footer>
    </main>
  );
}
