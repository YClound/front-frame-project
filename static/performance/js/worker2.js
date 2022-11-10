addEventListener('message', function(evt) {
  let total = 0;
  const sum = evt.data;
  for (let i = 0; i < sum; i++) {
    total += i;
  }

  postMessage(total);
})