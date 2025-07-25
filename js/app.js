const btnMenu = document.getElementById('btn__menu')
const menu = document.getElementById('menu__mobile')
const overlay = document.getElementById('overlay__menu')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir__menu');
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir__menu');
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir__menu');
})

function copiarTexto() {
    const texto = document.getElementById('email').innerText;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto)
            .then(() => alert("Texto copiado!"))
            .catch(() => alert("Erro ao copiar texto"));
    } else {
        // Fallback para navegadores mais antigos
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert("Texto copiado!");
        } catch (err) {
            alert("Erro ao copiar texto");
        }
        document.body.removeChild(textarea);
    }
}


