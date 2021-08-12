const a = {
  x: 1,
};

const b = {
  x: 2,
  y: 2,
};

const c = {
  y: 1,
  z: 7,
};

function add(...args) {
  if (args.length === 0) {
    return null;
  } else {
    return args.reduce((acc, currItem) => {
      Object.keys(currItem).forEach(key => {
        if (acc[key] || acc[key] === 0) {
          acc[key] += currItem[key];
        } else {
          acc[key] = currItem[key];
        }
      });
      return acc;
    }, {});
  };
};

console.log(add(a));

console.log(add(a, b));

console.log(add(a, b, a));

console.log(add(a, b, b, c, b));

//-------------------------------------

const obj1 = {
  e: 2,
  p: 0,
  a: 2,
  m: 1,
};

const obj2 = {
  h: 3,
  a: 2,
  r: 1,
  l: 4,
  e: 0,
  m: 5,
};

const obj3 = {
  h: 2,
  o: 1,
  m: 3,
  e: 1,
  l: 3,
};

const obj4 = {
  m: 2,
  i: 7,
  n: 3,
  s: 5,
  k: 0,
};

function findIntersect(...args) {
  if (args.length < 2) {
    return null;
  } else {
    return args.reduce((acc, currItem) => {
      Object.keys(currItem).forEach(key => {
        if (acc[key] || acc[key] === 0) {
          acc[key] += currItem[key];
        }
      });
      Object.keys(acc).forEach(key => {
        if (!currItem.hasOwnProperty(key)) {
          delete acc[key];
        }
      });
      return acc;
    }, Object.assign({}, args.shift(0)));
  };
};

// console.log(findIntersect(obj1, obj2));

// console.log(findIntersect(obj1, obj3));

// console.log(findIntersect(obj2, obj3));

// console.log(findIntersect(obj1, obj2, obj3));

// console.log(findIntersect(obj1, obj2, obj3, obj4));

// ------------------------

function findIntersectInArr(...args) {
  if (args.length < 2) {
    return null;
  } else {
    return args.reduce((acc, currItem) => {
      return Object.keys(currItem).filter(key => {
        if(acc.includes(key)) {
          return key;
        }
      });
    }, [...Object.keys(args[0])]);
  };
};

// console.log(findIntersectInArr(obj1, obj2));

// console.log(findIntersectInArr(obj1, obj3));

// console.log(findIntersectInArr(obj2, obj3));

// console.log(findIntersectInArr(obj1, obj2, obj3));

// console.log(findIntersectInArr(obj1, obj2, obj3, obj4));
