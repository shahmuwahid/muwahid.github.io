// Function to fetch data from the API and display it in the containers
function fetchData() {
    // Fetch data from the API
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f7d54802ae9d4e2eb6b90d6e456b63ee')
      .then(response => response.json())
      .then(data => {
        // Get the first 8 articles from the response
        const articles = data.articles.slice(0, 8);
  
        // Get the container elements
        const containers = document.getElementsByClassName('g-col-6');
  
        // Loop through the containers and update their content with the article information
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          const article = articles[i];
  
          // Create elements to display the article information
          const titleElement = document.createElement('h3');
          titleElement.textContent = article.title;
  
          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = article.description;
  
          const authorElement = document.createElement('p');
          authorElement.textContent = 'Author: ' + article.author;
  
          const imageElement = document.createElement('img');
          imageElement.src = article.urlToImage;
          imageElement.alt = 'Article Image';
  
          // Clear the container's existing content
          container.innerHTML = '';
  
          // Append the elements to the container
          container.appendChild(imageElement);
          container.appendChild(titleElement);
          container.appendChild(descriptionElement);
          container.appendChild(authorElement);
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Call the fetchData function to fetch and display the data
  fetchData();
  