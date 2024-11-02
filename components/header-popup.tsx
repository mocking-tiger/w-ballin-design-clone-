import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Temp from "./temp";

export default function HeaderPopup({
  close,
}: {
  close: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full -mx-[48px] -my-[24px] fixed bg-white">
      <div className="w-[880px] mx-auto pt-[29px] pb-[8px] flex relative text-[1.4rem] text-[#303030]">
        <p>우리들의 이야기를 구경하세요</p>
      </div>
      <Image
        className="absolute top-[24px] right-[48px] cursor-pointer"
        src="/header/header-close.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "32px", height: "auto" }}
        alt="닫기 버튼"
        onClick={() => close(false)}
      />
      <Temp />
      <div className="h-screen -mt-[110px] flex justify-center items-center">
        <div className="w-[277px] h-[367px]">
          <p className="mb-[24px] text-[#898989] text-[1.8rem]">
            W볼린 디자인팀이 보낸 메뉴입니다.
          </p>
          <ul className="text-[4.8rem] text-[white]">
            <li
              className="w-fit mb-[16px] px-[28px] py-[12px] bg-[#2051FF] rounded-t-[48px] rounded-r-[48px] font-medium cursor-pointer"
              onClick={() => location.reload()}
            >
              메인
            </li>
            <li className="w-fit mb-[16px] px-[28px] py-[12px] bg-[#2051FF] rounded-t-[48px] rounded-r-[48px] font-medium cursor-pointer">
              포트폴리오
            </li>
            <li className="w-fit px-[28px] py-[12px] bg-[#2051FF] rounded-t-[48px] rounded-r-[48px] font-medium cursor-pointer">
              문의하기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
