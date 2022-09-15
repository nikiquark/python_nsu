const all = document.querySelectorAll('.list');

all.forEach(item=>{
    item.addEventListener('click', ()=>{
        all.forEach(item=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})