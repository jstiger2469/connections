'use client';

import { HubspotProvider } from 'next-hubspot';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }) => (
  <HubspotProvider>
    {children}
  </HubspotProvider>
)

export default Providers
