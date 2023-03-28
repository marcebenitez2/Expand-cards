const paneles = document.querySelectorAll('.panel')

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('principal')
    })
})

function removeActiveClasses() {
    paneles.forEach(panel => {
        panel.classList.remove('principal')
    })
}