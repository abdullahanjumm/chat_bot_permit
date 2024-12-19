document.addEventListener('DOMContentLoaded', () => {
    fetch('components/sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load sidebar component');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('sidebar').innerHTML = html;
        })
        .catch(error => console.error(error));
});
