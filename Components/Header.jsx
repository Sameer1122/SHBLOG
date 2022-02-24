import React, { useContext } from "react";
import Link from "next/link";
const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-development" },
  { name: "Android Development", slug: "android-development" },
  { name: "Ios Development", slug: "ios-development" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-0">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              SH BLOG
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((data) => (
            <Link key={data.slug} href={`/category/${data.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white">
                {data.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
