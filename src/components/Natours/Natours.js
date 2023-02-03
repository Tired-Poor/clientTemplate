import './natours.css';
import logoWhite from './img/logo-white.png'

const Natours = () => {
  return (
    <div className="natours-return">
      <header className="natours-header">|
        <div className="natours-logo-box">
          <img src={logoWhite} alt="natours-logo" className="natours-logo" />
        </div> {/* End of logo-box*/}

          <div className="natours-header-text-box">
            <h1 className="natours-heading-primary">
              <span className="natours-heading-primary-main">Outdoors</span>
              <span className="natours-heading-primary-sub">is where life happens</span>
              </h1>

              <a href="#" className="natours-btn natours-btn-white natours-btn-animated">Discover our tours</a>
            </div> {/* End of heading text-box*/}
        </header>
    </div>
  )
}

export default Natours;