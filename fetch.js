import fetch from  './commands.js';

fetch().then((count) => {
  console.log(`Near Earth Objects fetched: ${count}`);
  process.exit();
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
