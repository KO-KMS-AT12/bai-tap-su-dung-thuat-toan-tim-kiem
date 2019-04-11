//gia su mang viettel : 012
// mang mobile: 077
//mang vina: 033

let contacts = [
    '0123456734',
    '0773242535',
    '0125673453',
    '0335673463',
    '0332563426',
    '0775673465',
    '52775673465',
    '52775673465',
    '0125673479',
    '0125673480',
    '0335673455',
    '0125673433',
    '0775673438',
];

function checkPhone(numberPhone) {
    let regexp = /^[0]{1}?\d{9}?$/;
    if (regexp.test(numberPhone)) {
        return true;
    } else {
        return false
    }
}

function findArr(arr) {
    let listPhoneViettel = [];
    let listPhone = [];

    for (let i = 0; i < arr.length; i++) {
        if (checkPhone(arr[i])) {
            listPhone.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, 3) === '012') {
            listPhoneViettel.push(arr[i]);
        }
    }
    return listPhoneViettel;
}

console.time("linear search");
console.log(findArr(contacts));
console.timeEnd("linear search");
