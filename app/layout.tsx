// app/layout.tsx — Root layout (MINIMAL)
// The actual layout logic (locale, fonts, metadata, providers) is handled
// in app/[locale]/layout.tsx which renders <html> and <body>.

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
