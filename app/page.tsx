import Image from "next/image";

import Link from "next/link";
import altImage from "../app/favicon.ico";

export default function Home() {
  return (
    <main className="h-screen bg-[#222D2F] flex justify-center items-center">
      <div className="flex bg-neutral-700 p-10 rounded-md">
        <div className="flex flex-col justify-between mr-20">
          <h2 className="text-4xl font-bold">모두가 함께하는 중고마켓</h2>
          <span className="w-[260px] text-xl">
            모두가 함께하는 중고마켓, 모중마켓에 오신 것을 환영합니다!
          </span>
          <div className="flex *:mx-10">
            <Link href="/login">
              <div className="start_btn">
                <span>로그인</span>
              </div>
            </Link>
            <Link href="/sign">
              <div className="start_btn">
                <span>회원가입</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative w-[15rem] h-[15rem] border rounded-full border-none bg-black ">
          <Image fill src={altImage} alt="logo"></Image>
        </div>
      </div>
    </main>
  );
}
