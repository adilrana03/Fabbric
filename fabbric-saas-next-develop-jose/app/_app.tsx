// app/_app.tsx
import React, { ComponentType } from 'react';
import { AppProps } from 'next/app';
import { getSession } from 'next-auth/react';

interface MyAppProps extends AppProps {
  Component: ComponentType;
  session: any; // Cambia "any" por el tipo adecuado de tu sesión
}

function MyApp({ Component, pageProps, session }: MyAppProps) {
  return <Component {...pageProps} session={session} />;
}

MyApp.getInitialProps = async (appContext: any) => {
  const session = await getSession(appContext.ctx);

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    session,
  };
};

export default MyApp;
