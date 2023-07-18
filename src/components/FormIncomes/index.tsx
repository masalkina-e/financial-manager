import { FormEvent, useState } from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { ItemsType } from "components/SinglePage"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker"
registerLocale("ru", ru)

type Props = {
    addNewIncomes: (newExpense: ItemsType) => void
    allCategoriesIncomes: string[]
}

function FormIncomes({ addNewIncomes, allCategoriesIncomes }: Props) {
    const [newValue, setNewValue] = useState<number>(0)
    const [newText, setNewText] = useState<string>(allCategoriesIncomes[0])
    const [startDate, setStartDate] = useState(new Date())
    let currentDate: Date = format(new Date(), "dd MMMM yyyy", { locale: ru })

    function onClick(event: FormEvent) {
        event.preventDefault()

        if (newValue === 0) {
            alert("Введите число больше 0")
        } else {
            const newIncome: ItemsType = {
                date: currentDate,
                name: newText,
                value: newValue
            }
            addNewIncomes(newIncome)
            setNewValue(0)
        }
    }

    return (
        <form className="flex flex-row justify-evenly items-center pb-20 px-10 sm:justify-center gap-5">
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
                {allCategoriesIncomes.map((category: string) => {
                    return <option key={category}>{category}</option>
                })}
            </select>

            <DatePicker
                className="w-full border border-solid border-slate-300 outline-indigo-500 outline-1 rounded-lg py-1.5 px-2.5"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                locale="ru"
            />

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
export default FormIncomes
