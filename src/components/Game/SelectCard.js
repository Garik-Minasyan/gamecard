import React, { useState } from "react";
import imageCards from '../../utils/utils';
import { AnimalImg, BackPage, Image, ImagesWrapper, ParentBlock } from "./Style";


const SelectCard = () => {
    let avatar = []
    const handleTurnImg = (ev) => {
        const isRotade = ev.target.classList.contains('rotate');
        if (isRotade) {
            ev.target.classList.remove('rotate')
        } else {
            ev.target.classList.add('rotate')
        }
    }

    const handleImgeid = (name) => {
        avatar.push(name)
        if (avatar.length >= 2 && avatar[0] === avatar[1]) {
            imageCards.data.filter(elem => elem.name !== avatar[1], console.log('lkkooooo'));
            avatar = []
            console.log(imageCards.data, 'lll');

            console.log('jisht e')
        } else if (avatar.length >= 2 && avatar[0] !== avatar[1]) {
            avatar = []
            console.log('sxal e')
        }

    }

    return (
        <ImagesWrapper>
            {
                imageCards.data.map(item => {
                    return (
                        <ParentBlock
                            onClick={() => handleImgeid(item.name)}
                            key={item.id}>
                            <AnimalImg >
                                <Image src={item.src} alt="png" />
                                <BackPage
                                    onClick={handleTurnImg} />
                            </AnimalImg>
                        </ParentBlock>
                    )
                })
            }
        </ImagesWrapper>
    )
};

export default SelectCard