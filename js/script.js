import { questionList } from "./data.js";

const startBtn = document.querySelector("#start");
const mainContainer = document.querySelector(".main-content");

startBtn.addEventListener("click", () => {
  const heading = document.querySelector("h1");
  heading.innerHTML = "Loading...";

  //clear html and create loader bar
  mainContainer.innerHTML = "";
  const loaderContainer = document.createElement("span");
  loaderContainer.classList.add("loader");
  mainContainer.append(loaderContainer);

  //set timer to render html after loading bar completed
  setInterval(renderHTML, 3000, questionList);
});

//render page content
function renderHTML(questionList) {
  //update heading
  const newHeading = document.querySelector("h1");
  newHeading.innerHTML = "Choose the correct answer";

  //clear html to render new one
  mainContainer.innerHTML = "";

  //create question container
  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");
  mainContainer.append(questionBox);

  //create image container
  const imgContainer = document.createElement("figure");
  imgContainer.classList.add("img-container");
  questionBox.append(imgContainer);

  //create image
  const picture = document.createElement("img");
  picture.src = questionList[0].image;
  picture.alt = questionList[0].altText;
  imgContainer.append(picture);

  //create caption
  const pictureCaption = document.createElement("figcaption");
  pictureCaption.innerHTML = questionList[0].altText;
  imgContainer.append(pictureCaption);

  //create intro
  const introParagraph = document.createElement("p");
  introParagraph.innerHTML = questionList[0].intro;
  questionBox.append(introParagraph);

  //create question
  const question = document.createElement("p");
  question.innerHTML = questionList[0].question;
  questionBox.append(question);

  //create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  mainContainer.append(optionsContainer);

  //create unordered list
  const ul = document.createElement("ul");
  optionsContainer.append(ul);

  //create first list element
  const listItemOne = document.createElement("li");
  ul.append(listItemOne);

  //create first radio button
  const radioBtnOne = document.createElement("input");
  radioBtnOne.type = "radio";
  radioBtnOne.name = "answer";
  radioBtnOne.id = "question-one";
  radioBtnOne.value = questionList[0].options[0];
  listItemOne.append(radioBtnOne);

  //create first label
  const labelOne = document.createElement("label");
  labelOne.htmlFor = "question-one";
  labelOne.setAttribute("data-content", "a");
  listItemOne.append(labelOne);

  //create first option
  const optionOne = document.createElement("p");
  optionOne.innerHTML = questionList[0].options[0];
  labelOne.append(optionOne);

  //create second list element
  const listItemTwo = document.createElement("li");
  ul.append(listItemTwo);

  //create second radio button
  const radioBtnTwo = document.createElement("input");
  radioBtnTwo.type = "radio";
  radioBtnTwo.name = "answer";
  radioBtnTwo.id = "question-two";
  radioBtnTwo.value = questionList[0].options[1];
  listItemTwo.append(radioBtnTwo);

  //create second label
  const labelTwo = document.createElement("label");
  labelTwo.htmlFor = "question-two";
  labelTwo.setAttribute("data-content", "b");
  listItemTwo.append(labelTwo);

  //create second option
  const optionTwo = document.createElement("p");
  optionTwo.innerHTML = questionList[0].options[1];
  labelTwo.append(optionTwo);

  //create third list element
  const listItemThree = document.createElement("li");
  ul.append(listItemThree);

  //create third radio button
  const radioBtnThree = document.createElement("input");
  radioBtnThree.type = "radio";
  radioBtnThree.name = "answer";
  radioBtnThree.id = "question-three";
  radioBtnThree.value = questionList[0].options[2];
  listItemThree.append(radioBtnThree);

  //create third label
  const labelThree = document.createElement("label");
  labelThree.htmlFor = "question-three";
  labelThree.setAttribute("data-content", "c");
  listItemThree.append(labelThree);

  //create third option
  const optionThree = document.createElement("p");
  optionThree.innerHTML = questionList[0].options[2];
  labelThree.append(optionThree);

  //create button container
  const nexQuestionBtnContainer = document.createElement("div");
  nexQuestionBtnContainer.classList.add("btn-container");
  optionsContainer.append(nexQuestionBtnContainer);

  //create button
  const nexQuestionBtn = document.createElement("button");
  nexQuestionBtn.id = "next";
  nexQuestionBtn.innerHTML = "NEXT >>";
  nexQuestionBtnContainer.append(nexQuestionBtn);

  //points system
  const radioBtns = document.querySelectorAll("input[type='radio']");

  radioBtns.forEach((button) => {
    button.addEventListener("change", () => {
      countPoints(button);
    });
  });

  //go to next question
  const nextQuestion = document.querySelector("#next");
  nextQuestion.addEventListener("click", () => {
    renderNextQuestion();
  });
}

function countPoints(button) {
  let currentPoints = 0;
  const correctOption = questionList[0].correctAnswer;
  //set variable to 0 every time user changes answer to avoid adding more than one point per question
  button.value === correctOption ? currentPoints++ : (currentPoints = 0);
  console.log(currentPoints);
}

function renderNextQuestion() {
  console.log("test");
}
