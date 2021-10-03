import React from "react";
import partner from "../../images/partner.jpeg";

const LargeBanner = () => {
  return (
    <div>
      <section className="large-banner">
        <div className="large-banner__container">
          <div>
            <h1>Welcome partner!</h1>
            <p>
              Εδώ θα βρείς απαντήσεις για όλες τις ερώτηση ή απορίες που μπορεί
              να έχεις - από το πώς θα έρθεις στο γραφείο μέχρι το πως θα
              μεγιστοποιήσεις τις απολαβές σου και πολλά ακόμα.
            </p>
            <p>Η σελίδα, επίσης, ανανεώνεται συχνά!</p>
          </div>
          <div className="large-banner__image-container">
            <img src={partner} alt="partner on a bike" data-nofocus />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LargeBanner;
