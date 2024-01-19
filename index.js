const form = document.querySelector('form');

function sendEmail(formData) {
    var userName = form.querySelector('.input.input--dark.input--user').value;
    var phone = form.querySelector('.input.input--dark.input--phone').value;
    var email = form.querySelector('.input.input--dark.input--email').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email;

    // Adjust the data and implementation according to the library or service you are using
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kabirathomas0@gmail.com",
        Password: "78D2177C16D1C996329F4D987D9E1C315B1D",
        To: 'kabirathomas0@gmail.com',
        From: "kabirathomas0@gmail.com",
        Subject: "Client Info",
        Body: messageBody
    }).then(
        message => {
            alert("Email sent successfully");
            console.log(message);
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: form.querySelector('input[name="name"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        email: form.querySelector('input[name="email"]').value
    };

    // Perform any client-side validation if needed

    // Call the function to send email
    sendEmail(formData);

    // Optionally reset the form
    form.reset();
});
