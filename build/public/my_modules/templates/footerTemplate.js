const modalCartTemplate = `<div
					class="modal"
					id="mi-modal-1"
					tabindex="-2"
					aria-hidden="true"
					aria-labelledby="label-modal-1"
				>
					<!-- Caja de dialogo -->
					<div class="modal-dialog">
						<!-- Contenido de la caja -->
						<div class="modal-content">
							<!-- Encabezado de la caja -->
							<div class="modal-header">
								<h5 class="modal-title">Titulo del modal</h5>
								<button class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
							</div>

							<!-- Cuerpo de la caja -->
							<div class="modal-body">
								<h1>Hola Mundo</h1>
							</div>

							<!-- Pie de pagina de la caja -->
							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
								<button type="button" class="btn btn-success">Concluir Compra</button>
							</div>
						</div>
					</div>
				</div>`
export const modalCart = `
<button 
					class="btn btn-info btn-small"
					data-bs-toggle="modal"
					data-bs-target="#mi-modal-1"
				>
				
                  <i class="fa fa-shopping-cart"></i> Meu Carrinho
      
				</button>



`

export const footerTemplate = ` <div class="container p-4 pb-0">
    <!-- Section: Social media -->
   ${modalCartTemplate}
    <section class="mb-4">
      <!-- Facebook -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
      ${modalCart}
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->`