/**
 * 首先创建一个空对象，使空对象的__proto__指向构造函数的原型(prototype)
 * this指向对象
 * 判断构造函数的返回值是否为对象，如果是对象，就使用构造函数的返回值，否则返回创建的对象
 * @param {*} con 
 * @param  {...any} args 
 * @returns 
 * call
 */
const createNew = (con,...args) => {
    const obj = {}
    obj.__proto__ = con.prototype
    let result = con.call(obj,args)
    return typeof result === 'object' ? result : obj
}
const createNewApply = (con,...args) => {
    const obj = {}
    Object.setPrototypeOf(obj,con.prototype)
    let result = con.apply(obj,args)
    return result instanceof Object ? result : obj
}
// 