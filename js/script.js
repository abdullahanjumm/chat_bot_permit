document.addEventListener('DOMContentLoaded', () => {
    // Function to dynamically load a component
    const loadComponent = (filePath, elementId) => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filePath}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => console.error(error));
    };

    // Load Sidebar Component
    loadComponent('components/sidebar.html', 'sidebar');

    // Load Chat Component
    loadComponent('components/chat.html', 'chat');
});
