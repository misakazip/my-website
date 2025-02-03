document.addEventListener("DOMContentLoaded", function() {
    const encodedEmail = "d2Vic2l0ZUBtaXNha2Euemlw";
    function decodeBase64(encoded) {
        return decodeURIComponent(atob(encoded).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    const email = decodeBase64(encodedEmail);
    const emailLink = document.getElementById("email-link");
    emailLink.href = "mailto:" + email;
});
