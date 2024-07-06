import { create } from 'zustand'
export type configType={
    numberOfQuestions:number,
    catagory:{id:number,name:string},
    level:string,
    type:string,
    status:string,
    score:number
   }
type BearsState = {
    config:  configType
   addLevel: (level:string) => void;
   addNumberOfQuestions: (count:number) => void;
   addCatagory :(id:number,name:string)=> void;
   addType:(type:string) => void;
   addScore:()=>void
   };



   const defaultConfig :configType={
    numberOfQuestions:10,
    catagory:{
        id:0,
        name:''
    },
    type:'',
    status:'',
    score:0,
    level:''
   }
const useQuizConfig= create<BearsState>((set) => ({
 config:{...defaultConfig},
 addLevel: (level:string) => set((state) => ({config:{...state.config,level:level}})),
  addNumberOfQuestions: (count:number) => set((state) => ({config:{...state.config,numberOfQuestions:count}})),
  addCatagory: (id: number, name: string) => set((state) => ({
    config: { ...state.config, catagory: { id: id, name: name } }
   })),
 addStatus: (status:string) => set((state) => ({config:{...state.config,status:status}})),
 addScore: () => set((state) => ({config:{...state.config,score:state.config.score+1}})),
 addType: (type:string) => set((state) => ({config:{...state.config,type:type}})),
}))

export default useQuizConfig