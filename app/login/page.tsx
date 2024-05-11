import Input from "@/components/Authinput";

export default function Login() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-blue-500 text-3xl mb-5">로그인</h1>
      <div className="w-[50rem]  ring-1 ring-blue-400 p-10 rounded-md ">
        <form action="" className="flex flex-col gap-7">
          <span className="mt-5">이메일</span>
          <Input></Input>
          <span>비밀번호</span>
          <Input></Input>
          <button className="auth_btn mt-10">로그인</button>
        </form>
      </div>
    </main>
  );
}
