/**
 * 描述： 完成 combo 函数，它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数，
 * 它的作用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)
 * >>> 高阶函数-柯里化函数的使用
 * 
*/
const combo = (...funcs) => {
    // TODO: 请在此处完善代码
    funcs.length && funcs.reverse()
    return prop =>
      funcs.reduce((acc, cur) => {
        return cur(acc)
      }, prop)
  }
  
  
  /* 以下为测试代码 */
  const addOne = a => a + 1
  const multiTwo = a => a * 2
  const divThree = a => a / 3
  const toString = a => a + ''
  const split = a => a.split('')
  
  split(toString(addOne(multiTwo(divThree(666)))))
  // => ["4", "4", "5"]
  
  const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
  testForCombo(666)
  // => ["4", "4", "5"]