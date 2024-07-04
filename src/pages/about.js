import imgcalendar from '../images/WindowsXP-Calendar.png';
import imgcomputer from '../images/WindowsXP-Computer.png';
import imgdocument from '../images/WindowsXP-Document.png';
import imgfavorites from '../images/WindowsXP-Favorites.png';
import imgfont from '../images/WindowsXP-Font.png';
import imginternet from '../images/WindowsXP-Internet.png';
import imgmonitor from '../images/WindowsXP-MonitorWindow.png';

import Sidebar from "../components/Sidebar";

const About = () => {
    const birthday = new Date("2000-07-02T18:33:00Z");
    const elapsed = Date.now() - birthday.getTime();
    const age = Math.abs(new Date(elapsed).getUTCFullYear() - 1970);
    return (
        <div>
            <div>
                <section>
                    <Sidebar />

                    <article style={{ float: 'left', width: 'calc(90vw - 200px)', padding: '0px' }}>
                        <h2>
                            Profile
                        </h2>
                        <hr />
                        <p>
                            <div class="grid-container grid-container--fit">
                                <div class="grid-element">
                                    <img src={imgfavorites} alt="Name" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>AstroVulpes</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imgcalendar} alt="Age" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>{age.toString()} years old</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imginternet} alt="Location" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>Malmö, Sweden</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imgdocument} alt="Degree" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>B.Sc. in Computer Science – Game Development</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imgcomputer} alt="Programming" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>C#, Java, C++, HTML / CSS / JavaScript, SQL</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imgmonitor} alt="Programs" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>Unity, Blender, Maya, GIMP, Inkscape, QGIS</p>
                                </div>
                                <div class="grid-element">
                                    <img src={imgfont} alt="Languages" style={{ float: 'left' }} />
                                    <p style={{ padding: '0 3rem' }}>English, Swedish, Greek, Danish</p>
                                </div>
                            </div>
                        </p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default About;