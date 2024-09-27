function transitionPage(event, url) {
    event.preventDefault();

    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = url;
    }, 300); 
}


window.addEventListener('load', function() {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in'); 
});

