import React, { useState } from "react";
import "/styles.css";

const TrafficLight = () => {
    const [redPosition, setRedPosition] = useState("#990000");
    const [amberPosition, setAmberPosition] = useState("#b86514");
    const [greenPosition, setGreenPosition] = useState("#016801");
    const [purplePosition, setPurplePosition] = useState("#4B0082");

    const [redBorder, setRedBorder] = useState("black");
    const [amberBorder, setAmberBorder] = useState("black");
    const [greenBorder, setGreenBorder] = useState("black");
    const [purpleBorder, setPurpleBorder] = useState("black");

    const [redShadow, setRedShadow] = useState("none");
    const [amberShadow, setAmberShadow] = useState("none");
    const [greenShadow, setGreenShadow] = useState("none");
    const [purpleShadow, setPurpleShadow] = useState("none");

    const [cycle, setCycle] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [showPurple, setShowPurple] = useState(false); 

    const resetTrafficLight = () => {
        setRedPosition("#990000");
        setAmberPosition("#b86514");
        setGreenPosition("#016801");
        setPurplePosition("#4B0082");

        setRedBorder("black");
        setAmberBorder("black");
        setGreenBorder("black");
        setPurpleBorder("black");

        setRedShadow("none");
        setAmberShadow("none");
        setGreenShadow("none");
        setPurpleShadow("none");
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

            setRedPosition("red");
            setRedBorder("beige");
            setRedShadow("0 0 30px red");
            setAmberPosition("#b86514");
            setAmberBorder("black");
            setAmberShadow("none");
            setGreenPosition("#016801");
            setGreenBorder("black");
            setGreenShadow("none");
            setPurplePosition("#4B0082");
            setPurpleBorder("black");
            setPurpleShadow("none");

            const newIntervalId = setInterval(() => {
                if (currentColor === "red") {
                    setRedPosition("#990000");
                    setRedBorder("black");
                    setRedShadow("none");
                    setAmberPosition("#ff8d1e");
                    setAmberBorder("beige");
                    setAmberShadow("0 0 30px #ff8d1e");
                    currentColor = "amber";
                } else if (currentColor === "amber") {
                    setAmberPosition("#b86514");
                    setAmberBorder("black");
                    setAmberShadow("none");
                    setGreenPosition("#06cd06");
                    setGreenBorder("beige");
                    setGreenShadow("0 0 30px #06cd06");
                    currentColor = "green";
                } else if (currentColor === "green") {
                    setGreenPosition("#016801");
                    setGreenBorder("black");
                    setGreenShadow("none");
                    if (showPurple) { // Añadido
                        setPurplePosition("#800080");
                        setPurpleBorder("beige");
                        setPurpleShadow("0 0 30px #800080");
                        currentColor = "purple";
                    } else {
                        setRedPosition("red");
                        setRedBorder("beige");
                        setRedShadow("0 0 30px red");
                        currentColor = "red";
                    }
                } else if (currentColor === "purple") {
                    setPurplePosition("#4B0082");
                    setPurpleBorder("black");
                    setPurpleShadow("none");
                    setRedPosition("red");
                    setRedBorder("beige");
                    setRedShadow("0 0 30px red");
                    currentColor = "red";
                }
            }, 3000);

            setIntervalId(newIntervalId);
        }
    };

    const red = () => {
        if (!cycle) {
            if (redPosition === "#990000" && redBorder === "black") {
                setRedPosition("red");
                setRedBorder("beige");
                setRedShadow("0 0 30px red");
                setAmberPosition("#b86514");
                setAmberBorder("black");
                setAmberShadow("none");
                setGreenPosition("#016801");
                setGreenBorder("black");
                setGreenShadow("none");
                setPurplePosition("#4B0082");
                setPurpleBorder("black");
                setPurpleShadow("none");
            } else {
                setRedPosition("#990000");
                setRedBorder("black");
                setRedShadow("none");
            }
        }
    };

    const amber = () => {
        if (!cycle) {
            if (amberPosition === "#b86514" && amberBorder === "black") {
                setAmberPosition("#ff8d1e");
                setAmberBorder("beige");
                setAmberShadow("0 0 30px #ff8d1e");
                setRedPosition("#990000");
                setRedBorder("black");
                setRedShadow("none");
                setGreenPosition("#016801");
                setGreenBorder("black");
                setGreenShadow("none");
                setPurplePosition("#4B0082");
                setPurpleBorder("black");
                setPurpleShadow("none");
            } else {
                setAmberPosition("#b86514");
                setAmberBorder("black");
                setAmberShadow("none");
            }
        }
    };

    const green = () => {
        if (!cycle) {
            if (greenPosition === "#016801" && greenBorder === "black") {
                setGreenPosition("#06cd06");
                setGreenBorder("beige");
                setGreenShadow("0 0 30px #06cd06");
                setRedPosition("#990000");
                setRedBorder("black");
                setRedShadow("none");
                setAmberPosition("#b86514");
                setAmberBorder("black");
                setAmberShadow("none");
                setPurplePosition("#4B0082");
                setPurpleBorder("black");
                setPurpleShadow("none");
            } else {
                setGreenPosition("#016801");
                setGreenBorder("black");
                setGreenShadow("none");
            }
        }
    };

    const purple = () => {
        if (!cycle) {
            if (purplePosition === "#4B0082" && purpleBorder === "black") {
                setPurplePosition("#800080");
                setPurpleBorder("beige");
                setPurpleShadow("0 0 30px #800080");
                setRedPosition("#990000");
                setRedBorder("black");
                setRedShadow("none");
                setAmberPosition("#b86514");
                setAmberBorder("black");
                setAmberShadow("none");
                setGreenPosition("#016801");
                setGreenBorder("black");
                setGreenShadow("none");
                
            } else {
                setPurplePosition("#4B0082");
                setPurpleBorder("black");
                setPurpleShadow("none");
            }
        }
    };

    const togglePurple = () => {
        setShowPurple(!showPurple);
    };

    return (
        <>
            <div className="stick"></div>
            <div className="traffic-light">
                <button className="red-light" style={{ background: redPosition, borderColor: redBorder, boxShadow: redShadow }} onClick={red}></button>
                <button className="amber-light" style={{ background: amberPosition, borderColor: amberBorder, boxShadow: amberShadow }} onClick={amber}></button>
                <button className="green-light" style={{ background: greenPosition, borderColor: greenBorder, boxShadow: greenShadow }} onClick={green}></button>
                {showPurple && (
                    <button className="purple-light" style={{ background: purplePosition, borderColor: purpleBorder, boxShadow: purpleShadow }} onClick={purple}></button>
                )}
            </div>
            <button type="button" className="btn btn-success btn-lg mt-5 mb-2" id="cycleButton" onClick={cycleOn}>{cycle ? "Cycle OFF" : "Cycle ON"}</button>
            <button type="button" className="btn btn-primary btn-lg" id="purpleButton" onClick={togglePurple}>{showPurple ? "Remove Color" : "Add Color"}</button>
        </>
    );
};

export default TrafficLight;