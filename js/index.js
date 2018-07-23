let first = document.querySelector('.first');
let second = document.querySelector('.second');
let timer = document.querySelector('.timer');
let image = document.querySelector('img');

function callApi(arg) {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(
        fetch('https://randomuser.me/api/', {})
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(jsonData => {
          // console.log(jsonData);
          console.log(jsonData.results[0].email);
          arg.innerText = jsonData.results[0].email;
        })
        .catch(err => {
          console.log('錯誤:', err);
        })
      );
    } else {
      reject('Reject!');
    }
  });
}

async function asyncAwait() {
  callApi(first);
  try {
    setTimeout(() => {
      fetch('https://dog.ceo/api/breeds/image/random', {})
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(jsonData => {
          console.log(jsonData.message);
          image.src = jsonData.message;
        })
        .catch(err => {
          console.log('錯誤:', err);
        });
      timer.innerText = '2s Time Up!';
      callApi(second);
    }, 2000);
  } catch (err) {
    err;
  }
}
asyncAwait();

async function run() {
  return 'Success!'
}
async function failed() {
  throw 'Error';
}

(async () => {
  let a = await run();
  console.log(a);
  try {
    let b = await failed();
  } catch (err) {
    console.log(err);
  }
})()

console.log('End!');