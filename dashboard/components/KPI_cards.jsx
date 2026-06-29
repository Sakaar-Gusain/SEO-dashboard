const KPI_DEFS = [
  { key: "total_clicks",      label: "Total clicks",      icon: "👆", color: "#3b82f6" },
  { key: "total_impressions", label: "Total impressions", icon: "👁",  color: "#8b5cf6" },
  
  { key: "avg_position",      label: "Avg position",      icon: "↑",  color: "#f59e0b",
    format: (v) => v.toFixed(1) },
  { key: "total_keywords",    label: "Keywords",          icon: "#",  color: "#ef4444" },
  { key: "date_range",        label: "Date range",        icon: "📅", color: "#6b7280" },
];

function KpiCard({ label, icon, value, color }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md shadow-black flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-md text-xs sm:text-xs md:text-sm font-semibold"
          style={{ background: color + "22", color }}
        >
          {icon}
        </span>
        {label}
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {value ?? "—"}
      </div>
    </div>
  );
}

function KPI_cards({ data = {} }) {
  return (
    <div className="flex flex-col-2 items-center flex-wrap md:justify-center gap-4 p-4 text-sm md:text-sm">
      {KPI_DEFS.map(({ key, label, icon, color, format }) => {
        const raw = data[key];
        const value =
          raw == null
            ? null
            : format
            ? format(raw)
            : typeof raw === "number"
            ? raw.toLocaleString()
            : raw;
        return (
          <KpiCard key={key} label={label} icon={icon} value={value} color={color} />
        );
      })}
    </div>
  );
}

export default KPI_cards;