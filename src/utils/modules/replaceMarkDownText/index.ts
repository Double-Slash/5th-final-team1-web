function removeMarkDownText(markDownText: string) {
  return markDownText.replace(/```\D+```|~|_|\*|#+\s|/g, "").replace(/↵/g, " ");
}

export default removeMarkDownText;
