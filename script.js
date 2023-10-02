
const guessSubmit = document.querySelector('.guessSubmit');
const yeh = document.querySelector('.Erm');
const hintText = document.querySelector('.hints');
let hints = 1;
let resetButton;
let guessCount = 0;
let winAudio = new Audio('assets/yay.mp3');
let skillIssue = new Audio('assets/noo.mp3');


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

  const countryFacts = [
    "Known for its beautiful Adriatic and Ionian coastlines.",
    "One of the smallest countries in Europe, located in the Pyrenees mountains.",
    "Famous for its classical music heritage, with composers like Mozart and Beethoven.",
    "A landlocked country in Eastern Europe known for its diverse wildlife.",
    "Renowned for its delicious chocolates, waffles, and beer.",
    "Has a rich cultural heritage and is known for its historic towns.",
    "Famous for its stunning landscapes, including the Rila Monastery and Black Sea coast.",
    "Known for its beautiful Adriatic coastline and historic cities like Dubrovnik.",
    "An island country with a rich history and Mediterranean cuisine.",
    "Located in Central Europe and known for its picturesque cities and castles.",
    "Known for its Viking history and high standard of living.",
    "A Baltic state with a strong digital identity and e-governance.",
    "Famous for its lakes, forests, and the Northern Lights.",
    "Known for its world-class cuisine, fashion, and art.",
    "A European economic powerhouse known for its engineering and automotive industries.",
    "Famous for its ancient history, including the birthplace of democracy.",
    "Located in Central Europe and known for its unique language and cuisine.",
    "A Nordic island country known for its stunning landscapes and geothermal activity.",
    "Famous for its lush green landscapes and friendly people.",
    "Known for its delicious food, art, and rich history.",
    "A partially recognized state in the Balkans with a complex political status.",
    "A Baltic state known for its beautiful beaches and forests.",
    "A small, landlocked principality in the Alps known for its financial services.",
    "Famous for its strong basketball tradition and vibrant festivals.",
    "A small Baltic state with a rich cultural heritage and beautiful landscapes.",
    "One of the smallest countries in Europe, known for its banking and finance industry.",
    "An island nation known for its historical sites and Mediterranean culture.",
    "A landlocked country in Eastern Europe with a rich history and diverse culture.",
    "A small coastal city-state known for its luxury and casinos.",
    "A Balkan country known for its stunning Adriatic coastline and mountainous terrain.",
    "A Western European country known for its picturesque canals and windmills.",
    "Located in the Balkans and known for its scenic landscapes and historic cities.",
    "A Northern European country with breathtaking fjords and natural beauty.",
    "Famous for its hearty cuisine, including pierogi and kielbasa.",
    "Known for its maritime history, port wine, and scenic coastline.",
    "A Southern European country with a rich history and stunning landscapes.",
    "Located in Eastern Europe and known for its thermal baths and paprika dishes.",
    "A Nordic island country known for its innovative technology and renewable energy.",
    "A landlocked country in the Alps known for its stunning landscapes and banking sector.",
    "A vast country in Eastern Europe known for its diverse landscapes and history.",
    "A small landlocked country surrounded by Italy, known for its medieval architecture.",
    "A Balkan country with a rich cultural heritage and diverse landscapes.",
    "Located in Central Europe and known for its historic cities and castles.",
    "A picturesque country in the Balkans known for its natural beauty and historic sites.",
    "A Western European country known for its sunny beaches and delicious cuisine.",
    "Located in Northern Europe and known for its innovative design and technology.",
    "A landlocked country in Central Europe with stunning Alpine scenery.",
    "A large Eastern European country known for its diverse culture and vast landscapes.",
    "A country consisting of four nations with a rich history and cultural diversity.",
    "The world's smallest independent state, known for its religious and historical significance."
];
  
  const random = Math.floor(Math.random() * Countries.length);
  const randomCountry = (random, Countries[random]);
  const randomFact = (random, countryFacts[random]);

  console.log(random, Countries[random]);
  console.log(randomFact)


function checkGuess(){
    const userGuess = String(guessField.value);
    const submitedGuess = userGuess.toLowerCase();

    if(guessCount === 0){
        guessCount.textContent = 'Ermmm'
        hintText.textContent = randomFact
    }
    
    if(submitedGuess === randomCountry){
        winAudio.play();
        yeh.style.backgroundColor = 'green';
        yeh.textContent = 'Well done you got it right'
        setGameOver();
    }else if(guessCount === 9){
        skillIssue.play();
        yeh.style.backgroundColor = 'red';
        yeh.textContent = '!!!SKILL ISSUE!!!'
        setGameOver();
    }else{
        yeh.textContent = 'Wrong!';
        yeh.style.backgroundColor = 'red';
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);