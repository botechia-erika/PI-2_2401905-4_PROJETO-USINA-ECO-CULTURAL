export const renderHeader = (template, targetId)=>{
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = template;
    } else {
        console.error(`Target element with ID ${targetId} not found.`);
    }
}

export const renderFooter = (template, targetId)=>{
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = template;
    } else {
        console.error(`Target element with ID ${targetId} not found.`);
    }
}
// Loader component
export const showLoader = (targetId="idB", loaderTemplate) => {
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = loaderTemplate;
    }
};

// Função para renderizar template baseado na página
export const renderPageContent = async (targetId) => {
   
    const location = window.location.href;
    const page = location.split('/').pop().split('?')[0] || 'home';
    if(page === 'home') {
        // Renderiza o conteúdo da página inicial
        const defaultTemplate = `
            <h2>Bem-vindo à Usina Eco-Cultural</h2>
            <p>Explore nossos projetos, eventos e muito mais!</p>
        `;
        renderPageContent(targetId, defaultTemplate);
    }
}


export const searchValueIndex = (list, searchParam)=>{
    const index = list.findIndex(item => item.toLowerCase() === searchParam.toLowerCase());
    return index !== -1 ? index : -1
}