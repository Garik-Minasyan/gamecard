import tiger from './../assets/images/tiger.png';
import medved from './../assets/images/medved.png';
import cat from './../assets/images/cat.png';
import enot from './../assets/images/enot.png';
import panda from './../assets/images/panda.png';
import wolf from './../assets/images/wolf.png';
import zhiraf from './../assets/images/zhiraf.png';
import bourd from './../assets/images/bourd.png';

const imageCards = {
    data: [
        {
            src: tiger,
            id: 1,
            name: 'tiger',
        },
        {
            src: medved,
            id: 2,
            name: 'medved'
        },
        {
            src: cat,
            id: 3,
            name: 'cat',
        },
        {
            src: enot,
            id: 4,
            name: 'enot'
        },
        {
            src: tiger,
            id: 5,
            name: 'tiger',
        },
        {
            src: medved,
            id: 6,
            name: 'medved'
        },
        {
            src: cat,
            id: 7,
            name: 'cat',
        },
        {
            src: enot,
            id: 8,
            name: 'enot'
        },
        {
            src: panda,
            id: 9,
            name: 'panda',
        },
        {
            src: wolf,
            id: 10,
            name: 'wolf'
        },
        {
            src: zhiraf,
            id: 11,
            name: 'zhiraf',
        },
        {
            src: bourd,
            id: 12,
            name: 'bourd'
        },
        {
            src: panda,
            id: 13,
            name: 'panda',
        },
        {
            src: wolf,
            id: 14,
            name: 'wolf'
        },
        {
            src: zhiraf,
            id: 15,
            name: 'zhiraf',
        },
        {
            src: bourd,
            id: 16,
            name: 'bourd'
        },
    ],
};

const newArr = [];

(function () {
    const arr = imageCards.data.sort(() => Math.random() - 0.5)
    return newArr.push(...arr)
})();



export default imageCards;




