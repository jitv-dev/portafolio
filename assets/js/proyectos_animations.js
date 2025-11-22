document.addEventListener('DOMContentLoaded', function () {
    const proyectos = document.querySelectorAll('#proyectos .card')

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in')
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    proyectos.forEach((proyecto, index) => {
        if (index === 1) {
            proyecto.classList.add('slide-right')
        } else {
            proyecto.classList.add('slide-left')
        }

        observer.observe(proyecto)
    })

    const navProyectos = document.querySelector('a[href="#proyectos"]');
    if (navProyectos) {
        navProyectos.addEventListener('click', function (e) {
            e.preventDefault();
            const seccionProyectos = document.getElementById('proyectos');
            seccionProyectos.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
})