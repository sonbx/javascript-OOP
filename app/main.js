define(['app/class/Student'], function(Student) {
    var student = new Student("Son", "male", 24);
    
    student.say();
    console.log("Name: " + student.getName());
    
    student.setName("Kira");
    
    console.log("Name: " + student.getName());
    console.log("Age: " + student.getAge());
    
    student.study();
    });