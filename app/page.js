import QuoteClient from '@/components/QuoteClient';

async function getInitialQuote() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${base}/api/quotes`, { cache: 'no-store' });
    const data = await res.json();

    if (!res.ok) {
      return {
        quote: 'Mulai dari kecil, hasilkan perubahan besar.',
        error: data?.error || 'Server belum bisa memberi quote sekarang.'
      };
    }

    return { quote: data.quote, error: '' };
  } catch {
    return {
      quote: 'Mulai dari kecil, hasilkan perubahan besar.',
      error: 'Gagal terhubung ke server. Coba lagi beberapa saat.'
    };
  }
}

export default async function HomePage() {
  const { quote, error } = await getInitialQuote();

  return (
    <main className="main">
      <section className="card">
        <h1>Web Simple Bagus — Fullstack Next.js</h1>
        <p>
          Kalau ada error, aplikasi tetap jalan: ada fallback quote dan pesan error yang jelas.
        </p>

        <QuoteClient initialQuote={quote} initialError={error} />
      </section>
    </main>
  );
}
