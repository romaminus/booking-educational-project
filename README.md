# booking-educational-project
Simple copy Booking

    ===   Installation & Run:

1. Clone the repository:
    git clone https://github.com/romaminus/booking-educational-project.git
    cd booking-educational-project
2. Install dependencies for both client and server:
    npm install
    cd client
    npm install
    cd server
    npm install
3. Run the project:
    At the root of the project:
    npm run dev
    This command uses concurrently to run both the frontend and backend servers simultaneously.

Frontend available at: http://localhost:5173
Backend API available at: http://localhost:5000

    ===   Setting Up Environment Variables:

This project uses environment variables to configure the API, 
allowing for easy switching between local development and other environments.
1. Create a .env file: 
    In the root of your project (where package.json is located), 
    create a new file named .env.
2. Populate .env: 
    Copy the contents of the .env.example file into your newly created .env file. 
    Then, fill in the value for VITE_API_BASE_URL with the URL of your local server.

Example .env file:
    VITE_API_BASE_URL=http://localhost:5000

Note: Ensure the port (5000 in the example) matches the port on which your server is running.

    ===   Project Structure:

booking-educational-project
├── client/               # React frontend  
│   ├── public/
│   ├── src/  
│   │   ├── img/  
│   │   ├── components/ 
│   │   ├── pages/
│   │   ├── store/  
│   │   ├── index.css 
│   │   ├── App.jsx  
│   │   └── main.jsx 
│   ├── index.html        # HTML template  
│   ├── .env 
│   └── package.json      # Frontend dependencies and scripts  
│  
├── server/               # Node.js + Express backend  
│   ├── helpers/          # Helper functions  
│   ├── db.json           # Database simulation (mock data)  
│   ├── serverApp.js      # Server entry point  
│   └── package.json      # Backend dependencies and scripts  
│  
├── package.json          # Root config (concurrently for running client & server)  
└── README.md             # Project documentation