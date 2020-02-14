// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CreateArticleCards(obj) {
    //create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const by = document.createElement('span');

    //add class
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //create text context
    headline.textContent = obj.headline;
    image.textContent = obj.authorPhoto;
    author.textContent = obj.authorName;
    by.textContent = `By ${obj.authorName}`;

    //build structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(by);

    return card;
}

const cardsContainer = document.querySelector('.cards-container');
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data);
    
    Object.values(response.data.articles).forEach(item => {
        item.forEach(x => {
            cardsContainer.appendChild(CreateArticleCards(x));
        })
    })
})
.catch(error => {
    console.log('the data was not returned', error);
});