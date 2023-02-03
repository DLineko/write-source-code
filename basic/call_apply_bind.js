/**
 *  call:
 *  第一个参数为null或者undefined时，this指向全局对象window，值为原始值的指向该原始值的自动包装对象，如 String、Number、Boolean
    为了避免函数名与上下文(context)的属性发生冲突，使用Symbol类型作为唯一值
    将函数作为传入的上下文(context)属性执行
    函数执行完成后删除该属性
    返回执行结果
 */
Function.prototype.myCall = (context) => {
    context = context || window
    // context.fn = this
    const key = Symbol()
    context[key] = this
    const args = [...arguments].slice(1)
    const result = context[key](...args)
    delete context[key]
    return result
}
/**
 *  apply:
 *  第二个参数可以不传，但类型必须为数组或者类数组
 */

Function.prototype.myApply = (context) => {
    context = context || window
    const key = Symbol()
    context[key] = this
    const args = arguments[1]
    const result = args ?  context[key](...args) : context[key]()
    delete context[key]
    return result
}
/**
 * bind: 
 * bind 方法与 call / apply 最大的不同就是前者返回一个绑定上下文的函数，而后两者是直接执行了函数。
 */

Function.prototype.myBind = (context) => {
    context = context || window
    const self = this
    var self = this;
    // 实现第2点，因为第1个参数是指定的this,所以只截取第1个之后的参数
    var args = Array.prototype.slice.call(arguments, 1); 
    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply( context, args.concat(bindArgs) );
    }
}