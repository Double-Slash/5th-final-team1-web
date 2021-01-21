function sliceUserName(name: string) {
  if (!name) return null;
  return (name || "").replace(/^\D+_/, "");
}

export default sliceUserName;
