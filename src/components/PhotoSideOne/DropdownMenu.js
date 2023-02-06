import React from 'react';
import '.dropdown.css';

function DropdownMenu() {
  return (
    <div className="sideone-dropdown-return">
      <nav className="sideone-dropdown-nav">
        <section className="sideone-link-cats">
            <span onClick={isClicked} className="sideone-link-cats__cat">WEDDINGS + </span>
            <ul className="category weddings">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">ENGAGEMENTS + </span><br />
            <ul className="category engagements">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">GRADUATION + </span><br />
            <ul className="category graduation">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">NATURE + </span><br />
            <ul className="category nature hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">CREATIVE + </span><br />
            <ul className="category hidden">
              <li className="category__creative">Bill & Frank, 2023</li>
              <li className="category__creative">Harry & Megan, 2018</li>
              <li className="category__creative">Jim & Pam, 2014</li>
              <li className="category__creative">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">JOURNAL + </span><br />
            <ul className="category journal hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">CONTACT </span><br />
          </section>
      </nav>

    </div>
  )
}

export default DropdownMenu;