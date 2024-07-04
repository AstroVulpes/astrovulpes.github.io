import imgmap from '../images/EuropeanRoadProject-Signs-Fixed.png';
import imggame from '../images/EveryoneMustDie-Screenshot.jpg';
import imgoffice1 from '../images/Office-Test3.png';
import imgoffice2 from '../images/Office-Test4.png';

import Sidebar from "../components/Sidebar";

const Works = () => {
    return (
        <div>
            <div>
                <section>
                    <Sidebar />

                    <article style={{ float: 'left', width: 'calc(90vw - 200px)', padding: '0px' }}>
                        <h2>
                            Works
                        </h2>
                        <hr />
                        <p>
                            <div class="grid-container grid-container--fit">
                                <div class="grid-element">
                                    <div style={{ height: '280px', width: '280px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={imgmap} alt="EuropeanRoadProject-Signs-Fixed.png" style={{ maxHeight: '280px', maxWidth: '280px' }} />
                                    </div>
                                    <p style={{ padding: '0 3rem', textAlign: 'center' }}>EuropeanRoadProject-Signs-Fixed.png</p>
                                </div>
                                <div class="grid-element">
                                    <div style={{ height: '280px', width: '280px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={imggame} alt="EveryoneMustDie-Screenshot.jpg" style={{ maxHeight: '280px', maxWidth: '280px' }} />
                                    </div>
                                    <p style={{ padding: '0 3rem', textAlign: 'center' }}>EveryoneMustDie-Screenshot.jpg</p>
                                </div>
                                <div class="grid-element">
                                    <div style={{ height: '280px', width: '280px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={imgoffice1} alt="Office-Test3.png" style={{ maxHeight: '280px', maxWidth: '280px' }} />
                                    </div>
                                    <p style={{ padding: '0 3rem', textAlign: 'center' }}>Office-Test3.png</p>
                                </div>
                                <div class="grid-element">
                                    <div style={{ height: '280px', width: '280px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={imgoffice2} alt="Office-Test4.png" style={{ maxHeight: '280px', maxWidth: '280px' }} />
                                    </div>
                                    <p style={{ padding: '0 3rem', textAlign: 'center' }}>Office-Test4.png</p>
                                </div>
                            </div>
                        </p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default Works;