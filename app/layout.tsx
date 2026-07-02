import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'BigDataDaddy | Enterprise AI Data Infrastructure',
  description: 'Global leader in RLHF, Multilingual Transcription, and High-Fidelity AI Datasets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} bg-[#020202] text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}