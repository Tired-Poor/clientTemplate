import './natours.css';
import logoWhite from './img/logo-white.png'

const Natours = () => {
  return (
    <div className="natours-return">
      <header className="header">|
        <div className="logo-box">
          <img src={logoWhite} alt="logo" className="logo" />
        </div> {/* End of logo-box*/}

          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Outdoors</span>
              <span className="heading-primary-sub">is where life happens</span>
              </h1>

              <a href="#" className="btn btn-white btn-animated">Discover our tours</a>
            </div> {/* End of heading text-box*/}
        </header>
    </div>
  )
}

export default Natours;