import "../styles/header.css"
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header className="header">
            <a href='/'><img src={logo} alt="Company Logo" className="logo" /></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/listing">Listing</a></li>
                </ul>
            </nav>
        </header>
    );
}
