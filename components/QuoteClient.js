'use client';

import { useState } from 'react';

export default function QuoteClient({ initialQuote, initialError }) {
  const [quote, setQuote] = useState(initialQuote);
  const [error, setError] = useState(initialError || '');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/quotes', { cache: 'no-store' });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Gagal mengambil quote dari server.');
      }

      setQuote(data.quote);
    } catch (err) {
      setError(err?.message || 'Terjadi error yang tidak diketahui.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid">
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? 'Mengambil...' : 'Ambil Quote dari API'}
        </button>
      </div>

      <div className="box">✨ {quote}</div>

      {error ? <p className="error">⚠️ {error}</p> : null}
    </>
  );
}
