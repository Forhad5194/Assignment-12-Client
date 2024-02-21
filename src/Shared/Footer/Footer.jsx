import logoImg from '../../assets/logo/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 rounded-xl text-base-content">
                <aside>
                    <img src={logoImg} alt="" />
                    <p>NECKLE REAL ESTATE<br />Providing reliable real estate since 1994</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center rounded-xl p-4 bg-base-200 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Neckle Real Estate.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;