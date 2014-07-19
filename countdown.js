function recur(x) {
  console.log("argument passed to recur() was: " + x)
  if (x > 0) {
   return recur(x - 1); 
  } if (x === 0) {
    console.log("zero passed to recur(); end of recursion")
  }
}
recur(5);
