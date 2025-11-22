import { useNavigate } from 'react-router-dom'
export default function AddStaffBtn(){

    const navigate = useNavigate()
    function AddNewCustomer() {
        navigate('/add-new-staff')
    }   

    return(
        <button onClick={AddNewCustomer} className=' flex gap-[10px] items-center text-lg p-[18px_20px] text-white bg-[#2563EB] shadow shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[40px] fixed bottom-[120px] right-[20px]'>
            <p className='material-symbols-outlined'> person_add</p>  
            <p>Add New Staff</p>   
        </button>
    )
}