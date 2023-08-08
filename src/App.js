// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <ul id="topnav">
        <img src="/tft-1.webp" alt="Logo" class="logo" />
        <li><a className="menu">Whatsapp Software</a></li>
        <li><a className="menu">Google Data Extractor</a></li>
        <li><a className="menu">Justdial Extractor</a></li>
        <li><a className="menu">Let's Speak</a></li>
        <li style={{ display: 'inline-flex', gap: 8, alignItems: 'center', padding: "8px 16px 8px 16px" }} className="black_btn">
          <svg className="call_btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z" /></svg>
          <a href="tel:919106476439">+91 9106476439</a>

        </li>
        <li className='black_btn' style={{ padding: 16 }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m5 9l4.5 3L14 9" /><path d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2" /><path stroke-linejoin="round" d="M23 14h-6m0 0l3-3m-3 3l3 3" /></g></svg></li>

      </ul>
      <div className="bg-mask" style={{ padding: 100, color: '#fff' }}>
        <div className='grid-container' >
          <h1>WORLD'S BEST MARKETING SOFTWARE</h1>
          <h3>WhatsApp + Business = More Business</h3>
          <h3>Our mission is to automate the process of sending WhatsApp messages in a effective way.<br /><br />68% of WhatsApp is the easiest way to connect with businesses.
            Now send whatsApp messages directly from PC in a simple and effective way</h3>
          <div style={{ display: 'flex', gap: 20 }}>
            <button className="back_btn">BUY ME</button>
            <button className="back_btn">ENQUIRE NOW</button>
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <img src="/Whatsapp.webp" alt="book" />
        </div>
      </div>

      <div className="section">
        <div style={{ paddingTop: 20 }}>
          <h1 className='title1' >Why Should You Buy</h1>
          <h4 className="sub_section">We Are Developer not Reseller Be Aware from unauthorized reseller</h4>
        </div>

        <div style={{ padding: "50px", gap: "50px", display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div>
            <img class="images" src="/section-img-1.webp" alt="Logo" />
            <h2 >Send 1000's Of Messages</h2>
            <h5 >Blast messages without saving numbers with your whatsApp numbers.</h5>
          </div>

          <div>
            <img class="images" src="/section-img-2.webp" alt="Logo" />
            <h2 >Custom Messages</h2>
            <h5 >Send customized whatsapp messages with multi languages and send greetings such as receiver's name.</h5>
          </div>

          <div>
            <img class="images" src="/section-img-3.webp" alt="Logo" />
            <h2 >Import Multiple Contacts</h2>
            <h5 >Import all contact details from CSV, TXT file or by copying and pasting.</h5>
          </div>

          <div>
            <img class="images" src="/section-img-4.webp" alt="Logo" />
            <h2 >Advanced Features</h2>
            <h5 >Dual Mode sending Features (Safe Mode & Blind Mode), Filter Business & Regular Whatsapp Number , Fast Number Filter, Sending Customized Message, Scedule Sending</h5>
          </div>

          <div>
            <img class="images" src="/section-img-5.webp" alt="Logo" />
            <h2 >Supports All Multimedia format </h2>
            <h5 >Shoot your messages in any format such as text, images and vCard files</h5>
          </div>

          <div>
            <img class="images" src="/section-img-6.webp" alt="Logo" />
            <h2 >Windows Support</h2>
            <h5 >Os Supported Windows 10 (32 & 64 bit), Windows 8/7/Vista & XP.</h5>
          </div>
        </div>

      </div>

      <div>
        <div className="bg-image">
          <div style={{ color: "#fff" }}>
            <h1 className='title1' style={{ color: '#fff' }}>Want To Try IT Out</h1>
            <h6 style={{ textAlign: 'center' }}>Add +91-9106476439 to your contacts list and send a message saying “Hi” over WhatsApp or scan this QR</h6>
            <h6 style={{ textAlign: 'center' }}>code to start a Whatsapp chat with The Future Tech . The rest is easy to follow.</h6>
          </div>
          <div style={{ marginRight: "auto", marginLeft: "auto", width: 'fit-content', marginTop: "50px" }}>
            <img src="/QR-code.webp" alt="Logo" style={{ width: 761 / 1.5, height: 439 / 1.5 }} />
          </div>
        </div>
      </div>

      <div className="section" >
        <h1 className='title1'>Main Features</h1>
        <div style={{ color: '#000', textAlign: 'center', width: "50%", marginLeft: "auto", marginRight: "auto" }}>WhatsApp Marketing is the bulk messaging tool that includes all facilities such as sharing images, text messages and audio as well as video files.</div>
        <div style={{ width: "75%", padding: 50, display: 'flex', gap: 20, flexDirection: "column", marginLeft: "auto", marginRight: "auto" }}>
          <div className='main_item' style={{ marginRight: "auto" }}>
            <div className="flexbox">
              <p style={{ color: "#abb8c3", fontSize: 24 }}>01.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className='dynamic'>Dynamic Chatbots</div>
                <p className='sub_text'>Show the user several options to choose from (dynamic navigation menu) , Set Multiple Auto-Replies With Photos And Files</p>
              </div>
              <div>
                <img src="https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/02/Dynamic-Chatbots.png" alt="Chatbot" />
              </div>
            </div>
          </div>

          <div className='main_item' style={{ marginLeft: "auto" }}>
            <div className="flexbox2">
              <div>
                <img src="https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/02/Contact-Registration.png" alt="Chatbot" />
              </div>
              <p style={{ color: "#abb8c3", fontSize: 24 }}>02.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className='dynamic'>Contact Registration</div>
                <p className='sub_text'>Automatically register all users who contact you on Whatsapp</p>
              </div>
            </div>
          </div>

          <div className='main_item' style={{ marginRight: "auto" }}>
            <div className="flexbox">
              <p style={{ color: "#abb8c3", fontSize: 24 }}>03.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className='dynamic'>Multiple Contents</div>
                <p className='sub_text'>Send static text, images, web links, emoji etc…</p>
              </div>
              <div>
                <img src="https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/02/Multiple-Contents.png" alt="Chatbot" />
              </div>
            </div>
          </div>

          <div className='main_item' style={{ marginLeft: "auto" }}>
            <div className="flexbox">
              <div>
                <img src="https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/02/ImportExport-Contacts.png" alt="Chatbot" />
              </div>
              <p style={{ color: "#abb8c3", fontSize: 24 }}>04.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className='dynamic'>Import/Export Contacts</div>
                <p className='sub_text'>Import or export all contact list with Name and Number informations</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#e4eaf5" }}>
          <h1 className='title1' >Pricing & Offers</h1>
          <h4 className="sub_section">The Future Tech is the foremost organization that provides the best price and discount offers to our products.</h4>

          <div style={{ padding: "50px", display: "grid", gridTemplateColumns: "auto auto auto" }}>
            <div className='pricing'>
              <span>Whatsapp Software</span>
              <ul style={{ margin: 0, padding: 0 }}>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Some Awesome Features Of API Based Bulk Whatsapp Software?</li>
                <li className='pricing_items'>Dual Mode Sending Features (Safe Mode & Blind Mode)</li>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Filter Business & Regular Whatsapp Number</li>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Set Auto-Reply With Photos And Files</li>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Fast Number Filter</li>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Import Numbers From Excel, CSV, And Text</li>
                <li className='pricing_items'> <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Sending Customized Message</li>
                <li className='pricing_items'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Whatsapp Group Grabber</li>
              </ul>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                <div style={{ display: "inline-block" }}><span style={{ fontWeight: 'bold', fontSize: 40 }}>₹ 1499</span><br />+GST</div>
                <button className='back_btn' style={{ fontSize: 18 }}>Play Video</button>
              </div>
            </div>

            <div className='pricing'>
              <div>
                <span>Google Data Extractor</span>
                <ul>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Unlimited Data Extract from google with</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Any Categories Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Area Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>City Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>State Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Country Wise</li>
                </ul>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                <div style={{ display: "inline-block" }}><span style={{ fontWeight: 'bold', fontSize: 40 }}>₹ 4500</span><br />+GST</div>
                <button className='back_btn' style={{ fontSize: 18 }}>Play Video</button>
              </div>
            </div>

            <div className='pricing'>
              <div>
                <span>Justdial</span>
                <ul>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Unlimited Data Extract from google with</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Any Categories</li>
                  <li className='pricing_items'> <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Area Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>City Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>State Wise</li>
                  <li className='pricing_items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{ paddingRight: 10, minWidth: "max-content" }} height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>Country Wise</li>
                </ul>

              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                <div style={{ display: "inline-block" }}><span style={{ fontWeight: 'bold', fontSize: 40 }}>₹ 5000</span><br />+GST</div>
                <button className='back_btn' style={{ fontSize: 18 }}>Play Video</button>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#e4eaf5" }}>
            <p className='test' style={{ textAlign: "center" }}>TESTIMONIALS {">>"}</p>
            <h1 className='title1' >What Our Client Say</h1>
            <h4 className="sub_section" style={{ width: '50%', marginLeft: "auto", marginRight: "auto" }}>The Future Tech is the foremost organization that provides the best price and discount offers to our products.</h4>

            <div style={{ display: "flex", gap: 70, marginTop: 50 }}>
              <div className='grid-container' >
                <p className='test' style={{ paddingLeft: 50 }}>CONTACT US {">>"}</p>
                <h1 className='title1'>Have Questions? Get in touch!</h1>
                <div style={{ paddingLeft: 50 }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <input type="text" name="username" placeholder='Full Name*' style={{ width: "50%" }} />
                    <input type="text" name="phone number" placeholder='Phone Number*' style={{ width: "50%" }} />
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <input type="text" name="email" placeholder='Email*' style={{ width: "50%" }} />
                    <select className='dropdown' style={{ width: "50%" }}>
                      <option>How Did Hear About Us?*</option>
                      <option>Google</option>
                      <option>Social Media (Instagram, Facebook, Etc)</option>
                      <option>WhatsApp Messages</option>
                      <option>Word Of Mouth/Referral</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <input type="textarea" name="message" placeholder='Message*' style={{ width: "100%" }} />
                  <div style={{ paddingTop: 20 }}>
                    <button className="back_btn">SUBMIT</button>
                  </div>
                </div>
              </div>
              <div style={{ width: '30%' }}>
                <div className='address'>
                  <p class="title2"> Where We Are</p>
                  <div>
                    <ul style={{ display: "inline-grid", marginTop: 20, listStyleType: "none", margin: 0, padding: 0 }}>
                      <li className='highlight'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ marginRight: 10 }} viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" /></svg><a className='contact-details' href="mailto:info@thefuturetech.in">info@thefuturetech.in</a></li>
                      <li className='highlight'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ marginRight: 10 }} viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg><a style={{ textDecoration: "none", color: "#000" }} href="tel:919106476439">+91 9106476439</a></li>
                      <li className='highlight'>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ marginRight: 10 }} viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" /></svg>Vadodara, Gujarat<br /><a style={{ textDecoration: "none", color: "#000" }} href="#">1006, Signet Hub, Near Akshar Chowk, Mujmahuda Rd, Vadodara – 390020.</a></li>
                      <p>

                      </p>

                    </ul>

                  </div>
                  <div>
                    <p>Follow Us On</p>
                    <div style={{ display: "flex", gap: 10 }}>

                      <div className='social'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005c0 2.804.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005Zm1.937-.497c.457 1.782.457 5.502.457 5.502s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022ZM10.001 15.5v-7l6 3.5l-6 3.5Z" /></svg>
                      </div>
                      <div className='social'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" /></svg>
                      </div>
                      <div className='social'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>

                      </div>
                      <div className='social'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" /></svg>
                      </div>
                      <div className='social'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="bg-image" style={{ marginTop: 20, backgroundImage: "linear-gradient(#ef6b64 70%, #e4eaf5 30%)" }}>
              <div style={{ paddingBottom: 50 }}>
                <h1 className='title1' style={{ color: '#fff' }}>Software Downloads</h1>
                <div style={{ color: '#fff', textAlign: 'center', width: "50%", marginLeft: "auto", marginRight: "auto" }}>The latest version offers an excellent package of numerous services To Download the software, click the link below and enjoy the incredible benefits:</div>
              </div>
              <div style={{ display: 'flex', gap: 30, padding: "50px 50px 0px 50px" }}>
                <div style={{ backgroundColor: "#fff", padding: "10px", borderRadius: 10, height: "150px", boxShadow: "2px 2px 16px 8px #55555555" }}>
                  <div style={{ display: "flex", gap: 20, }}>
                    <img style={{ transform: "translateY(-60px)" }} src="/google.webp" alt="Logo" />
                    <div>
                      <h2 className='text'>Google Data Extractor</h2>
                      <a className='items' href="#">Contact Us</a>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#fff", padding: "10px", borderRadius: 10, height: "150px", boxShadow: "2px 2px 16px 8px #55555555" }}>
                  <div style={{ display: "flex", gap: 20, }}>
                    <img style={{ transform: "translateY(-60px)" }} src="/google.webp" alt="Logo" />
                    <div>
                      <h2 className='text'>Whatsapp Software</h2>
                      <a className='items' href="#">Contact Us</a>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#fff", padding: "10px", borderRadius: 10, height: "150px", boxShadow: "2px 2px 16px 8px #55555555" }}>
                  <div style={{ display: "flex", gap: 20, }}>
                    <img style={{ transform: "translateY(-60px)" }} src="/google.webp" alt="Logo" />
                    <div>
                      <h2 className='text'>Justdial Extractor</h2>
                      <a className='items' href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: "#181818" }}>
          <div style={{ color: '#fff', textAlign: "center" }}>All Rights Reserved. © Copyright 2023. The Future Tech</div>
        </div>

      </div>


    </>
  );
}

export default App;
