import React from "react"
import '../styles/styles.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="fill-height">
                <h1>Homepage</h1>
            </div>
            <Footer />
        </>
    )
}