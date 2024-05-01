let sliderr;
let blackColour= 255;
let questionBox;
let sendButton;
let questionInput;
let questionList=[];

function setup() {
  createCanvas(400, 400);

sliderr=createSlider(0,255,255);
sliderr.position(width/2 - sliderr.width/2, height/2);

checkbox=createCheckbox();
checkbox.position(350,200);

questionBox= createInput('');
questionBox.position(width/2 - 100 ,300);
questionBox.size(200)

sendButton= createButton('send');
sendButton.position(300,300);
sendButton.mousePressed(sendQuestion);
}

function sendQuestion(){
  let question = questionBox.value();
  questionList.push(question);
  qustionBox.value('');
}

function draw() {

blackColour =sliderr.value();
background(blackColour);

for(let i=0; i < questionList.length; i++){
  text(questionList[i], 50, i * 10 +10);
}

}


