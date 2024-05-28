import React from "react";
import WorkCarousel from "../Carousel/WorkCarousel";
import './Main.css'

const Main = () => {
    return (
        <main>
            <WorkCarousel />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                    <div className="col">
                        <h3>Qua vanno inserite delle cose</h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;