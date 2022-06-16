import moment from 'moment';

const getDateYYYYMMDD = date => {
    if (!date) {
        return moment().add(1, 'months').format('yyyy-MM-DD');
    }

    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6);

    return `${year}-${month}-${day}`;
};

const getDateDDMMYYYY = date => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8);

    return `${day}/${month}/${year}`;
};

export default { getDateDDMMYYYY, getDateYYYYMMDD };
