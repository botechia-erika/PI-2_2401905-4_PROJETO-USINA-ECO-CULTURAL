const heroTemplate = `
<div class="container bannerHome">
<h2>Conheça Nossos Produtos</h2>
<p>Explore nossa loja, compre e ajude o projeto!</p>
<form class="d-flex gap-4">
    <input type="text" class="form-control" placeholder="Buscar produtos..." aria-label="Buscar produtos...">
  <select class="form-select" aria-label="Categoria">
    <option value="TODOS" selected>Todos</option>
    <option value="ROUPAS">Roupas</option>
        <option value="DECORACAO">Decoração</option>
            <option value="ACESSORIOS">Acessórios</option>
  </select>
    <select class="form-select" aria-label="ordem">
    <option value="ALFABETICA" selected>A-Z</option>
    <option value="ALFABETICA_REVERSA">Z-A</option>
    <option value="MENOR_PRECO">Menor Preço</option>
    <option value="MAIOR_PRECO">Maior Preço</option>

    </select>
</form>
</div>
`
const productsTemplate = `
<section class="products-section">
    <div class="container">
      <div class="row g-2">
        <div class="col-md-6 col-lg-4">
          <div class="card product-card h-100">

  <div class="card-body">
                           <h5 class="card-title ml-2">Produto Exemplo</h5>

                     <div class="card-text">
              <p class="card-text">Breve descrição exemplo do produto para compra</p>
           <img src="/assets/brand/logoAdaptado.svg" class="card-img-top" alt="Imagem do Produto">
            <p>Preço: <strong>R$ 50,00</strong>                <span class="badge badge-success">10%</button>
             
              </div>
</div>
            <div class=" d-flex justify-content-evenly align-items-center mb-3">
                <button class="btn btn-small btn-success">
                  <i class="fa fa-shopping-cart"></i> Comprar
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

export const lojaTemplate = `

${heroTemplate}

  
${productsTemplate}

`