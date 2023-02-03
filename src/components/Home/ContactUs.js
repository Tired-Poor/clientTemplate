import Navbar from './Navbar';
import Footer from './Footer';

import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contactus-return">

      <Navbar />

      <section className="contactus-about">
        <label className="contactus-label">Hello. We are Us.</label>
        <article>Zach and Drew are graduates of Fullstack Academy's university Web Development bootcamp receiving their certifications through University of Texas - Dallas.</article>
      </section>

      <section className="contactus-contact">
        <label className="contactus-label">Contact Us</label>
        <article>
          GitHub: https://github.com/Tired-Poor
          <br />
          Discord: https://discord.gg/SAgrmBXjeV
          <br />
          <div className="contactus-indiv-container">
            <div className="contactus-indiv contactus-zach">
              Zach's Site https://zachpower.onrender.com
              <br />
              LinkedIn http://linkedin.com/in/zachpower
              <br />
              E-Mail zpower.dev@gmail.com
              <br />
              Upwork https://www.upwork.com/freelancers/~017372d05a990f2645?viewMode=1
              <br />
              Code Wars https://www.codewars.com/users/ZachPowerXC
              <br />
              GitHub http://github.com/zcpower
            </div>
            <div className="contactus-indiv contactus-drew">
              Drew's Site https://developedbydrewford.netlify.app
              <br />
              LinkedIn https://www.linkedin.com/in/developedbydrewford/
              <br />
              E-Mail developedbydrewford@gmail.com
              <br />
              Upwork
              <br />
              Code Wars https://www.codewars.com/users/sleazycook
              <br />
              GitHub https://github.com/SleazyCook
            </div>
          </div>
        </article>
      </section>

      <Footer />

    </div>
  )
};

export default ContactUs;