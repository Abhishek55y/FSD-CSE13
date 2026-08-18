import readline from "readline/promises";
import { writeFile,readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE="product.json"
const saveCart=async(cart)=>{
       await writeFile(FILE,JSON.stringify(cart,null,2));
};
const getCart=async()=>{
   const data=await readFile(FILE,"utf-8");
   return JSON.parse(data)
};

const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let choice;

  do {
    console.log("Welcome to shopping cart 💝");
    console.log("1------Add to cart");
    console.log("2------Show cart");
    console.log("3------Remove item");
    console.log("4------Update Quantity");
    console.log("5------Checkout");

    choice = await cin.question("Enter your choice: ");

    console.log("Entered choice:", choice);

    switch (Number(choice)) {
      case 1:
        console.log("add cart item");
        break;

      case 2:
        console.log("show cart item");
        break;

      case 3:
        console.log("remove item");
        break;

      case 4:
        console.log("update quantity");
        break;

      case 5:
        console.log("See you later 😄");
        break;

      default:
        console.log("Invalid choice! Try again 🥰");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();
