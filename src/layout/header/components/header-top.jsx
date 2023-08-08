import { Button, Container, Stack } from "@mui/material";
import { Icon } from "../../../assets/icon/icon";
import { HeaderTopWrapper, Navbar } from "../header-style";
import {navbar} from "../data/navbar"
import React from "react";

export const HeaderTop=()=>{
    return (
        <Container >
        <HeaderTopWrapper>
            <a >
                <Icon/>
            </a>

            <Stack  maxWidth="936px" justifyContent="space-between" direction="row">
                <Button variant="contained">
                хочу попробовать
                </Button>
            </Stack>
            <Navbar>
            {navbar.map((item)=>
            <React.Fragment key={item.title}>
            <>{item.title}</>
            <span/>
            </React.Fragment>)}
            </Navbar>
        </HeaderTopWrapper>
    </Container>
    )
}