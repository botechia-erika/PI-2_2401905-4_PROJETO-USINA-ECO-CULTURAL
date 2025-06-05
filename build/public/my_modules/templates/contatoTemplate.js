
export const contatoTemplate = `
<div class="container">
    <h2>CONTATO</h2>
    <p>Se você tiver alguma dúvida, sugestão ou apenas quiser bater um papo, sinta-se à vontade para entrar em contato conosco. Estamos aqui para ajudar!</p>
    <p>Sua mensagem é importante e responderemos o mais breve possível.</p>
    <p>Aproveite para visitar nossas redes sociais e links úteis abaixo:</p>
        <section class="mb-4">
      <!-- Facebook -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a data-mdb-ripple-init class="btn btn-outline-light btn-terracota btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
</div>
<div class="container">
    <h3>FORMULÁRIO PARA CONTATO</h3>
    <form action="">
				<div class="mb-3">
						<label for="inputSender" class="form-label">Nome do Remetente</label>
						<input type="text" class="form-control" id="inputSender"  name="inputSender" placeholder="John Doe">
					</div>
<div class="mb-3">
						<label for="inputEmail" class="form-label"> Electronico</label>
						<input type="text" class="form-control" id="inputEmail" name="inputEmail" placeholder="john-doe@email.com">
					</div><div class="mb-3">

                    <label for="inputMotivation" class="form-label">Motivo do Contato</label>
                    <select name="inputMotivation" id="inputMotivation" class="form-select form-select-md mb-3" aria-label="Selección de país">
                            <option value="Outros">Outros</option>
                            <option value="Duvidas">Dúvidas</option>
                            <option value="Sugestoes">Sugestões</option>
                        <option value="Cultura">Ações de Cultura</option>
                            <option value="Comunidade">Reuniões com a Comunidade</option>
                            <option value="MeioAmbiente">Ações de Meio Ambiente</option>
                            <option value="Eventos">Eventos</option>
                            <option value="Educacao">Educação</option>
			        </select>
                </div>
					<div class="mb-3">
						<label for="inputMessage" class="form-label">Escreva sua Mensagem...</label>
						<textarea class="form-control" name="inputMessage" id="inputMessage"></textarea>
					</div>

					<button type="submit" class="btn btn-primary">Enviar Mensagem</button>
				</form>
</div>
`