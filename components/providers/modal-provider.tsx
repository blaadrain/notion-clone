'use client';

import { useEffect, useState } from 'react';
import { SettingsModal } from '../modals/settings-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // prevents hydration error
    // none of the modals are gonna render unless we are
    // fully on a client side
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
};
