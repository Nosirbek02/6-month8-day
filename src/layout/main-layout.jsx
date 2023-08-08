import { Header } from "./header/header";
import React, { Children } from "react";

export const MainLayout=({children})=>{
    return(
        <>
        <header>
            <Header/>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
        </>
    )
}