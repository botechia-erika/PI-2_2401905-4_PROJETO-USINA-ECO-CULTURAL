

export const headerTemplate = `
<div class="container p-3">
<div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    <h1 id="title">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <img src="/assets/brand/logoAdaptado.png" alt="Logo Usina Eco-Cultural" width="60" height="60" class="me-2">
            <span class="fs-4">Usina Eco-Cultural</span>
        </a>
    </h1>

    
        <button
            class="btn btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#Id2"
            aria-controls="Id2"
            id="toggleBtnOffcanvas"
        >
            <i class="bi bi-list"></i>
        </button>
        
        <div
            class="offcanvas offcanvas-end"
            data-bs-backdrop="static"
            tabindex="-1"
            id="Id2"
            aria-labelledby="staticBackdropLabel"
        >
            <div class="offcanvas-header">
                
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
 <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/coletivo">O Coletivo</a></li>
            <li><a href="/usina">A Usina</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/loja">Loja</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/blog">Blog e Noticias</a></li>
            <li><a href="/doar">Doar</a></li>
            <li><a href="/apoio">Apoio</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </nav>
            </div>
        </div>
        
   
</div>
</div>
`