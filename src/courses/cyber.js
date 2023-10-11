import React from "react";
import "./cyber.css"

function Cyber(){
    return(
        <div>
        <div className="one-cyber">
<h2>introduction to Cyber Security</h2>
<i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>
                <h4>17306 Ratings </h4>
                <h5>52707 Learns</h5>
                <p>Learn cyber security basics with this introduction to Cyber Security course.This course .This course is designed for beginners to familiazir </p>
                <p>them with the current cyber security landscape and provide the knowledge of revelant tools to assess and manage security protocols in information </p>
                <p> </p>
                <p> </p>
                <p></p>
                <p></p>
                
                </div>
        
        <div className="cybe-skill1">
            <h2>Cybersecurity fundamentals</h2>
            <p>Threat actors attacks</p>
            <p>Mitigation</p>
            <p>Security policies amp procedures</p>
            <p>Secure architecture</p>
            <p>Wireless networks</p>
            <p>Network security controls</p>
            <p>BYOD security testing </p>
            <p>IS governance</p>
            <p>Risk managment</p>
            <p>incident management</p>
            <p>Business continuity</p>
    
            
            
        </div>
        <div className="cybe-learn">
            <h2>Who should learn</h2>
            <p id="exe">C Level Executives</p>
            <p id="mp">Management Professionals</p>
            <p id="sec">Security Consultants</p>
            <p id="see">Security Engineers</p>
            {/* <p id="dataan"></p> */}

        </div>
        <div className="intr-proj">
            <h2>Industry Project</h2>
            <div className="container5">
                <div className="intr-prod">
                    <h4>Project 1</h4>
                    <h3>Rating prediction for apps on Google Play store</h3>
                    <p>Rating prediction for apps on the goole Play </p>
                    <p>store Make a model to predict the app rating,</p>
                    <p>with other information about the app provided </p>
                    <p>to boost its visibilty</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAxlBMVEX///8iHx8AAAD/mQAWEhIZFRX/lgAbFxe4t7cfHBwIAAAcGRn/kAATDw//lQDw8PCgn5/j4uKqqalgXl6Af39UUlJzcXGSkZEOCAj5+fmGhYXDw8NEQkLy8vLq6uqUk5MnJCR5eHjX19fIyMhnZmaura3j4+M2NDRJR0f/9Or/+/ZYV1e7u7s8OjovLCz/wIH/rlb/unT/2LT/nyP/hAD/5s/+xY3/ojD/qUf/7dz/38L/8eP/06n+nBn/s2H+t2z/zqH/rFAVKUBIAAALlklEQVR4nO2aaVvbOhOGHcVO8Er2OM7urEAIBQ5LOZS2//9PvdpGko1TEpr30HLN/aV4k2YejUYjpZaFIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjyhzAbzwfb7WBeS3e8MDzpJuONukxrSdJ4/W69MW2vJpfNZNMzb/dOX5Fpu09bG29Gu4xLG0lSmxU/6yfN9sX0pJe/P2pML9oXrdcPaHe1ebvZ1cb3WxftzsJwImPIMCEktn3X9e2Y+A39YE0YIf1rSt8IY0JEG7MJ8cLQI6usPIstvV31Xd8JCZkOtaHkNTXtepO1zRpf9w1BxGvUmNGadRaT+OS1nwtqnVNl3Y2z0jTpN/kHA0Iu6T814tlVJyYd2dGENWETIkd+1E37Xd3SCYlLGpdcKrUJv0OG1sqDh+y7MXHFpU8MJUcr4hvthES5mpJSnrAFD1vEgZs+uVBdn/BvwsRawnPRd4YmGEKNvDRi5ITYqieyglGiLRI2zPKBN2A3N2C0K8eru5x2eiqOunnT7UlOHGuu1aMunxgfEBXtdVLNtaOeFYmTyGdrL3PbBU+UOL5WnOhpzblg38YswOg79krdb7BvaSx4hL3gOD1DnDEp0ds8HEjCTXNkA9LeRb0ztSCuN2C5q6yIYVilOH3DObdqma66IGRPDaIPf7jk7chpxtn7DrQnxRnXDPFcO6MN9ZP2Ma5bw802pFZP5f0Z+5TM6ZQ/rXHZBlqcEaER0rOGPCLIyHJc0qYvzrY2E4C3Wu9rcaRTNtmuPXCCDE1x3IFrmF8dmJOnRGTamYZSEG89gUiFSZcSH1D6J3qM2VcUMXviuSmO3XIynZlZecS08ZZS5FCb4lFziUxQw21V2UHf95t2uFQxEY8bHpEhfOnzWUF1qvXSVs8IQXq/c2pEEcSvvHR5jKrIYPmEhPLKEx0PxavVLTN/ORAzzGnKqFoPJG1ohIxEuIn2Pbq41duhqbacuzbvDKIn1mncsua21sOyVn7JFrp2PT0s1DBqtwxh1qJD6vJBKyy5l9twbkgd8tgbNVTmX/PBtDvmeFFJM+JQ6WbpItbJL5n1E/ksFllywe13QyE5OB1aOWCCSeO7sanHiptSXZuW0IettC5HUJnJOFXecNhcIj1pdHWg32MNiREkhmfie1fNfKq1U/J12pL+x3bVLRGoO4QV0GlGgKUyN9VyQPLo0PXQLXkwsh2xWhArS0+Gn92W7fNLOeIQt2JsQRyxhshH1bZuq8ECZKmvJ64IePYhMWoCiwa+8JqnGb2mrVxTK+5P3t5+t9MukTVcimwKIwQGKm25HEmBjstxq7kiBMqnsQyJXAnWhMQkctoMEr54OjTDVooDg1lyzStGu1ryL422k1BYxqzMOMls4YaRrLpsAA11U/La3hyTAnEcObJy4YCsKBKzLlhMaoXiLEBsqQbMKghb0bk/MMSRKc2a8lBUa6OwLTYrvz7N6XNx37kwe+UT7kR+YZRKSZhRsU4MS4opEgdahLCX4XFR3S1OYeScwiyFzNGuZidf09HXUhzIuKJB1836Ys4eK03Tnpj8GdF4AuQxxZKPsUugQ+MbuWlJtGt50kV3vg5hXc+IA5lEljvg8YVTIE59U5u2J1ByZ8UZCN+1hzJtb+G6ZaxXII4sKkTUGuIwY8yUk7mf3WjAdCLZMpKKY4ZYfYc4vQbdRHk8M5eKxGlkxbF2iTPrELZNquplzRSnBpMKll+5punhg3jrG+LAx3lxeD4uSBE8r2Y3qbSE4fMxF2tMnOab4tRIvvIvFmeTtbedm1bpytjRvBanDtqoaT+SS5BaDSBTLfYQh6fZ19rwNkh2P9z2xavvEWctrfbZLqVwWu0lTk3WxW5IVIloijMRj6t6hVnuEIf395Y43R3ijAvEqb5bnLVwxCeDcT9dFiXkvcSBOo2ErZNZPQnz4rQgDen+R/lpJZfD3xLnqJEzlsv1VjT4XnGgQpSl76ulfAbPjeVC1jW6WjlkWnERCnJO43XOoTUH37IeLA4U+hN5/V5x5rIknmXdBOtVaWxYo1arElwfkpB54i1YXDa5NYniumLqHixOQxZ20Fz4PnFkEKjO8nUOlMZeZqy3bqZBtZTX9xCHl3YFR6es0M3sT7kX3KGDxYERB6PlXvhQceQq70GBMc3mHLVRynoDOzCoSy8KisBd4oyINkw4t11NamIqmPtT4TV/82BxcoOXZiPgl3WOKU5uZ8E3dSVVwkFpTG8Q73I+hrcaua/Mzt8Sh21aYcfKSTyXnwWxqqZqusgnYPoeccKsOHK348YHigPTaKM7MtxumydWvkNLhhbfecvlCnaycmREzn5THL5vNDyh2ZIbypexuvGAxqPw52BxJlIcsVapIZaN7B85ccZNOT/k0I5U4ChCcQC35k3AoUrHnOJvirPJ7hNS8C0l2g7GUu03DxZHDqooxHorOMaUq9fe4qikwnc7iZ5GM6vwCFkmGtmiOI6Dgzbh2JvisHmlFzqmsy+qSX7gqb1kAyWy2sHiyHlUCi8X/bHx04rYOe8tDswjl4z7i4E+E+fLU7E43A55nhoPGou5XNhlEn9bHHZLHaqPtefMTH3wwx7IHwxy4ozfFAe8KvkeYeegTgheHiSOpWIuJp7PPgcNNlqcqh3GoV01xYHuq54nZyKY/wtxxkTsz9gGl3S4lixWHai027YuatmvVPCjxcHiQAUCvsy73ApfJKH9xelnosOP4V12ssLEcTxC2tOkm3TYAUBV2XGSiyq1Ld0tzgmdTzxpc9FDMk/mbC/nKs+GbIfok/W41hEP6u8Vp+frrbRLaJRe0iEMt6fQ3J7iWFPDy3hyyg8oXLF6zUhILha633pjQGywY2H+TOrqH293i8NKxbBjSZlYsDv8U11D1fnPPNU4Zq45aqd1uDjWcE1s1ofrEJ78h7btwT6ZhDaFqCLQ5pfy4drjV3rWx+LXg5hwvTrEUWtgku+03pnAn+kWfu91SEk7eJLtrMYvQ0/KBr/Ze3Jb4hLf3GyOLuEQxiED1TdtIpOQie1lDrtsu2A/MuvwU4a53BMOB+oHj0aHIyvY3pRfweD25/xSGTXqrthvc+ux7CG53PnfJrJsmuI/DVyYB3hD0TVsBJbikptYI/pMqLbln27NWpm3Kf4PBJkbajBvzAOmTmduVuxJp2NUACa/Pnbfm/c2s0zTgiPPvRimaTosuN9L39/mf82/z9eP5SAIoofrm4+25bc5O2prz7dBVKmUOZXg21Hb/u85++fh7miNPVWoMpVKBPoE50dr+mO4CoIv/x6nqbt/gvLjy/XV/f3VS1T5DOJYP4JK8HIcecwpek3VCY7S6odyF1SoPF+P3OrXoFy+PXKbH8HZbUSz5+PTsdrjk4mKU/l+rBY/lGs6zJWofH+Epev8x7fgmv57E5Wjv38t5zzxBBoFX37Tn6eXgEbhA/3rqlIOjlsmfBznXwJem0TB93dPr7uriGkcPTBRbsuVxyPa98HQIqUs9Xl5PnjMz2++R0GFl3737Pos+DSzSnAVQG0bBd+ubvYW6Pzp/iGIZN33KKqCH1Tp/5uhH8LZC8jDBaq8/Hh6Q6Hzu+drumOI5EdRGaLloRx8qsBhfP2i5WECRUHw8P3+5u5rTqTzs7ubH1c/K0EU6fejyrNqJ/hMGUfxla03GahEVKMgKN8+PD7+fHx8+FZhl2oHBdvM8rNu5Sr6NEtVlrN7MxyyOjGKHkTBz8wiFwXH287+aTx9CXbpU6hMvnx8+ufzamOxpXk/fdjCdn/sfdnfwNPVbbBzhrE5FgXR98NLok8DLWFeyiz5RjrZ8OMseu/x6uZIB0F/M+dfn57vr18eH27L5W+3Dz+/X/24ufvrz7EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEH+DP4H4z7c3j6RIdkAAAAASUVORK5CYII="></img>



                </div>
                <div className="intr-prod">
                    <h4>Project 2</h4>
                <h3>Demand forecast</h3>
                    <p>Demand forecast for Walmart Predict Store sales</p>
                    <p>and demand.factoring in economic conditions for</p>
                    <p>retail giant Walmart's store across the united States</p>
                    
                    <img src="data:image/png;base64,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"></img>
                    
                </div>
                <div className="intr-prod">
                    <h4>project 3</h4>
                    <h3>Attrition modeling for IBM</h3>
                    <p>Attrition modeling for IBM Help the US based</p>
                    <p>multinational corporation IBM identify factors</p>
                    <p>that influence the attrition of their employees </p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYfJK99Qf7LYQ2j9umkGTcKnaciQUe71wBg&usqp=CAU"></img>
                    
                </div>
            </div>
            </div>
            <div className="intr-reviw">
                <h2>Learner Reviews </h2>
                <div className="container6">
                    <div className="intr-rev">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPbu_Et8kAa1Rjtv_iHBpn9_g99X-4Acpcw&usqp=CAU"></img>
              <h3>Dhanya Krishna </h3>
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDranu2-MmQHSzSNSqnOzoH43y8sa9VcdAZg&usqp=CAU"></img>
                        <h3>Leena jayamohan</h3>
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
export default Cyber;