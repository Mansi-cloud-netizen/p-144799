import React from 'react';
import { FeatureCard } from './FeatureCard';

export const FeaturesSection = () => {
  const features = [
    {
      title: 'Text to Speech',
      description: 'Powerful & efficient text to speech conversion using AI technology',
    },
    {
      title: 'Speech to Text',
      description: 'Convert Speech to text with high accuracy using Whisper AI',
    },
    {
      title: 'Sign language converter',
      description: 'Convert sign language to text & speech using highly efficient KNN classifiers',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};