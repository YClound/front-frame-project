// catch Promise.reject();
async function fn() {
  const data = await new Promise((resolev, reject) => {
    reject('reject fail')
  })
}

fn();

window.addEventListener('unhandledrejection', function (event) {
  event.preventDefault();
  console.log(event);
})