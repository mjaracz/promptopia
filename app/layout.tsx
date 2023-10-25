import '@styles/globals.css';
import { Metadata } from 'next';
import { FC, ReactNode } from 'react';
import Nav from '@components/nav';
import Provider from '@components/provider';
import { Session } from 'next-auth';

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI prompts'
}

const RootLayout: FC<{ children: ReactNode[] }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider session={{} as Session}>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
