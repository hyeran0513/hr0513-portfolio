(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7507:(e,s,t)=>{Promise.resolve().then(t.bind(t,6001))},6001:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>P});var i=t(5155),a=t(7068),c=t.n(a),r=t(1478),l=t(5415),n=t(2115);let o=[{thumb:"tip.png",projectName:"TIP 매니저 활동지원 시스템 (M.A.P)",projectPeriod:"2024.07 ~ 2024.09",person:"팀프로젝트 (프론트엔드: 1명, 백엔드: 3명, 디자이너: 1명, 기획자: 1명)",description:"지사 관리, 정산 신청, GFSR, 활동 입력 등 다양한 매니저 활동지원 시스템입니다.",stack:[{icon:"vue",txt:"Vue.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://tip.metlife.co.kr/memo",review:"프론트엔드 업무를 혼자 맡고 백엔드팀, 기획팀, 디자인팀과 협업하여 진행했던 외주 프로그램입니다. 디자인 인력이 부족해 모바일 디자인만 전달받았으며, PC 디자인은 다른 페이지를 참고하여 일관성을 유지했습니다. M.A.P와 관련된 코드에서는 Vue2에서 Vue3로 변환하는 작업을 진행했습니다."},{thumb:"saasdaService.png",projectName:"사스다(SAASDA) 서비스 홈페이지",projectPeriod:"2024.01 ~ 2024.04",person:"팀프로젝트 (프론트엔드: 2명, 백엔드: 2명, 기획자: 2명, 디자이너: 2명)",description:"윌비소프트 자사 프로그램인 사스다(SAASDA)에 대해 소개하는 사이트입니다.",stack:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.saasda.cloud/",review:"SAASDA 서비스 홈페이지의 소개 페이지에서 PC 작업은 다른 프론트엔드 분과 함께 진행했고, 반응형 작업을 전담했으며, Swiper.js와 VueUse 등의 라이브러리를 활용해 개발을 진행했습니다. 애니메이션 SCSS를 적용하여 페이지에 입체감을 더했습니다."},{thumb:"saasda.png",projectName:"사스다(SAASDA) 운영 홈페이지",projectPeriod:"2023.11 ~ 2024.09",person:"팀프로젝트 (프론트엔드: 3명, 백엔드: 7명, 기획자: 3명, 디자이너: 2명)",description:"맞춤형 콘텐츠와 실시간 학습 현황 분석으로 개개인에 꼭 맞는 학습 경험을 선사하는 교육 관리 시스템입니다.",stack:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.saasda.co.kr/",review:"웹 페이지의 유지보수와 기능 추가 작업을 담당했습니다. 레드마인을 통해 결함을 확인하고 처리했으며, 기능에 문제가 발생할 경우 히스토리를 확인하고 기획 변경 여부를 점검하여 문제를 해결했습니다."},{thumb:"hdream.png",projectName:"하남 커리어넷",projectPeriod:"2023.11 ~ 2023.12",person:"팀프로젝트 (프론트엔드: 2명, 백엔드: 5명, 기획자: 3명, 디자이너: 2명)",description:"진로 및 진학 정보와 다양한 체험 활동으 소개하는 플랫폼입니다.",stack:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.hdream.or.kr/",review:"이전에는 jQuery만 사용해본 경험이 있었지만, 이번 프로젝트를 통해 Nuxt3.js를 처음 사용해보았습니다. SPA 환경에서 단일 페이지로 동작하여 로딩 속도가 빠르고 컴포넌트 기반으로 효율적으로 관리하는 방법을 배우게 되었습니다."}];var d=t(7961),m=t.n(d);let _=e=>{let{project:s}=e,[t,a]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:m().projectCard,children:[(0,i.jsx)("p",{className:m().projectName,children:s.projectName}),(0,i.jsxs)("div",{className:m().projectInfo,children:[(0,i.jsx)("span",{className:m().date,children:s.projectPeriod}),(0,i.jsx)("span",{className:m().division,children:"/"}),(0,i.jsx)("span",{className:m().person,children:s.person})]}),(0,i.jsx)("p",{className:m().projectDescription,children:s.description}),(0,i.jsxs)("div",{className:"".concat(m().flexBox," ").concat(t?m().isShow:""),children:[(0,i.jsxs)("div",{className:"".concat(m().thumb),children:[(0,i.jsx)("div",{className:m().thumbImg,style:{background:"url(".concat("/hr0513-portfolio","/").concat(s.thumb,") no-repeat center/cover")}}),(0,i.jsx)("button",{onClick:()=>a(!0),type:"button",title:"자세히 보기",className:m().btnDetail,children:"자세히 보기"})]}),(0,i.jsxs)("div",{className:m().info,children:[(0,i.jsxs)("div",{className:m().infoItem,children:[(0,i.jsx)("p",{className:m().title,children:"스택"}),(0,i.jsx)("ul",{className:m().stackList,children:s.stack.map((e,s)=>(0,i.jsxs)("li",{className:m().stackItem,children:[(0,i.jsx)("div",{className:"".concat(m().icon," ").concat(m()[e.icon]),style:{background:"url(".concat("/hr0513-portfolio","/stack.png) no-repeat center/auto 100%")}}),(0,i.jsx)("div",{className:m().txt,children:e.txt})]},s))})]}),(0,i.jsxs)("div",{className:m().infoItem,children:[(0,i.jsx)("p",{className:m().title,children:"링크"}),(0,i.jsx)("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",children:s.link})]}),(0,i.jsxs)("div",{className:m().infoItem,children:[(0,i.jsx)("p",{className:m().title,children:"소감"}),(0,i.jsx)("div",{className:m().review,children:s.review})]})]})]})]})};var j=t(3505),x=t.n(j);let h=()=>{let e=["Nuxt.js","Vue.js","Next.js","PHP","SCSS","HTML","jQuery"];return(0,i.jsxs)("div",{className:x().page,children:[(0,i.jsxs)("div",{className:x().info,children:[(0,i.jsx)("div",{className:x().userName,children:"김혜란"}),(0,i.jsx)("div",{className:x().age,children:"2000 (24세)"}),(0,i.jsxs)("div",{className:x().contactInfo,children:[(0,i.jsxs)("dl",{className:x().infoItem,children:[(0,i.jsx)("dt",{className:x().infoTitle,children:"이메일"}),(0,i.jsx)("dd",{className:x().infoContent,children:"hr_0513@naver.com"})]}),(0,i.jsxs)("dl",{className:x().infoItem,children:[(0,i.jsx)("dt",{className:x().infoTitle,children:"휴대폰"}),(0,i.jsx)("dd",{className:x().infoContent,children:"010-3129-8980"})]}),(0,i.jsxs)("dl",{className:x().infoItem,children:[(0,i.jsx)("dt",{className:x().infoTitle,children:"깃허브"}),(0,i.jsx)("dd",{className:x().infoContent,children:"https://github.com/hyeran0513"})]})]})]}),(0,i.jsxs)("div",{className:x().gridContainer,children:[(0,i.jsxs)("div",{className:x().career,children:[(0,i.jsx)("p",{className:x().title,children:"경력"}),(0,i.jsxs)("ul",{className:x().list,children:[(0,i.jsx)("li",{className:x().listItem,children:"2023.11 ~ 2024.09 (주)윌비소프트 정규직 - 프론트엔드 & 퍼블리셔"}),(0,i.jsx)("li",{className:x().listItem,children:"2022.08 ~ 2023.03 (주)핌즈 일학습병행 및 정규직 - 백엔드"})]})]}),(0,i.jsxs)("div",{className:x().award,children:[(0,i.jsx)("p",{className:x().title,children:"자격/수상"}),(0,i.jsxs)("ul",{className:x().list,children:[(0,i.jsx)("li",{className:x().listItem,children:"2024.04 SQL개발자(SQLD 자격)"}),(0,i.jsx)("li",{className:x().listItem,children:"2023.02 IPP형 일학습병행 우수상"}),(0,i.jsx)("li",{className:x().listItem,children:"2022.01 캡스톤디자인 경진대회 동상"}),(0,i.jsx)("li",{className:x().listItem,children:"2021.12 한이음 공모전 입선"})]})]}),(0,i.jsxs)("div",{className:x().skill,children:[(0,i.jsx)("p",{className:x().title,children:"스킬"}),(0,i.jsx)("div",{className:x().stack,children:e&&e.map((e,s)=>(0,i.jsx)("div",{className:x().stackItem,children:e},s))})]}),(0,i.jsxs)("div",{className:x().project,children:[(0,i.jsx)("p",{className:x().title,children:"프로젝트 (최신순)"}),(0,i.jsxs)("ul",{className:x().list,children:[(0,i.jsx)("li",{className:x().listItem,children:"2024.07 ~ 2024.09 TIP 매니저 활동지원 시스템 (M.A.P) (주) 윌비소프트"}),(0,i.jsx)("li",{className:x().listItem,children:"2024.01 ~ 2024.04 사스다(SAASDA) 서비스 홈페이지 (주) 윌비소프트"}),(0,i.jsx)("li",{className:x().listItem,children:"2023.11 ~ 2024.09 사스다(SAASDA) 운영 홈페이지 (주) 윌비소프트"}),(0,i.jsx)("li",{className:x().listItem,children:"2023.11 ~ 2023.12 하남 커리어넷 (주) 윌비소프트"}),(0,i.jsx)("li",{className:x().listItem,children:"2022.08 ~ 2023.08 자사 홈페이지 웹 개발 및 유지보수 (주) 핌즈"})]})]})]})]})};var p=t(6645),N=t.n(p),u=t(206);let f=()=>(0,i.jsxs)("div",{className:N().profile,children:[(0,i.jsx)("div",{className:N().title,children:"프론트엔드_"}),(0,i.jsx)("div",{className:N().title,children:"_포트폴리오"}),(0,i.jsx)(u.CSc,{className:N().mouseIcon})]});var v=t(9737),g=t.n(v),b=t(4057);let A=()=>(0,i.jsxs)("div",{className:g().page,children:[(0,i.jsx)("p",{className:g().title,children:"Contact"}),(0,i.jsxs)("ul",{className:g().list,children:[(0,i.jsx)("li",{className:g().listItem,children:(0,i.jsxs)("a",{title:"hyeran0513 깃허브 보러가기",href:"https://github.com/hyeran0513",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(b.H3b,{}),"https://github.com/hyeran0513"]})}),(0,i.jsx)("li",{className:g().listItem,children:(0,i.jsxs)("a",{title:"hr_0513@naver.com에 연락하기",href:"#Contact",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(b.Aj0,{}),"hr_0513@naver.com"]})})]})]});function P(){return(0,n.useEffect)(()=>{r.Ay.registerPlugin(l.u);let e=document.querySelector("#horizontal"),s=r.Ay.utils.toArray("#horizontal > section");r.Ay.to(s,{xPercent:-100*(s.length-1),ease:"none",scrollTrigger:{trigger:e,start:"top top",end:()=>"+=".concat(e.scrollWidth-window.innerWidth),pin:!0,scrub:1,snap:{snapTo:1/(s.length-1),inertia:!1,duration:{min:.1,max:.1}},invalidateOnRefresh:!0,anticipatePin:1}})},[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"profile",className:c().section,children:(0,i.jsx)(f,{})}),(0,i.jsx)("section",{id:"about",className:c().section,children:(0,i.jsx)(h,{})}),(0,i.jsx)("main",{id:"horizontal",className:c().horizontal,children:o.map((e,s)=>(0,i.jsx)("section",{className:c().section,children:(0,i.jsx)(_,{project:e})},s))}),(0,i.jsx)("section",{id:"connect",className:c().section,children:(0,i.jsx)(A,{})})]})}},7068:e=>{e.exports={section:"page_section__Lvu0g",horizontal:"page_horizontal__M0ibT"}},3505:e=>{e.exports={page:"About_page__x0S3U",info:"About_info__twBpK",userName:"About_userName__eE5G2",contactInfo:"About_contactInfo__prBuA",infoItem:"About_infoItem__zknrz",gridContainer:"About_gridContainer__uhXnD",career:"About_career__Agm7m",title:"About_title__A3GRf",award:"About_award__KsGki",skill:"About_skill__gjGTA",project:"About_project__Jyy59",list:"About_list__O1vCZ",stack:"About_stack__55cUu",stackItem:"About_stackItem__cxz1L"}},9737:e=>{e.exports={page:"Contact_page__UaQAE",title:"Contact_title__6zPBK",list:"Contact_list__PglMs",listItem:"Contact_listItem__muGaD"}},6645:e=>{e.exports={profile:"Profile_profile__Bqxdh",title:"Profile_title__yf1vh",mouseIcon:"Profile_mouseIcon__SqoXo",scroll:"Profile_scroll__8Z3TO"}},7961:e=>{e.exports={projectCard:"ProjectCard_projectCard__vqv4R",projectName:"ProjectCard_projectName__hmYCj",projectInfo:"ProjectCard_projectInfo__Rzy3f",division:"ProjectCard_division__2lS8d",projectDescription:"ProjectCard_projectDescription__VUlea",flexBox:"ProjectCard_flexBox__gSX2E",thumb:"ProjectCard_thumb__79GYV",btnDetail:"ProjectCard_btnDetail__s6Oif",thumbImg:"ProjectCard_thumbImg__EtNSK",info:"ProjectCard_info__Wu6XF",infoItem:"ProjectCard_infoItem__V5Z4B",title:"ProjectCard_title__Kk7YM",review:"ProjectCard_review__AQEYE",stackList:"ProjectCard_stackList__e_Js_",stackItem:"ProjectCard_stackItem__Bzk5T",icon:"ProjectCard_icon__9lloH",next:"ProjectCard_next__WAO33",nuxt:"ProjectCard_nuxt__XsxiC",vue:"ProjectCard_vue___9b4B",sass:"ProjectCard_sass__K2yVZ",figma:"ProjectCard_figma__cHJk1",gitlab:"ProjectCard_gitlab__rwDpL",txt:"ProjectCard_txt__BKL7y",isShow:"ProjectCard_isShow__sNt_l"}}},e=>{var s=s=>e(e.s=s);e.O(0,[663,949,506,592,426,441,517,358],()=>s(7507)),_N_E=e.O()}]);