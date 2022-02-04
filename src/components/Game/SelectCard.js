import React, { useEffect, useState, useRef } from "react";
import imageCards from '../../utils/utils';
import { AnimalImg, BackPage, Image, ImagesWrapper, ParentBlock } from "./Style";


const SelectCard = () => {
    const elementRef = useRef(null);
    const imgsName = useRef(null);
    const [prev, setPref] = useState('');
    const [avatar, setAvatar] = useState([]);

    // useEffect(() => {
    //     doubleImage();
    //     if (newArr !== []) {
    //         setImage(false)
    //     }
    // }, [])
    console.log(imageCards)

    const handleTurnImg = (ev) => {
        const isRotade = ev.target.classList.contains('rotate');
        if (isRotade) {
            ev.target.classList.remove('rotate')
        } else {
            ev.target.classList.add('rotate')
        }
    }



    const handleImgeid = (name) => {
        setAvatar(avatar => [...avatar, name]);
        avatar.map(elem => console.log(elem, 'kkkk'))
        // if (avatar.length === 1) {
        //     for (let i = 0; i > avatar.length; i++) {
        //         if (avatar[0] === avatar[1]) {
        //             alert('varam')
        //         } else {
        //             console.log('gagik')
        //         }
        //     }
        // }
    }



    return (
        <ImagesWrapper>
            {
                imageCards.data?.map(item => {
                    return (
                        <ParentBlock
                            onClick={() => handleImgeid(item.name)}
                            ref={imgsName} key={item.id}>
                            <AnimalImg >
                                <Image src={item.src} alt="png" />
                                <BackPage
                                    ref={elementRef}
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