function fetch(url) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(url)
    }, 100)
  })
}
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      sent: undefined,
      stop: function() {}
    };

    return {
      next: function(arguments) {
        object.sent = arguments
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false
        };
      }
    };
  });
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
          return Promise.resolve(value).then(v=> {
            step('next',v)
          },e=>step('throw',e));
        }
      }
      step('next');
    })
  }
}

function foo() {
  let _foo =_asyncToGenerator(
    (function _callee() {
      var response1, response2;
      return generator(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://www.response1.com');
            case 2:
              response1 = _context.sent;
              console.log('response1 end ', response1);
              _context.next = 6;
              return fetch('https://www.response2.com');
            case 6:
              response2 = _context.sent;
              console.log('response2 end', response2);
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })()
  );

  return _foo.apply(this, arguments)
}
foo();