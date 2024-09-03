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
  
    // console.log(Answer ${result});
    
    console.log("Answer=", result); //chuks style//
    console.log(`Result= ${result}`); //interpolation style.//
  }



  console.log("add");

    // Javascript operations// ----------------
    //   ! || &   //
    var num3 = 23;
    var num4 = 30;

    if (num3 < num4) {
        if (num3 == 23) {
            console.log(chuks);
        } else {
            console.log(coreect);
            
        }
    }
     else{
        
        console.log(right);
    }







