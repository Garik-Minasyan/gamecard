import styled, { css } from "styled-components";

export const ImagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    align-items: center;
    margin: 10px auto;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const ParentBlock = styled.div`
  width: 150px;
  height: 150px;
  margin: 25px;
`;

export const AnimalImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  border: 5px solid brown;
  margin: 8px;
  z-index: 0;
  position: relative;
`;

export const BackPage = styled.div`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 8px;
  border: 5px solid brown;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  top: -2px;
  left: -6px;
  transition: all 2s;
  &.rotate {
    transform: rotate3d(0, 0, 0, 180deg);
    background-color: transparent;
  }
`;