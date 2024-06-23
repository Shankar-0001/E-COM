import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import './phone-demo.css';

export function PhoneDemoevent() {

    const [mobiles, setMobiles] = useState([]);
    const [targetImg, setTargetImg] = useState(' ');

    function LoadMobiles() {
        axios.get('mobile.json')
            .then((response) => {
                setMobiles(response.data);
            })
    }
    useEffect(() => {
        LoadMobiles();
    }, []);

    function handleMouseOver(e) {
        setTargetImg(e.target.src);
    }

    return (
        <div className="container-fluid mt-5">
            <section className="row">
                <nav className="col-1">
                    {
                        mobiles.map(mobile =>
                            <div key={mobile.img_src} className="mb-2 " >
                                <img onMouseOver={handleMouseOver} src={mobile.img_src} width="93px" height="92px" />
                            </div>
                        )
                    }
                </nav>
                <main className="col-11">
                    <img height="550px" src={targetImg} width="400px" />

                </main>
            </section>
        </div>
    )
}