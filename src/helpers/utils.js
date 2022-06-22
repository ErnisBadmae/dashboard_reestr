// import moment from 'moment';

export const correctlyDate = (stringDate) => {
    if (stringDate === null) {
        return stringDate;
    }
    let correct = new Date(stringDate);
    return correct.toLocaleDateString('ru');
};

// export const dateIso = (stringDate) => {
//     moment(stringDate).format('YYYY/MM/DD');
//     let correct = new Date(stringDate);
//     return correct.toISOString();
// };

export const correctlyDateEn = (stringDate) => {
    let correct = new Date(stringDate);
    return correct.toLocaleDateString('en-GB');
};
