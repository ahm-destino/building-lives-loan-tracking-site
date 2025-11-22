import { useNavigate } from 'react-router-dom';

export default function CreateNewCustomerButton(){

    const navigate = useNavigate()
    function goToCreateCustomerPage() {
        navigate('/create-customer-page')
    }
    return(
        <button onClick={goToCreateCustomerPage} className=' flex gap-[10px] w-[100%] items-center justify-center text-lg p-[15px_20px] text-white bg-[#2563EB] shadow shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[12px] '>
            <p className='material-symbols-outlined'> person_add</p>  
            <p>CREATE NEW CUSTOMER</p>   
        </button>
    )
}