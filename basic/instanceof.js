/**
 * 遍历左边变量的原型链，直到找到右边变量的 prototype，如果没有找到，返回 false

 */
const myInstanceOf = (target,origin) => {
  let proto = Object.getPrototypeOf(target)
  while(proto) {
    if(proto === origin.prototype) {
        return true
    }
    else proto = Object.getPrototypeOf(proto);
  }
  return false

}