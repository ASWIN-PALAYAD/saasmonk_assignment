"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter()

  const handleAddMovie = () => {
    router.push('/add_movie')
  };

  const handleAddReview = () => {
    router.push('/add_review')
  };

  return (
    <div className="h-[80px] flex justify-between items-center pl-8 pr-8 bg-[#E3E8ED]">
      <div>
        <Link href={'/'} className="font-thin text-2xl">MOVIE CRITIC</Link>
      </div>
      <div className="flex gap-5">
        <CustomButton
          title="Add new movie"
          onPress={handleAddMovie}
          bgColor="white"
          textColor="#6558F5"
          borderColor="#6558F5"
        />
        <CustomButton
          title="Add new review"
          onPress={handleAddReview}
          bgColor="#6558F5"
          textColor="white"
        />
      </div>
    </div>
  );
};

export default Navbar;
