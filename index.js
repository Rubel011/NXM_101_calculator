let cryp = require("crypto")
let ope = process.argv[2];
let n1 = +process.argv[3]
let n2 = +process.argv[4]
switch (ope) {
  case "add":
    console.log(n1 + n2);
    break;
  case "sub":
    console.log(n1 - n2);
    break;
  case "mult":
    console.log(n1 * n2);
    break;
  case "divide":
    console.log(n1 / n2);
    break;
  case "sin":
    console.log(Math.sin(n1));
    break;
  case "cos":
    console.log(Math.cos(n1));
    break;
  case "tan":
    console.log(Math.tan(n1));
    break;
  case "random":
    let num = cryp.randomInt(10, 200, (err, n) => {
      if (err) {

        throw new Error(err)
      }
      console.log(n)
    })
    break;
  default:
    console.log("Invalid operation");
}

