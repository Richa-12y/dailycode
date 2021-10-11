const quizDB = [
    {
        question: "Q1:What does HTML stand for?",

        A: "Hyper Tag Markup Language",

        B: "Hyper Text Markup Language",

        C: "Hyperlinks Text Mark Language",

        D: "Hyperlinking Text Marking Language",

        ans:"ans2"

        },

        {
        question: "Q2:What symbol indicates a tag?",
        A:"Angle brackets e.g.",

        B: "Curved brackets e.g. {,}",

        C: "Commas e.g. ','",

        D:"Exclamation marks e.g. !",

        ans:"ans1"

        },

        {
            question:"Q3: Which of these is a genuine tag keyword?",
            A:"Header",

            B:"Bold",

            C:"Body",

            D:"Image",

            ans:"ans3"

        },
        {
            question:"Q4:A CSS file can be applied to only one HTML file.",
            A:"True",

            B:"False",

            ans:"ans2"

        },
        {
            question:"Q5:What does CSS stand for?",
            A:"Computing Style Sheet",

            B:"Creative Style System",

            C:"Cascading Style Sheet",

            D:"Creative Styling Sheet",

            ans:"ans3"
        }
];

      const question = document.querySelector('.question');
      const option1 = document.querySelector('#option1');
      const option2 = document.querySelector('#option2');
      const option3 = document.querySelector('#option3');
      const option4 = document.querySelector('#option4');
      const submit = document.querySelector('#submit');

      const answers = document.querySelectorAll('.answer');

      const showScored = document.querySelectorAll('#showScore');
      let questionCount = 0;
      let score = 0;

      const loadQuestion = () => {

          const questionList = quizDB[questionCount];
          
          question.innerText = questionList.question;

          option1.innerText = questionList.A;
          option2.innerText = questionList.B;
          option3.innerText = questionList.C;
          option4.innerText = questionList.D;

      }
    loadQuestion();
    const getCheckAnswer = () => {
        let answer;
        answers.forEach((curAnsElem) =>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
        });
        return answer;
    };
    submit.addEventListener('click',() =>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer == quizDB[questionCount].ans){
            score++;
        }
        questionCount++;

        if(questionCount< quizDB.length)
        {
            loadQuestion();
        }
        else{
            showScored.innerHTML =`
            <h3> you scored ${score}/${quizDB.length} </h3> 
            <button class="btn" onclick = "location.relaod()">Play Again></button>
            `;
        }
    });