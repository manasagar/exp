
//function to select category
export const handleOnCategorySelect = (item: any,selectedCategories:any,setSelectedCategories:any) => {

    setSelectedCategories(() => {
      return selectedCategories.map((ele: any, i: number) => {
        return ele?.key === item?.key
          ? { ...ele, checked: !ele?.checked }
          : ele;
      });
    });
    
  };