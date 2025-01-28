import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import help from "../assets/Component 1.png";
import man from "../assets/bro.png";
import woman from "../assets/pana.png";

const Coverpage = () => {
  // Array containing the image assets to be displayed in the slideshow
  const homeimages = [help, man, woman];

  //  useState hook to track the index of teh current image being displayed{initially set to 0}
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useState hook to track wether the transition effect is active {initially set to false}
  const [transitioning, setTransitioning] = useState(false);

  // useEffect hook to manage the image transition logic and periodic image updates.
  useEffect(() => {
    // Setting up an interval to change the images every 2.5 seconds
    const animation = setInterval(() => {
      setTransitioning(true); //Start the transition effect when interval triggers

      // After 5sec, update the current image index and stop the transition effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          // Update to the next image index, and loop back to 0 if at the end of the array
          return (prevIndex + 1) % homeimages.length;
        });

        setTransitioning(false); //Stop the transition effect after updating the image index
      }, 500); //Delay to allow the transition to complete before updating the index
    }, 2500); // interval set to trigger every 2.5 seconds

    // Cleanup function to clear the interval when the component unmounts or if dependencies change
    return () => {
      clearInterval(animation);
    };
  }, [homeimages.length]); //Dependency array to ensure the effect runs if the length of homeimages changes

  return (
    <header className="homepage-con">
      <div className="home-content">
        <div className="home-text text-start mt-3">
          <h1>
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link to="/tasks">Go to My Tasks</Link>
        </div>

        {/* ======================== */}
        <div className="home-img">
          <img
            // Setting the source of the image to the current image based on the index
            src={homeimages[currentImageIndex]}
            alt=""
            // Changing the opacity based on the transitioning state
            style={{
              // If transition, set opacity to 0, else 1
              opacity: transitioning ? 0 : 1,

              //Applying a smooth transition for the opacity change
              transition: "opacity 2s ease-in-out",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Coverpage;
