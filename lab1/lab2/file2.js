// import { clear } from "console";
// import { readFile } from "fs";
import { readFile } from "fs/promises";
const data=await readFile("stud.txt","utf-8");
// await writeFile("stud.txt", "Name:Abhishek kumar");
console.log("File contents");
console.log(data);