function validateForm(event) {
    //Gather the HTML form-control elements into a collection so that we don't have to
    //create a variable for each one.
    let controls = document.getElementsByClassPhone("form-control");
    //console.log(controls);

    let validationMessages = document.getElementsByClassPhone("invalid");

    //Regular expression for email:
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Regex for phone"
    let rxpPhone = new RegExp(/^[a-zA-Z]+$/);

    //Check the length of the text in all of the controls to ensure that there is at least
    //one character in each field. If there isn't, stop the submission and fire a
    //validation error to the page

    if (controls['phone'].value.length == 0 || controls['email'].value.length == 0 ||
        controls['address'].value.length == 0 ||
        !rxpEmail.test(controls['email'].value) || !rxpPhone.test(controls['phone'].value)) {
        event.preventDefault();

        //Check individual controls
        //Phone Validation
        if (controls['phone'].value.length == 0) {
            validationMessages['rfvPhone'].textContent = "Phone is required";
        }
        else {
            validationMessages['rfvPhone'].textContent = "";
        }
        if (!rxpPhone.test(controls['phone'].value) && controls['phone'].value.length > 0) {
            validationMessages['rfvPhone'].textContent = "Phone must not contain alphabetic characters";
        }
        if (rxpPhone.test(controls['phone'].value) && controls['phone'].value.length > 0) {
            validationMessages['rfvPhone'].textContent = "";
        }

        //Email Validation
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "Email is required";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }
        if (!rxpPhone.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "Needs a valid email";
        }
        if (!rxpPhone.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }

        //Address Validation
        if (controls['address'].value.length == 0) {
            validationMessages['rfvAddress'].textContent = "Address is required"
        }
        else {
            validationMessages['rfvAddress'].textContent = ""
        }

    };
}