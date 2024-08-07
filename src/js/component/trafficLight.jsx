import React, { useState } from "react";
import "/styles.css";


const TrafficLight = () => {

    const [redPosition, setRedPosition] = useState("#990000");
    const [amberPosition, setAmberPosition] = useState("#b86514");
    const [greenPosition, setGreenPosition] = useState("#016801");

    const[redBorder, setRedBorder] = useState ("black");
    const[amberBorder, setAmberBorder] = useState ("black");
    const[greenBorder, setGreenBorder] = useState ("black");


    const red = () => {
        if (redPosition === "#990000" && redBorder === "black") {
            setRedPosition("red");
            setRedBorder ("beige");
            setAmberPosition("#b86514");
            setAmberBorder("black")
            setGreenPosition("#016801");
            setGreenBorder("black");
        } else {
            setRedPosition("#990000");
            setRedBorder("black");
        }
    };


    const amber = () => {
        if (amberPosition === "#b86514" && amberBorder === "black") {
            setAmberPosition("#ff8d1e");
            setAmberBorder("beige")
            setRedPosition("#990000");
            setRedBorder("black");
            setGreenPosition("#016801");
            setGreenBorder("black");
        } else {
            setAmberPosition("#b86514");
            setAmberBorder("black")
        };
    };

    const green = () => {
        if (greenPosition === "#016801" && greenBorder === "black") {
            setGreenPosition("#06cd06");
            setGreenBorder("beige");
            setRedPosition("#990000");
            setRedBorder("black");
            setAmberPosition("#b86514");
            setAmberBorder("black")
        } else {
            setGreenPosition("#016801");
            setGreenBorder("black");
        };

    };


    return (
        <>
            <div className="traffic-light">
                <button className="red-light" style={{ background: redPosition, borderColor: redBorder}} onClick={red}></button>
                <button className="amber-light" style={{ background: amberPosition, borderColor: amberBorder}} onClick={amber}></button>
                <button className="green-light" style={{ background: greenPosition, borderColor: greenBorder}} onClick={green}></button>
            </div>
            <div className="stick"></div>
            <div className="floor"></div>
        </>
    );
};

export default TrafficLight;