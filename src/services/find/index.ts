import { categories, CategoryData, CommandData } from './data';
export { CategoryData, CommandData } from './data';
import Fuse from 'fuse.js';

const categoriesSearchers = categories.map((categoryData) => {
  return {
    name: categoryData.name,
    searchEngine: new Fuse(categoryData.items, {
      // threshold: 0.3,
      // distance: 10,
      shouldSort: true,

      keys: [
        {
          name: 'command',
          weight: 0.5,
        },
        {
          name: 'description',
          weight: 1,
        },
        {
          name: 'examples',
          weight: 0.4,
        },
      ],
    }),
  };
});

interface CategorySeachResult extends CategoryData {
  score: number;
}

export function findAllComands(input: string): CategorySeachResult[] {
  const categoriesResults = categoriesSearchers.map((searcher) => {
    return {
      name: searcher.name,
      items: searcher.searchEngine.search(input),
    };
  });

  return categoriesResults.map(
    (categoryResults): CategorySeachResult => {
      return {
        items: categoryResults.items,
        name: categoryResults.name,
        score: 2,
      };
    },
  );
}
