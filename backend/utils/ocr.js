```javascript
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

async function extractReceiptTotal(imagePath) {
    // Performs text detection on the image file
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;

    // Assuming the total amount is the last detected text
    let totalAmount = detections[detections.length - 1].description;

    // Remove any non-numeric characters
    totalAmount = totalAmount.replace(/[^0-9.]/g, "");

    return parseFloat(totalAmount);
}

module.exports = {
    extractReceiptTotal
};
```