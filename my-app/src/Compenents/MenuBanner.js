import React from "react";
import styled from 'styled-components';

import banner from '../images/banner.png';

const MenuBannerStyled = styled.div`
    width: 100%;
    height: 210px;
    margin-bottom: 17px;
`;

export const MenuBanner = () => (
    <MenuBannerStyled>
        <img src={banner} alt="Самые вкусные бургеры" style={{width: "100%"}}/>
    </MenuBannerStyled>
);