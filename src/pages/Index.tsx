
import React from 'react';
import { FeaturesSection } from '@/components/features/FeaturesSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-blue-600">
      <div className="container mx-auto">
        <header className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">AI Communication Tools</h1>
          <p className="text-xl text-blue-100">
            Advanced communication solutions powered by artificial intelligence
          </p>
        </header>
        
        <FeaturesSection />
      </div>
    </main>
  );
};

export default Index;
