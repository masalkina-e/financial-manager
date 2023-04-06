import { useState } from "react"

function Header( {expenses , addNewExpense} ) {

    const [newValue, setNewValue] = useState('')
    const [newText, setNewText] = useState(expenses[0].name)
    
    function onClick(event) {
        event.preventDefault()

        const newExpense = {
            name: newText,
            value: newValue
        }
        addNewExpense(newExpense)
    }

    return (
        <div>
            <h1 className="py-20 text-4xl font-semibold text-center">Учет расходов</h1>
            <form className="flex flex-row justify-center items-center gap-10 pb-20">
                <input 
                    onChange={(event) => setNewValue(event.target.value)}
                    value={newValue}
                    name="newValue"
                    className="w-1/4 border border-solid border-slate-300 outline-indigo-500 outline-1 rounded-lg py-1.5 px-2.5" 
                    placeholder="00.00"
                    type="number"
                >
                </input>
                <select 
                    onChange={(event) => setNewText(event.target.value)}
                    value={newText}
                    name="newText"
                    className="w-1/4 border border-solid border-slate-300 outline-indigo-500 outline-1 rounded-lg py-1.5 px-2.5"
                >
                    {expenses.map((expense) => {
                        return (
                            <option key={expense.name}>{expense.name}</option>
                        )
                    })}      
                </select>
                
                <button 
                    onClick={(event) => onClick(event)}
                    className="w-1/4 bg-indigo-500 py-1.5 px-2.5 text-white rounded-lg hover:bg-indigo-600" 
                    type="submit"
                >
                Добавить
                </button>
            </form>
        </div>
    )
}

export default Header