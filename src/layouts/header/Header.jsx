"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import { downloadAllSectionsAsPDF } from "@/utils/downloadPdf";
import { projects } from "@/app/data";
import { FaDownload, FaCircleInfo } from "react-icons/fa6";

const Header = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  // 다운로드 버튼 클릭 시 실행되는 함수
  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    // 다운로드 함수 호출 및 다운로드 진행 상태 업데이트 콜백 함수
    await downloadAllSectionsAsPDF(projects, (progress) => {
      setProgress(progress); // 다운로드 진행 상태 업데이트
    });

    setIsDownloading(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>Hyeran&apos;s portfolio</div>

        <div className={styles.pdfDownload}>
          <div className={styles.pdfDownloadInfo}>
            <FaCircleInfo className={styles.icon} />
            <div className={styles.txt}>pdf 다운로드 시, pc 비율을 100%로 설정하고 진행해 주세요.</div>
          </div>

          <button
            type="button"
            className={styles.pdfDownloadButton}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <FaDownload className={styles.icon} />
            <div className={styles.txt}>
              {isDownloading ? (
                `다운로드 중... ${progress}%`
              ) : (
                "포트폴리오 PDF 다운로드"
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
