export const addNamesToArray = (nameArray, nameToAdd) => {
  nameArray.push(nameToAdd);
  return [...nameArray];
};

export const removeNamesFromArray = (nameArray, key) => {
  return nameArray.filter((name, index) => index !== key);
  // const index = nameArray.indexOf(nameToRemove);
  // if (index > -1) {
  //   nameArray.splice(index, 1);
  // }
  // return nameArray;
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

