let images = document.querySelectorAll('.image')
let fullImage = document.querySelector('.full-image')

images.forEach(item => {
    item.addEventListener('click',(e)=>{
        e.target.parentElement.nextElementSibling.firstElementChild.src=e.target.getAttribute('src');
    })
})