export const sortTasks = (tasks) => {
  tasks.sort((a, b) => {
    // Compare year first
    if (a.year !== b.year) {
      return b.year - a.year;
    }

    // Then compare month
    if (a.month !== b.month) {
      return b.month - a.month;
    }

    // Finally, compare day
    return b.day - a.day;
  });

  return tasks;
};
