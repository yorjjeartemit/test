document.getElementById('doc-link').addEventListener('click', function() {
    window.location.href = 'index.html';
});


function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Паролі не співпадають");
    } else {
        alert("Акаунт заєстрировано");
        window.location.href = "index2.html"; 
    }
}
