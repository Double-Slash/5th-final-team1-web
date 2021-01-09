function calcDate({ date }: { date: string }) {
  const substring = date.substring(0, 10);
  const changeSeperator = substring.replaceAll("-", ".");
  return changeSeperator;
}

export default calcDate;
