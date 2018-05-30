// Challenge 1
var string1 = "#";
var string2 = "";
for (var i = 0; i < 7; i++) {
    string2 = string2 + string1 + "\n"
    string1 = string1 + "#"
  }
  console.log(string2);
  /*
 In order to print the entire triangle with only one console.log(), I declared two variables.
 The first contains one pound sign, the second is empty.  Each time the loop runs, the contents of
 string1 is added to string2, followed by an endline character.  Before the next loop, string1 is updated 
 to include another pound symbol.

 String2 stores the entire triangle, with each line containing one more pound sign than the previous
  */
  
  // Challenge 2
  
  function isEven(number) {
    if (number % 2 == 0) {
        console.log("the number is even");
    } else if (number % 2 == 1) {
        console.log("the number is odd");
    } else {
        console.log("This parameter is not a number")
    }
    return 0;
  }

  /*
  Any even number modulo 2 will equal zero. If that is the case, the function prints "the number is even"
  Any odd number modulo 2 will equal one. If that is the case, the function prints "the number is odd"
  Any other case assumes the parameter entered is not a number.
  */