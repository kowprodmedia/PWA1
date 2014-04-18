/*
 * Goal 6 Mid-Term Assignment for PWA-1
 * Duane Walters
 * 04.18.2014
 */

//Self execution
(function() {

//Student Array
    var students = [
        {
            name: "John Doe",
            address: "123 Boring Lane, Somewhere Boring, ID",
            gpa:[3.9,4.0,2.5,3.2],
            date: getDate()

        },

        {
            name: "Phillip Doe",
            address: "123 Blech Dr., Bored, OK",
            gpa:[1.7,2.8,3.9,4.0],
            date: getDate()

        },

        {
            name:"Karen Doe",
            address:"123 Snooze Dr., Donut, MD",
            gpa:[4.0,3.8,3.7,4.0],
            date: getDate()

        }
    ];

    //Pools students into console.log
    for(var pooled in students[0]){
        console.log(pooled+ " " + students[0][pooled]);
    }

//Pools students into console.log
    for(var pooled in students[1]){
        // console.log(pooled+ " " + students[1][pooled]);
    }

    //DOM definitions
    var domFunc = {
        btn:document.querySelector(".buttonred"),
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        gpa:document.querySelector("#gpa"),
        date:document.querySelector("#date"),
        gpaavg:document.querySelector("#gpaavg")
    };

    //Start
    var number = 0;

//Dynamically adding new student
    newStudent("Stephen Doe","123 Ugh Dr., Hotlanta, GA",[3.8,3.2,3.5,3.3] , getDate());

    showAll(); // Console log all the students
    st(); // Displays first name in HTML
    domFunc.btn.addEventListener("click", onClick, false); // Add an event listener for the button

//Applies JS to the HTML
    function st(){
        domFunc.name.innerHTML = "Name: " + students[number].name;
        domFunc.address.innerHTML = "Address: " + students[number].address;
        domFunc.gpa.innerHTML = "GPA: " + students[number].gpa;
        domFunc.date.innerHTML = "Date: " + getDate();
        domFunc.gpaavg.innerHTML = "Average GPA: " + calcAvg(students[number].gpa);
    }

    //Checks for end of array
    function showAll (){
        for (var a = 0; a < students.length; a++) {

            for (var pooled in students[a]){
                console.log(pooled + " " + students[a][pooled]);//I used "pooled" for a term. Is that kosher? I've not done something correctly. WARNINGS!!
            }
        }
    }

//For new students
    function newStudent (n,a,g,d) {
        var newStudent = {};
        newStudent.name = n;
        newStudent.address = a;
        newStudent.gpa = g;
        newStudent.date = d;
        students.push(newStudent);
    }

    //Button click
    function onClick(){
        number++;
        domFunc.name.innerHTML = "Name: " + students[number].name;
        domFunc.address.innerHTML = "Address: " + students[number].address;
        domFunc.gpa.innerHTML = "GPA: " + students[number].gpa;
        domFunc.date.innerHTML = "Date: " + getDate();
        domFunc.gpaavg.innerHTML = "Average GPA: " + calcAvg(students[number].gpa);
        fin();


    }

    function fin(){
        if (number == students.length - 1) {
            document.querySelector(".buttonred").innerHTML = "Done!!!";//Changes button text when done
            domFunc.btn.removeEventListener("click", onClick, false);//Clears listener
        }
    }

    //Calculates GPA average
    function calcAvg (n) {
        var total = 0;

        n.forEach(function(e){
            total += e;
        });

        var avg = total / n.length;
        var result = Math.round(avg*100)/100;
        return result;
    }

//Gets current date
    function getDate (){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;

        var yyyy = today.getFullYear();
        if(dd < 10){
            dd='0'+ dd;
        }
        if(mm < 10){
            mm='0'+ mm;
        }
        today = mm + '/' + dd+ '/' +yyyy;
        return today;
    }






})();//THE END