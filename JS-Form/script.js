function validateForm(){
    const form = document.forms['myForm'];
    const value = form ['fname'].value;

    if(value == ""){
        alert("You have to write your name!");

        return false;
    }

}