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

const container = document.querySelector('.container');
let availableQuestion = [];
let category = [];
function setAvailableQuestion() {
    for (let i = 0; i < data.length; i++) {
        availableQuestion.push(data[i])
    }

}

function display() {
    let cate = []
    for (let i = 0; i < data.length; i++) {
        cate.push(availableQuestion[i].category)
    }
    category = [...new Set(cate)];
    console.log(category);
    for (let i = 0; i < category.length; i++) {
        let trimStr = category[i].split(' ').join('');
        const option = document.createElement('a')
        option.innerHTML = category[i]
        option.href = trimStr + '.html'
        option.className = 'category-btn btn btn-outline-primary text-secondary'
        container.appendChild(option);
        option.setAttribute('onclick', 'getResult(this)')
    }
}

window.onload = function () {
    setAvailableQuestion();
    display()
}
