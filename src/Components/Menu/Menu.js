import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem.js';
import { BannerStyle } from '../Styles/Banner.js';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Menu/Preloader';
import { Context } from '../Functions/context'

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
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