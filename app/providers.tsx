'use client';

import { HubspotProvider } from 'next-hubspot';
import React, { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}


const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => (
  <HubspotProvider>
    {children}
  </HubspotProvider>
);

export default Providers
