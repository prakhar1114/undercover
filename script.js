function displayGreeting() {
    var userName = document.getElementById('userName').value;
    var greetingArea = document.getElementById('greeting');

    if (userName.trim() !== '') {
        greetingArea.innerHTML = `Hello, ${userName}! Welcome to our website.`;
    } else {
        greetingArea.innerHTML = `Hello, stranger! Please enter your name.`;
    }
}