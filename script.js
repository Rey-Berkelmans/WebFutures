function showPopup() {
    alert("Hello! This is a pop-up message.");
}

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Fade out the current content
            document.getElementById('page-content').classList.add('page-hidden');
            
            // Wait for the transition to complete, then replace the content and fade it in
            setTimeout(() => {
                document.getElementById('page-content').innerHTML = html;
                document.getElementById('page-content').classList.remove('page-hidden');
            }, 500); // Adjust this timing to match the transition duration
        })
        .catch(error => console.error('Error loading page:', error));
}

// Add click event listeners to all navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const url = this.getAttribute('href'); // Get the target URL
        loadPage(url); // Load the new page content
    });
});