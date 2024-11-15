import gsap from "gsap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadAllSectionsAsPDF = async (projects, onProgress) => {
  const sectionIds = [
    "profile",
    "about",
    ...projects.map((_, index) => `hor${index}`),
    "contact",
  ];

  const pdfWidth = 1440;
  const pdfHeight = 800;

  const pdf = new jsPDF("landscape", "mm", [pdfWidth, pdfHeight]);

  const sections = document.querySelectorAll("#horizontal > section");

  /* gsap에서 -100 * (sections.length - 1) 설정 시 
    마지막 섹션이 밀려서 화면에 보이지 않기 때문에 캡처할 수 없어서 
  다운로드 시 -100 * sections.length로 설정 */
  await new Promise((resolve) => {
    gsap.to(sections, {
      xPercent: -100 * sections.length,
      duration: 0.1,
      onComplete: resolve,
    });
  });

  for (const [index, sectionId] of sectionIds.entries()) {
    const section = document.querySelector(`#${sectionId}`);

    if (section) {
      const canvas = await html2canvas(section);
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const xPosition = (pdfWidth - imgWidth * scaleFactor) / 2;
      const yPosition = (pdfHeight - imgHeight * scaleFactor) / 2;

      if (index !== 0) pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        xPosition,
        yPosition,
        imgWidth * scaleFactor,
        imgHeight * scaleFactor
      );

      const progress = Math.floor(((index + 1) / sectionIds.length) * 100);
      onProgress(progress);
    }
  }

  // 섹션 애니메이션을 다시 원위치로 설정
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    duration: 0.1,
  });

  pdf.save("김혜란_포트폴리오.pdf");
};
