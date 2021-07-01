export const addTasksToArray = (taskArray, taskToAdd) => {
  taskArray.push(taskToAdd);
  return [...taskArray];
};

export const removeTasksFromArray = (taskArray, key) => {
  return taskArray.filter((task, index) => index !== key);
  // const index = taskArray.indexOf(taskToRemove);
  // if (index > -1) {
  //   taskArray.splice(index, 1);
  // }
  // return taskArray;
};

const myDiff = (date1, interval) => {
  let second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    // date1 = new Date(date1);
    date2 = new Date();

  let timediff = date2 - date1;
  if (isNaN(timediff)) return NaN;
  switch (interval) {
    case "days":
      return Math.floor(timediff / day);
    default:
      return undefined;
  }
};
// const locale = "en-IN";
const formatMovementDate = (daysPassed) => {
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
};
const now = new Date();
const dateDiff = myDiff(now, "days");
export const daysPassed = formatMovementDate(dateDiff);

