import React from 'react'
import { useForm } from 'react-hook-form';
import { ring } from 'ldrs'
import toast from "react-hot-toast";
import VouncherInformation from './VouncherInformation';
import useVouncherDetail from '../stores/useVouncherDetail';
import { useNavigate } from 'react-router-dom';

ring.register()

const SaleForm = () => {
   let VouncherID='VC-' + Math.random().toString(36).substr(2, 9).toUpperCase();
   let Today = new Date().toISOString().split('T')[0];

   const {Lists,Clear}=useVouncherDetail()
   const navigate = useNavigate(); 
    const {
        register,
        handleSubmit,
        reset,
    
        formState: { errors },
      } = useForm();
      const onSubmit =async (VouncherData) => {
        
        let total=Lists.map((el)=>el.quantity*el.price).reduce((a,b)=>a+b,0)
        let date=new Date()
        let tax=total*0.07
        let netTotal=total+tax
        console.log(Lists)
        console.log(VouncherData)
      const all={...VouncherData,total,netTotal,tax,Lists,date}
  
     const res= await fetch(import.meta.env.VITE_API_URL+"/vouncher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(all),
        
      })
      const json= await res.json()
      console.log(json)
      console.log(goVouncher)
      if(VouncherData.goVouncher==true){

        
       
        navigate("/vouncher/VouncherOne/"+json.id)
      }
      reset()
      Clear()

      toast.success('Successfully Added!')
      }
  return (
    <div>
     <form action="" name='VouncherForm' onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-4 gap-[16px]'>

     <div className="max-w-sm">
          <label
            htmlFor="VouncherID"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
           Vouncher ID
          </label>
          <input
            type="text"
            {...register("VouncherID", {
              required: true,
              
            })}
           
            className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
              errors.VouncherID
                ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
                : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
            } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
           defaultValue={VouncherID}
            aria-describedby="hs-input-helper-text"
          />

          {errors.VouncherID?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
            Require
            </p>
          )}
       
        </div>

        <div className="max-w-sm">
          <label
            htmlFor="CustomerName"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
           Customer Name
          </label>
          <input
            type="text"
            {...register("CustomerName", {
              required: true,
              
            })}
           
            className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
              errors.CustomerName
                ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
                : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
            } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
            placeholder="Kyaw Kyaw"
            aria-describedby="hs-input-helper-text"
          />

          {errors.CustomerName?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
            Require
            </p>
          )}
       
        </div>
        <div className="max-w-sm">
          <label
            htmlFor="CustomerEmail"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
           Customer Email
          </label>
          <input
            type="Email"
            {...register("CustomerEmail", {
              required: true,
              
            })}
           
            className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
              errors.CustomerEmail
                ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
                : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
            } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
            placeholder="kyawkyaw@gmail.com"
            aria-describedby="hs-input-helper-text"
          />

          {errors.CustomerEmail?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
            Require
            </p>
          )}
       
        </div>
        <div className="max-w-sm">
          <label
            htmlFor="SaleDate"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
           Sale Date
          </label>
          <input
            type="Date"
            {...register("SaleDate", {
              required: true,
              
            })}
           
            className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
              errors.SaleDate
                ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
                : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
            } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
           defaultValue={Today}
            aria-describedby="hs-input-helper-text"
          />

          {errors.SaleDate?.type === "required" && (
            <p role="alert" className="text-red-500 mt-[4px]">
            Require
            </p>
          )}
       
        </div>

 

     </form>


 <VouncherInformation/>


     <div className='col-span-4 flex flex-row items-center justify-end gap-6 mt-16 '>
   <div className="flex flex-row  items-center">
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
       
        <div className="flex flex-row  items-center">
          <input
            type="checkbox"  {...register("goVouncher", { required: true })}
            className={`shrink-0 mt-0.5 size-4 ${errors.goVouncher ? "border-red-500" :  "border-blue-500"} rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
            id="goVouncher"
          />
          <label
            htmlFor="goVouncher"
            className={`text-lg ms-3  ${errors.goVouncher ? "text-red-500" :   "text-gray-500"} dark:text-neutral-400`}
          >
         Go to the vouncher page
          </label>
    
        </div>

                <button
            type="submit" onClick={handleSubmit(onSubmit)}
            className=" py-3 px-6  inline-flex gap-4 items-center  text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            submit
            {/* {add && <l-ring
  size="20"
  stroke="2"
  bg-opacity="0"
  speed="2" 
  color="black" 
></l-ring>} */}
          </button>
   </div>

      
    </div>
  )
}

export default SaleForm
