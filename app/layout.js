import '../assets/styles/base.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>Yang FanBin</title>
        <meta name="description" content="网站描述" />
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <main className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}