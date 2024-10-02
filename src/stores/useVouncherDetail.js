import { create } from "zustand";

const useVouncherDetail=create(set=>({
    Lists:[],

    add:(current)=>set(state=>({
        Lists:[...state.Lists,current]
    })),

    remove:(id)=>set(state=>({
        Lists:[...state.Lists.filter((el)=>el.id!=id)]
    })),
    ChangeQuantity:(id,quantity)=>set(state=>({
        Lists:[...state.Lists.map((el)=>el.id==id?{...el,quantity:el.quantity+quantity}:el)]
    })),
    same:(id,quantity)=>set(state=>({
        Lists:[...state.Lists.map((el)=>el.productName==id?{...el,quantity:el.quantity+quantity}:el)]
    })),
    Clear:()=>set(()=>({
        Lists:[]
    }))
    
}))
export default useVouncherDetail