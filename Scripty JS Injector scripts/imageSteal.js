// Find all image elements within the body
var images = document.querySelectorAll('img');

// Create an array to store image data
var imageData = [];

images.forEach((img) => {
    // Get the src attribute of each image
    var imgSrc = img.getAttribute('src');

    // Check if the image is initially hidden or invisible
    var isHidden = img.style.visibility === 'hidden' || img.style.display === 'none';

    // Add the image data to the array
    imageData.push({
        src: imgSrc,
        visibility: isHidden ? 'hidden' : 'visible'
    });
});

// Display a message if no images found
if (imageData.length === 0) {
    alert('No images found on the page.');
} else {
    // Open a new window
    var newWindow = window.open('', '_blank');

    // Set the content of the new window
    newWindow.document.write('<html><head><title>Image URLs</title></head><body>');

    // Display each image in the new window along with visibility messages
    imageData.forEach((imgData) => {
        if (imgData.visibility === 'hidden') {
            newWindow.document.write('<p>Hidden: ' + imgData.src + '</p>');
        } else {
            newWindow.document.write('<img src="' + imgData.src + '" /><br>');
            newWindow.document.write('<p>Visible: ' + imgData.src + '</p>');
        }
    });

    // Close the HTML content and the new window
    newWindow.document.write('</body></html>');
    newWindow.document.close();
}
