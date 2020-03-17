import React from 'react';

const HomeMain = () => {
  return (
    <main className="main">
      <article className="main-top">
        <h2 className="main-top__h2">
          Why <b>small business owners love</b> AppCo?
        </h2>
        <p className="main-top__p">
          Our design projects are fresh and simple and will benefit
          your business greatly. Learn more about our work!
        </p>

        <section className="main-top-cards">
          <div className="main-top-cards__card">
            <div className="main-top-cards__clean-design"></div>
            <h3>Clean Design</h3>
            <p>Increase sales by showing true dynamics of your website.</p>
          </div>
          <div className="main-top-cards__card">
            <div className="main-top-cards__secure-data"></div>
            <h3>Secure Data</h3>
            <p>Build your online store’s trust using Social Proof &amp; Urgency.</p>
          </div>
          <div className="main-top-cards__card">
            <div className="main-top-cards__retina-ready"></div>
            <h3>Retina Ready</h3>
            <p>Build your online store’s trust using Social Proof &amp; Urgency.</p>
          </div>
        </section>
      </article>

      <article className="main-middle" id="main-middle">
        <div className="main-middle__leptop"></div>
        <h2>Start Managing your apps business, more faster</h2>
        <p>
          Objectively deliver professional value with diverse web-readiness.
          Collaboratively transition wireless customer service without
          goal-oriented catalysts for change. Collaboratively.
        </p>
        <a href="#main-middle">Learn more</a>
      </article>

      <article className="main-bottom">
        <h2 className="main-bottom__h2">
          <b>Afforadble Pricing and Packages</b> choose your best one
        </h2>
        <p className="main-bottom__p">
          Monotonectally grow strategic process improvements
          vis-a-vis integrated resources.
        </p>
        <section className="main-bottom-cards">
          <div className="main-bottom-cards__card">
            <h3 className="main-bottom-cards__h3">Basic</h3>
            <div className="main-bottom-cards__basic main-bottom-cards__picture"></div>
            <h2 className="main-bottom-cards__cost">$29</h2>
            <div className="main-bottom-cards__line"></div>
            <p>
              Push Notifications Data Transfer SQL Database Search &amp; SEO Analytics 
              24/7 Phone Support 2 months technical support 2+ profitable keyword
            </p>
            <a href="#main-middle">Purchase now</a>
          </div>
          
          <div className="main-bottom-cards__card main-bottom-cards__standard-card">
            <h3 className="main-bottom-cards__h3">Standard</h3>
            <div className="main-bottom-cards__standard main-bottom-cards__picture"></div>
            <h2 className="main-bottom-cards__cost main-bottom-cards__standard-cost">
              $149
            </h2>
            <div className="main-bottom-cards__line"></div>
            <p>
              Push Notifications Data Transfer SQL Database Search &amp; SEO Analytics 
              24/7 Phone Support 2 months technical support 2+ profitable keyword
            </p>
            <a href="#main-middle">Purchase now</a>
          </div>
          
          <div className="main-bottom-cards__card">
            <h3 className="main-bottom-cards__h3">Unlimited</h3>
            <div className="main-bottom-cards__unlimited main-bottom-cards__picture"></div>
            <h2 className="main-bottom-cards__cost">$39</h2>
            <div className="main-bottom-cards__line"></div>
            <p>
              Push Notifications Data Transfer SQL Database Search &amp; SEO Analytics 
              24/7 Phone Support 2 months technical support 2+ profitable keyword
            </p>
            <a href="#main-middle">Purchase now</a>
          </div>
        </section>
      </article>
    </main>
  )
}

export default HomeMain;