export function getRangeDate(currentDate: Date) {
  const initialDate = new Date(currentDate);
  initialDate.setDate(initialDate.getDate() - 3);

  const finalDate = new Date(currentDate);
  finalDate.setDate(finalDate.getDate() + 3);

  const dateRange = [];

  const iterationDate = new Date(initialDate);
  while (iterationDate <= finalDate) {
    dateRange.push({
      day: iterationDate.toLocaleDateString('pt-BR', {day: '2-digit'}),
      weekdayName: iterationDate
        .toLocaleString('pt-BR', {weekday: 'short'})
        .slice(0, 3)
        .toLocaleUpperCase(),
    });
    iterationDate.setDate(iterationDate.getDate() + 1);
  }

  return dateRange;
}
