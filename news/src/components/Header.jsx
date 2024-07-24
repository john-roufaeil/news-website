import logo from "../assets/logo.png"
import Preferences from "./Preferences";

export default function Header() {
    return (
        <header>
            <Preferences />
            <a href='/' title="Go to homepage"><img src={logo} alt="Company Logo" className="logo" /></a>
            <nav>
                <ul>
                    <li><a href="/" title="Go to homepage">Home</a></li>
                    <li><a href="/listing" title="Go to listings page">Listing</a></li>
                </ul>
            </nav>
        </header>
    );
}
