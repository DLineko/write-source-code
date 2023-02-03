/**
 * 浅拷贝
 */

const shallowClone = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop]
          }
    }
}
/**
 * 深拷贝
 */
const deepClone = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = typeof newObj[prop] === 'object' ? deepClone(obj[prop]) : obj[prop]
          }
    }

}
const deepClone2 = (target, cache = new WeakMap()) => {
    if(target === null || typeof target !== 'object') {
        return target
    }
    if(cache.get(target)) {
        return target
    }
    const copy = Array.isArray(target) ? [] : {}
    cache.set(target, copy)
    Object.keys(target).forEach(key => copy[key] = deepClone(target[key], cache))
    return copy
}