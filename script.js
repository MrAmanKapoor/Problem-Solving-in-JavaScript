function Sum_of_numbers_within_an_array() {
    var a = [];
    var x=0;
    while (x < 5) 
    {

        a[x] = window.prompt("Enter Array Element " + (a));
        x++;
    }
   
    let sum = 0;
    
    for (var i = 0; i < a.length; i++) {
        sum = sum+ a[i];
    }
    console.log(sum);
   
}

//................Remove_duplicate_item_from_an_array.............//
function Remove_duplicate_item_from_an_array()
{
    var n = [];
for (let i = 0; i < 5; i++) {

    n[i] = prompt("Enter Array Element " + (n));

}
let uniqueChars = [...new Set(n)];

console.log(uniqueChars);
document.write("Your Array is " + n);
document.write("<br/> <br/>");
document.write("New Array after removing duplicate item:- " + uniqueChars);
}


//.............factorial_of_a_Number..............//

function factorial_of_a_Number(){
    var n= window. prompt("Find Factorial of a number, Enter Number");
    function factorial(n) {
        if (n==0) {
            return 1;
        }
        else
        {
            return n*factorial(n-1);
        }
    }
    var result = factorial(n);
    alert("Factorial of "+n + " is " +result);
}

//...........Largest_No_of_Array.........//
function Largest_No_of_Array()
{
    var n = [];
        for (let i = 0; i < 5; i++) {

            n[i] = prompt("Enter Array Element " + (n));

        }
        document.write("Your Array is " + n);
        document.write("<br/>");
        var result = Math.max(...n);
        document.write("Largest Number is:" + result);
  
}
//.......Fibonacci_Number........//

function Fibonacci_Number()
{
    
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

}
/////.......filters_out_negative_numbers....//
function filters_out_negative_numbers()
{

    var array = [];
    var x=0;
    while (x < 5) 
    {

        array[x] = window.prompt("Enter Array Element " + (array));
        x++;
    }
    document.write("Your Array is " + array);
array = array.filter(function(x) { return x > -1; });
console.log(array);

document.write("<br/>");
document.write("After Filtering Negative Numbers:" + array);

}

///......Return_Something_to_Me().......///

function Return_Something_to_Me()
{
  var  n=window.prompt("Type Something for me...!!");

  alert("Sorry I'm not Available...");

}

//.......Given a string, reverse each word in the sentence.........//
function POPUP_msg()
{
   
	

	alert("Welcome to my WebPage!!!");

	
	
}

////......// Program to guess a Number...../////

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));



    // check if the guess is correct
    if(number == random) {
        
        alert("You guess the correct number." +number);
    }
    else
    {
        alert("You guess the incorrect number:- " +number +" Correct number is:- " +random);
    
    }
    

  
}

//.........Get the integers in a range........////

function integers_in_a_range()
{
var  start_num= parseInt(prompt('Get the integers in a range.. Enter 1st Number:- '));
var  end_num= parseInt(prompt(' Enter 2nd Number:- '));
var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

var result= range(start_num, end_num);
alert("Range btw " + start_num + " to "+ end_num + " is " + result);

}

///............Find the longest word within a string....////


function longest_word()
{
    var  str= prompt('Enter a Sentence..');

    function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert
(   "Enter a Sentence by you :---->" +  str +
    "\nLongest word is :---->" + find_longest_word(str)
    );
}


var myOject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/*


//................Remove_duplicate_item_from_an_array.............//
function Remove_duplicate_item_from_an_array()
{
    var n = [];
for (let i = 0; i < 5; i++) {

    n[i] = prompt("Enter Array Element " + (n));

}
let uniqueChars = [...new Set(n)];

console.log(uniqueChars);
document.write("Your Array is " + n);
document.write("<br/> <br/>");
document.write("New Array after removing duplicate item:- " + uniqueChars);
}


//.............factorial_of_a_Number..............//

function factorial_of_a_Number(){
    var n= window. prompt("Find Factorial of a number, Enter Number");
    function factorial(n) {
        if (n==0) {
            return 1;
        }
        else
        {
            return n*factorial(n-1);
        }
    }
    var result = factorial(n);
    alert("Factorial of "+n + " is " +result);
}

//...........Largest_No_of_Array.........//
function Largest_No_of_Array()
{
    var n = [];
        for (let i = 0; i < 5; i++) {

            n[i] = prompt("Enter Array Element " + (n));

        }
        document.write("Your Array is " + n);
        document.write("<br/>");
        var result = Math.max(...n);
        document.write("Largest Number is:" + result);
  
}
//.......Fibonacci_Number........//

function Fibonacci_Number()
{
    
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

}
/////.......filters_out_negative_numbers....//
function filters_out_negative_numbers()
{

    var array = [];
    var x=0;
    while (x < 5) 
    {

        array[x] = window.prompt("Enter Array Element " + (array));
        x++;
    }
    document.write("Your Array is " + array);
array = array.filter(function(x) { return x > -1; });
console.log(array);

document.write("<br/>");
document.write("After Filtering Negative Numbers:" + array);

}
/////----Star Rating System---//
ratings = {
    Pizza: 1.5,
    Samosa: 3.8,
    Pani_Puri: 5,
    Pasta: 0
}

totalRating = 5;
table = document.querySelector('.table');
selectInput = document.getElementById('selectInput');
ratingInput = document.getElementById('ratingInput');

let phoneNames;
selectInput.addEventListener('change', function(e) {
    phoneNames = e.target.value;
    ratingInput.disabled = false;
    ratingInput.value = ratings[phoneNames];

})

ratingInput.addEventListener('change', function(e) {
    ratingsinInput = e.target.value;
    ratings[phoneNames] = ratingsinInput;
    rateIt()
})







function rateIt() {

    for (rating in ratings) {
        ratingPercentage = ratings[rating]*100 / totalRating;
        console.log("Rating$"+ ratingPercentage);
        star = table.querySelector(`.${rating} .inner-star`);
        numberRating = table.querySelector(`.${rating} .numberRating`);
        ratingRounded=  ratings[rating]*100 / totalRating + "%";
        star.style.width = ratingRounded;
        numberRating.innerText = ratings[rating];

    }
}

rateIt()

///......Return_Something_to_Me().......///

function Return_Something_to_Me()
{
  var  n=window.prompt("Type Something for me...!!");

  alert("Sorry I'm not Available...");

}

//.......Given a string, reverse each word in the sentence.........//
function POPUP_msg()
{
   
	

	alert("Welcome to my WebPage!!!");

	
	
}

////......// Program to guess a Number...../////

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));



    // check if the guess is correct
    if(number == random) {
        
        alert("You guess the correct number." +number);
    }
    else
    {
        alert("You guess the incorrect number:- " +number +" Correct number is:- " +random);
    
    }
    

  
}

//.........Get the integers in a range........////

function integers_in_a_range()
{
var  start_num= parseInt(prompt('Get the integers in a range.. Enter 1st Number:- '));
var  end_num= parseInt(prompt(' Enter 2nd Number:- '));
var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

var result= range(start_num, end_num);
alert("Range btw " + start_num + " to "+ end_num + " is " + result);

}

///............Find the longest word within a string....////


function longest_word()
{
    var  str= prompt('Enter a Sentence..');

    function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert
(   "Enter a Sentence by you :---->" +  str +
    "\nLongest word is :---->" + find_longest_word(str)
    );
}

*/



