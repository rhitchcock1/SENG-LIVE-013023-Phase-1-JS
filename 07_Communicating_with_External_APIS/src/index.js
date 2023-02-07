const resultsDiv = document.querySelector('#results');
document.addEventListener('DOMContentLoaded', () => {
  const apiSearchForm = document.querySelector('#api-Search');
  
  apiSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encodeURI(e.target.search.value);
    console.log(query);
    const elements = [
      createElement('p', {
        textContent: query
      }),
      createElement('img', {
        src: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
        alt: 'Book cover'
      })
    ];
    resultsDiv.append(...elements)
  })
})