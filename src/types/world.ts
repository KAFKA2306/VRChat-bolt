export interface World {
  id: string;
  name: string;
  authorName: string;
  description: string;
  thumbnailUrl: string;
  capacity: number;
  currentUsers: number;
  tags: string[];
  rating: number;
  visitCount: number;
  favoriteCount: number;
  mood: 'cozy' | 'energetic' | 'mysterious' | 'peaceful';
  groupSize: 'solo' | 'small-group' | 'large-group';
}

export const generateVRChatWorldUrl = (worldId: string): string => {
  return `https://vrchat.com/home/world/${worldId}`;
};