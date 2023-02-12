import './natours.css';
import logoWhite from './img/logo-white.png'

import { Link } from 'react-router-dom';

const Natours = () => {
  return (
    <div className="natours-return">

        <div className="natours-navigation">
            <input type="checkbox" className="natours-navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="natours-navigation__button">
                <span className="natours-navigation__icon">&nbsp;</span>
            </label>
            <div className="natours-navigation__background">&nbsp;</div>

            <nav className="natours-navigation__nav">
                <ul className="natours-navigation__list">
                    <li className="natours-navigation__item"><a href="#section-about" className="natours-navigation__link"><span>01</span>About Natours</a></li>
                    <li className="natours-navigation__item"><a href="#section-features" className="natours-navigation__link"><span>02</span>Your Benefits</a></li>
                    <li className="natours-navigation__item"><a href="#section-tours" className="natours-navigation__link"><span>03</span>Popular Tours</a></li>
                    <li className="natours-navigation__item"><a href="#section-stories" className="natours-navigation__link"><span>04</span>Stories</a></li>
                    <li className="natours-navigation__item"><a href="#section-book" className="natours-navigation__link"><span>05</span>Book Now</a></li>
                </ul>
            </nav>
        </div>

      <header className="natours-header">|
        <div className="natours-logo-box">

          <Link to="/"><img src={logoWhite} alt="natours-logo" className="natours-logo" ></img></Link>
        </div> 

          <div className="natours-header-text-box">
            <h1 className="natours-heading-primary">
              <span className="natours-heading-primary-main">Outdoors</span>
              <span className="natours-heading-primary-sub">is where life happens</span>
              </h1>

              <a href="#" className="natours-btn natours-btn-white natours-btn-animated">Discover our tours</a>
            </div> 
        </header>

        <main> 
            <section className="natours-section-about" id="section-about">
                <div className="natours-u-center-text natours-u-margin-bottom-big">
                    <h2 className="natours-heading-secondary">
                        Exciting tours for adventerous people
                    </h2>
                </div>

                <div className="natours-row">
                    <div className="natours-col-1-of-2">
                        <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="natours-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis.
                        </p>

                        <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Live adventerous like your never have before</h3>
                        <p className="natours-paragraph">
                            Lorem  ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="#" className="natours-btn-text">Learn more &rarr;</a>
                    </div>

                    <div className="natours-col-1-of-2">
                        <div className="natours-composition">
                            <img src="img/nat-1-large.jpg" alt="Photo 1" className="natours-composition__photo natours-composition__photo--p1" />
                            <img src="img/nat-2-large.jpg" alt="Photo 2" className="natours-composition__photo natours-composition__photo--p2" />
                            <img src="img/nat-3-large.jpg" alt="Photo 3" className="natours-composition__photo natours-composition__photo--p3" />
                        </div>
                    </div>

                </div> 

            </section> 

            <section className="natours-section-features" id="section-features"> 

                <div className="natours-row">
                    <div className="natours-col-1-of-4">
                        <div className="natours-feature-box">
                            <i className="natours-feature-box__icon natours-icon-basic-world"></i>
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Explore the world</h3>
                            <p className="natours-feature-box__text">
                                Lorem  ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            </p>
                        </div>
                    </div>

                    <div className="natours-col-1-of-4">
                        <div className="natours-feature-box">
                            <i className="fnatours-eature-box__icon natours-icon-basic-compass"></i>
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Meet nature</h3>
                            <p className="natours-feature-box__text">
                                Lorem  ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            </p>
                        </div>
                    </div>

                    <div className="natours-col-1-of-4">
                        <div className="natours-feature-box">
                            <i className="natours-feature-box__icon natours-icon-basic-map"></i>
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Find your way</h3>
                            <p className="natours-feature-box__text">
                                Lorem  ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            </p>
                        </div>
                    </div>

                    <div className="natours-col-1-of-4">
                        <div className="natours-feature-box">
                            <i className="natours-feature-box__icon natours-icon-basic-heart"></i>
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Live a healthier life</h3>
                            <p className="natours-feature-box__text">
                                Lorem  ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            </p>
                        </div>
                    </div>
                </div>

            </section> 
            
            <section className="natours-section-tours" id="section-tours"> 
                <div className="natours-u-center-text natours-u-margin-bottom-big">
                    <h2 className="natours-heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                <div className="natours-row">
                    <div className="natours-col-1-of-3"> 
                        <div className="natours-card">
                            <div className="natours-card__side natours-card__side--front">
                                <div className="natours-card__picture natours-card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="natours-card__heading natours-card__heading--1">
                                    <span className="natours-card__heading-span natours-card__heading-span--1">The Sea Explorer</span>
                                </h4>
                                <div className="natours-card__details natours-card__details--1">
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: very easy</li>
                                    </ul>
                                </div>
                                
                            </div> 
                            <div className="natours-card__side natours-card__side--back natours-card__side--back-1">
                                <div className="natours-card__cta">
                                    <div className="natours-card__price-box">
                                        <p className="natours-card__price-only">Only</p>
                                        <div className="natours-card__price-value">$297</div>
                                        <a href="#popup" className="natours-btn natours-btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                    <div className="natours-col-1-of-3"> 
                        <div className="natours-card">
                            <div className="natours-card__side natours-card__side--front">
                                <div className="natours-card__picture natours-card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="natours-card__heading natours-card__heading--2">
                                    <span className="natours-card__heading-span natours-card__heading-span--2">The Forest Hiker</span>
                                </h4>
                                <div className="natours-card__details natours-card__details--1">
                                    <ul>
                                        <li>2 day tour</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="natours-card__side card__side--back natours-card__side--back-2">
                                <div className="natours-card__cta">
                                    <div className="natours-card__price-box">
                                        <p className="natours-card__price-only">Only</p>
                                        <div className="natours-card__price-value">$497</div>
                                        <a href="#popup" className="natours-btn natours-btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="natours-col-1-of-3"> 
                        <div className="natours-card">
                            <div className="natours-card__side natours-card__side--front">
                                <div className="natours-card__picture natours-card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="natours-card__heading natours-card__heading--3">
                                    <span className="natours-card__heading-span natours-card__heading-span--3">The Snow Adventurer</span>
                                </h4>
                                <div className="natours-card__details natours-card__details--1">
                                    <ul>
                                        <li>5 day tour</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="natours-card__side natours-card__side--back natours-card__side--back-3">
                                <div className="natours-card__cta">
                                    <div className="natours-card__price-box">
                                        <p className="natours-card__price-only">Only</p>
                                        <div className="natours-card__price-value">$897</div>
                                        <a href="#popup" className="natours-btn natours-btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="natours-u-center-text natours-u-margin-top-huge">
                    <a href="#" className="natours-btn natours-btn--green">Discover all tours</a>
                </div>
            </section> 

            <section className="natours-section-stories" id="section-stories"> 

                <div className="natours-bg-video">
                    <video className="natours-bg-video__content" autoplay muted loop>
                        <source src="natours-img/video.mp4" type="video/mp4" />
                        <source src="natours-img/video.webm" type="video/webm" />
                        Your browser is not supported.
                    </video>
                
                </div>

                <div className="natours-u-center-text natours-u-margin-bottom-big">
                    <h2 className="natours-heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="natours-row"> 
                    <div className="natours-story">
                        <figure className="natours-story__shape">
                            <img className="natours-story__img" src="img/nat-8.jpg" alt="person on a tour" />
                            <figcaption className="natours-story__caption">
                                Mary Smith
                            </figcaption>
                        </figure>
                        <div className="natours-story__text">
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div> 

                <div className="natours-row"> 
                    <div className="natours-story">
                        <figure className="natours-story__shape">
                            <img className="natours-story__img" src="img/nat-9.jpg" alt="person on a tour" />
                            <figcaption className="natours-story__caption">
                                Jack Wilson
                            </figcaption>
                        </figure>
                        <div className="natours-story__text">
                            <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">WOW! MY LIFE IS COMPLETELY DIFFERENT NOW</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div> 

                <div className="natours-u-center-text natours-u-margin-top-huge">
                    <a href="#" className="natours-btn-text">Read all stories &rarr;</a>
                </div>

            </section> 

            <section className="natours-section-book" id="setion-book"> 
                <div className="natours-row">
                    <div className="natours-book">
                        <div className="natours-book__form">

                            <div className="natours-u-margin-bottom-medium">
                                <h2 className="natours-heading-secondary">
                                    Start booking now
                                </h2>
                            </div>

                            <form action="#" className="natours-form">
                                <div className="natours-form__group">
                                    <input type="text" className="natours-form__input" placeholder="Full Name" id="name" required />
                                    <label for="name" className="natours-form__label">Full Name</label>
                                </div>

                                <div className="natours-form__group">
                                    <input type="email" className="natours-form__input" placeholder="Email address" id="email" required />
                                    <label for="email" className="natours-form__label">E-mail address</label>
                                </div>

                                <div className="natours-form__group u-margin-bottom-medium"> 
                                    <div className="natours-form__radio-group">
                                        <input type="radio" className="natours-form__radio-input" name="size" id="small" />
                                        <label for="small" className="natours-form__radio-label">
                                            <span className="natours-form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div className="natours-form__radio-group">
                                        <input type="radio" className="natours-form__radio-input" name="size" id="large" />
                                        <label for="large" className="natours-form__radio-label">
                                            <span className="natours-form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div> 

                                <div className="natours-form__group">
                                    <button className="natours-btn natours-btn--green">Next Step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 

        </main>

        <footer className="natours-footer"> 
            <div className="natours-footer__logo-box">
                <img src="img/logo-green-2x.png" alt="Full logo" className="natours-footer__logo" />
            </div>
            <div className="natours-row">
                <div className="natours-col-1-of-2">
                    <div className="natours-footer__navigation">
                        <ul className="natours-footer__list">
                            <li className="natours-footer__item"><a href="#" className="natours-footer__link">Company</a></li>
                            <li className="natours-footer__item"><a href="#" className="natours-footer__link">Contact us</a></li>
                            <li className="natours-footer__item"><a href="#" className="natours-footer__link">Carrers</a></li>
                            <li className="natours-footer__item"><a href="#" className="natours-footer__link">Privacy policy</a></li>
                            <li className="natours-footer__item"><a href="#" className="natours-footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="natours-col-1-of-2">
                    <p className="natours-footer__copyright">
                        Built by <a href="#" className="natours-footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="natours-footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer> 

        <div className="natours-popup" id="popup">
            <div className="natours-popup__content">
                <div className="natours-popup__left">
                    <img src="img/nat-8.jpg" alt="tour-photo" className="natours-popup__img" />
                    <img src="img/nat-9.jpg" alt="tour-photo" className="natours-popup__img" />
                </div>
                <div className="natours-popup__right">
                    <a href="#section-tours" className="natours-popup__close">&times;</a>
                    <h2 className="natours-heading-secondary natours-u-margin-bottom-small">Start booking now</h2>
                    <h3 className="natours-heading-tertiary natours-u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="natours-popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora officia enim iusto, eveniet iste aliquam, ipsum animi exercitationem neque quam voluptas culpa tempora officia enim iusto, eveniet iste aliquam, ipsum animi exercitationem neque quam voluptas suscipit consequatur explicabo praesentium possimus quasi mollitia!</p>
                    <a href="#section-book" className="natours-btn btn--green">Book now</a>
                </div>
            </div>
        </div>

        {/* <section className="grid-test">
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

        </section>    */}
    </div>
  )
}

export default Natours;