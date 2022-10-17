import React from "react";

import {CoursePageUseSkillsItem} from "../../";

import {CourseGoodUseSkill} from "../../../models/ICourseGood";

interface CoursePageUseSkillsProps {
    useSkills: CourseGoodUseSkill[];
}

const CoursePageUseSkills: React.FC<CoursePageUseSkillsProps> = ({
    useSkills,
}) => {
    return (
        <section className="course-page-use-skills">
            <div className="container">
                <div className="course-page-use-skills-wrapper">
                    <div className="course-page-use-skills-block-title">
                        <h2 className="title__mb course-page-use-skills-block-title__title">
                            По итогу курса вы сможете
                        </h2>

                        <div className="course-page-use-skills-block-title-icon">
                            <svg
                                viewBox="0 0 461 562"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M179.004 3C183.656 27.4386 196.242 50.1276 203.305 73.9787C206.435 84.5507 205.012 97.4668 205.012 108.417C205.012 126.271 203.58 143.395 195.292 159.153C188.715 171.657 183.142 185.703 177.888 198.849C169.797 219.088 166 238.183 166 260.232C166 277.184 166.156 286.413 178.741 299.008C185.073 305.343 192.21 308.032 199.101 313.203C205.116 317.718 210.701 322.059 217.556 325.362C247.21 339.649 279.36 348.779 309.964 359.339C318.095 362.145 327.317 365.306 334.79 369.461C338.469 371.506 342.511 371.515 346.218 373.272C352.029 376.027 356.192 379.413 360.929 383.722C374.657 396.21 391.074 405.936 404.539 419.146C424.997 439.216 458 464.703 458 496.894C458 503.409 453.271 508.925 453.271 515.23C453.271 522.047 442.671 519.414 438.494 521.736C432.116 525.282 426.457 532.598 421.352 537.706C414.983 544.079 410.073 551.967 404.802 559"
                                    stroke="#DD9E5E"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="191"
                                    cy="358"
                                    r="150"
                                    fill="#DD9E5E"
                                    fillOpacity="0.05"
                                />
                                <path
                                    d="M83.1453 409.867C35.1083 391.545 -15.3538 441.695 11.4654 489.433C20.8811 506.193 59.0201 519.535 76.9508 521.33C88.9355 522.53 117.285 526.861 123.144 515.128C135.687 490.012 129.103 432.195 93.4106 432.195C75.4967 432.195 33.2705 424.48 25.0934 441.765C14.7697 463.586 38.7586 473.709 49.8717 488.015C62.2902 504.002 87.044 517.498 92.8796 491.205C95.4692 479.538 103.773 474.13 89.5169 466.573C80.7779 461.941 71.0648 457.713 60.8449 457.713C54.1766 457.713 34.4486 453.59 47.3938 467.991C56.2372 477.829 58.3044 483.231 73.588 483.231"
                                    stroke="#DD9E5E"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="course-page-use-skills-block-text">
                        <div className="course-page-use-skills-block-text-item-wrapper">
                            {useSkills.map((useSkill, index) => (
                                <CoursePageUseSkillsItem
                                    {...useSkill}
                                    key={`course-page-use-skills-block-text-item-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageUseSkills;
