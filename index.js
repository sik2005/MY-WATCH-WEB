// Create header element
const header = document.createElement('header');
const heading = document.createElement('h1');
heading.textContent = 'Welcome to Our Ecommerce Website';
header.appendChild(heading);

// Create navigation element
const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.id = 'navbar';
const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
homeLink.id = 'home-link';
const productsLink = document.createElement('a');
productsLink.href = '#';
productsLink.textContent = 'Products';
productsLink.id = 'products-link';
const cartLink = document.createElement('a');
cartLink.href = '#';
cartLink.textContent = 'Cart';
cartLink.id = 'cart-link';
const homeLi = document.createElement('li');
homeLi.appendChild(homeLink);
const productsLi = document.createElement('li');
productsLi.appendChild(productsLink);
const cartLi = document.createElement('li');
cartLi.appendChild(cartLink);
ul.appendChild(homeLi);
ul.appendChild(productsLi);
ul.appendChild(cartLi);
nav.appendChild(ul);

// Create main content element
const mainContent = document.createElement('main');
mainContent.id = 'main-content';

// Create footer element
const footer = document.createElement('footer');
const footerParagraph = document.createElement('p');
footerParagraph.textContent = '\u00A9 2024 Ecommerce Website. All rights reserved.';
footer.appendChild(footerParagraph);

// Append all elements to the body
document.body.appendChild(header);
document.body.appendChild(nav);
document.body.appendChild(mainContent);
document.body.appendChild(footer);
