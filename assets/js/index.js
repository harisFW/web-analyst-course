const myForm = document.querySelector('form');
let myFormElements = myForm.elements;
let myEmailElement = myFormElements["email"];
console.log(myEmailElement);

myForm.addEventListener("submit", function () {
    if (myEmailElement.value.includes("@flywheel.com")) {
        gtag('event', 'form_submitted', {
            "is_interanl_submission": "true"
        });
        gtag('set', 'user_properties', {
            "is_interal_user": "true"
        });
    } else {
        gtag('event', 'form_submitted', {
            "is_interanl_submission": "false"
        });
        gtag('set', 'user_properties', {
            "is_interal_user": "false"
        });
    }
});