'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import ClientLayout from '@/components/ClientLayout';

const ComingSoonTemplate = dynamic(() => import('@/components/ComingSoonTemplate'), {
  ssr: false,
  loading: () => <LoadingScreen />
});

export default function ComingSoon() {
  return (
    <ClientLayout>
      <ComingSoonTemplate />
    </ClientLayout>
  );
} 