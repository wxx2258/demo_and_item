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