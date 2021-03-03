import React, { Component } from "react";
// import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./footer.css";
import {
  EmojiSmile,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <h4 className="happy">
          Happy purchasing <EmojiSmile />
        </h4>
        <footer class="footer foot">
          <div class="container bottom_border">
            <div class="row">
              <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">About Us</h5>
                <p class="mb10">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    MedEasy.com
                  </Link>
                  , India's Pharmacy, which is brought to you by the MedEasy
                  Pvt. Ltd – One of India’s most trusted pharmacies, with over
                  100 years’ experience in dispensing quality medicines.
                </p>
              </div>

              <div class=" col-sm-4 col-md  col-6 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                {/* <!--headin5_amrc--> */}
                <ul class="footer_ul_amrc">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>

              <div class=" col-sm-4 col-md  col-6 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Let Us Help You</h5>
                <ul class="footer_ul_amrc">
                  <li>
                    <a href="">COVID-19 updates</a>
                  </li>
                  <li>
                    <a href="">Your Account</a>
                  </li>
                  <li>
                    <li>
                      <a href="">Make money with us</a>
                    </li>
                    <a href="">Queries</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">Support</a>
                  </li>
                </ul>
              </div>

              <div class=" col-sm-4 col-md  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Follow Us On</h5>

                <ul class="footer_ul2_amrc">
                  <li className="ll">
                    <a href="#">
                      <Twitter />
                      &nbsp;https://twitter.com/medeasy
                    </a>
                  </li>
                  <li className="ll">
                    <a href="#">
                      <Facebook />
                      &nbsp;https://facebook.com/medeasy
                    </a>
                  </li>
                  <li className="ll">
                    <a href="#">
                      <Instagram />
                      &nbsp;https://instagram.com/medeasy
                    </a>
                  </li>
                  <li className="ll">
                    <a href="#">
                      <Youtube />
                      &nbsp;https://youtube.com/medeasy
                    </a>
                  </li>
                  <li className="ll">
                    <a href="">
                      <Phone />
                      &nbsp;WhatsApp Business:
                      &nbsp;&nbsp;&nbsp;&nbsp;+910000000000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="container">
            <ul class="foote_bottom_ul_amrc">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <p class="text-center">
              Copyright @2020 |{" "}
              <a href="#">MedEasy Pvt. Ltd. All rights are reserved</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
