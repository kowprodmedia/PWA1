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










})();//THE END