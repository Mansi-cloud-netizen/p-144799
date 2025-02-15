
import React from 'react';
import { Mic, MessageSquare, Hand } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const getIconForTitle = (title: string) => {
  switch (title) {
    case 'Text to Speech':
      return <Mic className="w-8 h-8 text-white" />;
    case 'Speech to Text':
      return <MessageSquare className="w-8 h-8 text-white" />;
    case 'Sign language converter':
      return <Hand className="w-8 h-8 text-white" />;
    default:
      return null;
  }
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="p-6 bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4">
        <div className="mb-4">
          {getIconForTitle(title)}
        </div>
        <h3 className="text-2xl font-semibold font-['Gothic_A1'] leading-9 text-white">
          {title}
        </h3>
        <p className="text-lg text-blue-100 leading-7 font-['Gothic_A1']">
          {description}
        </p>
      </div>
    </article>
  );
};
