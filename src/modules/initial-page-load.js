import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const topbar = document.createElement('div');
    topbar.classList.add('topbar');
    header.appendChild(topbar);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    topbar.appendChild(logo);

    const aHomeLogo = document.createElement('a');
    aHomeLogo.href = '#';
    aHomeLogo.innerHTML = 'Le Fiasco';
    logo.appendChild(aHomeLogo);

    aHomeLogo.onclick = function() {
        createHomeHeader();
        loadHome();
    }

    topbar.appendChild(createNav());

    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.innerHTML = `
    <span class="slogan-welcome">Welcome</span>
    <strong class="slogan-name">Le Fiasco</strong>
    <span class="slogan-speciality">Mediterranean Speciality</span>
    `
    header.appendChild(slogan);

    return header;
}

function createHomeHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('second','third');


    const slogan = document.querySelector('.slogan');
    slogan.innerHTML = `
    <span class="slogan-welcome">Welcome</span>
    <strong class="slogan-name">Le Fiasco</strong>
    <span class="slogan-speciality">Mediterranean Speciality</span>
    `;
}

function createMenuHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('third');
    header.classList.add('header', 'second');
    
    const slogan = document.querySelector('.slogan');
    slogan.innerHTML = `
    <strong class="slogan-name">Menu</strong>
    <span class="slogan-speciality">Mediterranean Speciality</span>
    `;
}

function createContactHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header', 'third');

    const slogan = document.querySelector('.slogan');
    slogan.innerHTML = `
    <strong class="slogan-name">Contact Us</strong>
    <span class="slogan-contact">__________</span>
    `;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('menu');

    const aHome = document.createElement('a');
    const aMenu = document.createElement('a');
    const aContact = document.createElement('a');

    aHome.href = '#Home';
    aMenu.href = '#Menu';
    aContact.href = '#Contact';

    aHome.onclick = function() {
        createHomeHeader();
        loadHome();
    }

    aMenu.onclick = function() {
        createMenuHeader();
        loadMenu();
    }

    aContact.onclick = function() {
        createContactHeader();
        loadContact();
    }

    aHome.classList.add('menu-item');
    aMenu.classList.add('menu-item');
    aContact.classList.add('menu-item');

    aHome.innerHTML = 'Home';
    aMenu.innerHTML = 'Menu';
    aContact.innerHTML = 'Contact';

    nav.appendChild(aHome);
    nav.appendChild(aMenu);
    nav.appendChild(aContact);

    return nav
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const container = document.createElement('div');
    container.classList.add('container');
    footer.appendChild(container);

    const fColumns = document.createElement('div');
    fColumns.classList.add('footer-columns');
    container.appendChild(fColumns);

    const fColumn1 = document.createElement('div');
    fColumn1.classList.add('footer-column');
    fColumns.appendChild(fColumn1);
    const colTitle1 = document.createElement('div');
    colTitle1.classList.add('footer-title');
    colTitle1.innerHTML = 'The Fiasco'
    fColumn1.appendChild(colTitle1);
    const colPara1 = document.createElement('p');
    colPara1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi saepe.';
    fColumn1.appendChild(colPara1);

    const fColumn2 = document.createElement('div');
    fColumn2.classList.add('footer-column');
    fColumns.appendChild(fColumn2);
    const colTitle2 = document.createElement('div');
    colTitle2.classList.add('footer-title');
    colTitle2.innerHTML = 'Contact Info';
    fColumn2.appendChild(colTitle2);
    const colPara2 = document.createElement('p');
    colPara2.innerHTML = `
    1234 Altschul, New York, NY 10027-0000<br>
    +1 987 654 3210<br>
    <a href="mailto:contact@thefiasco.com">contact@thefiasco.com</a><br>
    `;
    fColumn2.appendChild(colPara2);

    const fColumn3 = document.createElement('div');
    fColumn3.classList.add('footer-column');
    fColumns.appendChild(fColumn3);
    const colTitle3 = document.createElement('div');
    colTitle3.classList.add('footer-title');
    colTitle3.innerHTML = 'Opening Hours';
    fColumn3.appendChild(colTitle3);
    const ulHours = document.createElement('ul');
    ulHours.innerHTML = `
    <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
    <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
    <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
    `;
    fColumn3.appendChild(ulHours);

    const fCredits = document.createElement('div');
    fCredits.classList.add('footer-credits');
    fCredits.innerHTML = `
    <span>2021 THE FIASCO. </span>All rights reserved.
    `;
    container.appendChild(fCredits);

    return footer;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    
    return main;
}

function loadInit() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default loadInit;