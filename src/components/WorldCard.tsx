import React from 'react';
import { Star, Users, Heart } from 'lucide-react';
import type { World } from '../types/world';
import { generateVRChatWorldUrl } from '../types/world';

interface WorldCardProps {
  world: World;
}

const WorldCard: React.FC<WorldCardProps> = ({ world }) => {
  const handleLaunchWorld = () => {
    window.open(generateVRChatWorldUrl(world.id), '_blank');
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={world.thumbnailUrl}
          alt={`${world.name} by ${world.authorName}`}
          className="w-full h-48 object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/images/default-world-thumbnail.jpg';
          }}
        />
        <div className="absolute top-4 left-4 bg-black/60 rounded-full px-3 py-1 text-sm flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {world.currentUsers}人
        </div>
        <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1 text-sm">
          {world.mood}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 rounded-full px-3 py-1 text-sm">
          {world.groupSize}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{world.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">{world.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-2">by {world.authorName}</p>
        <p className="text-sm text-gray-300 mb-4">{world.description}</p>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {world.visitCount.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            {world.favoriteCount.toLocaleString()}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {world.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-900/50 text-purple-200 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleLaunchWorld}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 rounded-lg transition-colors"
        >
          VRChatで開く
        </button>
      </div>
    </div>
  );
};

export default WorldCard;