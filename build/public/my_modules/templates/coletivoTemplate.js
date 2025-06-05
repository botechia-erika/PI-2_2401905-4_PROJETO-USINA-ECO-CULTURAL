const mapTestimonialsList = () => {
  const testimonials = [
    {
      author: "Maria Alice",
      imgUrl: "https://i.postimg.cc/vZbgVFfD/avatar1.avif",
      about: "Mãe, trabalhadora e Moradora do Ipiranga",
      testimonial:
        "Gosto muito de vir a Usina Eco-Cultural para trazer meus 2 filhos para brincar, as atividades são sempre muito educativas e ensinam muito sobre o meio-ambiente e conviver em sociedade",
    },
    {
      author: "Fer da Galera",
      imgUrl: "https://i.postimg.cc/qRjQ9xrx/avatar-skater.jpg",
      about: "22 anos, trans, da galera do Skate",
      testimonial:
        "Aqui eu me encontro com a minha galera, me sinto livre e ademas adoramos andar na parte da usina que era o pátio da fabrica Arno, a iniciativa eco-cultural sempre nos da espaço para participar dos eventos junto com eles",
    },
    {
      author: "João Silva",
      imgUrl: "https://i.postimg.cc/zBgXQ0K9/grandfather-avatar.png",
      about: "Avô, aposentado e Morador do Sacomã",
      testimonial:
        "Nos anos 90, fui morador do Ipiranga, agora moro aqui perto no sacomã, gosto de reviver a história do meu passado contando histórias a meus netos, isso é trago eles na Usina para ensinar e reviver",
    },
  ];
  return testimonials
    .map(
      (testimonial) =>
        `
        <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
          <div class="card shadow-sm w-100">
            <div class="card-body text-center">
              <img src="${testimonial.imgUrl}" class="rounded-circle mb-3" width="80" alt="${testimonial.author}">
              <h5 class="card-title mb-1">${testimonial.author}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${testimonial.about}</h6>
              <p class="card-text">${testimonial.testimonial}</p>
            </div>
          </div>
        </div>
      `
    )
    .join("");
};

const Testimonials = `
  <div class="row justify-content-center">
    ${mapTestimonialsList()}
  </div>
`;

const ColetivoPage = `
<div class="container bg-light rounded-4 shadow-sm py-5 px-3 my-4">
  <div class="row align-items-center mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <h3 class="fw-bold text-primary mb-3">SOBRE NÓS</h3>
      <p>
        O <strong>Coletivo Usina Eco-Cultural</strong> é uma
        <strong>organização sem fins lucrativos</strong>, criada
        para proteger, revitalizar e
        <em>reinventar o uso do antigo Incinerador Vergueiro em São Paulo</em>.
      </p>
      <p>
        <strong>Fundada no dia 30 de março de 2023</strong>, Dia Internacional das Nações Unidas do Resíduo Zero, a nossa associação é composta por moradores, artistas, ambientalistas e membros ativos da sociedade civil.
      </p>
      <p>
        <strong>Estamos comprometidos com a promoção da cultura, educação ambiental, arte e paz, sem distinção por política, crença, raça, gênero ou qualquer outra característica.</strong>
      </p>
    </div>
    <div class="col-12 col-md-6">
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/q12dSGr1JIE?si=Aj1TsTqbYaeuWkPx" title="YouTube video player" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <div class="row align-items-center mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <img src="/assets/images/photo002_participantes1-casal-de-participantes.png" class="img-fluid rounded-4 shadow" alt="Participantes">
    </div>
    <div class="col-12 col-md-6">
      <h4 class="fw-semibold mb-3">Nossa Missão</h4>
      <p>Nosso objetivo é transformar o antigo Incinerador Vergueiro em um espaço cultural e educativo que serve a comunidade local e visitantes.</p>
      <p>Queremos que este lugar seja um símbolo de como a cultura e o respeito ao meio ambiente podem andar de mãos dadas.</p>
      <p>Promovemos a conscientização socioambiental e o empoderamento da comunidade para criar uma sociedade mais justa e sustentável.</p>
    </div>
  </div>

  <div class="row align-items-center mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <h4 class="fw-semibold mb-3">Nossos Valores</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Sustentabilidade:</strong> Promover práticas que respeitem e preservem o meio ambiente.</li>
        <li class="list-group-item"><strong>Inclusão:</strong> Garantir um espaço acolhedor e acessível a todos, valorizando a diversidade.</li>
        <li class="list-group-item"><strong>Educação e Cultura:</strong> Usar o poder da educação e da cultura para transformar a comunidade.</li>
      </ul>
    </div>
    <div class="col-12 col-md-6">
      <img src="/assets/images/photo001_metas-do-milenio.png" class="img-fluid rounded-4 shadow" alt="Metas do Milênio">
    </div>
  </div>

  <div class="row align-items-center mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
      <img src="/assets/svg/svg005_map.svg" class="img-fluid rounded-4 shadow" alt="Mapa">
    </div>
    <div class="col-12 col-md-6">
      <h4 class="fw-semibold mb-3">Nossos Objetivos</h4>
      <p>O objetivo principal é proporcionar à comunidade local um espaço revitalizado, representando não apenas um marco cultural, mas também um gesto de reparação histórica após décadas de abandono.</p>
      <p>A Usina Eco-Cultural surge como um ponto de encontro e convivência para a comunidade, contribuindo para fortalecer os laços sociais de quem vive na região.</p>
    </div>
  </div>

  <div class="row align-items-center mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <h4 class="fw-semibold text-success text-center py-3">APOIE a PETIÇÃO PÚBLICA</h4>
      <p>Nos apoie assinando nossa <strong>petição pública OFICIAL</strong> na conhecida plataforma <strong>Avaaz.org</strong>, conhecida por <em>recolher assinaturas de forma transparente</em>. O link se encontra abaixo:</p>
      <div class="text-center">
        <a href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/" target="_blank" class="btn btn-success btn-lg mt-2">
          PETIÇÃO AVAAZ <img width="24px" height="24px" src="/assets/svg/svg006_pointer.svg" alt="icon de cursor de mouse"/>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6 text-center">
      <img src="/assets/brand/avaazOrg.png" class="img-fluid rounded-4 shadow" alt="Avaaz">
    </div>
  </div>

  <div class="container-testimonial bg-white rounded-4 shadow-sm p-4 my-5">
    <header class="mb-4">
      <h4 class="text-center fw-bold" style="font-size: 2rem;">Depoimentos</h4>
    </header>
    ${Testimonials}
  </div>
</div>
`;

export const coletivoTemplate = `
<section class="mb-5">
  <div class="container p-4 bannerHome text-center mb-4">
    <h2 class="fw-bold">O COLETIVO</h2>
    <p class="lead">Conheça nossa missão, valores e objetivos e fique por dentro de alguns depoimentos</p>
  </div>
  ${ColetivoPage}
</section>
`