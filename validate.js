function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}




function CheckPassword() 
{
    inputtxt = document.getElementById('password').value;
    console.log(inputtxt,"Your pass");
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@]).{8,}$/gm;
    const str = '';
    var re = new RegExp(regex);
    if(re.test(inputtxt))
    {
        console.log("Valid");
    }
    else{
        console.log("invalid");
    }
} 