function Expenses( {expenses} ) {
    return (
        <div className="flex flex-col w-full">
            {expenses.map((expense) =>{
                return (
                    <div key={expense.name} className="flex flex-row px-5">
                        <div className="w-1/2">
                            <div></div>
                            <div>{expense.name}</div>
                        </div>
                        <div className="w-1/2 text-end">- {expense.value} ₽</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Expenses