import React, { useState } from "react";
import imageCards from '../../utils/utils';
import { AnimalImg, BackPage, Image, ImagesWrapper, ParentBlock } from "./Style";


const SelectCard = () => {
    let avatar = []
    let newArr = []
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
            newArr = imageCards.data?.filter(elem => elem.name !== avatar[0], console.log('lkkooooo'));
            console.log(avatar, 'hhhhhh')
            console.log(newArr, 'llllll')
            avatar = []
        } else if (avatar.length >= 2 && avatar[0] !== avatar[1]) {
            avatar = []
            console.log('sxal e')
        }
    }

    return (
        <ImagesWrapper>
            {
                imageCards.data.length >= 16 ? imageCards.data.map(item => {
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
                    :
                    newArr.map(item => {
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