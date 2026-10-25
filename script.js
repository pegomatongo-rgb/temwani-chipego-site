window.addEventListener("DOMContentLoaded", () => {
    console.log("script fully loaded");
});

/* ===========================
   Temwani & Chipego ❤️
   script.js
=========================== */

/* -----------------------
   Together Counter
------------------------ */

const anniversary = new Date("November 2, 2025 00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - anniversary;

    if (difference < 0) {

        document.getElementById("counter").innerHTML =
        "❤️ Counting down to our forever ❤️";

        return;

    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("counter").innerHTML =
        `
        ❤️ ${days} Days <br>
        💕 ${hours} Hours <br>
        💖 ${minutes} Minutes <br>
        💗 ${seconds} Seconds
        `;
}

setInterval(updateCounter, 1000);

updateCounter();

/* -----------------------
   Today's Message
------------------------ */

const dailyMessages = [

"Hi handsome ❤️",

"My husband 🤭❤️",

"My world is better with you in it 💕",

"I hope you smiled today ❤️",

"Don't forget that I love you 💖",

"You're my safe place ❤️",

"I'm always rooting for you 💕",

"I'm proud of you ❤️",

"You make life so much sweeter 💗",

"Forever still won't be enough ❤️",

"You'll always be my favourite person 💕",

"Thank you for existing ❤️"

];

document.getElementById("dailyMessage").innerHTML =
dailyMessages[
Math.floor(Math.random() * dailyMessages.length)
];

/* -----------------------
   Love Jar
------------------------ */

const loveJar = [

"I love you ❤️",

"My husband ❤️",

"You are an amazing person ❤️",

"You have a beautiful heart ❤️",

"You are enough. Never doubt that ❤️",

"Never give up baby ❤️",

"You will succeed and be a rich successful man ❤️",

"My world is better with you in it ❤️",

"I'm proud of you ❤️",

"I believe in you ❤️",

"You make me smile ❤️",

"You're my safe place ❤️",

"You deserve happiness ❤️",

"I'd choose you every single time ❤️",

"You are my peace ❤️",

"You are my comfort ❤️",

"I miss you ❤️",

"My future looks brighter with you ❤️",

"You are my answered prayer ❤️",

"I love loving you ❤️",

"You make ordinary days magical ❤️",

"My favourite place is next to you ❤️",

"I still get butterflies ❤️",

"I'll always choose you ❤️",

"You are my endgame ❤️"

];

function newLoveMessage(){

    document.getElementById("loveMessage").innerHTML =

    loveJar[Math.floor(Math.random()*loveJar.length)];

}

/* -----------------------
   Questions
------------------------ */

const questions = [

"When did you know or what moment made you think yes she's the one for me?",

"What do you want us to start as a couple like a hobby or activity?",

"Is there anything you want me to change?",

"Do you think I sometimes do not understand you or understand what you're going through? Explain your answer.",

"What direction do you see our relationship going in?",

"Have i helped you heal from someting i didnt even know hurt you? ", 

"What's your endgame goal for us?",

 "Was there a moment with me that made you see love differently",   

"What do you think about the sexual aspect of our relationship?",

"Do you think there are friendships on your side or on my side that might attack our relationship?",

"What's something about me that you're protective of?",

"If we are to ever go clubbing together how do you think it will go?",

"What is your favourite memory of us?",

"Do you feellike you always hgave to be strong in front of me or do you feel like you can fall apart?",

"When do you feel closest to me?",

"What do you appreciate most about our relationship?",

"What is one thing you've always wanted to tell me?",

"What dream do you hope we achieve together?",

"What habit of mine secretly makes you smile?",

"What makes you feel the most loved by me?",

"If we could travel anywhere tomorrow, where would you take me?",

"What does forever with me look like to you?",
    
"DO YOU HAVE ANY REGRETS ABOUT OUR ENTIRE SITUATION FROM THE BEGININ TILL NOW?",

"What song reminds you of us the most?",
    
 "Do you think taking my virginity was wrong or something that you regret?"

];

function newQuestion(){

document.getElementById("question").innerHTML =

questions[Math.floor(Math.random()*questions.length)];

}

/* -----------------------
   Scroll Buttons
------------------------ */

function scrollToLoveJar(){

document.getElementById("lovejar")
.scrollIntoView({behavior:"smooth"});

}

function scrollToQuestions(){

document.getElementById("questions")
.scrollIntoView({behavior:"smooth"});

}

function scrollToMemories(){

document.getElementById("memories")
.scrollIntoView({behavior:"smooth"});

}

function scrollToDreams(){

document.getElementById("dreams")
.scrollIntoView({behavior:"smooth"});

}

function scrollToFinal(){

document.getElementById("final")
.scrollIntoView({behavior:"smooth"});

}
async function sendAnswer() {
    const answerBox = document.getElementById("answerBox");
    const questionBox = document.getElementById("question");

    const answer = answerBox.value.trim();
    const question = questionBox.innerText;

    if (!answer) {
        alert("Please write an answer first 💗");
        return;
    }

    try {
        const response = await fetch(
            "https://temwani-chipego-site-1.onrender.com/send-answer",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question,
                    answer: answer
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
            alert(
                "Your answer could not be sent. Please try again later. 💗"
            );
            console.error("Server error:", response.status, data);
            return;
        }

        alert("Your answer has been sent successfully! ❤️");
        answerBox.value = "";

    } catch (error) {
        console.error("Error sending answer:", error);
        alert(
            "We couldn't connect to the server. Please try again later. 💗"
        );
    }
}       

function openLetter(){

const letter =
document.getElementById("hiddenLetter");

letter.style.display = "block";

letter.scrollIntoView({

behavior:"smooth"

});

}
