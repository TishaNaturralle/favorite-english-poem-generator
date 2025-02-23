//function which will get a response that is response.data.answer
function displayPoem(response){

  //console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem (event) {
    event.preventDefault();

// build the API URL
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "dt7522ba4c017dfaoc53ab6bcb9a6246";
let prompt =`User instructions: Generate an English poem about ${instructionsInput.value}`;
let context ="You are an expert in english poems and love to write poems.Your mission is to generate a poem in basic HTML and do not include the word html before the poem starts. Include the poem title and author's name before the poem starts. Make sure to follow the user instructions, Sign with the words 'brought to you by  TichTach AI',inside a <strong> element at the end of the poem ";
let apiURL =
`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
//Make a call to the API

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="blink">⌛Generating english poem about ${instructionsInput.value}</div>`;


axios.get(apiURL).then(displayPoem);
//Display the generated poem



}
  
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

