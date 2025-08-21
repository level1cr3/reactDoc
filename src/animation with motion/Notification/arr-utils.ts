export const remove = (arr: string[], item: string) => {
  var newArr = [...arr];

  newArr.splice(
    newArr.findIndex((value) => value === item),
    1
  );

  return newArr;
};

export const add = (arr: string[], item: string) => {
  return [...arr, item];
};
