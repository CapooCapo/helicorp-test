export function Highlights() {
  const highlights = [
    { label: "Pin", value: "14 ngày" },
    { label: "Chống nước", value: "5ATM" },
    { label: "Màn hình", value: "AMOLED 1.4\"" },
    { label: "BLE", value: "5.2" },
  ];

  return (
    <section aria-labelledby="highlights-heading" className="mt-16">
      <h2 id="highlights-heading" className="sr-only">Tính năng nổi bật</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center"
          >
            <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.label}</span>
            <span className="font-semibold text-lg">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
