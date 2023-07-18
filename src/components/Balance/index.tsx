import { SummedAllItemsType } from "components/SinglePage"

type Props = {
    summedAllExpenses: SummedAllItemsType
    summedAllIncomes: SummedAllItemsType
}

function Balance({ summedAllExpenses, summedAllIncomes }: Props) {
    const calculateBalance = () => {
        const calculatedBalance =
            summedAllIncomes.value - summedAllExpenses.value
        return calculatedBalance
    }
    const balance = calculateBalance()

    return (
        <div className="flex flex-col px-5 py-3 text-lg text-center gap-3">
            <p>Всего расходов: {summedAllExpenses.value}</p>
            <p>Всего доходов: {summedAllIncomes.value}</p>
            <p>Остаток: {balance}</p>
        </div>
    )
}
export default Balance
