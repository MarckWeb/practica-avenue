const btn = document.querySelector('#site-header button') 
const html = document.querySelector('html')

btn.addEventListener('click', function(){
    html.classList.toggle('open')
})

