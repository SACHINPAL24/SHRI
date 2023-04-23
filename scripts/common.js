function opensignup() {
    document.getElementById('signUpModal').style.display = 'block';
}

function opensignin() {
    document.getElementById('signInModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signUpModal').style.display = 'none';
    document.getElementById('signIpModal').style.display = 'none';
}

function displaySignupModal() {
    document.getElementById('signIpModal').style.display = 'none';
    document.getElementById('newPostModal').style.display = 'block';
}