import React, { useState, useEffect } from 'react';
import localforage from 'localforage';

function App() {
  const [clips, setClips] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  // Load clips from IndexedDB on mount
  useEffect(() => {
    localforage.getItem<string[]>('clips').then(data => {
      if (data) setClips(data);
    });
  }, []);

  // Save clips on change
  useEffect(() => {
    localforage.setItem('clips', clips);
  }, [clips]);

  const addClip = () => {
    const trimmed = input.trim();
    if (trimmed && !clips.includes(trimmed)) {
      setClips([trimmed, ...clips].slice(0, 50)); // Keep max 50 clips
      setInput('');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const clearAll = () => {
    setClips([]);
    localforage.removeItem('clips');
  };

  const filteredClips = clips.filter(c => c.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Clipboard Manager</h1>

      <textarea
        className="w-full max-w-xl p-2 rounded text-black"
        placeholder="Paste or type text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
      />

      <div className="my-3 space-x-2">
        <button
          onClick={addClip}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to History
        </button>
        <button
          onClick={clearAll}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Clear History
        </button>
      </div>

      <input
        type="text"
        placeholder="Search history"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl p-2 mb-4 rounded text-black"
      />

      <ul className="w-full max-w-xl max-h-96 overflow-auto space-y-2">
        {filteredClips.length === 0 ? (
          <li className="text-center text-gray-400">No clips found</li>
        ) : (
          filteredClips.map((clip, idx) => (
            <li
              key={idx}
              onClick={() => copyToClipboard(clip)}
              className="cursor-pointer p-3 bg-slate-700 rounded hover:bg-slate-600 transition"
              title="Click to copy"
            >
              {clip}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
