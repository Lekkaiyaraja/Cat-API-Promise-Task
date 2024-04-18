// Fetch cat images using Promises
        function fetchCat(url) {
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.blob();
                })
                .then(blob => URL.createObjectURL(blob))
                .catch(error => console.error('Error fetching cat:', error));
        }

        // Display cat images on the webpage
        function displayCatImages() {
            fetchCat('https://cataas.com/cat/says/hello')
                .then(imageUrl => document.getElementById('helloCatImage').src = imageUrl);
            // fetchCat('https://cataas.com/cat/gif')
            //     .then(imageUrl => document.getElementById('gifCatImage').src = imageUrl);
            // fetchCat('https://cataas.com/cat?filter=custom&brightness=1.5&saturation=50')
            //     .then(imageUrl => document.getElementById('filteredCatImage').src = imageUrl);
        }

        // Initialize the cat images on page load
        window.onload = function() {
            displayCatImages();
        };