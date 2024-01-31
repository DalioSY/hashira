const iconBot = document.querySelectorAll('.icon');
const hashira = document.querySelectorAll('.caixa-e');

iconBot.forEach((item, i) => {
   
    item.addEventListener('click', () => {
        
        const buttonSelect = document.querySelector(".icon.selecionado")
        buttonSelect.classList.remove("selecionado")

        const characterSelect = document.querySelector(".caixa-e.selecionado")
        characterSelect.classList.remove("selecionado")

        item.classList.add("selecionado")
        hashira[i].classList.add("selecionado")

    });
});

