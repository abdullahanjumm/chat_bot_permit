document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const messagesContainer = document.querySelector('.messages');

    // Function to add a new message
    const addMessage = (message, isUser = true) => {
        const messageElement = document.createElement('div');
        messageElement.className = isUser
            ? 'message user-message'
            : 'message bot-message';
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);

        // Auto-scroll to the bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    // Send Button Click Handler
    sendButton.addEventListener('click', () => {
        const userMessage = inputField.value.trim();
        if (userMessage) {
            // Add user's message
            addMessage(userMessage, true);
            inputField.value = '';

            // Simulate bot reply
            setTimeout(() => {
                const botReply = 'This is a bot reply!';
                addMessage(botReply, false);
            }, 1000); // Simulate a 1-second delay for bot response
        }
    });

    // Allow Enter key to send message
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
