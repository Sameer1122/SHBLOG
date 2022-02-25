import React, { useState, useEffect } from "react";
import { getCategories } from "../Services";
import Link from "next/link";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <div className="bg-black">
      <div className="container mx-auto py-8 px-10 mb-8">
        <div className="w-full inline-block">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl transition duration-500 hover:text-pink-500 transform text-white">
                SH BLOG
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((data, index) => (
              <Link key={index} href={`/category/${data.slug}`}>
                <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-500 text-white">
                  {data.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
