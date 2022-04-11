
        var n = window.prompt("Find Fibonacci of a number, Enter a Number");
        function Fibonacci(n) {

            if(n>45)
            {
                return "Invalid Number"
            }
            if (n == 0) { return 0; }
            else if (n == 1) {
                return 1;
            }
            else {

                return Fibonacci(n - 1) + Fibonacci(n - 2);
            }

          
        }

        var result = Fibonacci(n);
        console.log(result);
        document.write("Fibonacci of " + n + " is " + result);
        alert("Fibonacci of " + n + " is " + result);
