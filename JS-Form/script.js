function validateForm(){
    const form = document.forms['myForm'];
    const value = form ['fname'].value;

    if(value == ""){
        const text = "You have to write your name!";
        document.getElementById("demo").innerHTML = text;

        return false;
    }

}