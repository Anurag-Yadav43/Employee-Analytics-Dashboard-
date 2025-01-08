# Employee-Analytics-Dashboard-
A simple yet powerful employee analytics dashboard built with Node.js, Express, and Chart.js.

Tech Stack

Frontend: HTML5, CSS3, JavaScript, Chart.js, TailwindCSS
Backend: Node.js, Express
Data Visualization: Chart.js
Styling: Tailwind CSS

Prerequisites

Node.js (v14 or higher)
npm (Node Package Manager)
Web browser
Basic command line knowledge

Step-by-Step Deployment Instructions

Set Up Project Structure

bashCopymkdir employee-dashboard
cd employee-dashboard
mkdir frontend backend
cd backend
npm init -y

Install Dependencies

bashCopy# In backend directory
npm install express cors

# Create necessary files
touch server.js
mkdir routes data
touch routes/analytics.js
touch data/employees.json

Copy Code Files


Copy the provided code into respective files following the project structure
Ensure all files are in their correct directories


Start the Application

bashCopy# Start backend server
cd backend
node server.js

# Open frontend
# Simply open frontend/index.html in your browser

Verify Installation


Open http://localhost:3000 in your browser
Check if charts and data are loading properly
Verify API endpoints using Postman or browser

Customization

Add more employee data in employees.json
Modify chart styles in styles.css
Add new analytics features in analytics.js


