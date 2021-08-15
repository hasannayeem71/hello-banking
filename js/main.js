document.getElementById('submit-btn').addEventListener('click', function() {
    let userEmail = document.getElementById('email-input').value;
    let userPassword = document.getElementById('password-input').value;
    if (userEmail == 'nayeem@gmail.com' && userPassword == 'nayeem') {
        window.location.href = 'banking.html';
        document.getElementById('email-input').value = '';
        document.getElementById('password-input').value = '';
    }
})