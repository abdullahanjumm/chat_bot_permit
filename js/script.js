document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.form-control');
    const sendButton = document.querySelector('.btn-primary');
    const messagesContainer = document.querySelector('.messages');

    sendButton.addEventListener('click', () => {
        const userMessage = inputField.value.trim();
        if (userMessage) {
            // Add user message
            const userMessageElement = document.createElement('div');
            userMessageElement.className = 'message user-message p-3 mb-2 bg-primary text-white rounded';
            userMessageElement.textContent = userMessage;
            messagesContainer.appendChild(userMessageElement);

            // Clear input
            inputField.value = '';

            // Simulate bot reply
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot-message p-3 mb-2 bg-light border rounded';
            botMessageElement.textContent = 'This is a bot reply.';
            messagesContainer.appendChild(botMessageElement);

            // Auto-scroll to the bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });
});
