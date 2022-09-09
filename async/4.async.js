
function fetch(url) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(url)
    }, 100)
  })
}

// function foo() {
//   fetch('https://www.response1.com').then((response1)=> {
//     console.log('response1: ', response1);
//   	console.log('response1 end');
//     fetch('https://www.response2.com').then((response2)=> {
//       console.log('response2: ', response2);
//       console.log('response2 end');
//     })
//   })
// }
// foo()

//foo函数
function* foo() {
    let response1 = yield fetch('https://www.response1.com')
    console.log('response1 end ')
    let response2 = yield fetch('https://www.response2.com')
    console.log('response2 end')
}

//执行foo函数的代码
let gen = foo()
function getGenPromise(gen) {
    return gen.next().value
}
getGenPromise(gen).then((response) => {
    console.log('response1: ', response)
    return getGenPromise(gen)
}).then((response) => {
    console.log('response2: ', response)
    return gen.next()
})

// async function foo() {
//   let response1 = await fetch('https://www.response1.com')
//   console.log('response1 end ', response1)
//   let response2 = await fetch('https://www.response2.com')
//   console.log('response2 end', response2)
// }

// foo()
