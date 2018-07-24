let first = document.querySelector('.first');
let second = document.querySelector('.second');
let timer = document.querySelector('.timer');
let image = document.querySelector('img');

async function callRandomUser() {
  let data = 'https://randomuser.me/api/';
  let xhr = new XMLHttpRequest();
  xhr.open('get', data, true);
  xhr.send(null);
  xhr.onload = () => {
    let json = JSON.parse(xhr.responseText);
    console.log(json);
    console.log(json.results[0].email);
    return json.results[0].email;
  };
}

async function runFunc() {
  let firstRandomUser = await callRandomUser();
  console.log(firstRandomUser);
  let secondRandomUser = await callRandomUser();
  console.log(secondRandomUser);
}

runFunc();

// async function run() {
//   return 'Success!';
// }
// async function failed() {
//   throw 'Error';
// }

// (async () => {
//   let a = await run();
//   console.log(a);
//   try {
//     let b = await failed();
//   } catch (err) {
//     console.log(err);
//   }
// })();

// console.log('End!');
