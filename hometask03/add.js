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
  const result = {};

  if(args.length === 0) {
    throw new Error('Needs at least 1 argument');
  } else if(args.length === 1) {
    Object.assign(result, args[0]);
    return result;
  } else {
    Object.assign(result, args[0]);

    for(let i = 1; i < args.length; i++) {
      const currentObject = args[i];

      for(let key in currentObject) {
        if(key in result) {
          result[key] += currentObject[key];
        } else {
          result[key] = currentObject[key];
        }
      }
    }

    return result;
  }
};

// console.log(add(a, b, b, c, b));

// console.log(add(a));

console.log(add(a, b));

console.log(add(a, b, a));

//-------------------------------------

const obj1 = {
  e: 2,
  p: 0,
  a: 2,
  m: 1,
}

const obj2 = {
  h: 3,
  a: 2,
  r: 1,
  l: 4,
  e: 0,
  m: 5,
}

const obj3 = {
  h: 2,
  o: 1,
  m: 3,
  e: 1,
  l: 3,
}

const obj4 = {
  m: 2,
  i: 7,
  n: 3,
  s: 5,
  k: 0,
}

function findIntersect(...args) {
  const result = {};

  if(args.length < 2) {
    throw new Error("Needs at least 2 arguments");
  } else {
    Object.assign(result, args[0])
    for(let i = 1; i < args.length; i++) {

      const currentObject = args[i];

      for(let key in currentObject) {
        if(key in result) {
          result[key] += currentObject[key];
        } 
      }

      for(let key in result) {
        if((key in currentObject) === false) {
          delete result[key];
        }
      }
    }
  }

    return result;
}

// console.log(findIntersect(obj1, obj2));

// console.log(findIntersect(obj1, obj3));

// console.log(findIntersect(obj2, obj3));

// console.log(findIntersect(obj1, obj2, obj3));

// console.log(findIntersect(obj1, obj2, obj3, obj4));

// ------------------------

function findIntersectInArr(...args) {
  const result = {};

  if(args.length < 2) {
    throw new Error("Needs at least 2 arguments");
  } else {
    Object.assign(result, args[0]) 

    for(let i = 1; i < args.length; i++) {

      const currentObject = args[i];

      for(let key in result) {
        if((key in currentObject) === false) {
          delete result[key];
        }
      }
    }
  }
  return Object.keys(result);
}

// console.log(findIntersectInArr(obj1, obj2));

// console.log(findIntersectInArr(obj1, obj3));

// console.log(findIntersectInArr(obj2, obj3));

// console.log(findIntersectInArr(obj1, obj2, obj3));

// console.log(findIntersectInArr(obj1, obj2, obj3, obj4));