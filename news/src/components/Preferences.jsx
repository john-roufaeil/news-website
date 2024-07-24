import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useState } from 'react';


export default function Preferences() {
    const [fontSize, setFontSize] = useState(16);
    const [theme, setTheme] = useState("light");

    const toggleTheme = theme => {
        document.documentElement.className = "";
        document.documentElement.classList.add(theme);
    }

    const toggleText = size => {
        document.documentElement.style.fontSize = `${size}px`;
    }

    return (
        < ul class="preferences" >
            <li><button type="button" class="preference__button" onClick={() => toggleTheme("light")}><WbSunnyIcon /></button></li>
            <li><button type="button" class="preference__button" onClick={() => toggleTheme("dark")}><DarkModeIcon /></button></li>
            <li><button type="button" class="preference__button" onClick={() => toggleTheme("contrast")}><ContrastIcon /></button></li>
            <li><button type="button" class="preference__button" onClick={() => toggleText("18")}><TextIncreaseIcon /></button></li>
            <li><button type="button" class="preference__button" onClick={() => toggleText("16")}><TextFormatIcon /></button></li>
            <li><button type="button" class="preference__button" onClick={() => toggleText("14")}><TextDecreaseIcon /></button></li>
        </ul >
    )
}