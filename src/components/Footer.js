import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div id="copywrite" class="copy-text">
          <p>Copywrite &copy; 2022 ENAC - All rights reserved</p>

          <div class="social">
            <a
              href="https://www.instagram.com/enac_officiel/?hl=fr"
              target="_blank"
            >
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="https://twitter.com/enacfrance" target="_blank">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a
              href="https://fr.linkedin.com/school/ecole-nationale-de-l'aviation-civile/"
              target="_blank"
            >
              <i class="icon ion-social-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/enacfrance/" target="_blank">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <a href="mailto:christophe.hurter@enac.fr" class="contact">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
