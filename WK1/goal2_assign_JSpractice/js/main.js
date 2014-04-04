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
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
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
			//Holds data
			var a = 0; 
			
			//Loop works
			for (var i = 0; i < arr.length; i++) { 
			
			// add each array element to the place holder
			a += arr[i]; 
			
			// logging the value 
			console.log("Value of a " + a); } 
			
			a = (a/arr.length); 
			
			return a;
		    };
		
		    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

   //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
        
		    var fullName = function(fName,lName)
		    {
		    
		    	return fName + " " + lName;
		    };
		
		    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
   console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
        
	        var wordCount = function(inString)
	        {
	        	var ipsumArr = inString.split(" ");
	        	return ipsumArr.length;
	        };
	
	    	console.log("IPSUM String Word Count: " + wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
        
	        var charCount = function(inString)
	        {
	        	var ipsumArr = inString.split("");
	        	return ipsumArr.length;
	        };
	
	    	console.log("Number of Chars in Ipsum: " + charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
        	var vowelsInWord = function(inString)
        	{
        		var a = 0;
        		for(var i = 0; i < inString.length; i++)
        		{
        			if('aeiou'.search(inString[i]) > -1)
        			{
        				a++;
        			}
        		}
        		
        		return a;
        	};

    console.log("Number of vowels in a word " + vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
        
        	var findNum = function(numArr, bool)
        	{
        	
        		var evenArr = [];
        		var oddArr = [];
        		
        		// If we do not get Null or False
        		if(bool != undefined && bool != true)
        		{
        		
        			bool = false;
        		
        		}
        		// If we do not get True or Undefined
        		else 
        		{
        		
        			bool = true;
        		
        		}
        		
        		for(var e = 0; e < numArr.length; e++)
        		{
        			if((numArr[e] % 2) === 0)
        			{
        				evenArr.push(numArr[e]);
        			}
        			
        			}
        			return oddArr;
        		} 
        		//else
        		{
        			for(var = 0; e < numArr.length; e++)
        			{
        				if((numArr[e] % 2) ===0)
        				{
        					console.log(e);
        					evenArr.push(numArr[e]);
        				}
        			}
        			return evenArr;
        		}
	// If I call the method below, it will take the variable "bool" equal to undefined
    console.log("Should be True or Undefined " + findNum([31,22,4,67,83,6,5,4]));
    
    // This one makes "bool" false
    console.log("Should be Null or False " + findNum([31,22,4,67,83,6,5,4], false));

})();