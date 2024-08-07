import React, { useState } from "react";


const TrafficLight = () => {

    const [redPosition, setRedPosition] = useState("#990000");
    const [amberPosition, setAmberPosition] = useState("#b86514");
    const [greenPosition, setGreenPosition] = useState("#016801");

    const red = () => {
        if (redPosition === "#990000") {
            setRedPosition("red");
            setAmberPosition("#b86514");
            setGreenPosition("#016801");
        } else {
            setRedPosition("#990000");

        };
    };


    const amber = () => {
        if (amberPosition === "#b86514") {
            setAmberPosition("#ff7e00");
            setRedPosition("#990000");
            setGreenPosition("#016801");
        } else {
            setAmberPosition("#b86514");
        };
    };

    const green = () => {
        if (greenPosition === "#016801") {
            setGreenPosition("#06cd06");
            setRedPosition("#990000");
            setAmberPosition("#b86514");
        } else {
            setGreenPosition("#016801");
        };

    };

    return (
        <>
            <div className="col-8 d-flex flex-column text-center p-5 m-5">
                <button style={{ backgroundColor: redPosition }} onClick={red}>Red</button>
                <button style={{ backgroundColor: amberPosition }} onClick={amber}>Amber</button>
                <button style={{ backgroundColor: greenPosition }} onClick={green}>Green</button>
            </div>
        </>
    );
};

export default TrafficLight;