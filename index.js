var userNum =+prompt('PLease enter "n"');
alert (fib(userNum));
function fib(n){
    if (n==1||n==2) return 1; 
    else return fib(n-2)+fib(n-1);
}
