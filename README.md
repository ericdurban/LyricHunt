# Project 

This project is a Lyric generator website that utilizes a free public API from https://api.lyrics.ovh/v1 by providing the song's title and artist name. 

## Technologies Used

- Node.js: JavaScript runtime environment used for building the server.
- Express: Web framework for Node.js that simplifies server creation and routing.
- Axios: Promise-based HTTP client used to make API requests.
- Body-Parser: Middleware to parse incoming request bodies in various formats (JSON, URL-encoded).
- API: Tapping into data from https://api.lyrics.ovh/v1. 

## Installation Steps

To install this project, you will want to follow these instructions in order:
1. Ensure you have Node.js installed on your local machine. Once Node.js is running, open a new terminal and move to the next step. 
2. Clone the repository by entering 'git clone https://github.com/ericdurban/LyricHunt.git' in the terminal.
3. Enter in terminal, 'cd LyricHunt'. 
4. Enter in terminal, 'npm install' to ensure all the needed dependencies are added and installed locally. 
PLEASE NOTE: If you have any issues in later steps running the project, try individually installing dependencies listed on top of index.js file. For example, enter in terminal, 'npm i express' to install express dependency package. 
5. Enter in terminal, 'npm start'. Your terminal should register the command and provide a message "Server running on port: 3000". 

## Usage

Steps to utilize the application:
1. Once you've received the message from your terminal that the server is running, open your browser and navigate to http://localhost:3000. 
2. Now enter the song title and artist name in the input fields. 
PLEASE NOTE: This will not work if you are missing one of the inputs or if it's spelled incorrectly. 
3. Click "Get Lyrics" to retreive the lyrics from the API and the application will display the lyrics for the song. 
4. OPTIONAL: You can enter another artist and song title to generate more songs OR click "reset" to reset the page and remove any existing lyrics. 

## Contributing 

If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/your-feature).
6. Create a new pull request.

## License
This project does not currently have a license. All rights reserved. 
This project is free to use for personal, non-commercial purposes only. You may not distribute or modify the project without the author's permission.

## Acknowledgements

- Thanks to Bootstrap for the great UI Framework.
- Thanks to Angela Yu and her amazing bootcamp that helped me develop the tools I needed to make this website!
