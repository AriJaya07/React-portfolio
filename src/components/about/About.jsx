import './about.css';
import Certificate from '../../img/Certificate.jpg';
import work from '../../img/team.jpg';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={work}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My job experience is Engineering
        </p>
        <p className="a-desc">
          I interested to become a Web Developer, because it will give more opportunity in the future. This job will change the daily activity of the people in the world, bringing to Digital World and I can participate in this new era. This job also have good salary for my properous in the country.
        </p>
        <div className="a-award">
          <img src={Certificate} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Udemy Certificate</h4>
            <p className="a-award-desc">
              Udemy is a fantastic  way to gain knowledge for a great price. This Course, taught by Kane Ezki, Kalob Taulien, Radek Wilk cover single thing mentioned in this article, and good resource for reading all of important thing to add knowledge to apply it to the project, so we knew to create overflow of professional project. 
              With a whopping 40 hours of video for only $10, this course is the difinition of getting the most bang for you buck. Most Udemy course are priced at $100. Never pay full price for course and always wait for a discount, as they happen frequently
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
