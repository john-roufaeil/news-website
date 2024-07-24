import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
        <footer>
            <p class="copyright">Copyright © 2024 News Website. All Rights Reserved</p>
            <ul class="social-media">
                <li><a href="https://facebook.com" title="Facebook Page"><FacebookIcon /></a></li>
                <li><a href="https://instagram.com" title="Instagram Page"><InstagramIcon /></a></li>
                <li><a href="https://x.com" title="X Page"><XIcon /></a></li>
                <li><a href="https://linkedin.com" title="LinkedIn Page"><LinkedInIcon /></a></li>
            </ul>
        </footer>
    );
}
