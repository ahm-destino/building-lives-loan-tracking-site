import { useNavigate } from "react-router-dom";
export default function ReportActionBtn({prop}){
    const navigate = useNavigate()
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo'))
    const currentElement = prop.currentElement
    const currentTransaction = prop.currentTransaction
  
    console.log(currentElement);
    console.log(currentTransaction);
    
    console.log(customerInfo);
    
    
    function checkAndDeleteItem(){
        
        const updatedCustomerInfo = customerInfo.map((el)=>{


            if(el.name === currentElement.name){
                  
                return {
                    ...el,
                    transaction_history: el.transaction_history.filter((el)=> {
                         if (el.timestamp !== currentTransaction.timestamp){
                            return el
                        }
                    })
                }
                
            }
            else{
                return el
            }
            
        })
        console.log(updatedCustomerInfo);
       
        localStorage.setItem('customerInfo', JSON.stringify(updatedCustomerInfo) )
        console.log('I DON UPDATE AM OO');
        
        navigate('/dashboard-reports')
   
    }
    
    return(
        <>
        <div className="fixed bottom-[0px] left-[20px] right-[20px] flex justify-around gap-[20px] w-full p-[20px_0] ">
            <button className="bg-red-500 p-[10px] w-[50%] rounded-[5px] text-white " onClick={checkAndDeleteItem} >DELETE </button>
            <a href="" className="w-[50%]">  <button className=" bg-blue-500 p-[10px_30px] w-[92%]  rounded-[5px]  text-white" > SHARE</button> </a>
            <p></p>
        </div>
        </>
    )
}