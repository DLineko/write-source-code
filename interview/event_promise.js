/**
 * 描述： 完成 sleep 函数，可以达到下面的效果
 * >>> js的事件机制
*/
const sleep = duration => {
    // TODO
    return new Promise(reject =>
       setTimeout(()=> {
        reject()
    },duration))
  }
  
  const anyFunc = async () => {
    console.log('123') // 输出 123
    await sleep(300) // 暂停 300 毫秒
    console.log('456') // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
  }
  anyFunc()