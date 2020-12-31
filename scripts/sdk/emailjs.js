document.getElementById("emailJSHTMLCode").innerText = `<div class="center-form">
    <form>
        <input type="text" name="name" id="fullname" class="form-control" placeholder="Name" required />
        <input type="email" name="email" id="emailaddress" class="form-control" placeholder="Email" required />
        <textarea name="projectsummary" id="projectsummary" rows="5" class="form-control" placeholder="Project description" required></textarea>
        <div class="form-row text-center">
            <div class="col">
                <button type="submit" class="btn button">Send Project Request</button>
            </div>
        </div>
    </form>
</div>`;

document.getElementById("emailJSCSSCode").innerText = `.center-form {
    padding-top: 10px;
    margin: 0 auto;
    max-width: 90%;
}`

document.getElementById("emailJSBrowserScripts").innerText = `<script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_USER_ID");
   })();
</script>`;

document.getElementById("emailJSSendScript").innerText = `emailjs.send(serviceID, templateID, templateParams);`

document.getElementById("emailJSHTMLChange").innerText = `  <div class="center-form">
-->     <form onsubmit="return sendMail(this);">
            <input type="text" name="name" id="fullname" class="form-control" placeholder="Name" required />
            <input type="email" name="email" id="emailaddress" class="form-control" placeholder="Email" required />
            <textarea name="projectsummary" id="projectsummary" rows="5" class="form-control" placeholder="Project description" required></textarea>
            <div class="form-row text-center">
                <div class="col">
                    <br>
                    <button type="submit" class="btn button">Send Project Request</button>
                </div>
            </div>
        </form>
-->     <p id="successOrFailure"></p>
    </div>`

document.getElementById("emailJSFunctionScriptCompleted").innerText = `function sendEmail(contactForm) {
    emailjs.send("serviceID", "templateID", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request"contactForm.projectsummary.value
    });
}`

document.getElementById("promises").innerText = `.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    $("#succesOrFailure").text("Your mail has been sent.")
}, function(error) {
    console.log('FAILED...', error);
    $("#successOrFailure").text("An error occured. Please try again.")
});`

document.getElementById("return").innerText = `return false;`

$(".emailJSCode").on("click", function() {
    $("#fullEmailJSCode").text(`function sendMail(contactForm) {
    emailjs.send("serviceID", "templateID", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#succesOrFailure").text("Your mail has been sent.")
        },
        function(error) {
            console.log("FAILED", error);
            $("#successOrFailure").text("An error occured. Please try again.")
        }
    );
    return false;
}`)
});