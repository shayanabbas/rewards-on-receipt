# Receipt Reading and Reward System React App

## Overview

This application enables users to upload shopping receipts, extract the total bill amount using Optical Character Recognition (OCR) techniques, and earn points based on their shopping expenses. They can then redeem these points to get amazing products or offers. The application also features an admin panel to set the points-to-currency conversion rate, manage available products for redemption, and more.

## Software Technical Guide

### Architecture

- **Frontend**: The user interface is crafted using React.js. Popular UI libraries like Material-UI or Ant Design have been employed to render a beautiful and intuitive design.
- **Backend**: For the server-side operations, we've used the Express.js framework built on Node.js.
- **Database**: You can opt between MongoDB (a NoSQL database) or PostgreSQL (a relational database) as per your preference and familiarity.

### Data Flow

1. A user initiates by registering or logging into the application leveraging the Auth0 API.
2. They can then upload their shopping receipts.
3. The uploaded receipt is processed using the Google OCR API to extract the total amount.
4. Based on the extracted total and the conversion rate (set by the admin), the user is awarded points.
5. Users can check their total points and choose to redeem them for exciting digital or physical products.

### Dependencies

- React.js (for frontend development)
- Express.js (for backend development)
- MongoDB or PostgreSQL (as the database)
- Google OCR API (for receipt reading)
- Auth0 API (for user authentication)

### Maintenance

- **Dependencies**: Ensure that all the project dependencies are updated to their latest versions. This is crucial for maintaining the security and performance of the application.

### Troubleshooting

- **Application fails to start**: Check whether all environment variables are correctly set and ensure that all dependencies have been installed.
- **OCR fails to read receipt**: Verify the validity of your Google OCR API key and ensure that you haven't exhausted your request quota.

## User Document

### How to Use the Software

- **Login/Register**:
  1. Access the login screen.
  2. Provide your email/username and password.
  3. You also have an option to log in using social media credentials.
- **Uploading Receipts**:
  1. Navigate to the dashboard.
  2. Use the provisioned area to drag and drop or click to upload your receipts.
  3. Check out recently uploaded receipts and the points you've earned.
- **Redeeming Points**:
  1. Go to the redemption page.
  2. Decide between digital or physical products.
  3. Select the desired product and redeem it using your points.

### Tips for Efficient Usage

- Upload your receipts consistently to accumulate points.
- Regularly visit the redemption page to discover new products.

### FAQ

- **How are points determined?**: The points you earn are derived from the total amount on your receipt. The conversion rate is determined by the admin.
- **Can I upload older receipts?**: Absolutely! However, ensure the receipt is still clear and legible for accurate OCR reading.

## End User Document

### Overview

Our application is your new shopping buddy. Just upload your shopping receipts, gather points, and grab attractive products!

### Getting Started

1. Launch the application.
2. Register or log in.
3. Start uploading your receipts.
4. Check the points you've earned.
5. Dive into our collection and redeem your favorite products using the points.

### Basic Instructions

- **Uploading Receipt**: Hit the "Upload" button and pick your receipt image.
- **Redeeming Points**: Visit the "Redeem Points" section and pick the product that catches your eye.

## Tech Stack

- **Frontend**: Crafted using React.js combined with either Material-UI or Ant Design for an intuitive UI/UX.
- **Backend**: Developed using Express.js. Choice of database: MongoDB or PostgreSQL.
- **APIs**: Implemented Google OCR for receipt reading and Auth0 for user authentication.

## Getting Started for Developers

### Prerequisites

- Node.js
- MongoDB or PostgreSQL

### Comprehensive Breakdown of the Project Structure

1. Project File Structure

The file structure has been designed to segregate frontend and backend operations, ensuring a modular and maintainable codebase.

```
/receipt-reward-app
|-- /frontend
| |-- /src
| | |-- /components
| | | |-- Login.js
| | | |-- Dashboard.js
| | | |-- Redemption.js
| | | |-- AdminPanel.js
| | |-- /assets
| | | |-- /images
| | | |-- /styles
| |-- package.json
|-- /backend
| |-- /routes
| | |-- auth.js
| | |-- receipts.js
| | |-- points.js
| | |-- products.js
| |-- /models
| | |-- User.js
| | |-- Receipt.js
| | |-- Product.js
| |-- server.js
| |-- package.json
|-- README.md
```

2. Detailed File and Functionality Description

**Frontend:**

**Login.js**: This component provides the interface for users to log in or register. It includes:

- Fields for email/username and password.
- Options to register or recover a forgotten password.
- Icons for direct login using social media platforms.
- Interaction with the Auth0 API for authentication.

**Dashboard.js**: Users' main hub post-login. It encompasses:

- A section to upload shopping receipts.
- A display of recently uploaded receipts alongside the earned points.
- A counter showing the user's total points.

**Redemption.js**: This component facilitates the redemption of points. Features include:

- Separate sections for digital and physical products.
- Lists or grids showcasing products, their images, descriptions, required points for redemption, and a redeem option.

**AdminPanel.js**: Restricted to admin access, this component allows:

- Admin login for added security.
- Configuration settings to adjust the points-to-currency conversion rate.
- Options to manage (add, edit, or remove) digital and physical products.

**Backend:**

**auth.js (Routes)**:

- Facilitates user registration, login, and authentication using Auth0.

**receipts.js (Routes)**:

- Provides endpoints to upload receipts.
- Integrates with Google OCR API to process and store the total bill amount from the receipt.

**points.js (Routes)**:

- Contains logic to compute and allocate points to users based on their shopping receipts.

**products.js (Routes)**:

- Endpoints for administrators to add, modify, or delete digital and physical products.
- Manages product redemption activities.

**User.js (Model)**: This model defines the schema for users, including:

- Email/Username
- Hashed password
- Total accumulated points

**Receipt.js (Model)**: This model stores data about uploaded receipts:

- A reference to the user ID.
- Image URL of the receipt.
- Total bill amount extracted from the receipt.
- Points awarded for the specific receipt.

**Product.js (Model)**: Defines the structure for redeemable products:

- Product Image URL
- Description
- Product Title
- Points required for redemption
- Type of the product (Digital/Physical).

3. Recommendations for Developers:

**Modularity**: Always ensure that functions and components remain modular. This not only makes the code more maintainable but also simplifies testing.

**Regular Updates**: Make it a habit to regularly check and update the dependencies. This minimizes vulnerabilities and guarantees smooth performance.

**Database Backups**: Regardless of whether you choose MongoDB or PostgreSQL, maintain regular backups of your database to prevent any data loss.

**API Limits**: Keep an eye on your API request limits, especially for third-party services like Google OCR. Overstepping these limits could lead to temporary suspension or additional costs.