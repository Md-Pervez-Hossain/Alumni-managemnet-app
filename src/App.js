import React from "react";
import "./App.css";
import MissionHeading from "./sharedComponents/MissionHeading/MissionHeading";
import AlumniDirectory from "./sharedComponents/AlumniDirectory/AlumniDirectory";
import Contact from "./sharedComponents/Contact/Contact";

function App() {
    return (
        <div>
            <Contact></Contact>
            <MissionHeading></MissionHeading>
            <AlumniDirectory></AlumniDirectory>            
        </div>
    );
}

export default App;
