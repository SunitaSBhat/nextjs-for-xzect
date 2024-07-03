import React from 'react'

export default function solutions() {
  return (
    <div>
        <section id="solutions hover:text-black">
        <div className="bar flex">
            <div className="businesSolutions text-white hover:text-black">
                <h3>BUSINESS STRATEGY</h3>
                <h2>1350+</h2>
            </div>
            <div className="businesSolutions  text-white hover:text-black">
                <h3>CAREER DURATION</h3>
                <h2>12+</h2>
            </div>
            <div className="businesSolutions  text-white hover:text-black">
                <h3>INDUSTRY EXPERT</h3>
                <h2>137+</h2>
            </div>
            <div className="businesSol  text-white hover:text-black">
                <h3>HAPPY CUSTOMERS</h3>
                <h2>936+</h2>
            </div>
        </div>
    </section>
    <section id="newsLetter">
    <div className="news">
        <p>Our News Letter</p>
        <h2>Become a Member For Unique Updates!</h2>
    </div>
    <div className="subscribe">
        <input type="email" placeholder="Enter Your Email" />
        <hr />
        <label htmlFor="check">
            <input type="checkbox" id="check" />
            <p>I agree to the <u>Privacy Policy.</u></p>
        </label>
    </div>
    <div className="iconSubscribe">
        <p>Subscribe</p>
    </div>
</section>
<section id="points">
    <div className="pointing">
        <img src="./images/side.webp" alt="business" id="img" />
        <div className="extra">
            <ol id="ol">
                <li tabIndex={0}>
                    <div className="li">
                        <img src="./images/logo3.png" />
                        <p>Branding</p>
                        <h2>Strategic Block</h2>
                    </div>
                    <div className="numbering">
                        <p>01</p>
                    </div>
                </li>
                <li>
                    <div className="li">
                        <img src="./images/logo3.png" />
                        <p>Sales increase</p>
                        <h2>Market Research</h2>
                    </div>
                    <div className="numbering">
                        <p>02</p>
                    </div>
                </li>
                <li>
                    <div className="li">
                        <img src="./images/logo4.png" />
                        <p>Business</p>
                        <h2>Financial Control</h2>
                    </div>
                    <div className="numbering">
                        <p>03</p>
                    </div>
                </li>
                <li>
                    <div className="li">
                        <img src="./images/logo2.jpg" />
                        <p>Branding</p>
                        <h2>Strategic Block</h2>
                    </div>
                    <div className="numbering">
                        <p>04</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</section>
    </div>
  )
}
