const Header = (title, date, temp) => {
  
  const headDiv = document.createElement('div');
  const headDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const headTemp = document.createElement('span');

  headTitle.classList.add('header')
  headDate.classList.add('date')
  headTemp.classList.add('temp')

  headDiv.append(headDate);
  headDiv.append(headTitle);
  headDiv.append(headTemp);

  headDate.textContent = title;
  headTitle.textContent = date;
  headTemp.textContent = temp;
  
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  return headDiv;
}

const headerAppender = (selector) => {
let headContainer = document.querySelector(selector);
  headContainer.append(Header('The Lambda Times', '1/23/2021', '26F'))
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 

export { Header, headerAppender }