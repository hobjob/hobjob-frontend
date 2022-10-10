import React from "react";
import {Link} from "react-router-dom";

import {CoursePageUseSkillsItem} from "../../";

const CoursePageUseSkills: React.FC = () => {
    return (
        <section className="course-page-use-skills">
            <div className="container">
                <div className="course-page-use-skills-wrapper">
                    <div className="course-page-use-skills-block-title">
                        <h2 className="title course-page-use-skills-block-title__title">
                            Где вы сможете применить полученные навыки?
                        </h2>
                        <div
                            className="course-page-use-skills-block-title-img"
                            style={{
                                backgroundImage: `url("https://downloader.disk.yandex.ru/preview/818fd5034f993ad5b038fbb6e2336059329633a90d8e2d549443f4198bb573f8/6343706d/cF_yIL7onqAE4uOdJgtxM3T1uBzu09Y6cnS5d8HUFhW0D-Xt2omrHl4uifzKtn8vhSVQpUgoetCKSQKFwPbBLA%3D%3D?uid=0&filename=IMG_E2026.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2560x1262")`,
                            }}
                        ></div>
                    </div>

                    <div className="course-page-use-skills-block-text">
                        <div className="course-page-use-skills-block-text-item-wrapper">
                            <CoursePageUseSkillsItem />
                            <CoursePageUseSkillsItem />
                            <CoursePageUseSkillsItem />
                            <CoursePageUseSkillsItem />
                        </div>

                        <Link
                            to="/"
                            className="btn course-page-use-skills-block-text__link"
                        >
                            Начать обучение
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageUseSkills;
