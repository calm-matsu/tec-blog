import type {CollectionEntry} from 'astro:content';

// similer products
const similerItems = (currentItem: CollectionEntry<'blog'>, allItems: any, slug: string) => {
    let currentCategories: string[] = [];
    let currentTags: string[] = [];
  
    // set categories
    if (currentItem.data.category.length > 0) {
      currentCategories.push(currentItem.data.category);
      //currentCategories = currentItem.data.category;
    }
  
    // set tags
    if (currentItem.data.hasOwnProperty("tags") && currentItem.data.tags.length > 0) {
      currentTags = currentItem.data.tags;
    }
  
    // filter by categories
    console.log(currentCategories);
    const filterByCategories = allItems.filter(
      (item: { data: { category: string } }) =>
        currentCategories.find((category) => item.data.category.includes(category))
    );
  
    // filter by tags
    console.log(currentTags);
    const filterByTags = allItems.filter((item: { data: { tags: string[] } }) => {
      //console.log(item);
      if(item.data.hasOwnProperty("tags")){
        return currentTags.find((tag) => item.data.tags.includes(tag))
      }else{
        return [];
      }
      
    }
    );
  
    // merged after filter
    const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];
  
    // filter by slug
    const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  
    return filterBySlug;
  };
  
  export default similerItems;
  