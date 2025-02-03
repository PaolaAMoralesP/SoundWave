import "./footer.css";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer>
      <div className="divPagesFooter">
        <p>About us</p>
        <p>Contact</p>
      </div>
      <div className="divSocialMedia">
        <div className="divTwitter">
          <img className="SocialMediaLogos" src={twitter} alt="Twitter logo" />
          <p>Twitter</p>
        </div>
        <div className="divFacebook">
          <img className="SocialMediaLogos" src={facebook} alt="Facebook logo" />
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
