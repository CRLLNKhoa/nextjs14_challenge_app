"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const router = useRouter();

  return (
    <main
      className="flex min-h-screen flex-col items-center
     justify-between relative bg-[url('/imgs/giphy.gif')]
     bg-no-repeat	bg-cover bg-center"
    >
      <div className="flex flex-col bg-black/60 p-4 w-full duration-1000 select-none">
        <div
          className={cn(
            `duration-1000 max-h-[1000px] transition-all p-0 text-white overflow-hidden`,
            !isShow && "max-h-0 "
          )}
        >
          <h1 className="text-xl font-bold">Tác giả</h1>
          <p>
            Xin chào, tôi tên là Lương Khoa (thường được biết với nickname
            CAROLO_KHOA). Tôi là một thằng ắc ơ hay code mấy cái website linh
            tinh. Tôi cũng là tác giả của một số website được 1 ích người dùng,
            trong đó có thể bao gồm cả bạn vì đã dùng website này. Hehe...
            <span>
              {" "}
              Theo dõi tôi{" "}
              <a
                href="https://luongkhoa.io.vn/"
                className="text-red-500"
              >
                tại đây
              </a>{" "}
              hí hí :3
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-white cursor-pointer text-xl">
            Challenge
          </h1>
          <button
            onClick={() => setIsShow(!isShow)}
            className="border p-2 rounded-lg"
          >
            <img
              src="/icons/menu.svg"
              alt="menu-logo"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-4 w-full">
        <div className="bg-black/60 p-4 text-white rounded-lg cursor-crosshair text-center">
          <h1 className="text-xl font-bold">Thử thách 30 ngày</h1>
          <p className="mt-4 mb-2">
            Chào mừng bạn đến với trang web thách thức 30 ngày! Tại đây, chúng
            tôi cung cấp cho bạn cơ hội để thay đổi cuộc sống của mình trong
            vòng 30 ngày thông qua những thách thức đa dạng. Bạn có thể chọn
            những mục tiêu cá nhân, từ thói quen hàng ngày đến rèn luyện thể
            chất, và thậm chí là học tập.
          </p>
          <p>
            Chúng tôi không chỉ là nền tảng để đặt ra những mục tiêu mới mẻ, mà
            còn là cộng đồng nơi bạn có thể chia sẻ và tìm kiếm sự động viên từ
            những người có chung sở thích. Hãy tham gia ngay để trải nghiệm sức
            mạnh của việc thách thức bản thân trong vòng 30 ngày và khám phá khả
            năng tiềm ẩn của bạn!
          </p>
          <button
            onClick={() => router.push("/challenge")}
            className="bg-black w-[200px] py-2 rounded-md mt-4 hover:bg-slate-900 duration-500"
          >
            Thử ngay
          </button>
        </div>
      </div>
    </main>
  );
}
