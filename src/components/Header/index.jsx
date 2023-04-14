import { useState } from "react"
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

function Header( {addNewExpense, allCategories} ) {

    const [newValue, setNewValue] = useState('')
    const [newText, setNewText] = useState(allCategories[0])
    let currentDate = new Date()
    currentDate = format(new Date(currentDate),'dd MMMM yyyy',{ locale: ru })
    // console.log(currentDate)
    
    function onClick(event) {
        event.preventDefault()

        const newExpense = {
            date: currentDate,
            name: newText,
            value: parseInt(newValue)
        }
        console.log(newExpense)
        addNewExpense(newExpense)
    }

    return (
        <div>
            <h1 className="py-20 text-4xl font-semibold text-center">Учет расходов</h1>
            <form className="flex flex-row justify-evenly items-center gap-1.5 pb-20 sm:justify-center gap-5">
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
                    {allCategories.map((category) => {
                        return (
                            <option key={category}>{category}</option>
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