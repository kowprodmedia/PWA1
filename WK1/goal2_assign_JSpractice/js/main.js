// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function.  
				1) array of numbers 
				2) boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

		console.log(arr.length);
        //CODE GOES HERE
		
		// Set a var to hold our data
		var a = 0;
		
		// Loop does work
		for (var i = 0; i < arr.length; i++)
		{
			// Add each array element to the place holder
			a += arr[i];
			
			// Logging the value
			console.log("Value of a " + a);
		}
		
		// Stupid Math. Acutally, this should be in paren. for readability.
		a = (a/arr.length);
		
		// Return that shiz
		return a;
    };

	// Write to debug log...
    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
	var fullName = function(fName,lName)
	{
		// Simple concat = One word + a space + another word
		return fName + " " + lName;
	};

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
	var wordCount = function(inString)
	{
		// The Split method breaks strings into arrays based on the location of a seperator, in this case a space
		var ipsumArr = inString.split(" ");
		return ipsumArr.length;
	};

	// Answer should be 13
    console.log("IPSUM String Word Count: " + wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
	var charCount = function(inString)
	{
		// Same as above, but we're breaking on nothing, so we split characters instead of on a seperator
		var ipsumArr = inString.split("");
		return ipsumArr.length;
	};
	
	// Answer should be 59
    console.log("Number of Chars in Ipsum: " + charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
	var vowelsInWord = function(inString)
	{
		var a = 0;
		
		// Loops through each char in the string, because strings in JS are arrays of chars
		for(var i = 0; i < inString.length; i++)
		{
			// Conditionally checks for "a","e","i",etc.  The return of the "search" method if a char does not match is -1
			if('aeiou'.search(inString[i]) > -1)
			{
				// Increment the count var
				a++;
			}
		}
		
		return a;
	};
	
	//Answer should be 3
    console.log("Number of Vowels in Input String: " + vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
	var findNum = function(numArr, bool)
	{
		/**
			And this bastard!
		*/
	
		// THese arrays hold nothing, but JS allows us to dynamically resize arrays with the "push" method below
		var evenArr = [];
		var oddArr = [];

		// This checks for the "Null / False" condition of the "bool" var
		if(bool != undefined && bool != true)
		{
			bool = false;
		}
		else
		{
			bool = true;
		}
		
		// This decides; should we give even or odd array list
		if(bool)
		{
			console.log('odd');
			
			//Loops through the array looking for odd numbers
			for(var o = 0; o < numArr.length; o++)
			{
				// The "%" is the MOD operator, if the element in numArr[] is divisible by the number on the right of it, it will = 0 i.e. 4/2 is a MOD of 2
				// Below, odd numbers will not be divisible by 2 so they are NOT equal (!=) to 0
				if((numArr[o] % 2) != 0)
				{
					oddArr.push(numArr[o]);
				}
			}
			
			return oddArr;
		}
		else
		{
			console.log('even');
			
			for(var e = 0; e < numArr.length; e++)
			{
			// The "%" is the MOD operator, if the element in numArr[] is divisible by the number on the right of it, it will = 0 i.e. 4/2 is a MOD of 2
				if((numArr[e] % 2) === 0)
				{
					evenArr.push(numArr[e]);
				}
			}
			
			return evenArr;
		}
		
	};

    console.log("Should Be Undefined " + findNum([31,22,4,67,83,6,5,4]));
    console.log("Should Be False " + findNum([31,22,4,67,83,6,5,4], false));

})();