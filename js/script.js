document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.form-control');
    const sendButton = document.querySelector('.btn-primary');
    const messagesContainer = document.querySelector('.messages');

    sendButton.addEventListener('click', () => {
        const userMessage = inputField.value.trim();
        if (userMessage) {
            const userMessageElement = document.createElement('div');
            userMessageElement.className = 'message user-message p-3 mb-3 bg-light rounded';
            userMessageElement.textContent = userMessage;

            messagesContainer.appendChild(userMessageElement);
            inputField.value = '';

            // Simulate bot reply
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot-message p-3 mb-3 bg-success text-white rounded';
            botMessageElement.textContent = 'This is a bot reply.';

            messagesContainer.appendChild(botMessageElement);
        }
    });
});
