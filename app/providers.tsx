'use client';

import { HubspotProvider } from 'next-hubspot';
import React, { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }) => (
  <HubspotProvider>
    {children}
  </HubspotProvider>
)

export default Providers
