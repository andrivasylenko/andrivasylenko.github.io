window.addEventListener('load', function() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.onload = function() {
            const parent = iframe.parentElement;
            const parentWidth = parent.offsetWidth;
            const parentHeight = parent.offsetHeight;
            iframe.style.width = parentWidth + "px";
            iframe.style.height = parentHeight + "px";
        };
    });
});

