import './intro.css';
import Me from '../../img/jaya.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png'
import gmail from '../../img/gmail.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left" style={{ position: 'relative', zIndex: 2 }}>
        <div className="i-left-wrapper">
          <div style={{ padding: '0.5em' }}>
            <img src={Me} alt="profile" className="i-img" />
          </div>
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ari Jaya</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Freelancer</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Full-stack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a self-taught Developer with an +2 years of experience in software development. I have learned programming languages through creating real-world projects such as documentation sites, paper books, social media platforms like YouTube, and more. I am passionate about becoming a software development because I've discovered that the possibilities in this field are limitless. If you are interested in what you see, please feel free to contact me.
          </p>
        </div>
      </div>
      <div className="i-bg"></div>
      <div className="i-right">
        <div className='i-right-sub'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontWeight: 'bold', paddingLeft: '10px', paddingRight: '10px' }}>Programming Laguages & Frameworks:</p>
              <ul style={{ textAlign: 'justify' }}>
                <li>
                  JavaScript &  Typescript
                </li>
                <li>
                  Reat.js & Next.js
                </li>
                <li>
                  Nest.js & Mysql Database
                </li>
                <li>
                  Angular.js
                </li>
                <li>
                  React Native
                </li>
                <li>
                  Python & Django
                </li>
              </ul>
            </div>
            <div style={{ width: '100%' }}>
              <div style={{
                display: 'flex', flexDirection: 'column'
              }}>
                <p style={{ fontWeight: 'bold', paddingLeft: '10px', paddingRight: '10px' }}>Experience:</p>
                <ul>
                  <li>+1 experience in front-end Developer on-site company</li>
                  <li>Deploy own project 'Bali News' App to app store & play store</li>
                  <li>Develop and maintenance web and mobile app project</li>
                  <li>Freelance to build and maintenance the web project</li>
                  <li>Develop portfolio project</li>
                  <li>I have good communication skills and in team collaboration</li>
                </ul>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1em', margin: '1em', justifyContent: 'end' }}>
                  <a href={'https://github.com/AriJaya07'} target={'_blank'} rel="noreferrer">
                    <img src={github} alt={'github-img'} style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
                  </a>
                  <a href={'https://www.linkedin.com/in/ari-jaya-568980209/'} target={'_blank'} rel="noreferrer">
                    <img src={linkedin} alt={'linkedin-img'} style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
                  </a>
                  <a href={'mailto:arijaya130@gmail.com'} target={'_blank'} rel="noreferrer">
                    <img src={gmail} alt={'gmail-img'} style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
