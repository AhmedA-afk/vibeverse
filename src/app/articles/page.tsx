'use client';

import ClientLayout from '@/components/ClientLayout';
import PageLayout from '@/components/PageLayout';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';

export default function ArticlesPage() {
  return (
    <ClientLayout>
      <PageLayout>
        <PageTitle 
          title="Articles"
          subtitle="Insights and tutorials from the Vibe Coding community"
        />

        <div className="space-y-8">
          {[1, 2, 3].map((_, i) => (
            <Card key={i}>
              <p className="text-sm text-gray-500 mb-2">Coming Soon</p>
              <h2 className="text-xl text-white/90 mb-2">Article Title Placeholder</h2>
              <p className="text-gray-400 font-light">
                A preview of the amazing content that will be available here soon.
              </p>
            </Card>
          ))}
        </div>
      </PageLayout>
    </ClientLayout>
  );
} 