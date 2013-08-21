define( ['app/class/Person'], function ( Person ) {
    var Student = function ( ) {
        this.initialize.apply( this, arguments );
    };

    Student.prototype = new Person();

    ( function () {
        this.initialize = function(name, gender, age) {
            this.name = name;
            this.gender = gender;
            this.age = age;
            console.log("Student constructer");
        };
        
        this.getAge = function() {
            return this.age;
        };
        
        this.setAge = function(age) {
            this.age = age;
        };
        
        this.study = function() {
            console.log("I'm studying JS");
        };
        
    } ).call( Student.prototype );
    
    return Student;
} );