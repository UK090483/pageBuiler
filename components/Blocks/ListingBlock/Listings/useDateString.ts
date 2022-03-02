const useDateString = (date?: string | null) => {
  let result;
  if (date) {
    try {
      result = new Date(date).toLocaleDateString();
    } catch (error) {
      console.error(`somthing wrong with date conversion. input was ${date}`);
    }
  }

  return result;
};

export default useDateString;
