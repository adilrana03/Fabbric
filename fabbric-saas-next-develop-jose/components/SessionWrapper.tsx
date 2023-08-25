import React from 'react';
import { useSession, Session } from 'next-auth/react';

interface SessionWrapperProps {
  children: React.ReactNode;
}

function SessionWrapper({ children }: SessionWrapperProps) {
  const { data: session, status } = useSession();

  console.log("HEÑÑOOP^^")

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return React.cloneElement(children as React.ReactElement, { session });
}

export default SessionWrapper;