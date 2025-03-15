const questions = [
    {
        question: "Kdo je tvůrcem Linuxu?",
        options: ["Bill Gates", "Linus Torvalds", "Steve Jobs"],
        correct: 1
    },
    {
        question: "Jaký je hlavní souborový systém v Linuxu?",
        options: ["NTFS", "ext4", "FAT32"],
        correct: 1
    },
    {
        question: "Jaký příkaz zobrazí seznam souborů v adresáři?",
        options: ["cd", "ls", "mkdir"],
        correct: 1
    },
    {
        question: "Jaký příkaz slouží ke spuštění souboru?",
        options: ["cat", "cp", "nano"],
        correct: 0
    },
    {
        question: "Ve kterém roce vznikla první verze linuxového jádra ?",
        options: ["1985", "1940", "1991"],
        correct: 2
    },
    {
        question: "Co je to Linux?",
        options: ["Operační systém vyvinutý společností Microsoft", "Programovací jazyk pro webové aplikace", " Systém s otevřeným zdrojovým kódem"],
        correct: 2
    },
    {
        question: "Který balíčkový systém používá distribuce jako Ubuntu a Debian?",
        options: ["APT", " RPM", "YUM"],
        correct: 0
    },
    {
        question: "Co je to root uživatel v Linuxu?",
        options: ["Uživatel s omezenými právy", "  Administrátor systému s plnými právy", "Uživatel bez jakýchkoli práv"],
        correct: 1
    },
    {
        question: "Co je to sudo v Linuxu?",
        options: [" Příkaz pro restartování systému", "Příkaz pro kopírování souborů", "Příkaz pro provádění operací s administrátorskými právy"],
        correct: 2
    },
    {
        question: "Jaký příkaz slouží k odstranění souboru v Linuxu?",
        options: ["remove", " rm", "mkdir"],
        correct: 1
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

let currentQuestionIndex = 0;
let userAnswers = [];

const questionContainer = document.getElementById('questionContainer');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');
const resultsDiv = document.getElementById('results');
const scoreDisplay = document.getElementById('score');

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p class="form-label">${q.question}</p>
        ${q.options.map((text, index) => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="answer" value="${index}" id="option${index}">
                <label class="form-check-label" for="option${index}">
                    ${text}
                </label>
            </div>
        `).join('')}
    `;
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
    
    userAnswers.push(parseInt(selectedOption.value));
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionContainer.innerHTML = '';
    nextButton.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    
    let correctAnswers = 0;
    resultsDiv.innerHTML = questions.map((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        if (isCorrect) correctAnswers++;
        return `
            <div class="p-2 border rounded mb-2 ${isCorrect ? 'bg-success text-white' : 'bg-danger text-white'}">
                <p>${q.question}</p>
                <p><strong>Vaše odpověď:</strong> ${q.options[userAnswers[i]]}</p>
                ${!isCorrect ? `<p class="text-light small">Správná odpověď: ${q.options[q.correct]}</p>` : ''}
            </div>
        `;
    }).join('');
    
    let scorePercentage = Math.round((correctAnswers / questions.length) * 100);
    scoreDisplay.innerHTML = `Úspěšnost: ${scorePercentage}%`;
}

showQuestion();