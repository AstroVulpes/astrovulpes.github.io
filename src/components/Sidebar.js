import imggithub from '../images/GitHub-14px.png';
import imgartstation from '../images/ArtStation-14px.png';
import imgarrows from '../images/WindowsXP-DoubleDropdownArrows.png';

const Sidebar = () => {
    return (
        <div>
            <nav style={{
                float: 'left', height: '100vh', width: '200px', padding: '16px', background: 'rgb(115,137,254)',
                background: '-moz-linear-gradient(180deg, rgba(115,137,254,1) 0%, rgba(64,87,211,1) 100%)',
                background: '-webkit-linear-gradient(180deg, rgba(115,137,254,1) 0%, rgba(64,87,211,1) 100%)',
                background: 'linear-gradient(180deg, rgba(115,137,254,1) 0%, rgba(64,87,211,1) 100%)',
                filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#7389fe",endColorstr="#4057d3",GradientType=1)'
            }}>
                <div style={{
                    padding: '3px 0', color: '#0c327d', borderRadius: '3px 3px 0px 0px', background: 'rgb(240,240,255)',
                    background: '-moz-linear-gradient(90deg, rgba(240,240,255,1) 0%, rgba(167,187,254,1) 100%)',
                    background: '-webkit-linear-gradient(90deg, rgba(240,240,255,1) 0%, rgba(167,187,254,1) 100%)',
                    background: 'linear-gradient(90deg, rgba(240,240,255,1) 0%, rgba(167,187,254,1) 100%)',
                    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#f0f0ff",endColorstr="#a7bbfe",GradientType=1)'
                }}>
                    <img src={imgarrows} alt="button" style={{ padding: '2px 3px 0px 0px', float: 'right', filter: 'blur(0.5px) drop-shadow(0px 0px 3.5px #666)' }} /><h2>
                        Links to Personal Sites</h2>
                </div>
                <div style={{
                    padding: '1px 1rem', fontSize: '8pt', background: 'rgb(180,200,251)',
                    background: '-moz-linear-gradient(90deg, rgba(180,200,251,1) 0%, rgba(164,185,251,1) 50%, rgba(180,200,251,1) 100%)',
                    background: 'webkit-linear-gradient(90deg, rgba(180,200,251,1) 0%, rgba(164,185,251,1) 50%, rgba(180,200,251,1) 100%)',
                    background: 'linear-gradient(90deg, rgba(180,200,251,1) 0%, rgba(164,185,251,1) 50%, rgba(180,200,251,1) 100%)',
                    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#b4c8fb",endColorstr="#b4c8fb",GradientType=1)'
                }}>
                    <p style={{ padding: '0px 0px 0px 0px', lineHeight: '1rem', color: '#0c327d', fontSize: '7pt' }}>
                        <img src={imggithub} alt="GitHub" style={{ float: 'left' }} />&ensp;<a href="https://www.github.com/AstroVulpes/" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <br />
                        <img src={imgartstation} alt="ArtStation" style={{ float: 'left' }} />&ensp;<a href="https://astrovulpes.artstation.com" target="_blank" rel="noopener noreferrer">ArtStation</a>
                    </p>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;