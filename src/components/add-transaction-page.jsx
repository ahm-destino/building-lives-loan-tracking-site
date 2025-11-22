import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function AddTransaction({ prop }) {
  const navigate = useNavigate()
  const location = useLocation()

  const uniqueId = location.state.uniqueId
  const transDescription = location.state.buttonId
  const [amount, setAmount] = useState(0)

  function saveNewTransaction() {
    // ensure each customer has a lastUpdated field
    prop.forEach(element => {
      if (element.lastUpdated === undefined || element.lastUpdated === null) {
        element.lastUpdated = 0
      }
    })

    const formattedTime = new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // add transaction and update lastUpdated for the target customer
    prop.forEach(element => {
      if (element.phone_number === uniqueId) {
        element.transaction_history = element.transaction_history || []

        element.transaction_history.unshift({
          id: transDescription,
          amount: isNaN(amount) ? 0 : amount,
          timestamp: formattedTime
        })

        // numeric timestamp for easy sorting
        element.lastUpdated = Date.now()
      }
    })

    // sort customers so most recently updated appear first
    prop.sort((a, b) => (b.lastUpdated || 0) - (a.lastUpdated || 0))

    // save and go back
    localStorage.setItem('customerInfo', JSON.stringify(prop))
    navigate(-1)
  }

  function back() {
    navigate(-1)
  }

  return (
    <>
      <header className="p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300">
        <button
          className="bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 "
          onClick={back}
        ></button>
        <p className="text-xl font-bold"> Add Transaction</p>
        <p></p>
      </header>

      <input
        type="text"
        id="input"
        onChange={(e) => setAmount(parseInt(e.target.value || '0', 10))}
        className="w-[100%] rounded-[8px] p-[20px] text-xl font-bold"
        placeholder=" ₦ 0.00"
      />

      <button
        className={
          transDescription === 'I gave Out'
            ? 'mt-[50px] bg-red-500/30 p-[10px] w-[100%] rounded-[5px] text-red-700'
            : 'mt-[50px] bg-green-500/30 p-[10px] w-[100%] rounded-[5px] text-green-700'
        }
        onClick={saveNewTransaction}
      >
        SAVE
      </button>
    </>
  )
}
