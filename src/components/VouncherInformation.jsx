import React from 'react'
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import VouncherTable from './VouncherTable';
import useVouncherDetail from '../stores/useVouncherDetail';


const VouncherInformation = () => {

  const {add,Lists,same}=useVouncherDetail()

  const fetcher = (url) => fetch(url).then((res) => res.json());



  // Use SWR to fetch data from an API
  const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL+"/products", fetcher);

    const {
        register,
        handleSubmit,
        reset,
    
        formState: { errors },
      } = useForm();
      const onSubmit =async (VouncherData) => {

      
       const current=data.find((el)=>el.id==VouncherData.id)
      
       const currentArray={
        id:Date.now(),
        productName:current.productName,
        price:current.price,
        time:new Date().toISOString(),
        quantity:parseInt(VouncherData.quantity),
        index:Lists.length+1
       }
       let check=Lists.find((el)=>el.productName==currentArray.productName)
     if(check){
      same(currentArray.productName,parseInt(currentArray.quantity))
       
     }else{
      console.log("this is not same")
      add(currentArray)
     }
   
        reset()
        }
  return (
    <div>
   <div className="   print:hidden">
  <form id="productNameForm" onSubmit={handleSubmit(onSubmit)} className=" mx-auto grid grid-cols-4 gap-4">
    {/* select in first bd */}
    <div className="col-span-2">
      <label htmlFor="underline_select" className="sr-only">Select Products</label>
      <select
          {...register("id", { required: true })}
          className={`block py-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${
            errors.id ? "border-red-500" : ""
          }`}
          defaultValue=""
        >
        <option value="" disabled>
            Choose a product
          </option>
         {!isLoading && (data.map((product)=>{
          return <option key={product.id} value={product.id}>{product.productName}</option>
         }))}
        </select>
    </div>
    <div className="col-span-1">
      {/* <label
        for="number-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select a number:</label
      > */}
      <input  {...register("quantity", {
              required: true,
              
            })} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required />
    </div>
    {/* btn in first bd */}
    <div className="col-span-1">
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </div>
  </form>
  {/* quantity in first bd  */}
</div>

<VouncherTable  />

    </div>
  )
}

export default VouncherInformation
