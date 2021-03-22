const Header = (title, date, temp) => {
  
  const headDiv = document.createElement('div');
  const headDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const headTemp = document.createElement('span');

  headDiv.classList.add('header')
  headTitle.classList.add('title')
  headDate.classList.add('date')
  headTemp.classList.add('temp')

  headDiv.append(headDate);
  headDiv.append(headTitle);
  headDiv.append(headTemp);

  headDate.textContent = title;
  headTitle.textContent = date;
  headTemp.textContent = temp;

  return headDiv;

}

const headerAppender = (selector) => {
  let headContainer = document.querySelector(selector);
    headContainer.append(Header('3/21/2021', 'The Lambda Times', '26F'))
}


export { Header, headerAppender }