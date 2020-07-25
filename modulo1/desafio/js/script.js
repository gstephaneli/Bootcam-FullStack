let buttonSearch = null;
let inputSearch = null;
let namesSearch = null;
let spinner = null;

let allRegister = null;
let searchNames = null;
let statisticsSearch = null;
let numberFormat = null;
window.addEventListener("load", async () => {

  spinner = await document.querySelector(".spinner");
  namesSearch = await document.querySelector(".namesSearch");
  statisticsSearch = await document.querySelector(".statisticsSearch");
  buttonSearch = await document.querySelector(".buttonSearch");
  inputSearch = await document.querySelector(".inputSearch");

  buttonSearch.disabled = true;
  inputSearch.disabled = true;
  buttonSearch.addEventListener("click", search);
  inputSearch.addEventListener("keyup", search);

  numberFormat = Intl.NumberFormat("pt-BR");

  fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
    .then((res) => {
      let htmlLoading = `
      <div class="spinner-border" role="status">
        <span class="sr-only">Aguarde...</span>
       </div>`;
      spinner.innerHTML = htmlLoading;

      setTimeout(() => {
        res.json().then((data) => {
          handleData(data.results);
          spinner.innerHTML = "";
          inputSearch.disabled = false;
        });
      }, 1500);
    })
    .catch((error) => {
      alert("Erro na requisição");
    });
});

const handleData = (dataArray) => {
  allRegister = dataArray
    .map((element) => {
      const { first, last } = element.name;
      const name = first + " " + last;
      const { age } = element.dob;
      const { picture, gender } = element;
      return { name, age, picture, gender };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};

const search = async (event) => {
  if (inputSearch.value) {
    buttonSearch.disabled = false;
  } else {
    buttonSearch.disabled = true;
  }
  if (
    (event.key === "Enter" || event.type === "click") &&
    inputSearch.value.trim()
  ) {
    textSearch = inputSearch.value;
    searchNames = await allRegister
      .filter((element) => {
        nameSearch = element.name.toUpperCase();
        textSearch = textSearch.toUpperCase();
        return nameSearch.includes(textSearch);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    render();
  }
};

const render = async () => {
  await renderNames();
  await renderStatics();
};

const renderStatics = () => {
  const { womans, mans } = somaSexo();
  const totalAge = somaAge();
  const mediaAge = numberFormat.format(
    (totalAge / searchNames.length).toFixed(2)
  );

  statisticsSearch.innerHTML = "";
  let htmlStatics = null;
  if (searchNames.length > 0) {
    htmlStatics = `
    <div class="divStatics">
    <h1 class="h1Names">Estatísticas</h1> 
      <p class="statics">Sexo masculino: <b>${mans}</b></p>
      <p class="statics">Sexo feminino: <b>${womans}</b></p>
      <p class="statics">Soma das idades: 
        <b>${numberFormat.format(totalAge)}</b>
      </p>
      <p class="statics">Média das idades: <b>${mediaAge}</b></p>
    </div>`;

    statisticsSearch.style.height = "250px";
  } else {
    htmlStatics = 
    `<div class="divStatics">
        <h1 class="h1Names">Nada a ser exibido</h1> 
      </div>
    `;
    statisticsSearch.style.height = "100px";
  }

  statisticsSearch.innerHTML = htmlStatics;
};

const renderNames = () => {
  namesSearch.innerHTML = "";

  let htmlNamesSearch = 
  `<div>
    <h1 class="h1Names">${searchNames.length} usuário(s) encontrado(s)</h1> 
  `;

  searchNames.forEach((element) => {
    const htmlName = `
    <div class="divName">
      <img src="${element.picture.large}" alt="Picture">
      <p class="pName">${element.name}, ${element.age}</p>
    </div>`;

    htmlNamesSearch += htmlName;
  });
  
  htmlNamesSearch += "</div>";
  namesSearch.innerHTML = htmlNamesSearch;
};

const somaSexo = () => {
  let mans = 0;
  let womans = 0;
  searchNames.forEach((element) => {
    if (element.gender === "female") {
      womans++;
    } else {
      mans++;
    }
  });

  return { womans, mans };
};

const somaAge = () => {
  return searchNames.reduce(
    (accumulator, current) => accumulator + current.age,
    0
  );
};
