// document.addEventListener('DOMContentLoaded', (e) => {
//     e.preventDefault()
//     about_holder_div.style.display = "none";
//     portfolio_holder_div.style.display = "none";
//     contact_holder_div.style.display = "none";
// })

document.addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.id) {
        case "home_button":
            showHomeDiv();
            break;
        case "about_button":
            showAboutDiv();
            break;
        case "portfolio_button":
            showPortfolioDiv();
            break;
        case "contact_button":
            showContactDiv();
            break;
        default:
            break;
    }
})

function showHomeDiv() {
    about_holder_div.style.display = "none";
    portfolio_holder_div.style.display = "none";
    contact_holder_div.style.display = "none";
    home_holder_div.style.display = "block";
}

function showAboutDiv() {
    home_holder_div.style.display = "none";
    portfolio_holder_div.style.display = "none";
    contact_holder_div.style.display = "none";
    about_holder_div.style.display = "block";
}

function showPortfolioDiv() {
    home_holder_div.style.display = "none";
    about_holder_div.style.display = "none";
    contact_holder_div.style.display = "none";
    portfolio_holder_div.style.display = "block";
}

function showContactDiv() {
    home_holder_div.style.display = "none";
    about_holder_div.style.display = "none";
    portfolio_holder_div.style.display = "none";
    contact_holder_div.style.display = "block";
}