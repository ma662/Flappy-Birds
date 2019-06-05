import React from "react";

import "../css/startScreen.css";

function StartScreen(props) {
    return (
        <div id="startScreen">
            <div>Press space bar to start the game...</div>
            <p> ( or click <a href='/'>here</a> to go back home ) </p>
        </div>
    );
}

export default StartScreen;