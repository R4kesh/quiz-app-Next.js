"use client"
import ButtonComponent from "@/components/Button";
import DropdownOptions from "@/components/DropdownOptions";
import useQuizConfig from "./store";


// import useQuis from "@/store";

export default function Home() {
  const quisConfig=useQuizConfig ((state:any)=>state.config)
  const addNumberOfQuestions=useQuizConfig((state:any)=>state.addNumberOfQuestions)
  console.log("here",quisConfig);
  
  return (
  <>
    <section className="flex flex-col justify-center items-center my-10">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-light text-gray-900 md:text-5xl lg:text-6xl ">Welcome To QuisApp</h1>
  
      <section className="p-10 my-10 rounded-lg shadow-xl w-[75%] max-w-full">
  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900"></label>
  <input type="number" onChange={(e)=>addNumberOfQuestions(parseInt(e.target.value))} defaultValue={10} min={0} max={50} id='first_name' className="bg-gray-50 max-w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  "></input>
<div className="flex flex-col items-center justify-center">
<DropdownOptions/>
  <ButtonComponent/>
</div>
      </section>

       </section>



  </>
  );
}