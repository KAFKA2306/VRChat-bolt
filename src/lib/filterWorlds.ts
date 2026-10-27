import type { World } from '../types/world';

const normalizeSearchText = (value: string): string =>
  value.normalize('NFKC').trim().toLowerCase();

export const filterWorlds = (worlds: readonly World[], query: string): World[] => {
  const normalizedQuery = normalizeSearchText(query);

  if (normalizedQuery === '') {
    return [...worlds];
  }

  return worlds.filter((world) => {
    const searchableFields = [world.name, world.authorName, ...world.tags];
    return searchableFields.some((field) =>
      normalizeSearchText(field).includes(normalizedQuery),
    );
  });
};
