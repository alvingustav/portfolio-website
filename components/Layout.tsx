import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Alvin Gustav - Data Science Portfolio' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Alvin Gustav - Data Science student specializing in Fintech solutions, stock prediction, and machine learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </Head>
      <div className="min-h-screen bg-black">
        {children}
      </div>
    </>
  );
};

export default Layout;
