// TODO: TO ADD FOOTER
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="background">
      <Head>
        <title>Authentick</title>
        <meta name="description" content="Authentick 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
