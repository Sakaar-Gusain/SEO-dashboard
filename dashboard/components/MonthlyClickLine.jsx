"use client"
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer, YAxis, XAxis } from "recharts"


export default function MonthlyClickLine({data=[]}) {
   
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md shadow-black">
            <h2 className="text-lg font-semibold mb-4 sm:text-xs md:text-xl">Monthly Clicks Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="month" domain={[0, 0]} tick={{fontSize:12}} padding={{ left: 30, right: 30 }}/>
                    <YAxis tick={{fontSize:12}}/>
                    <Tooltip />
                    <Legend />
                    <Line dataKey="clicks" stroke="#7400C2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

