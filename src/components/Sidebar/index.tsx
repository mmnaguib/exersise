import Link from "next/link";
const Sidebar = ({
  sideWidth,
  hideTitle,
}: {
  sideWidth: string;
  hideTitle: string;
}) => {
  return (
    <div
      className="fixed right-0 bg-[#2D3A4B] text-white h-screen top-0 border-2 border-[#2D3A4B]"
      style={{ width: sideWidth }}
    >
      <ul className="flex flex-col">
        <Link
          href="/"
          className="m-0 h-12 bg-[#B0BEC5] text-black font-extrabold inline-block border-b-2 border-b-white leading-10"
        >
          <i className="fa-solid fa-home w-10 py-[5px] px-[10px] text-[#344955]"></i>
          <span style={{ display: hideTitle }}>الصفحة الرئيسية</span>
        </Link>
        <Link
          href="/about"
          className="m-0 h-12 bg-[#B0BEC5] text-black font-extrabold inline-block border-b-2 border-b-white leading-10"
        >
          <i className="fa-solid fa-phone w-10 py-[5px] px-[10px] text-[#344955]"></i>
          <span style={{ display: hideTitle }}>ماذا عنا</span>
        </Link>
        <Link
          href="contantus"
          className="m-0 h-12 bg-[#B0BEC5] text-black font-extrabold inline-block border-b-2 border-b-white leading-10"
        >
          <i className="fa-solid fa-phone w-10 py-[5px] px-[10px] text-[#344955]"></i>
          <span style={{ display: hideTitle }}>تواصل معنا</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
