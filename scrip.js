function calculate() {
    var input1 = parseFloat(document.getElementById("sum1").value);
    var operator = document.getElementById("operator").value;
    var input2 = parseFloat(document.getElementById("sum2").value);
    
  
    var result;
  
    switch (operator) {
      case "add":
        result = input1 + input2;
        break;
      case "subtract":
        result = input1 - input2;
        break;
      case "multiply":
        result = input1 * input2;
        break;
      case "divide":
        if (input2 !== 0) {
          result = input1 / input2;
        } else if (input1 === 0 && input2 === 0) {
          console.log("Math ERROR:");
        }
        else{
          console.log("Error: Value cannot be divided");
        }
        break;
      default:
        console.log("Error: Invalid operator");
            
    }
  
    console.log(result);
  }





    // Javascript operations// ----------------

    var a= "10";
    var b= 20;

    console.log(parseInt((a) + b));



