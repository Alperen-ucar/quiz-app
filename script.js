let question = {
 
    1: {
        questionNumber: 'Soru 1',
        questionText: 'Türkiyenin başkenti Ankara\'dır',
        result: true
    },
    2: {
        questionNumber: 'Soru 2',
        questionText: 'En kalabalık il Konya\'dır',
        result: false
    },
    3: {
        questionNumber: 'Soru 3',
        questionText: 'Türkiyenin 81 ili vardır.',
        result: true
    },
    4: {
        questionNumber: 'Soru 4',
        questionText: 'En kalabalık il İstanbul\'dur',
        result: true
    },
    5: {
        questionNumber: 'Soru 5',
        questionText: 'Türkiye\'nin kuzeyinde Karadeniz bulunmaktadır.',
        result: true
    }
}

let keys = Object.keys(question);
let i = 1, x = 1;
let trueBtn = document.getElementById("trueBtn");
let falseBtn = document.getElementById("falseBtn");
let qNumber = document.getElementById("q-number");
let qText = document.getElementById("q-text");
qNumber.innerText = question[1].questionNumber;
qText.innerText = question[1].questionText;


function myFunc (e) {
    x++;
    
    if (x > keys.length) {
        alert("Tebrikler");
    }


    if (question[i].result.toString() === e.name) {
        i++;
        qNumber.innerText = question[i].questionNumber;
        qText.innerText = question[i].questionText;
        
        
    }
    else {
        qText.innerText = question[1].questionText;
        qNumber.innerText = question[1].questionNumber;
        i = 1;
    }

    
   
}


