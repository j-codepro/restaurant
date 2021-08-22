function createContact() {
    const contact = document.createElement('section');
    contact.classList.add('contact-content');
    contact.appendChild(createBlockCenter());
    
    return contact;
}

function createBlockCenter() {
    const blockCenter = document.createElement('div');
    blockCenter.classList.add('block-center');

    const blockCenterTitle = document.createElement('div');
    blockCenterTitle.classList.add('block-center-title');
    blockCenterTitle.innerHTML = `
    <span>Contact</span>come and taste our flavors
    `;
    blockCenter.appendChild(blockCenterTitle);

    const infoHours = document.createElement('div');
    infoHours.classList.add('info-hours');
    infoHours.innerHTML = `
    <p>
        29 E 61st St, New York, NY 10065<br>
        +1 987 654 3210<br>
        <a href="mailto:contact@thefiasco.com">contact@thefiasco.com</a><br>
    </p>
    <ul>
        <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
        <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
        <li>Monday to Friday | 10:00 AM - 11:00 PM</li>
    </ul>
    `;
    blockCenter.appendChild(infoHours);

    return blockCenter;
}

function createMaps() {
    const googleMaps = document.createElement('iframe');
    googleMaps.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.495261265754!2d-73.9699213!3d40.7648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4967cfbad5616243!2sLa%20Goulue%20New%20York!5e0!3m2!1sfr!2sfr!4v1629311739872!5m2!1sfr!2sfr';
    googleMaps.classList.add('map');
    
    return googleMaps;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
    main.appendChild(createMaps());
}


export default loadContact;