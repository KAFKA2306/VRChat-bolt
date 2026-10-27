import { filterWorlds } from '../src/lib/filterWorlds.js';
import type { World } from '../src/types/world.js';

const worlds: World[] = [
  {
    id: 'black-cat',
    name: 'The Black Cat',
    authorName: 'Spookyghostboo',
    description: 'Jazz bar',
    thumbnailUrl: '',
    capacity: 40,
    currentUsers: 20,
    tags: ['デート', 'バー', 'ジャズ'],
    rating: 4.8,
    visitCount: 1,
    favoriteCount: 1,
    mood: 'cozy',
    groupSize: 'large-group',
  },
  {
    id: 'quiet-garden',
    name: 'Quiet Garden',
    authorName: 'GardenMaker',
    description: 'A peaceful garden',
    thumbnailUrl: '',
    capacity: 16,
    currentUsers: 4,
    tags: ['自然', '散歩'],
    rating: 4.5,
    visitCount: 1,
    favoriteCount: 1,
    mood: 'peaceful',
    groupSize: 'small-group',
  },
];

const ids = (query: string): string[] => filterWorlds(worlds, query).map((world) => world.id);

const assertIds = (query: string, expected: string[]): void => {
  const actual = ids(query);
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`query=${JSON.stringify(query)} expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
};

assertIds('black cat', ['black-cat']);
assertIds('spookyGHOSTboo', ['black-cat']);
assertIds('ジャズ', ['black-cat']);
assertIds('gardenmaker', ['quiet-garden']);
assertIds('missing', []);
assertIds('', ['black-cat', 'quiet-garden']);
assertIds('   ', ['black-cat', 'quiet-garden']);
assertIds('ＢＬＡＣＫ', ['black-cat']);

const first = ids('a');
const second = ids('a');
if (JSON.stringify(first) !== JSON.stringify(second)) {
  throw new Error(`filtering order is not deterministic: first=${JSON.stringify(first)} second=${JSON.stringify(second)}`);
}

console.log('filterWorlds contract passed');
