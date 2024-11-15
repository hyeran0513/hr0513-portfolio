import React from "react";
import styles from "./About.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const skills = [
    "Nuxt.js",
    "Vue.js",
    "Next.js",
    "PHP",
    "SCSS",
    "HTML",
    "jQuery",
  ];

  return (
    <div
      className={styles.page}
      style={{
        "--bg-image": `url(${process.env.ASSET_PREFIX}/bg_about.png)`,
      }}
    >
      <div className={styles.info}>
        <div
          className={styles.photo}
          style={{
            background: `url(${process.env.ASSET_PREFIX}/me.jpg) no-repeat center/cover`,
          }}
        ></div>

        <div className={styles.userInfo}>
          <div className={styles.userName}>김혜란</div>
          <div className={styles.age}>2000 (24세)</div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoTitle}>이메일</div>
              <div className={styles.infoContent}>hr_0513@naver.com</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoTitle}>휴대폰</div>
              <div className={styles.infoContent}>010-3129-8980</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoTitle}>깃허브</div>
              <div className={styles.infoContent}>
                https://github.com/hyeran0513
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.career}>
          <p className={styles.title}>경력</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              2023.11 ~ 2024.09 (주)윌비소프트 정규직 - 프론트엔드 & 퍼블리셔
            </li>
            <li className={styles.listItem}>
              2022.08 ~ 2023.03 (주)핌즈 일학습병행 및 정규직 - 백엔드
            </li>
          </ul>
        </div>

        <div className={styles.award}>
          <p className={styles.title}>자격/수상</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>2024.04 SQL개발자(SQLD 자격)</li>
            <li className={styles.listItem}>2023.02 IPP형 일학습병행 우수상</li>
            <li className={styles.listItem}>
              2022.01 캡스톤디자인 경진대회 동상
            </li>
            <li className={styles.listItem}>2021.12 한이음 공모전 입선</li>
          </ul>
        </div>

        <div className={styles.skill}>
          <p className={styles.title}>스킬</p>

          <div className={styles.stack}>
            {skills &&
              skills.map((item, index) => (
                <div key={index} className={styles.stackItem}>
                  {item}
                </div>
              ))}
          </div>
        </div>

        <div className={styles.project}>
          <p className={styles.title}>프로젝트 (최신순)</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              2024.07 ~ 2024.09 TIP 매니저 활동지원 시스템 (M.A.P) (주)
              윌비소프트
            </li>

            <li className={styles.listItem}>
              2024.01 ~ 2024.04 사스다(SAASDA) 서비스 홈페이지 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2023.11 ~ 2024.09 사스다(SAASDA) 운영 홈페이지 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2023.11 ~ 2023.12 하남 커리어넷 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2022.08 ~ 2023.08 자사 홈페이지 웹 개발 및 유지보수 (주) 핌즈
            </li>
          </ul>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.career}>
            <p className={styles.title}>경력</p>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                2023.11 ~ 2024.09 (주)윌비소프트 정규직 - 프론트엔드 & 퍼블리셔
              </li>
              <li className={styles.listItem}>
                2022.08 ~ 2023.03 (주)핌즈 일학습병행 및 정규직 - 백엔드
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.award}>
            <p className={styles.title}>자격/수상</p>

            <ul className={styles.list}>
              <li className={styles.listItem}>2024.04 SQL개발자(SQLD 자격)</li>
              <li className={styles.listItem}>
                2023.02 IPP형 일학습병행 우수상
              </li>
              <li className={styles.listItem}>
                2022.01 캡스톤디자인 경진대회 동상
              </li>
              <li className={styles.listItem}>2021.12 한이음 공모전 입선</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.skill}>
            <p className={styles.title}>스킬</p>

            <div className={styles.stack}>
              {skills &&
                skills.map((item, index) => (
                  <div key={index} className={styles.stackItem}>
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.project}>
            <p className={styles.title}>프로젝트 (최신순)</p>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                2024.07 ~ 2024.09 TIP 매니저 활동지원 시스템 (M.A.P) (주)
                윌비소프트
              </li>

              <li className={styles.listItem}>
                2024.01 ~ 2024.04 사스다(SAASDA) 서비스 홈페이지 (주) 윌비소프트
              </li>

              <li className={styles.listItem}>
                2023.11 ~ 2024.09 사스다(SAASDA) 운영 홈페이지 (주) 윌비소프트
              </li>

              <li className={styles.listItem}>
                2023.11 ~ 2023.12 하남 커리어넷 (주) 윌비소프트
              </li>

              <li className={styles.listItem}>
                2022.08 ~ 2023.08 자사 홈페이지 웹 개발 및 유지보수 (주) 핌즈
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
