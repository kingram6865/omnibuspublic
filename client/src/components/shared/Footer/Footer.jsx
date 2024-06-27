import './Footer.css'

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer>
      <div className="footer-detail">
        <span className="copyright">&copy;{currentDate.getFullYear()} Solution Design Laboratory</span>
      </div>
    </footer>
  )
}

export default Footer;
