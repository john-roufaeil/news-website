import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home-page';
import ListingPage from './pages/listing-page';
import DetailsPage from './pages/details-page';

export default function Root(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listing" element={<ListingPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}