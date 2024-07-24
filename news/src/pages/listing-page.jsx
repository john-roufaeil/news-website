import Header from "../components/Header"
import Footer from "../components/Footer"
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import data from './data.json';
import { Link } from 'react-router-dom';

export default function ListingPage() {
    return (
        <>
            <Header />
            <section>
                <h1>News Listing</h1>
                <List>
                    {data.map(newsItem => (
                        <Link key={newsItem.id} to={`/details/${newsItem.id}`}>
                            <ListItemButton>
                                <ListItemText
                                    primary={newsItem.headline}
                                    secondary={newsItem.abstract}
                                />
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </section>
            <Footer />
        </>
    )
}