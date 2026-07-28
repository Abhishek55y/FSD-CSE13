import{writeFile} from "fs/promises";
import { resolve } from "node:dns";
const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};

const f3 = () => {
  console.log("f3");
};
  const writeData=async()=>{
     await writeFile('note.txt','i am fs module');
     console.log("file written");
  };

const main = () => {
  console.log("main");
  writeData();
//   f1();
  setTimeout(f2,0);
// setInterval(f2,1000);
setImmediate(f3);
process.nextTick(f1);
//   f3();
 console.log("end");
 new Promise((resolve,reject) =>{
  console.log("I am promise 1");
  });
  new Promise((resolve,reject) =>{
  console.log("I am promise 2");
  });
};

main();
