import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [generating, setGenerating] = useState(false);
  const [code, setCode] = useState('');
  const [prompt, setPrompt] = useState('');

  const generateApp = async () => {
    if (!prompt.trim()) return;

    setGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setCode(data.code);
    } catch (error) {
      console.error('Error:', error);
      setCode('Error generating code. Please try again.');
    }
    setGenerating(false);
  };

  const buyPro = () => {
    window.location.href = '/api/create-checkout';
  };

  return (
    <>
      <Head>
        <title>Rube AI - Generate Apps Instantly & Earn Revenue</title>
        <meta name="description" content="AI-powered app generator. Create React apps instantly, deploy with one click, earn through marketplace." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">
              🚀 Generate Apps with AI
              <span className="text-yellow-400"> & Earn Revenue</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create React/Next.js apps instantly • Deploy with one click • Monetize through marketplace
            </p>
            <p className="text-lg text-green-400 mb-12">
              💰 Start earning $29/month per customer • Scale to $10K+/month
            </p>

            {/* Pricing Cards */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
                <p className="text-gray-300 mb-2">3 generations/month</p>
                <p className="text-sm text-gray-400 mb-4">Perfect to get started</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Start Free
                </button>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-lg transform scale-105 border-2 border-yellow-300">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
                <p className="text-white mb-2">$29/month - Unlimited</p>
                <p className="text-sm text-gray-100 mb-4">Premium templates + priority support</p>
                <button 
                  onClick={buyPro}
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
                >
                  🚀 Upgrade & Start Earning
                </button>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-300 mb-2">$99/month</p>
                <p className="text-sm text-gray-400 mb-4">White-label + API access</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* AI Generator Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">🤖 Generate Your App with AI</h2>

              <div className="mb-6">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your app: 'Create a todo app with dark mode and user authentication'"
                  className="w-full p-4 rounded-lg mb-4 text-black text-lg border-2 border-blue-300 focus:border-blue-500 outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && generateApp()}
                />
                <button
                  onClick={generateApp}
                  disabled={generating || !prompt.trim()}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition"
                >
                  {generating ? '🤖 Generating Your App...' : '✨ Generate App with AI'}
                </button>
              </div>

              {code && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Generated Code:</h3>
                  <pre className="bg-black/50 text-green-400 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                    {code}
                  </pre>
                  <div className="flex gap-4 mt-4">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                      🚀 Deploy to Vercel
                    </button>
                    <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
                      💾 Save as Template
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Revenue Stats */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">💰 Revenue Potential</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-400">$290</div>
                <div className="text-white">First 10 customers</div>
              </div>
              <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-400">$2,900</div>
                <div className="text-white">100 customers</div>
              </div>
              <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400">$29,000</div>
                <div className="text-white">1,000 customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
