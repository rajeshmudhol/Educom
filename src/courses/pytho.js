import React from "react";
import "./pytho.css"
 function Pyth(){
    return(
        <div>
        <div className="sub-pyth">
<h2>Applied Data Science with Python</h2>
<i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>
                <h4>17306 Ratings </h4>
                <h5>52707 Learns</h5>
                <p>This data Science with Python course gives you a complete overview of pythons data analytics tools and</p>
                <p>techniques.learning python in a ceucial skill for many data science roles, and you can develops it with this</p>
                <p>python data science course.With ablended learning approach.You can learn python for data science</p>
                <p>along with concepts like data wrangling, mathematical computing, and more.unlock your career as a</p>
                {/* <p>data sclentist with simplileams Data science with python training.</p> */}
                </div>
        
        <div className="sub-skill1">
            <h2>Skills you will gain</h2>
            <p>Data wrangling</p>
            <p>Data exploration</p>
            <p>Data visulization</p>
            <p>Mathematical computing</p>
            <p>Web scraping</p>
            <p>Hypothesis building</p>
            <p>python programming concepts</p>
            <p>NumPy and Scipy package</p>
            
            
        </div>
        <div className="pyth-learn">
            <h2>Who should learn</h2>
            <p id="prof">Analytics professionals</p>
            <p id="softw">Softwrae Professionals</p>
            <p id="itp">IT Professionals</p>
            <p id="datas">Data Scientist</p>
            <p id="dataan">Data Analyst</p>

        </div>
        <div className="pyth-proj">
            <h2>Industry Project</h2>
            <div className="container2">
                <div className="sub-prod">
                    <h4>Project 1</h4>
                    <h3>Products rating prediction for Amazon</h3>
                    <p>Help Amazon, a US-based e-commerce company,</p>
                    <p>improve its recommendation engine by predicting</p>
                    <p>ratings for the non-rated products and addings </p>
                    <p>to recomendations accordingly</p>
                    <img src="data:image/png;base64,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"></img>



                </div>
                <div className="sub-prod">
                    <h4>Project 2</h4>
                    <h3>Demand Forecasting for Walmart</h3>
                    <p>Predict accurate sales for 45 Walmart stores,</p>
                    <p>considering the impact of promotional markdown</p>
                    <p>Events.Check if Macroeconomic factors have an</p>
                    <p>imapact on sales.</p>
                    <img src="data:image/png;base64,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"></img>
                    
                </div>
                <div className="sub-prod">
                    <h4>project 3</h4>
                    <h3>improveing customer experience for Comcast</h3>
                    <p>Provide Comcast, a US-based global telecom</p>
                    <p>comoany,key recommedations to improve</p>
                    <p>problem areas that lower customer satisfaction</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYfJK99Qf7LYQ2j9umkGTcKnaciQUe71wBg&usqp=CAU"></img>
                    
                </div>
            </div>
            </div>
            <div className="sub-reviw">
                <h2>Data Science with Python Course Reviews </h2>
                <div className="container3">
                    <div className="pyth-rev">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7GIYnBqi-MlDGqd0y-h1lgii-re-YAi81A&usqp=CAU"></img>
              <h3>Arun </h3>
              <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>
                <p>The Training was well-structured,and the trainer was experienced with</p>
                <p> hands-on know-how. the trainer handled responses and queries</p>
                <p>efficiently with a good amount of patience.</p>


                    </div>
                    <div className="pyth-rev">
                        <img src="data:image/jpeg;base64,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"></img>
                        <h3>Brain</h3>
                        <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>
                <p>The online classes were well-paced and helped us learn a ton of stuff</p>
                <p>within a short amount of time.Vaishalli is very kanowledgeadble and</p>
                <p>handled all the sessions with outstanding professionalism.Thanks</p>
                <p>for your expertise</p>


                        
                        

                    </div>
                </div>

            </div>
            
        
        </div>
        
        

    )
 }
 export default Pyth;