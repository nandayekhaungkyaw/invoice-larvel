import React from 'react'
import { useForm } from 'react-hook-form';
import { ring } from 'ldrs'
import toast from "react-hot-toast";
import VouncherInformation from './VouncherInformation';
import useVouncherDetail from '../stores/useVouncherDetail';
import { useNavigate } from 'react-router-dom';

ring.register()

const SaleForm = () => {

   let voucher_id='VC-' + Math.random().toString(36).substr(2, 9).toUpperCase();
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
        let sale_date=new Date().toISOString().split('T')[0]
        let tax=total*0.07
        let net_total=total+tax
        const transformedRecords = Lists.map((item, index) => {
          const cost = parseFloat(item.price) * item.quantity;
          return {
            product_id: item.id, // Example logic for generating product_id
            product: {
              id:item.id,
              product_name: item.productName,
              price: parseFloat(item.price),
              created_at: item.time
            },
            quantity: String(item.quantity),
            cost: cost,
            created_at: new Date().toISOString() // Example: current timestamp for created_at
          };
        });
    
        let records=transformedRecords
        console.log(records)
      const all={...VouncherData,total,net_total,tax,records,sale_date}
  console.log(all)
     const res= await fetch(import.meta.env.VITE_API_URL+"/vouchers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept:"application/json"
        },
        body: JSON.stringify(all),
        
      })
      const json= await res.json()
      console.log(json.message)
      console.log(goVouncher)
      if(VouncherData.goVouncher==true){
console.log(json)
        
       
        navigate("/vouncher/VouncherOne/"+json.voucher.id)
      }
      reset()
      Clear()
      console.log(Lists)
if(json.stats>400){
toast.error(json.message)
}else{
  toast.success('Successfully Added!')
}
      
      }

  return (
    <div className='grid grid-cols-4 gap-[12px]'>
      <div className="col-span-3">  
      <VouncherInformation/>
    
</div>
      <div className='col-span-1 flex flex-col'>
      <form action="" name='VouncherForm' onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-[16px] mb-4'>

<div className="max-w-sm">
     <label
       htmlFor="voucher_id"
       className="block text-sm font-medium mb-2 dark:text-white"
     >
      Vouncher ID
     </label>
     <input
       type="text"
       {...register("voucher_id", {
         required: true,
         
       })}
      
       className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
         errors.voucher_id
           ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
           : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
       } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
      defaultValue={voucher_id}
       aria-describedby="hs-input-helper-text"
     />

     {errors.voucher_id?.type === "required" && (
       <p role="alert" className="text-red-500 mt-[4px]">
       Require
       </p>
     )}
  
   </div>

   <div className="max-w-sm">
     <label
       htmlFor="customer_name"
       className="block text-sm font-medium mb-2 dark:text-white"
     >
      Customer Name
     </label>
     <input
       type="text"
       {...register("customer_name", {
         required: true,
         
       })}
      
       className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
         errors.customer_name
           ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
           : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
       } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
       placeholder="Kyaw Kyaw"
       aria-describedby="hs-input-helper-text"
     />

     {errors.customer_name?.type === "required" && (
       <p role="alert" className="text-red-500 mt-[4px]">
       Require
       </p>
     )}
  
   </div>
   <div className="max-w-sm">
     <label
       htmlFor="customer_email"
       className="block text-sm font-medium mb-2 dark:text-white"
     >
      Customer Email
     </label>
     <input
       type="Email"
       {...register("customer_email", {
         required: true,
         
       })}
      
       className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
         errors.customer_email
           ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
           : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
       } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
       placeholder="kyawkyaw@gmail.com"
       aria-describedby="hs-input-helper-text"
     />

     {errors.customer_email?.type === "required" && (
       <p role="alert" className="text-red-500 mt-[4px]">
       Require
       </p>
     )}
  
   </div>
   <div className="max-w-sm">
     <label
       htmlFor="sale_date"
       className="block text-sm font-medium mb-2 dark:text-white"
     >
      Sale Date
     </label>
     <input
       type="Date"
       {...register("sale_date", {
         required: true,
         
       })}
      
       className={`py-3 border-1 border  border-slate-200 px-4 block w-full rounded-lg text-sm ${
         errors.sale_date
           ? " focus:border-red-500  dark:focus:ring-red-600 focus:ring--500"
           : " focus:border-blue-500  dark:focus:ring-neutral-600 focus:ring-blue-500"
       } disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
      defaultValue={Today}
       aria-describedby="hs-input-helper-text"
     />

     {errors.sale_date?.type === "required" && (
       <p role="alert" className="text-red-500 mt-[4px]">
       Require
       </p>
     )}
  
   </div>



</form>
        
 
      <div className='col-span-4 flex flex-col  justify-end gap-6 mt-auto '>
   <div className="flex flex-row  items-center">
          <input
            type="checkbox"  {...register("all_correct", { required: true })}
            className={`shrink-0 mt-0.5 size-4 ${errors.all_correct ? "border-red-500" :  "border-blue-500"} rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
            id="all_correct"
          />
          <label
            htmlFor="all_correct"
            className={`text-lg ms-3  ${errors.all_correct ? "text-red-500" :   "text-gray-500"} dark:text-neutral-400`}
          >
          Make sure all fields are corrected
          </label>
    
        </div>
       
        <div className="flex flex-row  items-center">
          <input
            type="checkbox"  {...register("goVouncher", { })}
            className={`shrink-0 mt-0.5 size-4 ${errors.goVouncher ? "border-red-500" :  "border-blue-500"} rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
            id="goVouncher"
          />
          <label
            htmlFor="goVouncher"
            className={`text-lg ms-3  ${errors.goVouncher ? "text-red-500" :   "text-gray-500"} dark:text-neutral-400`}
          >
         Go to the voucher page
          </label>
    
        </div>

                <button
            type="submit" onClick={handleSubmit(onSubmit)}
            className=" w-1/2 justify-center ml-auto py-3 px-6  inline-flex gap-4 items-center  text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
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

      
    </div>
  )
}

export default SaleForm
