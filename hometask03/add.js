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

function add() {
  const args = [...arguments];
  const result = {};

  if(args.length === 0) {
    throw new Error('Needs at least 1 argument');
  } else if(args.length === 1) {
    Object.assign(result, args[0]);
    console.log(result);
  } else {
    for(let i = 0; i < args.length; i++) {
      for(let j = 0; j < Object.keys(args[i]).length; j++) {
        if(Object.keys(result).includes(Object.keys(args[i])[j])) {
          result[Object.keys(args[i])[j]] += Object.values(args[i])[j];
        } else {   
          result[Object.keys(args[i])[j]] = Object.values(args[i])[j]; 
        }
      }      
    }
    console.log(result);
  }
};

add(a, b, b, c, b, a);

add(a);

add(a, b);

add(a, b, a);