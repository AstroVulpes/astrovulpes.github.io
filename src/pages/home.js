import Sidebar from "../components/Sidebar";

const Home = () => { // width of article is dynamic
  return (
    <div>
      <section>
        <Sidebar />

        <article style={{ float: 'left', width: 'calc(90vw - 200px)', padding: '0px' }}> 
          <h2>
            Home page
          </h2>
          <hr />
          <p>
            Welcome to my page! I am a game developer, programmer, graphic designer, modeller, cartographer, with interests in many more fields. I am very meticulous in my work and find great enjoyment in tinkering with details that enhance my projects. As the Lead Artist of the team Armchair Developers I helped develop the game <i>Everyone Must Die: A Western Standoff</i> that has released on Steam®. Here I showcase various works that I have made that could potentially be of interest to you.
            <br /><br />
            Navigate to the different pages to view the content I have prepared on this website.
          </p>
        </article>
      </section>
    </div>
  );
};


export default Home;


/*
const width = 2100;
const height = 200;
const centerY = height / 2;

const amplitude = height * 0.075;
const speed = -150;
const degrees = 45;

let startTime = 0;
let previousTime = 0;
let pausedTime = 0;
let paused = false;
let canvas, ctx;
let charObjs;

const font = new FontFace("VT323", "url(VT323-Regular.woff)", {
    style: "normal",
    weight: "normal",
    fontSize: '96'
  });

const init = () => {
  canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  document.body.appendChild(canvas);
  window.addEventListener('blur', () => {
    if (!paused) {
      paused = true;
      pausedTime = Date.now() - startTime;
    } 
  });
  window.addEventListener('focus', () => {
    if (paused) {
      paused = false;
      startTime = Date.now() - pausedTime;
      animate();
    } 
  });
 
  charObjs = initScrollText('Welcome to the page of AstroVulpes... Use the navigation bar to explore content...');
  
  startTime = Date.now();
  previousTime = getTime();
  animate();
};

const initScrollText = (text) => {
    
      document.fonts.add(font);  
  //ctx.font = font;
  ctx.font = 'bold 32px Courier New';
  
  let position = 0;
  
  return text.split('').map((char) => {
    const width = ctx.measureText(char).width;
    const charObj = {
      char,
      width,
      position
    };
    
    position += width;
    return charObj;
  });
};

const getTime = () => {
  return paused 
       ? pausedTime 
       : Date.now() - startTime;
};

const scrollText = (dt) => {
  ctx.fillStyle = 'black';
  
  charObjs.forEach((charObj) => {
    charObj.position += dt * speed;
    
    if (charObj.position > width) {
      charObj.position = -charObj.width;
    }
    
      if (charObj.position < 0) {
        charObj.position = canvas.width;
      }

    const y = Math.sin(charObj.position / degrees) * amplitude;
    
    ctx.fillText(charObj.char, charObj.position, centerY + y);
  }); 
};

const animate = () => {
  const now = getTime();
  const dt = (now - previousTime) * 0.001 // delta time in seconds.
  previousTime = now;
  
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, width, height);
  
  scrollText(dt);
  
  if (!paused) {
    requestAnimationFrame(animate);
  }
};
init();*/