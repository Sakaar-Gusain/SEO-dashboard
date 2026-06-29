"use react"


import { BarChart, Bar, YAxis, XAxis, Tooltip, ResponsiveContainer } from "recharts"

function WorstKeywords({data=[]}) {
    
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md shadow-black">
            <h2 className="text-lg font-semibold mb-4 sm:text-xs md:text-xl">Worst Performing Keywords</h2>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data}>
                    <XAxis dataKey="query" 
                            angle={-25} 
                            textAnchor="end"
                            interval={0}
                            height={120}
                            tick={{ fontSize: 12 }} 
                            padding={{ left: 25, right: 25 }}/>
                    <YAxis tick={{fontSize:12}}/>
                    <Tooltip />
                    <Bar dataKey="position" fill="#C20000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
export default WorstKeywords;