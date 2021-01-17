function sliceUserName(name: string) {
  return name.replace(/^\D+_/, "");
}

export default sliceUserName;
