
        var n = [];
        for (let i = 0; i < 5; i++) {

            n[i] = prompt("Enter Array Element " + (n));

        }
        document.write("Your Array is " + n);
        document.write("<br/>");
        var result = Math.max(...n);
        document.write("Largest Number is:" + result);
  