const inputbox = document.getElementById('input')
const addbtn = document.getElementById('add')
const list = document.getElementById('itemlist')
const clearbtn = document.getElementById('remove')

function additems () {
    let itemtext = inputbox.value.trim();
    console.log(itemtext)
    if(itemtext === ''){
        alert('please enter a valid item')
    }
    else{
       let item = document.createElement('li');
       item.textContent = itemtext;
       list.appendChild(item);
       inputbox.value = '';
       let btn = document.createElement('button');
       btn.textContent = 'x';
       btn.classList.add('custom-button'); // Add a custom class to the button
       item.appendChild(btn); 
       btn.addEventListener('click', () => {
        item.remove();
       })
    }
}
clearbtn.addEventListener('click', () => {
    list.innerHTML = '';
})
addbtn.addEventListener('click', additems)