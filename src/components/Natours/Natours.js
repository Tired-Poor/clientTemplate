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

        <section className="grid-test">
            <div className="row">
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-3-of-4">
                    Col 3 of 4
                </div>
            </div>

        </section>   
    </div>
  )
}

export default Natours;