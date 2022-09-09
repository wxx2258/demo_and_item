function sleep(ms) {
  return new Promise((resolve)=> {
    setTimeout(resolve, ms)
  })
}

async function loop() {
  while(true) {
    await sleep(1000);
    console.log(1)
  }
}
loop()

setInterval(()=> {
  console.log('tick')
}, 2000)


function sleep(ms) {
  return new Promise((resolve)=> {
    setTimeout(resolve, ms)
  })
}

async function loop() {
  let startTime = Date.now()
  while(true && Date.now() - startTime <= 4000) {
    sleep(1000).then(()=> console.log(1));
  }
}
loop()

setInterval(()=> {
  console.log('tick')
}, 2000)