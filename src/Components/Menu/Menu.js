import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem.js';
import { BannerStyle } from '../Styles/Banner.js';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Menu/Preloader';
import { Context } from '../Functions/context'
import { device } from '../Styles/devices'


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
    @media ${device.laptopL} {
        margin-left: 350px;
    }
    @media ${device.laptop} {
        margin-left: 280px;
    }
    @media ${device.tablet} {
        margin-left: 0;
        margin-top: 280px;
    }
`;

const SectionMenu = styled.section`
    padding: 30px;
    @media ${device.laptopL} {
        padding: 15px;
    }
    @media ${device.laptop} {
        padding: 10px;
    }
    @media ${device.tablet} {
        padding: 10px;
    }
`

export const Menu = () => {
    const {openItem : {setOpenItem}} = useContext(Context)
    const res = useFetch()
    const dbmenu = res.response

    return(
    <MenuStyled>
        <BannerStyle/>
        {res.response ?
        <>
            <SectionMenu>
            <h2>Burgers</h2>
            <ListItem 
                itemList={dbmenu.burger}
                setOpenItem={setOpenItem}
            ></ListItem>
        </SectionMenu>
        <SectionMenu>
            <h2>Snacks / Drinks</h2>
            <ListItem 
                itemList={dbmenu.other}
                setOpenItem={setOpenItem}
            ></ListItem>
        </SectionMenu>
        </>
        : res.error ?<span>Ops, something go wrong =/</span> : Preloader()
        }
    </MenuStyled>
)};