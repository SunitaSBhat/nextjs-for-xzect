'use client';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import "./page.css";
import Services from './services';
import Solutions from "./solutions"
import Reviews from "./reviews";
import News from "./news";
export default function Home() {
  const shownaving = () => {
    const uli = document.getElementById("uli");
    if(uli){
    if (uli.style.display="none") {
      uli.style.display = "flex";
      uli.style.flexDirection = "column";
      uli.classList.add("uliClass");
    }
    else{
      uli.style.display="none";
    }
  }
  };
  return (
   <main>
    <div className="contai w-full">
        <div className="about w-screen">
          <section id="smallnav">
            <div className="navbari">
              <ul>
                <li id="firstOne" className="border">example@gmail.com</li>
                <li className="border">New York, NY 10038</li>
                <li>(123) 777-5643</li>
                <li>
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Korean</option>
                    <option>Bangla</option>
                  </select>
                </li>
              </ul>
            </div>
          </section>
          <section id="mainnav">
            <div className="mainnav">
              <div id="logo">
                <img src="./images/logomain.png" alt="logo" width="100px" height="35px" />
                <MenuIcon onClick={shownaving} id="menu"></MenuIcon>
              </div>
              <ul id="uli">
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
              <div id="getinTouch">
                <button id="btnintouch">Get in Touch</button>
              </div>
            </div>
            <hr />
          </section>
          <section id="intro">
            <p>Specialized Direction</p>
            <h1>Well-Versed Financial Professionals.</h1>
            <button id="consul">Schedule a Consultation</button>
            <div className="images">
              <img src="./images/invoice.png" alt="Invoice" />
              <img src="./images/velad.png" alt="Evelead" />
              <img src="./images/veroxfloor.png" alt="Veroxfloor" />
              <img src="./images/wetransfer.png" alt="WeTransfer" />
              <img src="./images/xpeng.png" alt="Xpeng" />
              <img src="./images/invoice.png" alt="Invoice" />
            </div>
          </section>
        </div>
        <Services/>
    
    <Solutions/>
    <Reviews/>
     <News/>
      </div>

   </main>
  )
}
