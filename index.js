const object1 = {
  email: '',
  name: ' ',
  age: '',
};

const customizedHandler = {
  get: (target, prop) => {
    console.log("target: ", target)
    return target[prop];
  },
  set: (target, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(
        'only number values are allowed to be assigned to the the property age'
      );
    } else {
      target[prop] = value
    }
    // console.log(target)
    // console.log(prop)
    // console.log(value)
  },
};

const object1Proxy = new Proxy(object1, customizedHandler);

console.log('test');
console.log(object1Proxy.name);
object1Proxy.age = 12;
console.log(object1Proxy.age);
