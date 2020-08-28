import React from 'react';
import styled from 'styled-components';
import dbmenu from './DBMenu.js';
import { ListItem } from './ListItem.js';
import { BannerStyle } from './Banner.js';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`

export const Menu = ({setOpenItem}) => {


    return(
    <MenuStyled>
        <BannerStyle/>
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
    </MenuStyled>
)};