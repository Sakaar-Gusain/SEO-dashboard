"use react"

import { BarChart, Bar, YAxis, XAxis, Tooltip, ResponsiveContainer } from "recharts"

function CTR_Clicks({data=[]}) {
   
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md shadow-black">
            <h2 className="text-lg font-semibold mb-4 sm:text-xs md:text-xl">Best Keywords based on CTR</h2>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data}>
                    <XAxis dataKey="query" 
                            angle={-35} 
                            textAnchor="end"
                            interval={0}
                            height={120}
                            tick={{ fontSize: 12}}
                            padding={{ left: 25, right: 25 }} />
                    <YAxis tick={{fontSize:12}}/>
                    <Tooltip />
                    <Bar dataKey="ctr" fill="#00C20D" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CTR_Clicks;
