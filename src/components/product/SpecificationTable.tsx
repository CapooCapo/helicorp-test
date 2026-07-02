export function SpecificationTable() {
  const specs = [
    { label: "Màn hình", value: "AMOLED 1.4 inch, độ sáng 1000 nits" },
    { label: "Pin", value: "200mAh (Lên đến 14 ngày tiêu chuẩn)" },
    { label: "Cảm biến", value: "Nhịp tim quang học, SpO2, Gia tốc kế 6 trục" },
    { label: "Chống nước", value: "5ATM (Chịu áp lực nước ở độ sâu 50m)" },
    { label: "BLE", value: "Bluetooth 5.2" },
    { label: "Tương thích", value: "Android 8.0+ hoặc iOS 12.0+" },
    { label: "Trọng lượng", value: "15g (Không tính dây đeo)" },
  ];

  return (
    <section aria-labelledby="specs-heading" className="mt-20">
      <h2 id="specs-heading" className="text-2xl font-bold mb-8">
        Thông số kỹ thuật
      </h2>
      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm" aria-label="Bảng thông số kỹ thuật NovaBand X1">
          <tbody className="divide-y divide-border">
            {specs.map((spec, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                <th 
                  scope="row" 
                  className="py-4 px-6 font-medium text-muted-foreground w-1/3 md:w-1/4 bg-slate-50/50 dark:bg-slate-900/50"
                >
                  {spec.label}
                </th>
                <td className="py-4 px-6 text-foreground">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
