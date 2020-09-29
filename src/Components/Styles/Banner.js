import styled from 'styled-components';
import bannerImg from '../../images/banner.png';
import { device } from './devices'


export const BannerStyle = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media ${device.laptop} {
            height: 150px;
    }
    @media ${device.tablet} {
            display: none;
    }
`;
