import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

    const newsCard = document.createElement('div');
    const newsTitle = document.createElement('div');
    const newsAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const newsImg = document.createElement('img');
    const authorName = document.createElement('span');

    newsCard.classList.add('card');
    newsTitle.classList.add('headline');
    newsAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    newsCard.appendChild(newsTitle);
    newsCard.appendChild(newsAuthor);
    newsAuthor.appendChild(imgContainer);
    newsAuthor.appendChild(authorName);
    imgContainer.appendChild(newsImg);

    newsTitle.textContent = article.headline;
    authorName.textContent = article.authorName;
    newsImg.setAttribute('src', article.authorPhoto);

    newsCard.addEventListener('click', () => {
    console.log(newsTitle.textContent);
})

return newsCard;


}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    res.data.topics.forEach(topic => {
  
      axios.get('https://lambda-times-api.herokuapp.com/articles')
      .then(res => {
        let target = document.querySelector(selector);
        
        if(topic === 'node.js'){
          topic = 'node';
        } 
        let cardData = (res.data.articles[topic])
        
        for(let i = 0; i < cardData.length; i++){
          target.append(Card(cardData[i]));
        }
      })
    })
  })
  
  }

export { Card, cardAppender }

