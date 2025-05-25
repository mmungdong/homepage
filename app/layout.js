import '../assets/styles/base.css';
import ThemeScript from '@/scripts/theme-script';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeApply from '@/components/ThemeApply';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>Yang FanBin</title>
        <meta name="description" content="技术导航网站" />
        <link rel="icon" href="/favicon.ico" />
        <ThemeScript />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <ThemeApply />
          <Header />
          <main className="max-w-4xl mx-auto px-6 py-8 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}