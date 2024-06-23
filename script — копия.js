// script.js
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filters button');
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementsByClassName('close')[0];

    // Sample images data with relative paths
    const images = [
        { src: 'images/fr_image11.jpg', category: 'freelance' },
        { src: 'images/fr_image10.jpg', category: 'freelance' },
        { src: 'images/fr_image8_1.jpg', category: 'freelance' },
        { src: 'images/fr_image9.jpg', category: 'freelance' },
        { src: 'images/fr_image7.jpg', category: 'freelance' },

        { src: 'images/image7.png', category: 'personal' },

        { src: 'images/image100.jpg', category: 'personal' },
        { src: 'images/image99.jpg', category: 'personal' },

        { src: 'images/image8.jpg', category: 'personal' },
        { src: 'images/image6.jpg', category: 'personal' },
        { src: 'images/image5.jpg', category: 'personal' },
	{ src: 'images/image4.jpg', category: 'personal' },
	{ src: 'images/image3.jpg', category: 'personal' },
	{ src: 'images/image2.jpg', category: 'personal' },
	{ src: 'images/image1.jpg', category: 'personal' },
        // Add more images with respective categories and relative paths
    ];

    // Function to display images
    function displayImages(filter) {
        gallery.innerHTML = '';
        const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
        filteredImages.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.category;
            imgElement.addEventListener('click', () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
            gallery.appendChild(imgElement);
        });
    }

    // Initialize gallery with all images
    displayImages('all');

    // Filter buttons click event
    filters.forEach(button => {
        button.addEventListener('click', function() {
            filters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayImages(filter);
        });
    });

    // Close the modal
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
