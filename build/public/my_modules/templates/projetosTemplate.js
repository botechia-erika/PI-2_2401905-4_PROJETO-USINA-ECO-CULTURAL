
import { BASE_URL, BASE_PATH } from "./../CONSTANTS/CONSTANTS.js";

// 1. Função para buscar dados
export async function fetchProjects(baseUrl = BASE_URL, basePath = BASE_PATH) {
  const response = await fetch(`${baseUrl}/${basePath}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}


const projects = [
{
    id: "p01",
    title: "Projeto de Reflorestamento",
    description: "Iniciativa para plantar árvores nativas na região.",
    category: "Ambiental",
    author: "João Silva",
    link: "",
    imgUrl: ""
}
]

// 2. Template do banner (hero)
function heroTemplateProjects() {
  return `
    <div class="container bannerHome">
      <h2>Conheça Nossos Projetos</h2>
      <p>Explore nossos projetos, participe e ajude a causa!</p>
    </div>
  `;
}

// 3. Template das cards de projetos
function projectsCard(projectsList = projects) {
  return projectsList
    .map(
      (project) => `
        <div class="col-md-6 col-lg-4">
          <div class="card project-card h-100" id="${project.id}">
            <img
              src="${
                project.imgUrl && project.imgUrl !== ""
                  ? project.imgUrl
                  : "assets/brand/logoAdaptado.svg"
              }"
              class="card-img-top"
              alt="${project.title}"
            >
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <p class="card-text"><strong>Categoria:</strong> ${project.category}</p>
              <p class="card-text"><strong>Autor:</strong> ${project.author}</p>
              ${
                project.link
                  ? `<a href="${project.link}" class="btn btn-primary" target="_blank">Saiba mais</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

// 4. Função que retorna o template completo
 async function getProjetosTemplate() {
  try {
    // Caso queira usar fetch futuramente, descomente a linha abaixo:
    // const dataProjects = await fetchProjects();
    
    return `
      ${heroTemplateProjects()}
      <div class="container">
        <h3>LISTA DE PROJETOS PARCEIROS</h3>
        <div class="row">
          ${projectsCard()}
        </div>
      </div>
    `;
  } catch (error) {
    console.error(error);
    return `<p>Erro ao carregar os projetos.</p>`;
  }
}

export const projetosTemplate = await getProjetosTemplate(); // a Promise que retorna a string
