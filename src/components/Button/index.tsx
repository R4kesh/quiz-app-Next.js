"use client";

import useQuizConfig from "@/app/store";
import Link from "next/link";

export default function Button() {

  const changeStatus = useQuizConfig((state) => state.);
  const handleStart = () => {
    changeStatus("start")
  }


    return(
        <>
        <Link href='/star'></Link>
         <button
        onClick={handleStart}
        type="button"
        className="  m-auto  text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-4 px-10 w-1/2  "
      >
        Start Quiz Now.
      </button>
        </>
    )
}