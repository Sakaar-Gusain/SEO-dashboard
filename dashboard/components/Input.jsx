"use client"

import { useState } from "react"
import MonthlyClicksChart from "./MonthlyClickChart"
import MonthlyClickLine from "./MonthlyClickLine";
import CTR_Clicks from "./CTR_Clicks";
import WorstKeywords from "./Worst_keywords";
import KPI_cards from "./KPI_cards";

function Input() {
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const upload = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append("file", file)

        setLoading(true)
        setError(null)
        setDashboardData(null)

        try {
            const res = await fetch(`${process.env.API_URL}/upload`, {
                method: "POST",
                body: formData
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.detail || "Upload failed")
            }

            const data = await res.json()
            setDashboardData(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-8">
            <div className="flex justify-center">
                <section className="w-full max-w-md border-2 border-black border-dashed dark:border-white rounded-xl p-8 text-center mb-8 shadow-md shadow-zinc-800 bg-white dark:bg-zinc-900 transition-transform duration-300 ease-in-out hover:-translate-y-1.5">
                    <p className="text-black dark:text-white mb-4">Upload your Google Search Console CSV or Excel file</p>
                    <input
                        type="file"
                        accept=".csv,.xlsx"
                        onChange={upload}
                        className="cursor-pointer"
                    />
                </section>
            </div>

            {loading && <p className="text-center text-gray-500">Processing your file...</p>}

            {error && <p className="text-center text-red-500 mb-4">{error}</p>}

            {dashboardData && (
                <div className="space-y-6">
                    <KPI_cards data={dashboardData.summary}/>
                    <MonthlyClicksChart data={dashboardData.monthly_clicks} />
                    <MonthlyClickLine data={dashboardData.month_click_line} /> 
                    <CTR_Clicks data={dashboardData.best_ctr} />
                    <WorstKeywords data={dashboardData.worst_ranking} />
                    
                </div>
            )}
        </div>
    );
}

export default Input;