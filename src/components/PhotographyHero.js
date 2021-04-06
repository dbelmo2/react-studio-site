import React from 'react'
import "./PhotographyHero.css";

function PhotographyHero() {
    return (
        <div className="photography--container">
            <div className="photography--content-wrapper">
                <div className="photography--text-wrapper">
                    <div className="photography--header-top-wrapper">
                        <h2 className="photography--header-top"> Memories in a</h2>
                    </div>
                    <div className="photography--header-bottom-wrapper">
                        <h1 className="photography--header-bottom">Photo</h1>
                    </div>
                    <div className="photography--body-wrapper">
                        <h3 className="photography--body">Today's special moments, tomorrows priceless treasures. From graudations to weddings, Krezzyy Studios provides quality photography services for most events. View some of our work below. </h3>
                    </div>
                </div>
                <div className="photography--image-wrapper">
                    <img src=".././images/PhotographyImages/pg13.jpg" className="photography--img" />
                </div>

            </div>
            
        </div>
    )
}

export default PhotographyHero
