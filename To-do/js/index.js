let btns = document.querySelectorAll('li');
let spans = document.querySelectorAll('span')

for(let i = 0; i< spans.length; i++){
    spans[i].addEventListener('click', close);
}


for( let i=0 ; i<btns.length; i++){
    btns[i].addEventListener('click', check);
}

function newElement() {
    const list_div = document.querySelector('#list')
    const new_element_text = document.querySelector('#task').value;

    if(new_element_text){
        let add_to_list = document.createElement('li')
        add_to_list.innerHTML = `<span class="close">x</span> ${new_element_text}`;
        add_to_list.addEventListener("click", check)
        list_div.appendChild(add_to_list);

        $('li').hover(function(){
            $(this).find('span').click(function(){
             this.parentElement.style.display = 'none';
            })
       })
        $(".success").toast('show')

    }else {
        $(".error").toast('show')
    }
}

function check() {
    this.className == "checked" ? this.classList.remove("checked") : this.classList.add("checked")
}

function close() {
    $('li').hover(function(){
        $(this).find('span').click(function(){
         this.parentElement.style.display = 'none';
        })
   })
}

