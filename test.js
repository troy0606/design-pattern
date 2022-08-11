const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  console.log(content);
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
      console.log(key)
    }
    return cache[key]
  }
}

const add = function (x,y) {
  return x+y;
}

const calc = memoize(add);
const num1 = calc(100,200)