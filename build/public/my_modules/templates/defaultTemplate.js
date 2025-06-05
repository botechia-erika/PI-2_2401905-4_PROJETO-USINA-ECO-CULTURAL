const webUsinaData = [
    {
        id: 1,
        title: "O COLETIVO",
        description: "O Coletivo é um espaço de encontro e troca de saberes, onde a comunidade se une para criar, aprender e compartilhar experiências.",
        imgUrl: "assets/images/img002_coletivo.png",
        relativePath: "/coletivo"
    }
    ,
    {
        id: 2,
        title: "A USINA",
        description: "A Usina protege e luta para a revitalização, divulgação da história e reuso do espaço do Incinerador Vergueiro no bairro do Ipiranga.",
        imgUrl: "assets/images/photo004_usina-antiga-tcc-diogo-horvath.png",
        relativePath: "/usina"
    }
    ,
    {
        id: 3,
        title: "PROJETOS EDUCACIONAIS",
        description: "A Usina luta pela educação e divulgação de conhecimento a través de parcerias de projetos educacionais e utilização do espaço e nome associado a atividades educacionais.",
        imgUrl: "assets/images/img003_projetos.png",
        relativePath: "/projetos"
    }
    ,
    {
        id: 4,
        title: "LOJA VIRTUAL",
        description: "Conheça nossa loja virtual, onde você pode adquirir produtos sustentáveis e apoiar nossos projetos.",
        imgUrl: "assets/brand/store.png",
        relativePath: "/loja"
    }
    ,
    {
        id: 5,
        title: "EVENTOS",
        description: "Conheça nossos eventos, que vão desde feiras de troca até oficinas e palestras sobre sustentabilidade e cultura.",
        imgUrl: "assets/images/img004_eventos.png",
        relativePath: "/eventos"
    }
    ,
    {
        id: 6,
        title: "BLOG E NOTÍCIAS",
        description: "Fique por dentro das últimas notícias e atualizações sobre nossos projetos, eventos e ações na comunidade.",
        imgUrl: "assets/images/img05_BlogNoticias.png",
        relativePath: "/projetos"
    }
    ,
     {
        id: 7,
        title: "DOAR",
        description: "Conheça formas de doar e apoiar nossos projetos assim como voluntariar conosco.",
        imgUrl: "assets/brand/logoAdaptado.svg",
        relativePath: "/doar"
    }
    ,
    {
        id: 8,
        title: "APOIO E COLABORADORES",
        description: "Conheça nossos apoiadores e colaboradores, que tornam nossos projetos possíveis.",
        imgUrl: "assets/brand/colaborar.png",
        relativePath: "/apoio"
    }
    ,
    {
        id: 9,
        title: "CONTATO",
        description: "Entre em contato e conheça nossas redes sociais e links úteis.",
        imgUrl: "assets/brand/contato.png",
        relativePath: "/contato"
    }
]


const renderMapDataCardDefault = (data) => {
    return data.map((item) => {
        const { id, title, description, imgUrl, relativePath } = item;
        return `
        <div class="card col-sm-12 col-md-6 col-lg-3 mt-5 mb-5 m-1" id="card-${id} ">
            <h5 class="card-title p-4">${title}</h5>
            <img src="${imgUrl}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <p class="card-text">${description}</p>
                <a href="${relativePath}" class="btn btn-success">Saiba mais <img src="/assets/icons/i001_glassDetails.svg" alt="icon para saiba mais"> </a>
            </div>
        </div>
        `;
    }).join('');
}


export const defaultTemplate = `
<div class="container bannerHome">
<h2>Bem-vindo à Usina Eco-Cultural</h2>
<p>Explore nossos projetos, eventos e muito mais!</p>
</div>
<div class="container">
<h2>Conheça nossa <strong>WEB USINA</strong>!</h2>
<p>Explore nossos projetos, eventos e muito mais!</p>

    <div class="col">
        <div class="row d-flex justify-content-around">
            ${renderMapDataCardDefault(webUsinaData)}
        </div>
    </div>
</div>
`