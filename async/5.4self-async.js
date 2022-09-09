function fetch(url) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(url)
    }, 100)
  })
}
function _asyncToGenerator(fn) {
  return function() {
    let gen = fn.apply(this,arguments);//遍历器对象
    return new Promise((resolve,reject)=>{
      function step(key,args) {
        let res;
        try {
          res = gen[key](args);//next传入的参数是上一个yield的返回值。
        } catch (error) {
          reject(error);
        }
        let {done,value} = res;
        if (done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(v=>step('next',v),e=>step('throw',e));
        }
      }
      step('next');
    })
  }
}

function foo() {
  let _foo =_asyncToGenerator(function* () {
    let response1 = yield fetch('https://www.response1.com')
    console.log('response1 end ', response1)
    let response2 = yield fetch('https://www.response2.com')
    console.log('response2 end', response2)
  });
  return _foo.apply(this, arguments)
}
foo();