import { useMemo } from "react";
import { getMonthlyCalendar } from "calend-arr";

export default function DatePanel() {
  const calendar = useMemo(() => getMonthlyCalendar(2023, 6), []);

  return <div>{calendar.month}</div>;
}
