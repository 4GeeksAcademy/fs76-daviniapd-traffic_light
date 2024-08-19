import React, { useState } from "react";
import "/styles.css";

const defaultStates = {
    red: { color: "#990000", border: "black", shadow: "none" },
    amber: { color: "#b86514", border: "black", shadow: "none" },
    green: { color: "#016801", border: "black", shadow: "none" },
    purple: { color: "#4B0082", border: "black", shadow: "none" }
};

const activeStates = {
    red: { color: "red", border: "beige", shadow: "0 0 30px red" },
    amber: { color: "#ff8d1e", border: "beige", shadow: "0 0 30px #ff8d1e" },
    green: { color: "#06cd06", border: "beige", shadow: "0 0 30px #06cd06" },
    purple: { color: "#800080", border: "beige", shadow: "0 0 30px #800080" }
};

const TrafficLight = () => {
    const [lights, setLights] = useState(defaultStates);
    const [cycle, setCycle] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [showPurple, setShowPurple] = useState(false);

    const resetTrafficLight = () => {
        setLights(defaultStates);
    };

    const updateLight = (color, newState) => {
        setLights(prevLights => ({
            ...prevLights,
            [color]: { ...prevLights[color], ...newState }
        }));
    };


    const cycleOn = () => {
        if (cycle) {
            clearInterval(intervalId); // Clear the interval
            setCycle(false);
            setIntervalId(null);
            resetTrafficLight(); 
        } else {
          setCycle(true);
          let currentColor = "red";
      
          updateLight("red", activeStates.red);
          updateLight("amber", defaultStates.amber);
          updateLight("green", defaultStates.green);
          updateLight("purple", defaultStates.purple);
      
          const newIntervalId = setInterval(() => {
            if (currentColor === "red") {
              setTimeout(() => {
                let blinkCount = 0;
                const blinkInterval = setInterval(() => {
                  if (blinkCount < 5) {
                    updateLight("red", {
                      ...activeStates.red,
                      shadow: blinkCount % 2 === 0 ? "0 0 30px red" : "none",
                      border: blinkCount % 2 === 0 ? "beige" : "black",
                      color: blinkCount % 2 === 0 ? "red" : "#990000"
                    });
                    blinkCount++;
                  } else {
                    clearInterval(blinkInterval);
                  }
                }, 150);
                setTimeout(() => {
                  clearInterval(blinkInterval);
                  updateLight("red", defaultStates.red);
                  updateLight("amber", activeStates.amber);
                  currentColor = "amber";
                }, 1000); 
              }, 1000);
            } else if (currentColor === "amber") {
              setTimeout(() => {
                updateLight("amber", defaultStates.amber);
                updateLight("green", activeStates.green);
                currentColor = "green";
              }, 1000);
            } else if (currentColor === "green") {
              setTimeout(() => {
                let blinkCount = 0;
                const blinkInterval = setInterval(() => {
                  if (blinkCount < 5) {
                    updateLight("green", {
                      ...activeStates.green,
                      shadow: blinkCount % 2 === 0 ? "0 0 30px green" : "none",
                      border: blinkCount % 2 === 0 ? "beige" : "black",
                      color: blinkCount % 2 === 0 ? "#06cd06" : "#016801"
                    });
                    blinkCount++;
                  } else {
                    clearInterval(blinkInterval);
                  }
                }, 150);
                setTimeout(() => {
                  clearInterval(blinkInterval);
                  if (showPurple) {
                    updateLight("green", defaultStates.green);
                    updateLight("purple", activeStates.purple);
                    currentColor = "purple";
                  } else {
                    updateLight("green", defaultStates.green);
                    updateLight("red", activeStates.red);
                    currentColor = "red";
                  }
                }, 1000);
              }, 1000);
            } else if (currentColor === "purple") {
              setTimeout(() => {
                updateLight("purple", defaultStates.purple);
                updateLight("red", activeStates.red);
                currentColor = "red";
              }, 1000);
            }
          }, 3000);
      
          setIntervalId(newIntervalId);
        }
      };

      const handleLightClick = (color) => {
        if (cycle) {
          clearInterval(intervalId);
          setCycle(false);
          setIntervalId(null);
          resetTrafficLight(); 
        }
        const isActive = lights[color].color !== defaultStates[color].color;
        const newState = isActive ? defaultStates[color] : activeStates[color];
        updateLight(color, newState);
      };

    const togglePurple = () => {
        setShowPurple(!showPurple);
        if (cycle) {
          clearInterval(intervalId);
          setCycle(false);
          setIntervalId(null);
          resetTrafficLight(); 
        }
        const isActive = lights[color].color !== defaultStates[color].color;
        const newState = isActive ? defaultStates[color] : activeStates[color];
        updateLight(color, newState);
      };

    return (
        <>
            <div className="stick"></div>
            <div className="traffic-light">
                <button className="red-light" style={{ background: lights.red.color, borderColor: lights.red.border, boxShadow: lights.red.shadow }} onClick={() => handleLightClick('red')}></button>
                <button className="amber-light" style={{ background: lights.amber.color, borderColor: lights.amber.border, boxShadow: lights.amber.shadow }} onClick={() => handleLightClick('amber')}></button>
                <button className="green-light" style={{ background: lights.green.color, borderColor: lights.green.border, boxShadow: lights.green.shadow }} onClick={() => handleLightClick('green')}></button>
                {showPurple && (
                    <button className="purple-light" style={{ background: lights.purple.color, borderColor: lights.purple.border, boxShadow: lights.purple.shadow }} onClick={() => handleLightClick('purple')}></button>
                )}
            </div>
            <button type="button" className="btn btn-success btn-lg mt-4 mb-2" id="cycleButton" onClick={cycleOn}>{cycle ? "Cycle OFF" : "Cycle ON"}</button>
            <button type="button" className="btn btn-primary btn-lg" id="purpleButton" onClick={togglePurple}>{showPurple ? "Remove Color" : "Add Color"}</button>
        </>
    );
};

export default TrafficLight;
