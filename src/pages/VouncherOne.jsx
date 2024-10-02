import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import Breadcrumb from '../components/Breadcrumb';
import printJS from 'print-js';
import html2canvas from 'html2canvas';



const VouncherOne = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());

    
     const {id}=useParams()
   
     const handlePrint = () => {
      printJS({
        printable: 'printable-section',  // the id of the section to print
        type: 'html',
        css: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
      });
    };

 
      const captureRef = useRef(null);
  
      const handleCapture = () => {
        if (captureRef.current) {
            html2canvas(captureRef.current, {
                useCORS: true,  // Enable cross-origin to capture external styles
                scale: 2,  // For higher resolution
                onclone: (clonedDoc) => {
                    const linkElement = clonedDoc.createElement('link');
                    linkElement.rel = 'stylesheet';
                    linkElement.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';  // Inject Tailwind styles
                    clonedDoc.head.appendChild(linkElement);
                },
            }).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'capture.png';
                link.click();
            });
        }
    };
  


    // Use SWR to fetch current from an API
    const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL+"/vouncher", fetcher);

if(isLoading) return <p>Loading...</p>
    const { mutate } = useSWRConfig();
    
    if (error) return <p>Failed to load data</p>;
  
  
  let current = data.find((el)=>el.id==id)
  if (!current) {
   window.location.reload()
  }
console.log(current)
  
  return (
<div>

    <Breadcrumb current={"Vouncher Detail"} add={[{title:"VouncherPage","path":"/vouncher"}]}/>
   
       <div ref={captureRef} id="printable-section" className="w-[14.8cm] mt-7 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Voucher Details</h1>
  
      {/* Voucher Header */}
      <div className="mb-6">
        <p className="text-gray-600">Voucher ID: <span className="font-semibold">{current.VouncherID}</span></p>
        <p className="text-gray-600">Customer Name: <span className="font-semibold">{current.CustomerName}</span></p>
        <p className="text-gray-600">Customer Email: <span className="font-semibold">{current.CustomerEmail}</span></p>
        <p className="text-gray-600">Sale Date: <span className="font-semibold">{current.SaleDate}</span></p>
       
      </div>
  
      {/* Product List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Purchased Items</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-right">Quantity</th>
              <th className="px-4 py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {current.Lists.map((item,index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.index}</td>
                <td className="px-4 py-2">{item.productName}</td>
                <td className="px-4 py-2 text-right">{Number(item.price).toFixed(2)}</td>
                <td className="px-4 py-2 text-right">{item.quantity}</td>
                <td className="px-4 py-2 text-right">{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Summary */}
      <div className="border-t pt-4">
        <p className="text-right text-lg font-semibold">
          Subtotal: <span className="text-gray-700">${Number(current.total).toFixed(2)}</span>
        </p>
        <p className="text-right text-lg font-semibold">
          Tax: <span className="text-gray-700">${current.tax.toFixed(2)}</span>
        </p>
        <p className="text-right text-2xl font-bold text-gray-800">
          Total: <span>${current.netTotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
    <button onClick={handlePrint} className="print-button text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Print Voucher</button>
    <button onClick={handleCapture} className="mt-4 bg-blue-500 text-white p-2 rounded">
                  Capture
              </button>
 
  
</div>
  )
}

export default VouncherOne
