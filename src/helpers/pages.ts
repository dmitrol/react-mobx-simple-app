interface IResult {
  startItem: number;
  items: number[];
  endItem: number;
}

export const getPageArray = (
  page: number,
  totalPages: number,
  countItems: number
): IResult => {
  const result: IResult = {
    startItem: 1,
    items: [],
    endItem: totalPages,
  };
  if (totalPages <= 3) {
    if ((totalPages == 3)) {
      result.items = [2];
    }
    return result;
  }
  
  let start = page - Math.floor((countItems - 1) / 2);
  let end = page + Math.ceil((countItems - 1) / 2);

  if (start < 2) {
    start = 2;
    end = countItems + 1;
    if (end >= totalPages) {
      end = totalPages - 1;
    }
  }

  if (end >= totalPages) {
    end = totalPages - 1;
    start = totalPages - countItems;
    if (start < 2) {
      start = 2;
    }
  }

  for (let i = start; i <= end; i++) {
    result.items.push(i);
  }
  return result;
};
