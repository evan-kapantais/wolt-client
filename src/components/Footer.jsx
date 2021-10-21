import React from "react";
import { Link } from "gatsby";
import Social from "./Social";

const Footer = () => {
  const isGreekPage =
    typeof window !== "undefined" && window.location.pathname === "/";

  return (
    <footer id="layout-footer">
      <div className="footer-top">
        <div className="footer-container">
          <h2>{isGreekPage ? "Είμαστε η Wolt" : "We are Wolt"}</h2>
          <div className="footer-top__content">
            <section className="footer-section__wolt">
              <h3>{isGreekPage ? "Η Wolt" : "Wolt"}</h3>
              <p>
                {isGreekPage
                  ? "H Wolt είναι η κορυφαία πλατφόρμα online delivery σε πολλές χώρες της Ευρώπης και Ασίας. Ιδρύθηκε στη Φινλανδία το 2014 και ήδη λειτουργεί σε 23 χώρες και πάνω από πόλεις. Έχει στο ενεργητικό της πάνω από 30 εκατομμύρια χρήστες, 40.000 εστιατόρια, 100.000 διανομείς και 3000 υπαλλήλους."
                  : "Wolt is a tech application that provides delivery service and helps people discover and order great food. It was founded in 2014 in Finland and expanded in 23 countries and more than 130  cities. It has more than 30M user subscriptions, 40000 restaurants partnerships, 100000 courier partners and 3000 employees."}
              </p>
            </section>
            <section>
              <h3>{isGreekPage ? "Ακολούθησέ μας" : "Follow us"}</h3>
              <Social />
            </section>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>© Wolt, {new Date().getFullYear()}</p>
          <p>
            Built with <span className="heart">❤️</span> by{" "}
            <Link to="https://instagram.com/evans.webworks">
              Evan Kapantais
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
