import { Link } from "react-router-dom"
import { ChangeEvent  } from "react";


export const Auth =({type}:{type:"signup" | "signin"})=>{
    return <div className="h-screen flex justify-center items-center flex-col bg-slate-500">
     <div className="sm:text-3xl lg:text-5xl mb-10 font-bold text-red-400 shadow-lg shadow-red-700">
         WelCome To the Event-Brite
     </div>
 
        <div className="flex justify-center bg-white rounded-lg p-6 " >
            <div className="w-[350px] ">
                <div className="text-4xl font-bold flex justify-center">
                    Create An Account
                </div>
                <div className="flex justify-center font-semibold pt-4">
                    {type === "signin"? "Don't Have An account" : "Already Have an Account "} <Link className="border-b hover:font-semibold hover:text-slate-500 pl-2"  to={type === "signin" ? "/" :"/signin"}>
                    {type === "signin"? "Sign Up" :"Sign In"}
                    </Link>
                </div>
                <div>
                    {type==="signup" ? <LabelInput
                        label="First Name" placeholder="Lalit" onChange={()=>{}}
                    />:null}
                    {type==="signup" ? <LabelInput
                        label="Last Name" placeholder="Wagh" onChange={()=>{}}
                    />:null}
                
                    <LabelInput
                        label="Email" placeholder="laitwagh@gmail.com" onChange={()=>{}}
                    />
                    <LabelInput
                        label="PassWord" placeholder="123456" type={"password"} onChange={()=>{}}
                    />
                    <button type="button" className=" mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full ">{type === "signup" ? "Sign Up" :"Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}
interface LabelledInput {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string
}

function LabelInput({ label, placeholder, onChange ,type}: LabelledInput) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />

    </div>
}
