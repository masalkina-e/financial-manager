import { FormEvent, useState } from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { ExpenseType } from "components/SinglePage"

type Props = {
    addNewExpense: (newExpense: ExpenseType) => void
    allCategories: string[]
}

function FormExpenses({ addNewExpense, allCategories }: Props) {
    const [newValue, setNewValue] = useState<number>(0)
    const [newText, setNewText] = useState<string>(allCategories[0])
    let currentDate: string = format(new Date(), "dd MMMM yyyy", { locale: ru })

    function onClick(event: FormEvent) {
        event.preventDefault()

        const newExpense = {
            date: currentDate,
            name: newText,
            value: newValue
        }
        addNewExpense(newExpense)
        setNewValue(0)
    }

    return (
        <form className="flex flex-row justify-evenly items-center gap-1.5 pb-20 sm:justify-center gap-5">
            <input
                onChange={(event) => setNewValue(parseInt(event.target.value))}
                value={newValue}
                name="newValue"
                className="w-1/4 border border-solid border-slate-300 outline-indigo-500 outline-1 rounded-lg py-1.5 px-2.5"
                placeholder="00.00"
                type="number"
            ></input>
            <select
                onChange={(event) => setNewText(event.target.value)}
                value={newText}
                name="newText"
                className="w-1/4 border border-solid border-slate-300 outline-indigo-500 outline-1 rounded-lg py-1.5 px-2.5"
            >
                {allCategories.map((category: string) => {
                    return <option key={category}>{category}</option>
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
    )
}
export default FormExpenses
