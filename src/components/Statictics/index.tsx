import Diagram from "components/Diagram";
import classNames from "classnames"
import sortedExpensesType from 'components/App'
import SummedAllExpensesType from 'components/App'

type Props = {
    sortedExpenses: sortedExpensesType[]
    setCurrentCategory: (currentCategory: string) => void
    currentCategory: string
    summedAllExpenses: SummedAllExpensesType
}

function Statictics ( {sortedExpenses, setCurrentCategory, currentCategory, summedAllExpenses}: Props ) {

    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-1/2 flex flex-row justify-center m-auto sm:m-0">
                <Diagram sortedExpenses={sortedExpenses}/>
            </div>
            <div>
                <div className="flex flex-col gap-2 px-2.5 sm:px-0">
                    {sortedExpenses.map((category) => {
                        return (
                            <div 
                            key={category.name} 
                            onClick={() => setCurrentCategory(category.name)} 
                            className={classNames(
                                "cursor-pointer px-4 py-0.5",
                                {"bg-orange-200 rounded-2xl": currentCategory === category.name}
                            )}
                            >
                                {category.name} - {category.value}
                            </div>
                        )
                    })}
                    <div 
                    onClick={() => setCurrentCategory(summedAllExpenses.name)} 
                    className="cursor-pointer bg-slate-200 px-4 py-0.5 rounded-2xl"
                    >
                        {summedAllExpenses.name} - {summedAllExpenses.value}
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Statictics