import {useNavigate} from 'react-router-dom'

export default function newAction({uniqueId}){
const navigate = useNavigate()

    function addNewTransaction(e){
        navigate('/add-transaction', {
            state: {
                uniqueId : uniqueId,
                buttonId : e.target.innerText
            }
        })
    }

    return(
        <div className="fixed bottom-[0px] left-[20px] right-[20px] flex justify-between gap-[20px] p-[20px_0]">
            <button className="bg-green-500/30 p-[10px] w-[100%] rounded-[5px] text-green-700 " onClick={addNewTransaction}>I Recieved </button>
            <button className="bg-red-500/30 p-[10px] w-[100%] rounded-[5px]  text-red-700" onClick={addNewTransaction}> I gave Out </button>
        </div>
    )
}