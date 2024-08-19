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
            clearInterval(intervalId);
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
                    updateLight("red", defaultStates.red);
                    updateLight("amber", activeStates.amber);
                    currentColor = "amber";
                } else if (currentColor === "amber") {
                    updateLight("amber", defaultStates.amber);
                    updateLight("green", activeStates.green);
                    currentColor = "green";
                } else if (currentColor === "green") {
                    updateLight("green", defaultStates.green);
                    if (showPurple) {
                        updateLight("purple", activeStates.purple);
                        currentColor = "purple";
                    } else {
                        updateLight("red", activeStates.red);
                        currentColor = "red";
                    }
                } else if (currentColor === "purple") {
                    updateLight("purple", defaultStates.purple);
                    updateLight("red", activeStates.red);
                    currentColor = "red";
                }
            }, 3000);

            setIntervalId(newIntervalId);
        }
    };

    const handleLightClick = (color) => {
        if (!cycle) {
            const isActive = lights[color].color !== defaultStates[color].color;
            const newState = isActive ? defaultStates[color] : activeStates[color];
            updateLight(color, newState);
        }
    };

    const togglePurple = () => {
        setShowPurple(!showPurple);
        if (cycle) {
            clearInterval(intervalId);
            setCycle(false);
            setIntervalId(null);
            cycleOn();
        }
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
