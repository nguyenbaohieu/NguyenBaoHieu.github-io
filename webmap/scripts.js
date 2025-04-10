const paths = document.querySelectorAll('path');
const tooltip = document.getElementById('tooltip');

paths.forEach(path => {
    path.addEventListener('mousemove', (e) => {
        const info = path.getAttribute('data-info');
        tooltip.style.opacity = '1'; 
        tooltip.style.transform = 'scale(1)';
        tooltip.style.display = 'block';
        tooltip.textContent = info;
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });

    path.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0'; 
        tooltip.style.transform = 'scale(0.9)';
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 300); 
    });
});