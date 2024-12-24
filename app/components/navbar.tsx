import Link from "next/link";
import { AiFillInstagram, AiOutlineX, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";

function Navbar() {
  return (
    <header className="pb-4 mb-5 mx-auto pt-3 bg-black text-white top-0 sticky z-50 w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Git<span className="text-yellow-400">Find</span></h1> <br />
        <div className="flex items-center space-x-3 w-[50%] mx-auto justify-center">
          <Link href="https://www.instagram.com/guy.asong?igsh=MXNobmNxZmM4c3lzMw%3D%3D&utm_source=qr">
            <AiFillInstagram className="w-7 h-7" />
          </Link>
          <Link href="https://x.com/@guy_asong">
            <AiOutlineX className="w-7 h-7" />
          </Link>
          <Link href="https://www.linkedin.com/in/guy-asong-b8b1441b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <AiFillLinkedin className="w-7 h-7" />
          </Link>
          <Link href="https://youtube.com/@codeguru3204?si=fsOIJ42QLqLAsX1a">
            <AiFillYoutube className="w-7 h-7" />
          </Link>
          <Link href="https://github.com/guyasong2/">
            <AiFillGithub className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
