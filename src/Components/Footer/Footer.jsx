import "./Footer.css"; // optional if you're using custom styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Career Pathfinder</h3>
        <p>
          Empowering you to find your best-fit career with AI-powered insights.
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Career Pathfinder | Made by
          Himanshi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
