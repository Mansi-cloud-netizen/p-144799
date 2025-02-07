import React from 'react';
import { FeaturesSection } from '@/components/features/FeaturesSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto">
        <header className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">AI Communication Tools</h1>
          <p className="text-xl text-gray-600">
            Advanced communication solutions powered by artificial intelligence
          </p>
        </header>
        
        <FeaturesSection />
      </div>
    </main>
  );
};

export default Index;