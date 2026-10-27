import React from 'react';
import WorldCard from './WorldCard';
import type { World } from '../types/world';

interface WorldGridProps {
  worlds: World[];
}

const WorldGrid: React.FC<WorldGridProps> = ({ worlds }) => {
  if (worlds.length === 0) {
    return (
      <p className="p-6 text-center text-gray-400" role="status">
        条件に一致するワールドはありません。
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {worlds.map((world) => (
        <WorldCard key={world.id} world={world} />
      ))}
    </div>
  );
};

export default WorldGrid;