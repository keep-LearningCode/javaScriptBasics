function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {  // in parameter we cannot pass a function
    console.log(helloMessage() + name);
  }
  // Pass `sayHello` as an argument to `greeting` function
  greeting(sayHello, "JavaScript!");
  // Hello, JavaScript!

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  const radius = [1, 2, 3];
// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
//console.log(calculateArea(radius));

// function to calculate diameter of the circle
const calculateDiameter = (radius)=> {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
//console.log(calculateDiameter(radius))

//+++++++++++++++++++++++  using HOF  ++++++++++++++++++++++++++++
const area=(radius)=>{
    return Math.PI * radius * radius;
}

const diameter=(radius)=>{
    return 2* radius;
}

const calculate=(radius, action)=>{
    const output=[];
    for(let i=0; i< radius.length; i++){
      output.push(action(radius[i]));
    }
    return output;
}

console.log("area of circle",calculate(radius,area))
console.log("diameter of circle",calculate(radius,diameter))