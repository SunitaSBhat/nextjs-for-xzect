import React from 'react'

export default function news() {
  return (
    <div>
        <section id="image">
    <div id="im">
    <img src="./images/busin.avif" id="imggi"/>
    </div>
</section>
<section id="news">
<h2>News and Articles</h2>
<h1 id="ne">Latest news and Blogs</h1>
      <div className="newsing">
        <div className="newsBox">
          <div className="newt">
            <div className="newsIcon">
            <button>Article</button>
            <p>October 25, 2024</p>
        </div>
        <h1>Social Media Influence: Grow & Succeed</h1>
            <div className="arrows">
              <a href="#">Read More</a>
              <i className="fa-solid fa-arrow-right" id="arr1"></i>
            </div>
          </div>
          <div className="imaging">
          <img src="./images/news1.webp"/>
          </div>
        </div>
        <div className="newsBox">
          <div className="newt">
            <div className="newsIcon">
            <button>Article</button>
            <p>December 10, 2024</p>
        </div>
        <h1>Include Clear Calls to Action (CTAs)</h1>
            <div className="arrows">
              <a href="#">Read More</a>
              <i className="fa-solid fa-arrow-right" id="arr2"></i>
            </div>
          </div>
          <div className="imaging">
          <img src="./images/news2.jpg"/>
          </div>
        </div>
        <div className="newsBox">
          <div className="newt">
            <div className="newsIcon">
            <button>Article</button>
                <p>january 12, 2022</p>
            </div>
            <h1>Optimize for Mobile Devices:</h1>
            <div className="arrows">
              <a href="#">Read More</a>
              <i className="fa-solid fa-arrow-right" id="arr3"></i>
            </div>
          </div>
          <div className="imaging">
          <img src="./images/news3.jpg"/>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
                <div className="logih">
                    <img src="/your-image-path.jpg" alt="Description of image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus eaque fuga!</p>
                    <div className="footerIcons">
                        <i className="fa-brands fa-square-twitter" id="ic"></i>
                        <i className="fa-brands fa-facebook" id="ic"></i>
                        <i className="fa-brands fa-linkedin" id="ic"></i>
                        <i className="fa-brands fa-pinterest" id="ic"></i>
                    </div>
                </div>
                <div className="ser">
                    <h2>Services</h2>
                    <ul>
                        <li>Business Strategy Development</li>
                        <li>Viability Assessment</li>
                        <li>Initial Capital Investment</li>
                        <li>Business Blueprint Evaluation</li>
                        <li>Investor Pitch Deck</li>
                    </ul>
                </div>
                <div className="linking">
                    <h2>Links</h2>
                    <ul>
                        <li>Company Overview</li>
                        <li>Services We Provide</li>
                        <li>Articles</li>
                        <li>Service Pricing</li>
                        <li>Get in Touch</li>
                    </ul>
                </div>
                <div className="neoform">
                    <h2>Newsletter Signup</h2>
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">I agree to the <u>Privacy Policy.</u></label>
                </div>
                <div className="iconiSubscribe">
                    <p>Subscribe</p>
                </div>
            </section>
            <section id="last">
                <hr />
                <div className="ps">
                    <p>Created By Sunita Bhat For XZECT</p>
                    <p>© All Rights Reserved By sight</p>
                </div>
            </section>
    </div>
  )
}
