/*
   描述： 完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容
   >>>　数组以及对象方法的使用
*/
const deepGet = (obj, prop) => {
    // TODO: 在此处完善代码
       // TODO: 在此处完善代码
       let result = obj
       const keyArray = prop.split('.')
       for (let i = 0; i < keyArray.length; i++) {
           if (result) {
               const key = keyArray[i]
               const index = key.indexOf('[');
               if (index === -1) { // 对象
                   result = result[key] ? result[key] : undefined
               } else { // 数组
                   const arrayName = key.slice(0, index)
                   const arrayIndex = key.slice(index + 1, -1)
                   result = result[arrayName] ? result[arrayName][arrayIndex] : undefined
               }
           } else {
               break;
           }
       }
       console.log(result);
       return result
}
// 解法2
// const deepGet = (obj, prop) => {
//     // TODO: 在此处完善代码
//     const keyArr = prop.split('.').map(item => item)
  
//     const reducer = (acc, cur) => {
//       // 提取students[1]字符窜中的子窜student
//       const objKey = cur.includes('[') && cur.replaceAll(/[\[?=0-9\]$]/gi, '')
//       if (Array.isArray(acc[objKey])) {
//         // 提取students[1]字符窜中的数字1
//         cur = cur.replaceAll(/[^?=0-9]/gi, '')
//         return acc[objKey][cur] || {}
//       }
//       return acc[cur] ? acc[cur] : {}
//     }
  
//     const result = keyArr.reduce(reducer, obj)
//     return Object.keys(result).length ? result : undefined
// }
/** 以下为测试代码 */
deepGet(
{
    school: {
    student: { name: 'Tomy' }
    }
},
'school.student.name'
) // => 'Tomy'

deepGet(
{
    school: {
    students: [{ name: 'Tomy' }, { name: 'Lucy' }]
    }
},
'school.students[1].name'
) // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined