"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function MonthlyClicksChart({data=[]}) {
   

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md shadow-black">
      <h2 className="text-lg font-semibold mb-4 sm:text-xs md:text-xl">Monthly Clicks vs Impressions</h2>
      <div className="flex flex-col justify-center mx-10">
        <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data}>
            <XAxis dataKey="month" tick={{fontSize:12}} padding={{ left: 25, right: 25 }} />
            <YAxis tick={{fontSize:12}}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="clicks" fill="#ff4d00" />
            <Bar dataKey="impressions" fill="#4f46e5" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}