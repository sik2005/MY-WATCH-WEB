Email.send({
    Host : "smtp.elasticemail.com",
    Username : "skibrahimkhalillullah@gmail.com",
    Password : "DAFE59D14025E53A43BF288A42521FA260F4",
    To : 'isk17862@gmail.com',
    From : "skibrahimkhalillullah@gmail.com",
    Subject : "PASSWORD RESET EMAIL",
    Body : "And this is the body"
}).then(
  message => alert(message)
);