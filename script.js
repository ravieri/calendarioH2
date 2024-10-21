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
