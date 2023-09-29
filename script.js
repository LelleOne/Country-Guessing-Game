
const guessSubmit = document.querySelector('.guessSubmit'); 
let hints = 1;
let resetButton
let guessCount = 0;

const Countries = [
    "albania",
    "andorra",
    "austria",
    "belarus",
    "belgium",
    "bosnia and herzegovina",
    "bulgaria",
    "croatia",
    "cyprus",
    "czech republic",
    "denmark",
    "estonia",
    "finland",
    "france",
    "germany",
    "greece",
    "hungary",
    "iceland",
    "ireland",
    "italy",
    "kosovo",
    "latvia",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "malta",
    "moldova",
    "monaco",
    "montenegro",
    "netherlands",
    "north macedonia",
    "norway",
    "poland",
    "portugal",
    "romania",
    "russia",
    "san marino",
    "serbia",
    "slovakia",
    "slovenia",
    "spain",
    "sweden",
    "switzerland",
    "ukraine",
    "united kingdom",
    "vatican city"
  ];
  
  const random = Math.floor(Math.random() * Countries.length);

  console.log(random, Countries[random]);

function checkGuess(){
    const userGuess = String(guessField.value);
    const submitedGuess = userGuess.toLowerCase();

    if(guessCount === 0){
        guessCount.textContent = 'Ermmm'
    }
    
}