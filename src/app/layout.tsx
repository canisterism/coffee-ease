import "./globals.css";

export const metadata = {
  title: "喫茶コーヒー ease",
  description: "神奈川県川崎市生田のコーヒー豆焙煎店「ease」です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
