import { Cell, Pie, PieChart } from "recharts"
import { SortedIncomesType } from "components/SinglePage"

type Props = {
    sortedIncomes: SortedIncomesType[]
}

type ItemDiagramType = {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
    index: number
}

function DiagramIncomes({ sortedIncomes }: Props) {
    const data = sortedIncomes
    const colors = ["#7caaf6", "#95e7ae", "#f8e95d", "#f6cf5a", "#f784ab"]
    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }: ItemDiagramType) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                cx={100}
                cy={100}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                    />
                ))}
            </Pie>
        </PieChart>
    )
}

export default DiagramIncomes
