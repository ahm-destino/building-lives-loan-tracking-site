import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function AddNewStaff({prop}){

     const navigate = useNavigate()
        const staffInfo = prop;    
    
        console.log(prop);
        
        const [name, setName] = useState('')
        const [countryCode, setCountryCode] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [address, setAddress] = useState('')
        const [notes, setNotes] = useState('')
        const [errorMessage, setErrorMessage] = useState('')
    
    
        function checkForInvalidCredentials(){
            
            
        }
        function appendNewCustomer(){
    
            if (name === '') {
                setErrorMessage('Please Fill in your name')
                return 'error'
            }
            else if(countryCode === '' ){
                setErrorMessage('Please Select a country code')
                console.log(countryCode);
                
                return
            }
            else if(phoneNumber === '' ){
                setErrorMessage('Please Enter a Phone Number')
                return
            }
            
            
            
            // This block of code is for me to check if a namelike that already exist in the staffInfo List and if it does, 
            const confirm = Array.from(staffInfo).map(element => {
                if (element.name === name){
                    setErrorMessage('Phone number already added')
                    return name
                }
            });
     
            for (let i = 0; i < confirm.length; i++) {
                const element = confirm[i];
                if( element === name ){
                    return;
                }
            }
            
            const newStaff = {
                name: name,
                phone_number: countryCode+phoneNumber,
                address: address,
                notes: notes
            }
            
            console.log('boom');
            
            staffInfo.unshift(newStaff)
            localStorage.setItem('staffInfo', JSON.stringify(staffInfo))
            navigate('/')
        }
    
    
        function handleChange(e){
            if (e.target.id === 'name'){
                setName(e.target.value)
            }
            else if(e.target.id === 'countryCode'){
                setCountryCode(e.target.value)
            }
            else if(e.target.id === 'phoneNumber' ){
                setPhoneNumber(e.target.value)
            }
            else if(e.target.id === 'address'){
                setAddress(e.target.value)
            }
            else if(e.target.id === 'loanOfficer'){
                setLoanOfficer(e.target.value)
            }
            else if(e.target.id === 'notes'){
                setNotes(e.target.value)
            }
        }
        
    
    
        function back() {
            navigate(-1)
        }
    

    return(
        
        <>
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'>Create New Customer</p>
                <p></p>
            </header>

            <div>
                <label className="flex flex-col w-full">
                    <p className="text-base font-medium leading-normal pb-2">NAME</p>
                    <div className="relative flex items-center">
                        <input id="name" onChange={handleChange} className=" w-full border border-slate-300  rounded-lg p-[20px] text-xl font-medium placeholder:text-lg" placeholder="John Deo" />
                    </div>
                </label>

                <label className="flex flex-col w-full mt-[20px]">
                    <p className="text-base font-medium leading-normal pb-2">PHONE NUMBER</p>
                    <div className="relative flex items-center gap-[20px]">
                        <select name="country-code" onChange={handleChange} id="countryCode" className="border border-slate-300 p-[20px_30px] rounded-lg " required>
                            <option name='country-code' value="" selected disabled>00</option>
                            <option name='country-code' value="+234"> +234 </option>
                        </select>
                        <input id="phoneNumber" onChange={handleChange} className=" border border-slate-300 w-full rounded-lg p-[20px] text-xl font-medium placeholder:text-lg" minLength={10} maxLength={10} placeholder="810-0000-000" />
                    </div>
                </label>

                <label className="flex flex-col w-full">
                    <p className="text-base font-medium leading-normal pb-2 mt-[20px]">ADDRESS</p>
                    <div className="relative flex items-center">
                        <input id="address" onChange={handleChange} className=" border border-slate-300 w-full  rounded-lg  p-[20px] text-xl font-medium placeholder:text-lg" placeholder="No 1. texas, usa" />
                    </div>
                </label>
                
            </div>

            <label class="flex flex-col w-full mt-[50px]">
                <p class="text-base font-medium leading-normal pb-2">NOTES <span class="font-normal">(Optional)</span></p>
                <textarea id="notes" onChange={handleChange} class="border border-slate-300 w-full resize-none overflow-hidden rounded-lg  p-[20px] text-base font-normal leading-normal" placeholder="Add a short description..." rows="3"></textarea>
            </label>
            
            <p className="text-red-500">{errorMessage}</p>
            <button class="fixed bottom-[20px] w-[93%] h-14 px-6 bg-primary text-white bg-[#2563EB] font-semibold rounded-xl shadow-lg hover:bg-[#2563EB]  transition-colors duration-300 ease-in-out" onClick={appendNewCustomer}>CONFIRM</button>
        </>
    )
}