import Header from "../components/Header"
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';
import data from './data.json';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LaptopIcon from '@mui/icons-material/Laptop';
import AttractionsIcon from '@mui/icons-material/Attractions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function DetailsPage() {
    const { id } = useParams();
    const idData = data[id];

    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <Link to="/listing">
                        <Button variant="outlined" startIcon={<ArrowBackIcon />} >
                            Back
                        </Button>
                    </Link>
                    <div>
                        <h1 className="news-headline">{idData.headline}</h1>
                        <p className="news-abstract">{idData.abstract}</p>
                        <div className="news-info">
                            <p className="news-author">Author: {idData.author}</p>
                            <p className="news-date">Date: {idData.date.slice(0, 10)}</p>
                            <Chip
                                color="default"
                                variant="outlined"
                                icon={idData.section === "Sport" ? <DirectionsRunIcon /> : idData.section === "World News" ? <PublicIcon /> : idData.section === "Finance" ? <AttachMoneyIcon /> : idData.section === "Technology" ? <LaptopIcon /> : <AttractionsIcon />}
                                label={idData.section} />
                        </div>
                    </div>
                </div>

                <p className="news-body" dangerouslySetInnerHTML={{ __html: idData.body }}></p>
            </section>
            <Footer />
        </>
    )
}