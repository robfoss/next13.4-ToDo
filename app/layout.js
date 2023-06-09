import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next 13 Experimentationn',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
