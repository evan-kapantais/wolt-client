import React from "react";
import { Link } from "gatsby";
import Social from "./Social";
import { StaticQuery, graphql } from "gatsby";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          allStrapiSection {
            edges {
              node {
                title
              }
            }
          }
        }
      `}
      render={data => (
        <footer id="layout-footer">
          <div className="footer-top">
            <div className="footer-container">
              <h2>Είμαστε η Wolt</h2>
              <div className="footer-top__content">
                <section className="footer-section__wolt">
                  <h3>Η Wolt</h3>
                  <p>
                    H Wolt είναι η κορυφαία πλατφόρμα online delivery σε πολλές
                    χώρες της Ευρώπης και Ασίας. Ιδρύθηκε στη Φινλανδία το 2014
                    και ήδη λειτουργεί σε 23 χώρες και πάνω από 150 πόλεις. Έχει
                    στο ενεργητικό της πάνω από 30 εκατομμύρια χρήστες, 40.000
                    εστιατόρια, 100.000 διανομείς και 3000 υπαλλήλους.
                  </p>
                </section>
                <section>
                  <h3>Ακολούθησέ μας</h3>
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
      )}
    />
  );
};

export default Footer;
