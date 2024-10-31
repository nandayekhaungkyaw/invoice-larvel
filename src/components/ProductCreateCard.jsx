import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ring } from 'ldrs'
import toast from "react-hot-toast";

ring.register()

// Default values shown



// Default values shown


const ProductCreateCard = () => {

  const navigate=useNavigate()

    const [add,setAdd]=useState(false)


  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    setAdd(true)
    console.log()
    data.time=new Date().toISOString();
   await fetch(import.meta.env.VITE_API_URL+"/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept :"application/json"
        },
        body: JSON.stringify({price:data.price,product_name:data.productName,created_at:data.time}),
    })
  
if(  data.backMenu==true){
navigate("/productPage")

}
    toast.success('Successfully Added!')
    setAdd(false)
    reset()
    
  };
  return (
    <div>
      <div className="flex flex-col gap-[16px] mt-[26px] md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold">Create New Product</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in
          sed accusamus distinct
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[26px] flex flex-col gap-[16px]"
      >
        <div className="max-w-sm">
          <label
            htmlFor="productName"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            New Product Name
          </label>
          <input
            type="text"
            {...register("productName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            id="productName"
            className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
              errors.productName
                ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
                : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
            } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
            placeholder="eg. orange"
            aria-describedby="hs-input-helper-text"
          />

          {errors.productName?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
            Require Product Name
            </p>
          )}
          {errors.productName?.type === "minLength" && (
            <p role="alert" className="text-red-500 mt-[4px]">
              At least 3 
            </p>
          )}
          {errors.productName?.type === "maxLength" && (
            <p role="alert" className="text-red-500 mt-[4px]">
             Maximum 20 is allowed
            </p>
          )}
        </div>
        <div className="max-w-sm">
          <label
            htmlFor="price"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Price
          </label>
          <input
            type="price"
            {...register("price", { required: true ,minLength:3,maxLength:4})}
            id="price"
            className="py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="eg. 500"
            aria-describedby="hs-input-helper-text"
          />
            {errors.price?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
             Require Price
            </p>
          )}
          {errors.price?.type === "minLength" && (
            <p role="alert" className="text-red-500 mt-[4px]">
              At least 3 digit price
            </p>
          )}
          {errors.price?.type === "maxLength" && (
            <p role="alert" className="text-red-500 mt-[4px]">
             Below 10000 kyats is allowed
            </p>
          )}
        </div>

        <div className="flex flex-row  items-center mt-6">
          <input
            type="checkbox"  {...register("confirmCheck", { required: true })}
            className={`shrink-0 mt-0.5 size-4 ${errors.confirmCheck ? "border-red-500" :  "border-blue-500"} rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
            id="confirmCheck"
          />
          <label
            htmlFor="confirmCheck"
            className={`text-lg ms-3  ${errors.confirmCheck ? "text-red-500" :   "text-gray-500"} dark:text-neutral-400`}
          >
          Make sure all fields are corrected
          </label>
    
        </div>
        {errors.confirmCheck  && (
            <p role="alert" className="text-red-500 mt-[4px]">
              Require Check
            </p>
          )}

<div className="flex flex-row  items-center ">
          <input
            type="checkbox"  {...register("backMenu", )}
            className={`shrink-0 mt-0.5 size-4 ${errors.backMenu ? "border-red-500" :  "border-blue-500"} rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
            id="backMenu"
          />
          <label
            htmlFor="backMenu"
            className={`text-lg ms-3  ${errors.backMenu ? "text-red-500" :   "text-gray-500"} dark:text-neutral-400`}
          >
          After Create Back to menu
          </label>
    
        </div>
        
        <div className="flex flex-row gap-[26px]">
          <Link
            to={"/productPage"}
            type="button"
            className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            cancle
          </Link>
          <button
            type="submit"
            className="py-3 px-6 inline-flex gap-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            submit
            {add && <l-ring
  size="20"
  stroke="2"
  bg-opacity="0"
  speed="2" 
  color="black" 
></l-ring>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;
