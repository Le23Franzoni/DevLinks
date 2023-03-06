function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-lightmode.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")

    }
    if(html.classList.contains("light")){
        alt.setAttribute("alt", "Foto de personagem feminina de cabelo escuro, liso, num fundo claro de roupa rosa.")
    } else{
        alt.setAttribute("alt", "Foto de personagem feminina, cabelos escuros e lisos, olhos azuis.")
    }
} 