function createHome() {
    const home = document.createElement('section');
    home.classList.add('home-content');
    home.appendChild(createBlockLeft());
    home.appendChild(createBlockRight())  
    return home;
}
 
function createBlockLeft() {
    const blockLeft = document.createElement('div');
    blockLeft.classList.add('block', 'block-left');

    const blockImg = document.createElement('div');
    blockImg.classList.add('block-img')
    blockLeft.appendChild(blockImg);

    const leftImg = document.createElement('img');
    leftImg.src = '/img/burger.jpg';
    blockImg.appendChild(leftImg);

    const blockBody = document.createElement('div');
    blockBody.classList.add('block-body');
    blockLeft.appendChild(blockBody);

    const bodyH2 = document.createElement('h2');
    bodyH2.classList.add('title');
    bodyH2.innerHTML = '<span>Discover</span>Our gastronomy';
    blockBody.appendChild(bodyH2);

    const bodyP = document.createElement('p');
    bodyP.innerText = 'Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.';
    blockBody.appendChild(bodyP);

    const bodyMore = document.createElement('div');
    bodyMore.classList.add('more');
    blockBody.appendChild(bodyMore);
    
    const aMore = document.createElement('a');
    aMore.href = '#';
    aMore.innerHTML = 'See more &rarr;'
    bodyMore.appendChild(aMore);
    /////////////////////ajouter le onclick//////////////////////
    
    return blockLeft;
}

function createBlockRight() {
    const blockRight = document.createElement('div');
    blockRight.classList.add('block', 'block-right');

    const blockImg = document.createElement('div');
    blockImg.classList.add('block-img')
    blockRight.appendChild(blockImg);

    const rightImg = document.createElement('img');
    rightImg.src = '../dist/img/crusted-chicken.jpg';
    blockImg.appendChild(rightImg);

    const blockBody = document.createElement('div');
    blockBody.classList.add('block-body');
    blockRight.appendChild(blockBody);

    const bodyH2 = document.createElement('h2');
    bodyH2.classList.add('title');
    bodyH2.innerHTML = "<span>Tasteful</span>Recipes made with love";
    blockBody.appendChild(bodyH2);

    const bodyP = document.createElement('p');
    bodyP.innerText = 'Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals. A classified is usually textually based and can consist of as little as the type of item being sold, and a contact number to call for more information.';
    blockBody.appendChild(bodyP);

    const bodyMore = document.createElement('div');
    bodyMore.classList.add('more');
    blockBody.appendChild(bodyMore);
    
    const aMore = document.createElement('a');
    aMore.href = '#';
    aMore.innerHTML = 'See more &rarr;'
    bodyMore.appendChild(aMore);

    return blockRight;
}

function loadHome () {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}


export default loadHome;