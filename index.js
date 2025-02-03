// メールアドレスのBase64デコード
function decodeBase64(encoded) {
    return decodeURIComponent(atob(encoded).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function initializeEmailLink(encodedEmail, linkId) {
    const email = decodeBase64(encodedEmail);
    const emailLink = document.getElementById(linkId);
    emailLink.href = "mailto:" + email;
}


// リダイレクト処理
function startRedirectCountdown(url, countdownSeconds) {
    const redirectMessage = document.getElementById("redirect-message");
    let seconds = countdownSeconds;
    const interval = setInterval(function() {
        seconds--;
        redirectMessage.textContent = `${seconds}秒後にホームページにリダイレクトされます。`;
        if (seconds === 0) {
            clearInterval(interval);
            window.location.href = url;
        }
    }, 1000);
}
