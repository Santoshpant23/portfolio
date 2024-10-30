// Function to handle resume download
function downloadResume() {
    window.location.href = 'Resume_24.pdf'; // Ensure this path is correct
}

// Background Animation Text Commands
const commands = ["git init", "git clone", "git add .", "git commit -m 'Hello World!'", "git push origin main"];
const commandContainer = document.querySelector('.animation-commands');

// Function to randomly display commands
function displayCommands() {
    commandContainer.innerHTML = ''; // Clear previous content

    commands.forEach(command => {
        const commandElement = document.createElement('span');
        commandElement.textContent = command;
        commandElement.style.position = 'absolute';
        commandElement.style.top = `${Math.random() * 100}%`;
        commandElement.style.left = `${Math.random() * 100}%`;
        commandElement.style.opacity = 0.5;
        commandElement.style.color = '#58a6ff';
        commandContainer.appendChild(commandElement);
    });
}

// Run the command display every few seconds
setInterval(displayCommands, 50000);
