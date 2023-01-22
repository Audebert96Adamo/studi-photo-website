import React from "react";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetWork from "../components/SocialNetWork";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0652879327" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 52 87 69 69
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="adamo.audebert@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email copié !")}
                >
                  adamo.audebert@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetWork />
          <div className="credits">
            <p>Charle Cantin Photographe -2023</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
