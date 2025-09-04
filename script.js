// Navigation functions
function navigateToBodyParts() {
    window.location.href = 'bodyparts.html';
}

function navigateToHome() {
    window.location.href = 'index.html';
}

// Tooltip functionality
const tooltip = document.getElementById('tooltip');

// Add event listeners to all body parts
document.addEventListener('DOMContentLoaded', function() {
    const bodyParts = document.querySelectorAll('.body-part');
    
    bodyParts.forEach(part => {
        part.addEventListener('mouseenter', showTooltip);
        part.addEventListener('mouseleave', hideTooltip);
        part.addEventListener('mousemove', moveTooltip);
    });
});

function showTooltip(e) {
    const title = e.target.getAttribute('data-title');
    const description = e.target.getAttribute('data-description');
    const functions = e.target.getAttribute('data-functions');
    
    if (title && description) {
        tooltip.innerHTML = `
            <h4>${title}</h4>
            <div class="tooltip-description">${description}</div>
            ${functions ? `<div class="tooltip-functions"><strong>Key Functions:</strong> ${functions}</div>` : ''}
        `;
        tooltip.classList.add('show');
        moveTooltip(e);
    }
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

function moveTooltip(e) {
    const tooltipRect = tooltip.getBoundingClientRect();
    let x = e.clientX + 15;
    let y = e.clientY - 10;
    
    // Prevent tooltip from going off screen
    if (x + tooltipRect.width > window.innerWidth) {
        x = e.clientX - tooltipRect.width - 15;
    }
    if (y + tooltipRect.height > window.innerHeight) {
        y = e.clientY - tooltipRect.height - 10;
    }
    if (x < 0) x = 10;
    if (y < 0) y = 10;
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}
