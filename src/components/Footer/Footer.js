import React from 'react';
import './layout.scss';

const contents = [
    {
        name: "Timf",
        content: [
            {data: "상호명: (주)팀프레시", link: false},
            {data: "사업자등록번호: 561-88-01138", link: false},
            {data: "대표자: 이성일", link: false}
        ]
    },
    {
        name: "",
        content: [
            {data: "Contact us", link: false},
            {data: "Tel: 02-423-0525", link: false},
            {data: "Fax: 02-3432-0525", link: false},
            {data: "서울특별시 송파구 위례성대로 12길 15-1", link: false},
            {data: "영업 및 제휴 문의:", link: false},
            {data: "E-mail: sales@timf.co.kr", link: false}
        ]
    },
    {
        name: "Others",
        content: [
            {data: "인재채용", link: true, linkdetail:""},
            {data: "서비스 소개", link: true, linkdetail:""},
            {data: "개인정보 처리방침", link: true, linkdetail:""},
            {data: "위치기반 서비스 이용약관", link: true, linkdetail:""}
        ]
    }
]

const Footer = () => {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Product</span>
                </li>
                <li class="nav-item">
                    Product 1
                </li>
                <li class="nav-item">
                    Product 2
                </li>
                <li class="nav-item">
                    Plans & Prices
                </li>
                <li class="nav-item">
                    Frequently asked questions
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                  <span class="footer-title">Company</span>
                    About us
                    Job postings
                    News and articles
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <i class="fas fa-phone"></i>+47 45 80 80 80
                  </span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-comments"></i>Live chat
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-star"></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;