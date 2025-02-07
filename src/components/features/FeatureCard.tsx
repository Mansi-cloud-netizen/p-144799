import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold font-['Gothic_A1'] leading-9">
          {title}
        </h3>
        <p className="text-lg text-gray-700 leading-7 font-['Gothic_A1']">
          {description}
        </p>
      </div>
    </article>
  );
};