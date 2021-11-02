const data = [ 
    {
        "category": "Cau hoi kho",
        "difficulty": "easy",
        "question": "Con ga co may chan",
        "correct_answer": "2 chan",
        "answers": [
            "1 chan",
            "2 chan",
            "3 chan",
            "4 chan"
        ]
    },
    {
        "category": "Cau hoi de",
        "difficulty": "easy",
        "question": "Ca song o dau",
        "correct_answer": "Duoi nuoc tren bo",
        "answers": [
            "Duoi nuoc",
            "Tren bo",
            "Tren troi",
            "Duoi dat"
        ]
    },
    {
        "category": "Cau hoi de",
        "difficulty": "easy",
        "question": "Cho keu nhu nao",
        "correct_answer": "Gau gau",
        "answers": [
            "Meo meo ",
            "Gau gau",
            "Quac quac",
            "Gru gru"
        ]
        },
    {
        "category": "Cau hoi kho",
        "difficulty": "easy",
        "question": "Meo co may chan",
        "correct_answer": "4 chan",
        "answers": [
            "1 chan",
            "2 chan",
            "3 chan",
            "4 chan"
        ]
    },
    {
        "category": "Cau hoi de",
        "difficulty": "easy",
        "question": "Con gi song duoi nuoc",
        "correct_answer": "Con ca",
        "answers": [
            "Con ga",
            "Con ca",
            "Con cho",
            "Con meo"
            ]
        }
];


const container =document.querySelector('.container');
let availableQuestion=[];
let currentQuestion = []
let correctAnswer
function setAvailableQuestion(){
    for( let i=0;i<data.length;i++){
        if(data[i].category==='Cau hoi de'){
            availableQuestion.push(data[i])
        }
       
    }
    // console.log(availableQuestion);
    // console.log(data);
}

function display(){
    for(let i=0;i<availableQuestion.length;i++){
        const box = document.createElement('div')
        box.className= 'quiz-box list-group-item';
        container.appendChild(box)
        currentQuestion = availableQuestion[i]
        const question = document.createElement('div')
        question.className = 'question-text'
        question.innerHTML= currentQuestion.question
        box.appendChild(question)
        let currentAnswer=[]
        const answerGroup = document.createElement('div')
        answerGroup.className = 'answer-group'
        box.appendChild(answerGroup)
        currentAnswer = availableQuestion[i].answers;
        correctAnswer = availableQuestion[i].correct_answers;   
        for(let j=0;j<currentAnswer.length;j++){
            const option =document.createElement('button')
            option.innerHTML=currentAnswer[j]
            option.value=currentAnswer[j]
            option.className ='option btn btn-outline-primary text-secondary'
            answerGroup.appendChild(option);
            option.setAttribute('onclick','getResult(this)')

        }    

        
    }
    
    
}
function getResult(ele){
    const value = ele.value;
    let correctAnswer=[]
    for(i=0;i<availableQuestion.length;i++){
        correctAnswer.push(availableQuestion[i].correct_answer)
    }
    if(correctAnswer.includes(value)){
        alert('Chinh xac')
    }else{
         alert('Sai roi. Ban chon lai di')   
    }
    
}


window.onload= function(){
    setAvailableQuestion();
    display()
}