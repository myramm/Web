export const metadata = {
  title: 'Simple Fullstack Next.js',
  description: 'Web simple tapi fullstack pakai Next.js',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
