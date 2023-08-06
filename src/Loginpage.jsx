import React, { useState } from 'react';
import myImage from './photo.jpg';
import mov1 from './movie1.jpg';
import mov2 from './movie2.jpg';
import mov3 from './movie3.jpg';
import mov4 from './movie4.jpg';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
    console.log(`Username: ${username}`);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // handle logout logic here
    setIsLoggedIn(false);
  };

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2 className="welcome-text">Welcome!</h2>
       
        <h3 className="mov"> MOVIES </h3>
        <div className="movies-container">
          <div className="movie">

          <img src={mov1} width="250" height="200" alt="Movie 1" />
          <img
            
              onClick={handleImageClick}
              className={selectedImage === "movie1.jpg" ? "enlarged" : ""}
            />
            <p>Name   : The Godfather</p>
            <p>Year   : 1972</p>
            <p>Rating : 9.2/10</p>
          </div>

          <div className="movie">

            <img
              src={mov2} width="230" height="200"
              alt="Movie 2"
              onClick={handleImageClick}
              className={selectedImage === "movie2.jpg" ? "enlarged" : ""}
            />
            <p>Name   : Inception</p>
            <p>Year   : 2010 </p>
            <p>Rating : 8.8/10 </p>
          </div>
          <div className="movie">
            <img
              src={mov3} width="250" height="500"
              alt="Movie 3"
              onClick={handleImageClick}
              className={selectedImage === "movie3.jpg" ? "enlarged" : ""}
            />
            <p>Name   : Vikram</p>
            <p>Year   :2022</p>
            <p>Rating : 9.1/10</p>
          </div>
          <div className="movie">
            <img
              src={mov4} width="350" height="500"
              alt="Movie 4"
              onClick={handleImageClick}
              className={selectedImage === "movie4.jpg" ? "enlarged" : ""}
            />
            <p>Name   : PS-1</p>
            <p>Year   :2022</p>
            <p>Rating : 7.1/10</p>
          </div>
        </div>
       

        

        <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleLogin}>
        <div className="image-container">
        <img src={myImage} width="200" height="200" alt="Your Image" />
        </div>
        <p>Hi!!</p>
        <p>This is Vishnu Priya M</p>
        <p>My age is 20</p>
        <p>I am from Coimbatore</p>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
         
        </label>
        <br />
        
        <button onClick={handleLogin}>Login</button>
        
      </form>
    );
  }
}

export default LoginPage;
