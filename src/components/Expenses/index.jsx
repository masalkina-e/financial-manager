function Expenses( {expenses, currentCategory} ) {

    if (currentCategory === "Все расходы") {
        return (
            <div className="flex flex-col w-full py-10">
                {expenses.map((expense, index) =>{
                    return (
                        <div key={expense.name + index} className="flex flex-row px-5 py-2 border-b last:border-none">
                            <div className="w-1/2 flex flex-col gap-1">
                                <div className='text-xs bg-blue-100 text-blue-500 w-28 text-center rounded-xl'>{expense.date}</div>
                                <div>{expense.name}</div>
                            </div>
                            <div className="w-1/2 flex justify-end items-end">- {expense.value} ₽</div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        const filteredCategories = expenses.filter((expense) => {
            return expense.name === currentCategory
        })
        return (
            <div className="flex flex-col w-full py-10">
                {filteredCategories.map((expense, index) => {
                    return (
                        <div key={expense.name + index} className="flex flex-row px-5 py-2 border-b last:border-none">
                            <div className="w-1/2">
                            <div className='text-xs bg-blue-100 text-blue-500 w-28 text-center rounded-xl'>{expense.date}</div>
                                <div>{expense.name}</div>
                            </div>
                            <div className="w-1/2 text-end">- {expense.value} ₽</div>
                        </div>
                    )
                })}
            </div>
        )
    } 
}
export default Expenses