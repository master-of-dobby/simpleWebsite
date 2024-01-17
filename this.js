let obj1 = {
    firstName : "rabbit",
    lastName  : "naveen",
    hobbies   : ["coding", "travelling", "dancing"],

    getName(){
        //console.log(this);
        //console.log("First Name : " + this.firstName + "\nLast Name  : " + this.lastName);
    },

    showHobbies(){
        //console.log(this.hobbies);
        
        var i=1;

        this.hobbies.forEach((hobby) => {

           console.log(this); // global function - coz it is inside a function
            console.log(this.firstName); // undefined - coz of inside a function;
            console.log(i++ + " " + hobby);

        })
    }
}

obj1.getName();

obj1.showHobbies();



// obj1.printDetails = function(){
//     console.log(this); // inside the object
// }

// obj1.printDetails();

// function abc(){
//     console.log(this);
// }

//abc(); // global object