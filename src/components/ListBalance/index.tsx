import { ItemsType } from "components/SinglePage"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

type Props = {
    items: ItemsType[]
}

function ListBalance({ items }: Props) {
    return (
        <div className="flex flex-col w-full py-10">
            {items.map((item, index) => {
                return (
                    <div
                        key={item.name + index}
                        className="flex flex-row px-5 py-2 border-b last:border-none"
                    >
                        <div className="w-1/2 flex flex-col gap-1">
                            <div className="text-xs bg-blue-100 text-blue-500 w-28 text-center rounded-xl">
                                {format(new Date(item.date), "dd MMMM yyyy", {
                                    locale: ru
                                })}
                            </div>
                            <div>{item.name}</div>
                        </div>
                        <div className="w-1/2 flex justify-end items-end">
                            {item.value} ₽
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ListBalance
