
{
    
    let username="hamza";
    let password="hamza123";

    console.log(password);
    console.log(typeof (password));

    
console.log(`username: ${username} Password: ${password}`);

}
function sum(no1=30,no2=30){
    var sum=no1+no2;
    console.log(sum)
}
sum();

function greet(user) {

    var message=`hello hamza how are you: ${user} `
    console.log(message)
    
}
greet("i am fine")

function sum(no10,no11=55){
    var sum=(no10+no11);
    console.log(sum);
}
sum(4);

class Burger{
    constructor(zinger,phillysteak,LambBurger,CheeseBurger){
        this.burger1=zinger;
        this.burger2=phillysteak;
        this.burger3=LambBurger;
        this.burger4=CheeseBurger;

    }

    sale(){
    return`burger1 ${this.burger1} burger2 ${this.burger2} burger3 ${this.burger3} burger4 ${this.burger4}`
    }
    total(){
        return`$`
    }
}
var objburger=new Burger("zinger","phillysteak","LambBurger","CheeseBurger");
console.log(objburger)
console.log(objburger,Burger)
console.log(Burger)


let even=[1,2,3,4,5,6,7,8,9]
for (let i in even){
    console.log(even[i])
}
var number=[1,2,3,4,5,6]
mapwork=number.map(element => {
    if(element%2==0){
        return element= "number";
    }    
    else(element)=>{
        return element= "odd";
    }
});

console.log(mapwork)

var car2=[1,2,3,4,5,6,7,8,9]
mapwork=car2.map(element => {
    
    if(element -2==1){
        return element ="C class suv"
    }
    
    else(element %2==0);{
        return element ="sedan"
    }
});

console.log(mapwork)

//////data serilaization local storage save



var login={user:"hamz",secreat:"ali1234",email:"hamza021aslam@gmail.com",emailpass:"ale1234"}

console.log(login.secreat)

console.log(typeof (login));

//serilaization
var dataconversion =JSON.stringify(login);
console.log(typeof (login))
//desirilaization
var data2conversion =JSON.parse(dataconversion);
console.log(typeof (data2conversion))

//savelocal storage
localStorage.setItem("credential", JSON.stringify(login));

//get local storage 
localStorage.getItem("credential2",JSON.stringify(login));
console.log(localStorage)


let num=[12,34,56,78,92];
for(let i in num){
    console.log(num [i])
}

// mapwork

var odd=[3,5,7,9,11,13];
mapwork=odd.map(element => {
    if(element %3==0){
        return element="odd"
    }    
    else(element)=>{
        return element="even";
    }    
});
console.log(mapwork)

//auto card javascript//

const projects = [
    {
        title: "Educational Website",
        description: "A brief description of Project 1 and its key features.",
        image: "http://127.0.0.1:5500/971-Converted-removebg-preview.png",
        count: 1,
        date: "2023-07-30",
        tags: [],
        github: "https://github.com/user/project1",
        liveView: "https://ihaps.edu.pk/",
        progress: "completed"
    },
    {
        title: "Constraction Website",
        description: "An overview of Project 2, highlighting its main functionalities.",
        image: "http://127.0.0.1:5500/seo-icon-pack_23-2151767895-removebg-preview.png",
        count: 2,
        date: "2023-06-22",
        tags: [],
        github: "https://github.com/user/project2",
        liveView: "https://al-qudra.om-menu.com",
        progress: "completed"
    },
    {
        title: "Textile Website",
        description: "Details about Project 3 and its innovative approach to solving problems.",
        image: "http://127.0.0.1:5500/3d-nft-icon-developer-male-illustration_629802-6-removebg-preview.png",
        count: 3,
        date: "2023-07-30",
        tags: [],
        github: "https://github.com/user/project3",
        liveView: "http://zenith.paulbrooksstore.com",
        progress: "working"
    },
    {
        title: "Portfolio Website",
        description: "Details about Project 4 and its innovative approach to solving problems.",
        image: "http://127.0.0.1:5500/cartoon-hamburger-with-text_24877-55447-removebg-preview.png",
        count: 4,
        date: "2023-07-30",
        tags: [],
        github: "https://github.com/user/project3",
        liveView: "https://ihaps.edu.pk",
        progress: "completed"
    }
];

const cardContainer = document.querySelector('.ps-card-container');
const prevBtn = document.querySelector('.ps-prev-btn');
const nextBtn = document.querySelector('.ps-next-btn');
let currentIndex = 0;

function createCard(project, index) {
    const card = document.createElement('div');
    card.className = 'ps-card';
    card.style.transform = `translateX(${index * 100}%)`;

    const content = document.createElement('div');
    content.className = 'ps-card-content';

    const imageOrder = index % 2 === 0 ? 0 : 1;
    const infoOrder = index % 2 === 0 ? 1 : 0;

    content.innerHTML = `
        <div class="ps-card-image" style="background-image: url(${project.image}); order: ${imageOrder};"></div>
        <div class="ps-card-info" style="order: ${infoOrder};">
            <h2 class="ps-card-title">${project.title}</h2>
            <p class="ps-card-description">${project.description}</p>
            <div class="ps-card-meta">
                <span class="ps-card-count">Project ${project.count}</span>
                <span class="ps-card-date">Created: ${project.date}</span>
            </div>
            <div class="ps-card-tags">
                ${project.tags.map(tag => `<span class="ps-card-tag">${tag}</span>`).join('')}
            </div>
            <div class="ps-card-links">
                <a href="${project.github}" target="_blank" class="ps-card-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.liveView}" target="_blank" class="ps-card-link">
                    <i class="fas fa-external-link-alt"></i> Live View
                </a>
            </div>
            <span class="ps-card-progress ${project.progress}">
                <i class="fas fa-${project.progress === 'completed' ? 'check-circle' : project.progress === 'pending' ? 'clock' : 'pause-circle'}"></i>
                ${project.progress}
            </span>
        </div>
    `;

    card.appendChild(content);
    return card;
}

function renderCards() {
    projects.forEach((project, index) => {
        const card = createCard(project, index);
        cardContainer.appendChild(card);
    });
}

function moveToNextCard() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCardPositions();
}

function moveToPrevCard() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCardPositions();
}

function updateCardPositions() {
    const cards = document.querySelectorAll('.ps-card');
    cards.forEach((card, index) => {
        const offset = (index - currentIndex + projects.length) % projects.length;
        card.style.transform = `translateX(${offset * 100}%) scale(${offset === 0 ? 1 : 0.9})`;
        card.style.opacity = offset === 0 ? 1 : 0.5;
        card.style.zIndex = offset === 0 ? 1 : 0;
    });
}

renderCards();

nextBtn.addEventListener('click', moveToNextCard);
prevBtn.addEventListener('click', moveToPrevCard);

// Auto-scroll every 7 seconds
setInterval(moveToNextCard, 7000);

// Pause auto-scroll when hovering over the card container
cardContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
cardContainer.addEventListener('mouseleave', () => autoScrollInterval = setInterval(moveToNextCard, 7000));

// Initial update
updateCardPositions();
//end///////////////////////////////

// dom
var h1id1=document.getElementById(h1id1)
console.log(h1id)

let hasas=document.getElementsByClassName(hicl);
console.log(hasas)