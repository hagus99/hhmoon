import "../assets/css/Main.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Main() {
    const inputForm = useRef();
    const onMoveToForm = () => {
        inputForm.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="Main">
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossorigin="anonymous"
            />
            <div className="cover"></div>
            <div className="section-1">
                <div className="header">
                    <div className="header-title">HHMOON</div>
                    <div className="menu-bar">
                        <Link to="/about">
                            <div className="menu-item">About</div>
                        </Link>
                        <Link to="/research">
                            <div className="menu-item">Research</div>
                        </Link>
                        <Link to="/project">
                            <div className="menu-item">Project</div>
                        </Link>
                    </div>
                </div>
                <div className="cover-text">
                    <div className="cover-text-top">Welcome to Explore</div>
                    <h1>HAHYEON MOON</h1>
                    <div className="cover-text-bottom">
                        For the Spirit God gave us does not make us timid, <br />
                        but gives us power, love, and self-discipline.
                    </div>
                    <div class="scroll-button-wrapper" onClick={onMoveToForm}>
                        <div class="scroll-button"></div>
                    </div>
                </div>
            </div>

            <div className="cv" ref={inputForm}>
                <div className="cv-box cv-left">
                    <div className="cv-left-title">Experiences</div>
                    <div className="cv-left-subtitle">
                        <div>Wep and App Lab</div>
                        <div>2020 - 2022</div>
                    </div>
                    <div className="cv-left-detail">Web & App Project, Capstone</div>
                    <div className="cv-left-subtitle">
                        <div>Joint Hackathon for SW Univ. 2022</div>
                        <div>June 2022</div>
                    </div>
                    <div className="cv-left-detail">
                        주제: 디지털전환을 이끄는 힘, 소프트 웨어
                        <br />
                        내용: 개발자 및 디자이너들이 팀을 구서하여 앱, 서비스, 라이브러리를 구현하는 프로젝트
                    </div>
                    <div className="cv-left-subtitle">
                        <div>Dental Workshop KiHon</div>
                        <div>2020 - 2021</div>
                    </div>
                    <div className="cv-left-detail">Design for Dental Seminar Lecture materials.</div>

                    <div className="cv-left-title">Educations</div>
                    <div className="cv-left-subtitle">
                        <div>Handong Global University</div>
                        <div>2023 - Present</div>
                    </div>
                    <div className="cv-left-detail">M.S. in in Computer Science and Engineering</div>
                    <div className="cv-left-subtitle">
                        <div>Handong Global University</div>
                        <div>2018 - 2022</div>
                    </div>
                    <div className="cv-left-detail">B.S. in Computer Science and Engineering</div>

                    <div className="cv-left-title">Awards</div>
                    <div className="cv-left-subtitle">
                        <div>Engineering Festival</div>
                        <div>2022</div>
                    </div>
                    <div className="cv-left-detail">Creativity Award - ASAP Wep Service</div>
                    <div className="cv-left-subtitle">
                        <div>Capstone Festival</div>
                        <div>2021</div>
                    </div>
                    <div className="cv-left-detail">Grand prize - SWAP Wep Service</div>
                </div>
                <div className="cv-box cv-right">
                    <div className="cv-profile-box">
                        <img className="cv-img" src="img/moon.jpg" alt="cv-img" />
                        <div className="cv-name">HAHYEON MOON</div>
                        <div className="cv-position">M.S. Student</div>
                        <div className="cv-email">hhmoon@handong.ac.kr</div>
                    </div>
                    <div className="cv-right-detail">
                        M.S. Student, Engineering Systems Design Laboratory<br/><br/> 

Hahyun Moon is a M.S. student at the ESDL. She graduated from Handong Global University with a B.S. in the School of Computer Science and Electrical Engineering. She is currently working on the project titled "Development of air traffic management and decision support systems for advanced air mobility operations in South Korea" and sponsored by the NRF research grant.
                    </div>
                    <div className="cv-right-title">Skills</div>
                    <div className="cv-right-title">Languages</div>
                </div>
            </div>

            <div className="footer-wrapper d-flex justify-content-between">
                <div className="footer-left">
                    <div className="footer-title">HHMOON</div>
                    <div className="footer-menu">
                        <div className="footer-menu-item">About</div>
                        <div className="footer-menu-item">Research</div>
                        <div className="footer-menu-item">Project</div>
                    </div>
                </div>
                <div className="footer-right text-end">
                    <div className="footer-name">Hahyeon Moon</div>
                    <div className="footer-add">
                        558, Handong-ro, Heunhae-eup, Buk-gu,
                        <br />
                        Pohang-si, Gyeongsangbuk-do, Republic of Korea
                    </div>
                    <div className="footer-email">Email: hhmoon@handong.ac.kr</div>
                    <div className="footer-icon"></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
