import React from "react";
import { Link } from "gatsby";
import Social from "./Social";
import { StaticQuery, graphql } from "gatsby";

const Footer = () => {
  const getLink = edge =>
    `/#${edge.node.title.toLowerCase().replace(/\s/g, "-")}`;

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
              <h2>Πριν φύγεις</h2>
              <div className="footer-top__content">
                <section>
                  <h3>Ενότητες</h3>
                  <ul>
                    {data.allStrapiSection.edges.map((edge, i) => (
                      <li key={i}>
                        <Link className="footer-link" to={getLink(edge)}>
                          {edge.node.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
                <div>
                  <section>
                    <h3>Η Wolt</h3>
                    <p>
                      H Wolt είναι η κορυφαία πλατφόρμα online delivery σε
                      πολλές χώρες της Ευρώπη και Ασίας. Iδρύθηκε στη Φινλανδία
                      το 2014 και ήδη λειτουργεί σε 23 χώρες και πάνω από 150
                      πόλεις.
                    </p>
                  </section>
                  <section>
                    <h3>Ακολούθησέ μας</h3>
                    <Social />
                  </section>
                </div>
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
