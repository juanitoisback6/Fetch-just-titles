
const loader = document.getElementById("loader");

loader.classList.add("hidden");

const cont = document.getElementById('cont');
const btn = document.getElementById("btn");
const btnCont = document.getElementById("btonCont");

async function getD () {

          try  {    

          loader.classList.remove("hidden");
          cont.classList.add("hidden");


    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!response.ok){

          throw new Error(`HTTP ERROR ${response.status}`)
    }

    const data = await response.json();

    loader.classList.add("hidden");
    cont.classList.remove("hidden");
    return  data;


          }

          catch (error){

                    console.error(error);
                    loader.textContent = `Error charging the data. 
                    ${error} `;
          }

}



async function sisa () {

const data = await getD();
if(!data) return;


const firstTen= data.slice(0, 10);

cont.innerHTML=`  ${firstTen.map((titles)=> `<h1 id="titulos" class="titulos"> ${titles.title} </h1>`).join("")}`;



}


btn.addEventListener("click", sisa);