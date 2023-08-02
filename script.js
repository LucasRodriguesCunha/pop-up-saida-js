// Obtém o pop-up
const popup = document.querySelector("#pop-up");

// Obtém o botão de fechar
const fecharBtn = document.querySelector("#fechar-btn");

// Remove a exibição do pop-up ao entrar na página
localStorage.removeItem("popupDisplayed");

// Adiciona listener de clique no botão de cancelar
fecharBtn.addEventListener("click", () => {
    // Fecha o pop-up
    popup.style.display = "none";
    // Armazena o valor indicado que o pop-up já foi exibido
    localStorage.setItem("popupDisplayed", "true");
});

// Adiciona listener na saída do curso da página
document.addEventListener("mouseout", (event) => {
    // Verifica se o pop-up já foi exibido nesta visita
    const popupDisplayed = localStorage.getItem("popupDisplayed");

    if (!popupDisplayed) {
        // Verifica se o cursor do mouse saiu da página
        if (event.relatedTarget === null) {
            // Exibe o pop-up
            popup.style.display = "block";
        }
    }
});