const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        const address = card.getAttribute('id')

        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${address}`
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')

    modalOverlay.querySelector('iframe').src = ''
})