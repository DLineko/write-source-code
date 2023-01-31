/**
 * 题目一：
 * 描述： 编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。
 * （实例可能监听多个不同的事件，也可以去除监听事件）
 * >>> 面向对象的知识，事件监听与销毁

 */
class People {
    constructor(name) {
      this.name = name
      this.eventLoop = {}
    }
    // TODO: 请在此处完善代码
    on(type, fn) {
      (this.eventLoop[type] ||  (this.eventLoop[type] = [])).push(fn)
    }
    off(type,fn) {
      const arrFn = this.eventLoop[type]
      for(let i = arrFn.length; i >=0 ; i-- ) {

        if(fn === arrFn[i]) {
            arrFn.splice(i,1)
        }
      }
    }
    emit(type,fn) {
        const arrFn = this.eventLoop[type]
        arrFn.forEach(cb => {
            cb()
        });

    }

    sayHi() {
      console.log(`Hi, I am ${this.name}`)
    }
  }
  /* 以下为测试代码 */
  const say1 = greeting => {
    console.log(`${greeting}, nice meeting you.`)
  }
  
  const say2 = greeting => {
    console.log(`${greeting}, nice meeting you, too.`)
  }
  
  const jerry = new People('Jerry')
  jerry.sayHi()
  // => 输出：'Hi, I am Jerry'
  
  jerry.on('greeting', say1)
  jerry.on('greeting', say2)
  
  jerry.emit('greeting', 'Hi')
  // => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'
  
  jerry.off('greeting', say1)
  jerry.emit('greeting', 'Hi')
  // => 只输出：'Hi, nice meeting you, too'
  