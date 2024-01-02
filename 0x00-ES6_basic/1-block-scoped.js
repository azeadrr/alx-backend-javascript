export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  /* Block Scope */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* Block Scope */
  return [task, task2];
}
