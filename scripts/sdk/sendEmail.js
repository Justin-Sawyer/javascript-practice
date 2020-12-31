function sendMail(contactForm) {
    emailjs.send("service_u36nneq","template_tackgkn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#successOrFailure").text("Your mail has been sent.")
        },
        function(error) {
            console.log("FAILED", error);
            $("#successOrFailure").text("An error occured. Please try again.")
        }
    );
    return false;
}