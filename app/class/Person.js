define( [], function ( ) {
    var Person = function ( ) {
        this.initialize.apply( this, arguments );
    };

    ( function ( ) {
        this.initialize = function ( name, gender ) {
            this.name = name;
            this.gender = gender;
            console.log( "Constructor" );
        };

        this.getName = function ( ) {
            return this.name;
        };

        this.setName = function ( name ) {
            this.name = name;
        };
        
        this.getGender = function() {
            return this.gender;
        };
        
        this.setGender = function(gender) {
            this.gender = gender;
        };
        
        this.say = function() {
            console.log("Hello");
        };
    } ).call( Person.prototype );
    
    return Person;

} );