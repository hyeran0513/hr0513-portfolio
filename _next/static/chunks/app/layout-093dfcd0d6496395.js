(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1018:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2810,23)),Promise.resolve().then(o.t.bind(o,4611,23)),Promise.resolve().then(o.t.bind(o,9327,23)),Promise.resolve().then(o.t.bind(o,6760,23)),Promise.resolve().then(o.t.bind(o,347,23)),Promise.resolve().then(o.bind(o,3441))},7051:(e,t,o)=>{"use strict";o.d(t,{d:()=>a});let a=[{thumb:"map.png",projectName:"TIP 매니저 활동지원 시스템 (M.A.P)",projectPeriod:"2024.07 ~ 2024.09",person:"팀프로젝트 (프론트엔드: 1명, 백엔드: 3명, 디자이너: 1명, 기획자: 1명)",description:"지사 관리, 정산 신청, GFSR, 활동 입력 등 다양한 매니저 활동지원 시스템입니다.",tech:[{icon:"vue",txt:"Vue.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://tip.metlife.co.kr/memo",review:"프론트엔드 업무를 혼자 맡고 백엔드팀, 기획팀, 디자인팀과 협업하여 진행했던 외주 프로그램입니다. 디자인 인력이 부족해 모바일 디자인만 전달받았으며, PC 디자인은 다른 페이지를 참고하여 일관성을 유지했습니다. M.A.P와 관련된 코드에서는 Vue2에서 Vue3로 변환하는 작업을 진행했습니다."},{thumb:"saasda_service.png",projectName:"사스다(SAASDA) 서비스 홈페이지",projectPeriod:"2024.01 ~ 2024.04",person:"팀프로젝트 (프론트엔드: 2명, 백엔드: 2명, 기획자: 2명, 디자이너: 2명)",description:"윌비소프트 자사 프로그램인 사스다(SAASDA)에 대해 소개하는 사이트입니다.",tech:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.saasda.cloud/",review:"SAASDA 서비스 홈페이지의 소개 페이지에서 PC 작업은 다른 프론트엔드 분과 함께 진행했고, 반응형 작업을 전담했으며, Swiper.js와 VueUse 등의 라이브러리를 활용해 개발을 진행했습니다. 애니메이션 SCSS를 적용하여 페이지에 입체감을 더했습니다."},{thumb:"saasda.png",projectName:"사스다(SAASDA) 운영 홈페이지",projectPeriod:"2023.11 ~ 2024.09",person:"팀프로젝트 (프론트엔드: 3명, 백엔드: 7명, 기획자: 3명, 디자이너: 2명)",description:"맞춤형 콘텐츠와 실시간 학습 현황 분석으로 개개인에 꼭 맞는 학습 경험을 선사하는 교육 관리 시스템입니다.",tech:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.saasda.co.kr/",review:"웹 페이지의 유지보수와 기능 추가 작업을 담당했습니다. 레드마인을 통해 결함을 확인하고 처리했으며, 기능에 문제가 발생할 경우 히스토리를 확인하고 기획 변경 여부를 점검하여 문제를 해결했습니다."},{thumb:"hdream.png",projectName:"하남 커리어넷",projectPeriod:"2023.11 ~ 2023.12",person:"팀프로젝트 (프론트엔드: 2명, 백엔드: 5명, 기획자: 3명, 디자이너: 2명)",description:"진로 및 진학 정보와 다양한 체험 활동을 소개하는 플랫폼입니다.",tech:[{icon:"nuxt",txt:"Nuxt.js"},{icon:"sass",txt:"SASS"},{icon:"figma",txt:"Figma"},{icon:"gitlab",txt:"GitLab"}],link:"https://www.hdream.or.kr/",review:"이전에는 jQuery만 사용해본 경험이 있었지만, 이번 프로젝트를 통해 Nuxt3.js를 처음 사용해보았습니다. SPA 환경에서 단일 페이지로 동작하여 로딩 속도가 빠르고 컴포넌트 기반으로 효율적으로 관리하는 방법을 배우게 되었습니다."}]},3441:(e,t,o)=>{"use strict";o.d(t,{default:()=>x});var a=o(5155),n=o(2115),i=o(4548),s=o.n(i),r=o(1478),d=o(78),c=o.n(d),l=o(142);let m=async(e,t)=>{let o=["profile","about",...e.map((e,t)=>"hor".concat(t)),"contact"],a=new l.Ay("landscape","mm",[1440,800]),n=document.querySelectorAll("#horizontal > section");for(let[e,i]of(await new Promise(e=>{r.Ay.to(n,{xPercent:-100*n.length,duration:.1,onComplete:e})}),o.entries())){let n=document.querySelector("#".concat(i));if(n){let i=await c()(n),s=i.toDataURL("image/png"),r=i.width,d=i.height,l=Math.min(1440/r,800/d),m=(1440-r*l)/2,h=(800-d*l)/2;0!==e&&a.addPage(),a.addImage(s,"PNG",m,h,r*l,d*l),t(Math.floor((e+1)/o.length*100))}}r.Ay.to(n,{xPercent:-100*(n.length-1),duration:.1}),a.save("김혜란_포트폴리오.pdf")};var h=o(7051),p=o(1589);let x=()=>{let[e,t]=(0,n.useState)(0),[o,i]=(0,n.useState)(!1),r=async()=>{i(!0),t(0),await m(h.d,e=>{t(e)}),i(!1)};return(0,a.jsx)("div",{className:s().header,children:(0,a.jsxs)("div",{className:s().headerContent,children:[(0,a.jsx)("div",{className:s().logo,children:"Hyeran's portfolio"}),(0,a.jsxs)("div",{className:s().pdfDownloadSection,children:[(0,a.jsxs)("div",{className:s().downloadInfo,children:[(0,a.jsx)(p.sv1,{className:s().icon}),(0,a.jsx)("div",{className:s().txt,children:"pdf 다운로드 시, pc 비율을 100%로 설정하고 진행해 주세요."})]}),(0,a.jsxs)("button",{type:"button",className:s().downloadButton,onClick:r,disabled:o,children:[(0,a.jsx)(p.WCW,{className:s().icon}),(0,a.jsx)("div",{className:s().buttonText,children:o?"다운로드 중... ".concat(e,"%"):"포트폴리오 PDF 다운로드"})]})]})]})})}},347:()=>{},4548:e=>{e.exports={header:"Header_header__y6Nwm",headerContent:"Header_headerContent__Bd6BW",logo:"Header_logo__4nCs8",pdfDownloadSection:"Header_pdfDownloadSection__nUze_",downloadInfo:"Header_downloadInfo__Wfwry",icon:"Header_icon__NC_xw",txt:"Header_txt__xINgp",downloadButton:"Header_downloadButton__qDsk6"}}},e=>{var t=t=>e(e.s=t);e.O(0,[698,592,446,930,316,460,209,441,517,358],()=>t(1018)),_N_E=e.O()}]);