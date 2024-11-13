import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer mt-20 bg-neutral text-neutral-content p-10">
         

        <nav>
        <h6 className="footer-title">Product Support</h6>
          <Link className="link link-hover">Order Tracking</Link>
          <Link className="link link-hover">Shipping & Delivery</Link>
          <Link className="link link-hover">Returns</Link>
       
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact Us</Link>
          <Link className="link link-hover">Jobs</Link>
         
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy Policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    );
};

export default Footer;