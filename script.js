function openTab(evt, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-active');
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('tab-active');
    
    // Salva a aba ativa no localStorage
    localStorage.setItem('activeTab', tabName);
}

function openSubTab(evt, subTabName) {
    var i, subtabcontent, subtabs;
    subtabcontent = document.getElementsByClassName("sub-tab-content");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtabs = document.getElementsByClassName("sub-tab");
    for (i = 0; i < subtabs.length; i++) {
        subtabs[i].classList.remove('sub-tab-active');
    }
    document.getElementById(subTabName).style.display = "block";
    evt.currentTarget.classList.add('sub-tab-active');
    
    // Salva a sub-aba ativa no localStorage
    localStorage.setItem('activeSubTab', subTabName);
}

// Reabre a aba e sub-aba ativa ao recarregar
window.onload = function() {
    const savedTab = localStorage.getItem('activeTab') || 'data1';
    const savedSubTab = localStorage.getItem('activeSubTab');
    
    // Abrir a aba salva
    document.getElementById(savedTab).style.display = 'block';
    document.querySelector(`[onclick="openTab(event, '${savedTab}')"]`).classList.add('tab-active');
    
    // Abrir a sub-aba salva, se houver
    if (savedSubTab) {
        document.getElementById(savedSubTab).style.display = 'block';
        document.querySelector(`[onclick="openSubTab(event, '${savedSubTab}')"]`).classList.add('sub-tab-active');
    }
};
// Aplica animação de fade-in à lista de esportes quando uma data é selecionada
document.getElementById('date').addEventListener('change', () => {
    const sportsSection = document.getElementById('sports');
    sportsSection.classList.add('fade-in');
    sportsSection.style.display = 'block'; // Certifica que a seção está visível
});

// Aplica fade-in ao contêiner de imagem ao clicar em um esporte
document.querySelectorAll('.sport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sportImage = document.getElementById('sport-image');
        sportImage.classList.add('fade-in');
        sportImage.style.display = 'block'; // Certifica que o contêiner de imagem está visível
    });
});
// Adiciona classe 'active' ao botão clicado e remove dos outros
document.querySelectorAll('.sport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll('.sport-btn').forEach(b => b.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        btn.classList.add('active');
    });
}); 

function showSportImage(sport) {
    const imgContainer = document.getElementById('sport-img-container');
    imgContainer.innerHTML = '<div class="loading-spinner"></div>';

    // Depois, substitua o conteúdo com a imagem carregada.
    const img = new Image();
    img.src = 'path_to_your_image.jpg'; // Defina o caminho correto
    img.onload = () => {
        imgContainer.innerHTML = ''; // Limpa o loading
        imgContainer.appendChild(img);
    };
}
function openTab(evt, tabName) {
    const tabContent = document.getElementById(tabName);
    tabContent.classList.add('active');
    // Remova a classe active dos outros conteúdos
}
