
import './App.css';
import logo from './images/logo.svg'
import screenlogo from './images/screen-mockups.svg'
import commlogo from './images/icon-communities.svg'
import messlogo from './images/icon-messages.svg';
import growtoget from './images/illustration-grow-together.svg'
import flowcon from './images/illustration-flowing-conversation.svg'
import urusers from "./images/illustration-your-users.svg"
import phonelogo from "./images/icon-phone.svg"
import emaillogo from "./images/icon-email.svg"
import Aos from 'aos'
import 'aos/dist/aos.css';
import {useEffect} from 'react'

function App() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
  return (
   
    <><div class="menu">
          <div>
              <img src={logo}/>
              </div>
          <div><button>Get Started</button></div>
      </div><div class="header">
              <div>
                  <h1>Build The Community Your Fans Love</h1>
                  <p>Huddle re-imagines the way we build communities. You have a voice, but so your audience
                      . Create connections with your users as you engage in genuine discussion
                  </p>
              </div>
              <div>
                  <button>Start Free trial</button>
              </div>

          </div><div class="img">
              <div>
                  <img src={screenlogo}/>
                  </div>
          </div><div class="users">
              <div data-aos="fade-in">
                  <img src={commlogo} />
                      <h2>1.5k+</h2>
                      <span>Community members</span>
                </div>
              <div data-aos="fade-in">
                  <img src={messlogo} />
                      <h2>5.5m+</h2>
                      <span>Messages send</span>
                  </div>
          </div><div class="grow">
              <div data-aos="fade-in">
                  <h1>
                      Grow Together
                  </h1>
                  <p>Generate meaningful discussions with your audience and build a community.
                      Think of the insightful conversation you miss out with a feed back
                  </p>
              </div>
              <div data-aos="zoom-in">
                  <img src={growtoget}/>
                  </div>
          </div><div class="flow">
              <div data-aos="zoom-in">
                  <img src={flowcon}/>
                  </div>
              <div data-aos="fade-in">
                  <h1>Flowing Conversations</h1>
                  <p>You wouldn't paginate a conversation in real life, so do it online?
                      Our threads have just-in-time loading for natural time
                  </p>
              </div>
          </div><div class="your">
              <div data-aos="fade-in">
                  <h1>Your Users</h1>
                  <p>It takes no time at all to integrate Huddle with your app's authentications solutions.
                      This means, once signed in to your apps users can start chatting immediately
                  </p>
              </div>
              <div data-aos="zoom-in">
                  <img src={urusers}/>
                  </div>
          </div><div class="ready">
              <div><h1>
                  Be Ready To Build Your Community
              </h1></div>
              <div data-aos="zoom-in">
                  <button>Get Started For Free</button>
              </div>
          </div>
          <footer>
              <div class="footer">
                  <div class="fot1" data-aos="fade-in">
                      <div style={{display: 'flex', alignItems: 'center', margin:'0'}}> <img src={messlogo} style={{width:'30px',height:'30px'}}/> <h1>Huddle</h1></div>
                      <div>
                          <span style={{fontSize:"13px"}}>To receive tips on how to grow your community, sign up to our weekly newsletter.
                              We will never send you spam or pass on your email address</span>
                      </div><br/>
                          <div>
                              <div>
                                  <img src={phonelogo}/> Phone : +2348148837221<br/><br/>
                                      <img src={emaillogo}/> Email : hikay133@gmail.com
                                      </div>
                                  </div>

                                  </div>
                                      <div class="fot2" data-aos="zoom-in">
                                          <h1 style={{fontSize:'20px'}}>NEWSLETTER</h1>
                                          <span style={{fontSize:'13px'}}>
                                              To receive tips on how to grow your community, sign up to our weekly newsletter.
                                              We will never send you spam or pass on your email address
                                          </span><br/><br/>
                                              <div>
                                                  <input type="text" placeholder="Email"/> <button>Subscribe</button>
                                                  </div>
                                          </div>

                                         </div>     
                                         </footer>
                             
                                            </>
                                  );
                                  }

  export default App;
                           
