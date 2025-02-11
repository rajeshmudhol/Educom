import React from 'react';
import "./community.css"
import MainHeader from './mainheader';

function Community() {
    return (
        <div>
              <MainHeader/>
     
        <div className='c-main'>
          
            <div className='c-profile'>
                <div className='p-head'>
                    <img style={{color:'#17bf9e'}} src='https://www.shutterstock.com/image-vector/man-icon-vector-250nw-1040084344.jpg'></img>
                </div>
                <p>Good morning</p>
                <h3>Sanjay L P</h3>
                <div className='view-profile'>
                    <b>View profile</b>

                </div>
                <div className='contributes'>
                    <h2>Top Contributors</h2>
                    <div className='date'>
                    <p id='all-time'>All time</p>
                    <p id='month'> Month</p>
                    <p id='day'>Day</p>

                    </div>
                    <div className='list'> 
                   <div className='profile-one'>
                    <img src='https://tribe-s3-production.imgix.net/FclPQLD4hrxbNTBEfUL3Z?fit=max&w=500&auto=compress,format'></img>
                    <p id='first-name'>Sanjay </p>

                   </div>
                   <div className='profile-two'>
                    <img src='https://tribe-s3-production.imgix.net/6SSlum2EL2wfrBoaIx2OD?fit=max&w=500&auto=compress,format'></img>
                    <p id='two-name'>Sagar </p>

                   </div>
                    
                    
                    </div>

                </div>

            </div>
            <div className='c-comment'>
                <div className='c-head'>
                    <img src='https://www.shutterstock.com/image-vector/man-icon-vector-250nw-1040084344.jpg'></img>
                    <p>Connect,share insights and discuss</p>

                </div>
                <div className='c-banner'>
                    <img src='https://tribe-s3-production.imgix.net/eXIWwI7E9yEKClnC4QBNZ?fit=max&w=500&auto=compress,format'></img>
                    <h3 id='name'>Kavitha</h3>
                    <p id='name-d'>12 days ago.Posted in Learn Together</p>

                    <div className='banner-details'>
                        <h3>Learning Tableau</h3>
                        <p >I've embarked on an amazing Tableau learning adventure! 📊💡</p>
                        <p id='babanner-details-p'>I've always had a passion for data visualization and analysis, and now, I'm thrilled to share that I've found the perfect course to turn my dreams into reality.</p>
                        <p id='course'>📌 Course: Tableau training.</p>
                        <p id='date'>📆 Start Date: 21 September, 2023</p>
                        <h3 id='why'>🌟 Why Tableau?</h3>
                        <p id='tableau-d'>Tableau is a powerful data visualization tool that enables me to transform raw data into actionable insights. With Tableau, I can create stunning interactive dashboards, uncover trends, and make data-driven decisions with ease. It's a game-changer for anyone interested in data analytics, business intelligence, or data storytelling.</p>
                        <h3 id='learn'>🎯 What I'll Learn:</h3>
                        <b id='code'>365daysofcode</b>
                        <b id='data'>Data science</b>
                        <b id='group'> Group study</b>

                    </div>
                 <div className='c-like'>
                    <p>Like</p>

                 </div>
                 <div className='c-follow'>
                    <p>Follow</p>

                 </div>
                 <div className='c-share'>
                    <p>Share</p>

                 </div>
                </div>

            </div>
            
            
            <div className='c-guid'>
                <h2>Meet Our Guids</h2>
                <div className='guids'>
                    <div className='guid-one'>
                        <h2>SimpliLearn <br></br>Community </h2>
                      <img src='https://tribe-s3-production.imgix.net/zQAutyr5WUtOL4Pto9nTu?fit=max&w=1000&auto=compress,format'></img>
                                <p>Solutions for Simplilearn Seekers</p>
                    </div>
                    <div className='guid-two'>
                        <h2>Shadow <br></br>Shinobi </h2>
                      <img src='https://tribe-s3-production.imgix.net/K773FDhs085GuwC8qI3o6?fit=max&w=1000&auto=compress,format'></img>
                                <p>Digital Marketing Ninja & Community Guide</p>
                    </div>
                    <div className='guid-three'>
                        <h2>Alex  <br></br>Myers </h2>
                      <img src='https://tribe-s3-production.imgix.net/aQDXT9G1HFYVAcnxAR1lC?fit=max&w=500&auto=compress,format'></img>
                                <p>Keeper of Community Space</p>
                    </div>

                </div>

            </div>


        </div>
        </div>
    )
}

export default Community;