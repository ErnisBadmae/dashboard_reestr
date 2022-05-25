export const correctlyDate = (stringDate) => {
    let correct = new Date(stringDate);
    return correct.toLocaleDateString('ru');
};
