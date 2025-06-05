const dataSupporters = [
    {
        id: 1,
        name: 'CADES Ipiranga',
        imgUrl: '/../assets/brand/apoiadores/apoio001-cades-ipiranga.png',
        link: 'https://capital.sp.gov.br/web/ipiranga/w/cades_ip/32342'
    },
    {
        id: 2,
        name: 'Instituto CHÃO',
        imgUrl: '/../assets/brand/apoiadores/apoio002-instituto-chao.png',
        link: 'https://www.institutochao.org/'
    },
    {
        id: 3,
        name: 'UMAPAZ',
        imgUrl: '/../assets/brand/apoiadores/apoio003-umapaz.png',
        link: 'https://capital.sp.gov.br/web/meio_ambiente/w/umapaz/sobre_a_umapaz/243'
    },
    {
        id: 4,
        name: 'CADES VILA MARIANA',
        imgUrl: '/../assets/brand/apoiadores/apoio004-cades-vila-mariana.png',
        link: 'https://capital.sp.gov.br/web/vila_mariana/w/cadesvm/31201'
    },
    {
        id: 5,
        name: 'GEPEM',
        imgUrl: '/../assets/brand/apoiadores/apoio005-GEPEM.png',
        link: 'https://www.gepem.org/grupo/sobre/'
    }
];

const supportersList = (dataList) => {
    return dataList.map((s) => (
        `
        <div class="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div class="card shadow-sm w-100 h-100 border-0">
                <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                    <img class="card-img-top p-4" src="${s.imgUrl}" alt="${s.name}" style="max-height: 180px; object-fit: contain;">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-2">${s.name}</h5>
                    </div>
                </a>
            </div>
        </div>
        `
    )).join('');
};

const lista = supportersList(dataSupporters);

export const apoioTemplate = `
<div class="container bannerHome my-5">
    <h2 class="fw-bold text-center mb-2">APOIOS E COLABORADORES</h2>
    <p class="lead text-center mb-4">Conheça a lista de nossos parceiros</p>
</div>
<section class="container mb-5">
    <div class=" rounded-4 shadow-sm p-4">
        <h3 class="fw-bold text-center mb-3">Apoios e Colaboradores</h3>
        <p class="text-center mb-4">Conheça quem participa construindo a usina junto ao coletivo. Clique no logo para visitar os links dos nossos parceiros!</p>
        <div class="row justify-content-center">
            ${lista}
        </div>
    </div>
</section>
`