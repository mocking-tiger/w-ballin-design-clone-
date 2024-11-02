"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderPopup from "./header-popup";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const goTemp = useCallback(() => {
    setShowPopup(true);
  }, []);

  return (
    <header className="px-[48px] py-[24px] flex justify-between">
      <Link href="/">
        <Image
          src="/header/logo_L.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "128px", height: "auto" }}
          placeholder="blur"
          blurDataURL="/header/logo_L.png"
          alt="헤더 로고"
        />
      </Link>
      <Image
        className="cursor-pointer"
        src="/header/header-menu.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "32px", height: "auto" }}
        alt="헤더 로고"
        onClick={goTemp}
      />
      {showPopup && <HeaderPopup close={setShowPopup} />}
    </header>
  );
}
