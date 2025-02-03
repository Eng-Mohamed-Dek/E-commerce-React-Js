const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All reserved by Hirkaab Academy</p>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon"><img src="../Frontend_Assets/instagram.png" alt="" /></a>
          <a href="#" className="social-icon"><img src="../Frontend_Assets/x.png" alt="" /></a>
          <a href="#" className="social-icon"><img src="../Frontend_Assets/youtube.png" alt="" /></a>
          <a href="#" className="social-icon"><img src="../Frontend_Assets/facebook.png" alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
