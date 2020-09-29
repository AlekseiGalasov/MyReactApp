import styled from 'styled-components';
import { device } from '../Styles/devices'


export const AdittionalChoicesWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    max-width: 500px;
    margin: 0 auto;
`;

export const AdittionalChoicesLabel = styled.label`
    cursor: pointer;
    display: block;
    @media ${device.laptopL} {
        font-size: 16px;
    }
    @media ${device.tablet} {
        font-size: 14px;
    }
`;
export const AdittionalChoicesInput = styled.input`
    cursor: pointer;
    margin-left: 5px;
`;