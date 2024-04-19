import { NavLink } from "react-router-dom"
import styled from "styled-components"
export default function Footer() {
    return (
        <Footers id="footer">
            <div class="footer">
                <div class="container-xxl">
                    <div class="row justify-content-between">
                        <div class="col-md-3">
                            <div class="foot-sec foot-sec-1">
                                <div class="logo">
                                    <NavLink to='/'>
                                        <h2>CENTRUM IMPEX</h2>
                                    </NavLink>
                                </div>
                                <div class="con-icon">
                                    <ul>
                                        <li>
                                            <div class="d-flex align-items-center gap-3 mb-2 mb-md-4">
                                                <div class=""><i class="fal fa-map-marker-alt"></i></div>
                                                <div class=""><a href="">998 Devonshire Ave.Camp Hill, PA 17011</a></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center gap-3 mb-2 mb-md-4">
                                                <div class=""><i class="fal fa-envelope"></i></div>
                                                <div class=""><a href="mailto:haddawy@comcast.net">haddawy@comcast.net</a></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center gap-3 mb-2 mb-md-4">
                                                <div class=""><i class="fal fa-phone-volume"></i></div>
                                                <div class=""><a href="tel:(334) 202-4792">(334) 202-4792</a></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-sm-8 mt-4 mt-sm-0">
                                    <div class="contact-form">
                                        <form action="">
                                            <h2 class="mb-4">Question us</h2>
                                            <div class="mb-2">
                                                <input type="text" name="" required placeholder="Name" id="" />
                                            </div>
                                            <div class="mb-2">
                                                <input type="number" name="" required placeholder="Telephone" id="" />
                                            </div>
                                            <div class="mb-2">
                                                <input type="email" name="" required placeholder="Email" id="" />
                                            </div>
                                            <div class="mb-2">
                                                <textarea name="" required placeholder="Comment" id="" rows="4"></textarea>
                                            </div>
                                            <div class="">
                                                <button class="th-btn th-btn-2" type="submit">CONTACT US</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-4 mt-4 mt-sm-0">
                                    <div class="foot-sec foot-sec-2" >
                                        <h2 class="mb-4">Company</h2>
                                        <div class="con-icon">
                                            <ul>
                                                <li class="mb-3">
                                                    <NavLink to='/about'>About Us</NavLink>
                                                </li>
                                                <li class="mb-3">
                                                    <NavLink to="/product">Product</NavLink>
                                                </li>
                                                <li class="mb-3">
                                                    <NavLink to="/">FAQs</NavLink>
                                                </li>
                                                <li class="mb-3">
                                                    <NavLink to="/contact">Contact Us</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="social-icon">
                                            <ul class="d-flex gap-4">
                                                <li>
                                                    <a href=""> <i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href=""> <i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href=""> <i class="fab fa-linkedin-in"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Footers>
    )
}

const Footers = styled.footer`
.footer {
    background-color: #ebefe9;
    padding: 80px 0;
  }
  
  .foot-sec {
    max-width: 270px;
    height: 100%;
  }
  
  .foot-sec-1 h2 {
    letter-spacing: 5.28px;
    margin-bottom: 50px;
  }
  
  .foot-sec-2 h2,
  .contact-form h2 {
    color: var(--th-c-4);
  }
  
  .footer ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .footer .fal {
    font-size: var(--th-fs-3);
    color: var(--th-c-1);
  }
  
  .footer a {
    font-size: var(--th-fs-3);
    color: var(--th-c-4);
    font-family: var(--th-font-1);
  }
  
  .contact-form input,
  .contact-form textarea {
    width: calc(100%);
    background-color: #fff8e8;
    padding: 10px;
    border-radius: 3px;
    border: none;
  }
  
  /* .contact-form button {
    border: none;
  } */
  
  .social-icon {
    margin-top: 160px;
  }
  
  .social-icon .fab {
    color: var(--th-c-1);
    font-size: var(--th-fs-3);
  }`