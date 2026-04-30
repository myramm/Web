import { NextResponse } from 'next/server';

const quotes = [
  'Konsistensi kecil lebih kuat daripada niat besar yang berhenti di tengah jalan.',
  'Bangun sesuatu hari ini, walau belum sempurna.',
  'Disiplin adalah bentuk cinta terhadap masa depanmu.',
  'Jangan menunggu siap, mulai saja dulu.',
  'Skill hebat lahir dari latihan yang membosankan.'
];

export async function GET() {
  try {
    if (!quotes.length) {
      return NextResponse.json(
        { error: 'Data quote kosong di server.' },
        { status: 500 }
      );
    }

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return NextResponse.json({ quote, source: 'local-api' });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error saat mengambil quote.' },
      { status: 500 }
    );
  }
}
