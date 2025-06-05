import { PAGES_LIST } from "./CONSTANTS/CONSTANTS.js";
import { renderFooter, renderHeader, renderPageContent, searchValueIndex } from "./utils/utils.js";
import { headerTemplate } from "./templates/headerTemplate.js";
import { footerTemplate } from "./templates/footerTemplate.js";
import { defaultTemplate } from "./templates/defaultTemplate.js";
import { coletivoTemplate } from "./templates/coletivoTemplate.js";
import { usinaTemplate } from "./templates/usinaTemplate.js";
import { projetosTemplate } from "./templates/projetosTemplate.js";
import { lojaTemplate } from "./templates/lojaTemplate.js";
import { eventosTemplate } from "./templates/eventosTemplate.js";
import { blogTemplate } from "./templates/blogTemplate.js";
import { doarTemplate } from "./templates/doarTemplate.js";
import { apoioTemplate } from "./templates/apoioTemplate.js";
import { contatoTemplate } from "./templates/contatoTemplate.js";

const templatesObj = {
    'coletivoTemplate': coletivoTemplate,
    'usinaTemplate': usinaTemplate,
    'projetosTemplate': projetosTemplate,
    'lojaTemplate': lojaTemplate,
    'eventosTemplate': eventosTemplate,
    'blogTemplate': blogTemplate,
    'doarTemplate': doarTemplate,
    'apoioTemplate': apoioTemplate,
    'contatoTemplate': contatoTemplate
};

const renderContent = (targetId, template) => {
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = template;
    } else {
        console.error(`Target element with ID ${targetId} not found.`);
    }
};

const main = () => {
    // Renderiza o header
    renderHeader(headerTemplate, 'idA');

    const location = window.location.href;
    const page = location.split('/').pop().split('?')[0] || 'home';

    if (page === PAGES_LIST[0]) {
        // Renderiza o conteúdo da página inicial
        renderContent('idB', defaultTemplate);
    } else {
        const pageIndex = searchValueIndex(PAGES_LIST, page);
        //console.log(PAGES_LIST[pageIndex]);
        if (pageIndex !== -1) {
    const templateKey = `${PAGES_LIST[pageIndex]}Template`;
    let page2Render = templatesObj[templateKey];

    // Se for função, executa para obter o HTML
    if (typeof page2Render === "function") {
        page2Render = page2Render();
    }

    console.log(page2Render);

    if (page2Render) {
        // Use renderContent para garantir que o HTML seja inserido
        renderContent('idB', page2Render);
        // Se quiser usar renderPageContent, garanta que ela faz o mesmo que renderContent
        // renderPageContent('idB', page2Render);
    } else {
        renderContent('idB', `<h2>Página não encontrada</h2>`);
    }
} else {
            // Se a página não for encontrada, renderiza uma mensagem de erro ou redireciona
            renderContent('idB', `<h2>Página não encontrada</h2>`);
        }
    }

    // Renderiza o footer, se existir
    renderFooter(footerTemplate, 'idC');
};

main();