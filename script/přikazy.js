function toggleCommand(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (content.style.maxHeight) {
        // Collapse the content
        content.style.maxHeight = null;
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        // Expand the content
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Initialize all commands to be collapsed on page load
document.addEventListener('DOMContentLoaded', function() {
    const commandContents = document.querySelectorAll('.command-content');
    commandContents.forEach(content => {
        content.style.maxHeight = null;
    });
});
