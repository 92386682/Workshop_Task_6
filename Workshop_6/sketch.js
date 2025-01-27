let textbox;
let textboxoutput;
let usertext;
let poem = [];
let Background = 'angry';
let font1;
let table;
let randomiser;
let letter;
let alphabet = [];
let alphabet2;
let breakdownarray;


function preload(){
  font1 = loadFont('futur.otf');
  table = loadTable('Alphabet.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 500);
  fill(255);
  textSize(20);
  textWrap(CHAR);
  textFont(font1);
  //  for ( x = 0; x < 40; x++) {
  //     randomiser = floor(random (0, 26));
  //     letter = table.getString(randomiser, 0);
  //     alphabet.push(letter);
  //   }

textbox = createInput ();
textbox.position (width / 2 - 100, 25);
textbox.size(200)
button = createButton('test');
button.size(100);
button.position(355, 25);
button.mousePressed(newLine);

   for ( x = 0; x < 150; x++) 
  {ritatest = RiTa.randomWord();
 alphabet.push(ritatest);
  }

}

function newLine() {
  userline = textbox.value();
  // breakdownarray(userline);
  let breakdown = RiTa.phones(userline);
  text(breakdown, 10, 100, 480);
// function writePoem(){
//   for (y = 0; y < poem.length; y++)
//     text(breakdown[y], 250 , 98 + y * 40);
}



function draw() {
  background(0);
  text (Background, 400, 80 );
  push();
  fill(255, 255, 255, 50); 
  alphabet2 = RiTa.untokenize(alphabet);
  text (alphabet2, 0, 0, 500);
pop();
newLine();
}



