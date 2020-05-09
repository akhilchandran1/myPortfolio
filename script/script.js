// Chatbot ------------>>>

const talk = document.querySelector('.talk');
const voiceToText = document.querySelector('.voiceToText');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recoder = new SpeechRecognition();

recoder.onstart = () => {
    console.log('Hey, I am here..!! Lets Talk');
    const transcript = "Hey, I am here..!! Lets Talk";
    voiceToText.textContent = transcript

};

recoder.onresult = (event) => {

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voiceToText.textContent = transcript
    chatbotVoice(transcript);
    console.log(event);

};

talk.addEventListener('click', () => {
    recoder.start();
});

function chatbotVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I am sorry. Akhil didnt teach me to answer this question.";
    if (message.includes('how are you')) {
        speech.text = "I am fine, thanks. How are you ?. I know its hard time for everyone. we will overcome this situation very soon";
    } else if (message.includes('email ID')) {
        speech.text = "offcourse. yes. my email I D is: akhil9216@gmail.com";
    } else if (message.includes('your mobile number')) {
        speech.text = "offcourse. yes. my mobile number is 0892126803";
    } else if (message.includes('your contact number')) {
        speech.text = "offcourse. yes. my mobile number is 0892126803";
    } else if (message.includes('Whats your name')) {
        speech.text = "I am Robo. but i am pretending Akhil so you can talk me like you talk to Akhil";
    } else if (message.includes('tell me about yourself')) {
        speech.text = "You already know about me from my C.V, so i will tell you something is not in my C.V. I like swimming, travelling, parties";
    } else if (message.includes('availavle to start')) {
        speech.text = "I am available to start but I only finish my college in July. ";
    } else if (message.includes('visa status')) {
        speech.text = "I am in student visa. stamp 2";
    } else if (message.includes('eligible to work')) {
        speech.text = "I am eligible to work but I am not holding Stamp 4. I am in stamp 2 visa";
    } else if (message.includes('currently working')) {
        speech.text = "no. I am not working at the moment.";
    } else if (message.includes('finish your college')) {
        speech.text = "I will finish in july";
    } else if (message.includes('currently available')) {
        speech.text = "I not working, I am available to start";
    } else if (message.includes('working from home')) {
        speech.text = "yes. I can start working from home.";
    } else if (message.includes('part time job')) {
        speech.text = "yes, but i will keep looking for fulltime job, so i will resign when I get a fulltime position";
    } else if (message.includes('study masters')) {
        speech.text = "No, I am only looking for a job now";
    } else if (message.includes('holding stamp 4')) {
        speech.text = "No, I am not, I am in Stamp 2 visa";
    } else if (message.includes('strength and weakness')) {
        speech.text = "I am good in Graphic designing, I like to learn and impliment new techonologies and I am also a good team player..... but I am bad in Networking, especially in wire shark. ";
    } else if (message.includes('salary expectation')) {
        speech.text = "30000 per year or above";
    } else if (message.includes('about an achievement')) {
        speech.text = "I am in my last semester of B.S.C I T. and its going to be my third graduation. I already have a batchler degree in Accounts and pre masters in business so i believe its a great achievement";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}

function openChat() {
    document.getElementById("myForm").style.display = "block";
}

function closeChat() {
    document.getElementById("myForm").style.display = "none";
}

// Project Tab ---------->>>

function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("projectDefaultOpen").click();


// Project Contents ------------>>>

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Experiance -------------->>>

function openExperience(companyName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("ExpTabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(companyName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("ExpDefaultOpen").click();


// Responsive Navigation Bar --------------->>>

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}