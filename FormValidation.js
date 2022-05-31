function validation() {

    //firstName
    var firstName = document.getElementById("firstName").value;
    var firstNameError = document.getElementById("firstNameError");
    if (firstName == "") {
        firstNameError.innerHTML = "** Please fill the first name field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de...agar hum yaha return na use kare to browser peh dikh k sath hi mit jaye ga
    } else {
        firstNameError.innerHTML = ""
    }

    if ((firstName.length <= 2) || (firstName.length > 10)) {
        firstNameError.innerHTML = "** Please enter the first name between 3 to 10 characters!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        firstNameError.innerHTML = ""
    }

    if ((!isNaN(firstName))) {
        firstNameError.innerHTML = "** Please enter only alphabetical character!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        firstNameError.innerHTML = ""
    }


    //lastName
    var lastName = document.getElementById("lastName").value;
    var lastNameError = document.getElementById("lastNameError");
    if (lastName == "") {
        lastNameError.innerHTML = "** Please fill the last name field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        lastNameError.innerHTML = ""
    }

    if ((lastName.length <= 2) || (lastName.length > 10)) {
        lastNameError.innerHTML = "** Please enter the last name between 3 to 10 characters!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        lastNameError.innerHTML = ""
    }

    if ((!isNaN(lastName))) {
        lastnameError.innerHTML = "** Please enter only alphabetical character!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        lastNameError.innerHTML = ""
    }


    //password
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    if (password == "") {
        passwordError.innerHTML = "** Please fill the password field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        passwordError.innerHTML = ""
    }

    if ((password.length <= 4) || (password.length > 20)) {
        passwordError.innerHTML = "** Please enter the password between 5 to 20 characters!!"
        return false
    } else {
        passwordError.innerHTML = ""
    }


    //confirmPassword
    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword == "") {
        confirmPasswordError.innerHTML = "** Please fill the confirm password field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        confirmPasswordError.innerHTML = ""
    }

    if ((confirmPassword.length <= 4) || (confirmPassword.length > 20)) {
        confirmPasswordError.innerHTML = "** Please enter the password between 5 to 20 characters!!"
        return false
    } else {
        confirmPasswordError.innerHTML = ""
    }

    //password matching
    if (password != confirmPassword) {
        confirmPasswordError.innerHTML = "** Your password is not matching!!"
        return false
    } else {
        confirmPasswordError.innerHTML = ""
    }


    //cnicNumber
    var cnicNumber = document.getElementById("cnicNumber").value;
    var cnicNumberError = document.getElementById("cnicNumberError");
    if (cnicNumber == "") {
        cnicNumberError.innerHTML = "** Please fill the CNIC number field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        cnicNumberError.innerHTML = ""
    }

    if (isNaN(cnicNumber)) {
        cnicNumberError.innerHTML = "** Please enter only numbers!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        cnicNumberError.innerHTML = ""
    }

    if ((cnicNumber.length != 13)) {
        cnicNumberError.innerHTML = "** Please enter exactly 13 digits CNIC number!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        cnicNumberError.innerHTML = ""
    }


    //mobileNumber
    var mobileNumber = document.getElementById("mobileNumber").value;
    var mobileNumberError = document.getElementById("mobileNumberError");
    if (mobileNumber == "") {
        mobileNumberError.innerHTML = "** Please fill the mobile number field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        mobileNumberError.innerHTML = ""
    }

    if (isNaN(mobileNumber)) {
        mobileNumberError.innerHTML = "** Please enter only numbers!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        cnicNumberError.innerHTML = ""
    }

    if ((mobileNumber.length != 11)) {
        mobileNumberError.innerHTML = "** Please enter exactly 11 digits mobile number!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        mobileNumberError.innerHTML = ""
    }


    //email
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (email == "") {
        emailError.innerHTML = "** Please fill the user email field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        emailError.innerHTML = ""
    }

    if (email.includes("@")) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "** @ symbol is missing!!"
        return false
    }

    if (email.indexOf("@") <= 0) {
        emailError.innerHTML = "** Position of @ symbol is invalid!!"
        return false
    } else {
        emailError.innerHTML = ""
    }

    if (email.includes(".")) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "** . symbol is missing!!"
        return false
    }

    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        emailError.innerHTML = "** Position of . symbol is invalid!!"
        return false
    } else {
        emailError.innerHTML = ""
    }

    //submit
    var submit = document.getElementById("submit").value;
}