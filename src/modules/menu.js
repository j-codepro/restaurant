function createMenu () {
    const menu = document.createElement('section');
    menu.classList.add('menu-content');

    menu.appendChild(createBlock());
    menu.appendChild(createMenus());

    return menu
}

function createBlock () {
    const blockCenter = document.createElement('div');
    blockCenter.classList.add('block-center');

    const bcH2 = document.createElement('h2');
    bcH2.classList.add('block-center-title');
    bcH2.innerHTML = `
    <span>Menu</span>Certified bio
    `;
    blockCenter.appendChild(bcH2);

    const bcPara = document.createElement('p');
    blockCenter.appendChild(bcPara);
    bcPara.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium praesentium iste laudantium quae delectus voluptas. Odio, perspiciatis mollitia! Illum in quidem officiis nisi, qui numquam sapiente! Facere, neque quae.';

    return blockCenter;
}

function createMenus () {
    const menuSummary = document.createElement('div');
    menuSummary.classList.add('menu-summary');
    menuSummary.appendChild(createMenu1());
    menuSummary.appendChild(createMenu2());
    menuSummary.appendChild(createMenu3());
    menuSummary.appendChild(createMenu4());

    return menuSummary;
}

function createMenu1 () {
    const menu1 = document.createElement('div');
    menu1.classList.add('menu-content-item');

    const menu1Img = document.createElement('div');
    const menu1ImgItem = document.createElement('img');

    menu1Img.classList.add('menu-item-img');
    menu1ImgItem.src = '../dist/img/crusted-chicken-square.jpg';

    menu1.appendChild(menu1Img);
    menu1Img.appendChild(menu1ImgItem);

    const menu1Body = document.createElement('div');
    const menu1BodyH3 = document.createElement('h3');
    const menu1BodyPara = document.createElement('p');
    const menu1BodyPrice = document.createElement('div')

    menu1Body.classList.add('menu-body');
    menu1BodyH3.classList.add('menu-item-title');
    menu1BodyPrice.classList.add('menu-item-price');

    menu1BodyH3.innerHTML = 'Crusted Chicken';
    menu1BodyPara.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum culpa, natus atque nav reiciendis.';
    menu1BodyPrice.innerHTML = '$20'

    menu1.appendChild(menu1Body);
    menu1Body.appendChild(menu1BodyH3);
    menu1Body.appendChild(menu1BodyPara);
    menu1Body.appendChild(menu1BodyPrice);

    return menu1;
}

function createMenu2 () {
    const menu2 = document.createElement('div');
    menu2.classList.add('menu-content-item','right');

    const menu2Img = document.createElement('div');
    const menu2ImgItem = document.createElement('img');

    menu2Img.classList.add('menu-item-img');
    menu2ImgItem.src = '../dist/img/paella-square.jpg';
    menu2.appendChild(menu2Img);
    menu2Img.appendChild(menu2ImgItem);

    const menu2Body = document.createElement('div');
    const menu2BodyH3 = document.createElement('h3');
    const menu2BodyPara = document.createElement('p');
    const menu2BodyPrice = document.createElement('div')

    menu2Body.classList.add('menu-body');
    menu2BodyH3.classList.add('menu-item-title');
    menu2BodyPrice.classList.add('menu-item-price');

    menu2BodyH3.innerHTML = 'Spicy Egg Paella';
    menu2BodyPara.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum culpa, natus atque nav reiciendis.';
    menu2BodyPrice.innerHTML = '$20'

    menu2.appendChild(menu2Body);
    menu2Body.appendChild(menu2BodyH3);
    menu2Body.appendChild(menu2BodyPara);
    menu2Body.appendChild(menu2BodyPrice);

    return menu2;
}

function createMenu3 () {
    const menu3 = document.createElement('div');
    menu3.classList.add('menu-content-item');

    const menu3Img = document.createElement('div');
    const menu3ImgItem = document.createElement('img');

    menu3Img.classList.add('menu-item-img');
    menu3ImgItem.src = '../dist/img/poisson-square.jpg';

    menu3.appendChild(menu3Img);
    menu3Img.appendChild(menu3ImgItem);

    const menu3Body = document.createElement('div');
    const menu3BodyH3 = document.createElement('h3');
    const menu3BodyPara = document.createElement('p');
    const menu3BodyPrice = document.createElement('div')

    menu3Body.classList.add('menu-body');
    menu3BodyH3.classList.add('menu-item-title');
    menu3BodyPrice.classList.add('menu-item-price');

    menu3BodyH3.innerHTML = 'Perfect Ten Cod';
    menu3BodyPara.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum culpa, natus atque nav reiciendis.';
    menu3BodyPrice.innerHTML = '$20'

    menu3.appendChild(menu3Body);
    menu3Body.appendChild(menu3BodyH3);
    menu3Body.appendChild(menu3BodyPara);
    menu3Body.appendChild(menu3BodyPrice);

    return menu3;
}

function createMenu4 () {
    const menu4 = document.createElement('div');
    menu4.classList.add('menu-content-item','right');

    const menu4Img = document.createElement('div');
    const menu4ImgItem = document.createElement('img');

    menu4Img.classList.add('menu-item-img');
    menu4ImgItem.src = '../dist/img/bobun-light-square.jpg';
    menu4.appendChild(menu4Img);
    menu4Img.appendChild(menu4ImgItem);

    const menu4Body = document.createElement('div');
    const menu4BodyH3 = document.createElement('h3');
    const menu4BodyPara = document.createElement('p');
    const menu4BodyPrice = document.createElement('div')

    menu4Body.classList.add('menu-body');
    menu4BodyH3.classList.add('menu-item-title');
    menu4BodyPrice.classList.add('menu-item-price');

    menu4BodyH3.innerHTML = 'BoBun Light Odd';
    menu4BodyPara.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum culpa, natus atque nav reiciendis.';
    menu4BodyPrice.innerHTML = '$20'

    menu4.appendChild(menu4Body);
    menu4Body.appendChild(menu4BodyH3);
    menu4Body.appendChild(menu4BodyPara);
    menu4Body.appendChild(menu4BodyPrice);

    return menu4;
}

export default createMenu;