// カテゴリ一覧を配列で返す
const getCategories = (categoriesArr,parentArr=[]) => {
  let cateList=[];
  for (const nowCategory of categoriesArr) {
    const fullPath = [...parentArr,{name:nowCategory.name, slug:nowCategory.slug}];
    
    if(nowCategory.hasOwnProperty("children")){
      //子を配列にして追加
      const childUnderCategories = nowCategory.children.map((nowChild) => {
        return {name: nowChild.name, slug: nowChild.slug};
      });
      cateList.push({name:nowCategory.name, slug:nowCategory.slug, full:fullPath, children:childUnderCategories});
      const childCateList=getCategories(nowCategory.children,fullPath);
      cateList=[...cateList,...childCateList];
    }else{
      cateList.push({name:nowCategory.name, slug:nowCategory.slug, full:fullPath});
    }
  }
  return cateList;
}

export default getCategories;