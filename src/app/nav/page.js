'use client'
import Link from 'next/link';
import style from './nav.module.css' 
import { useState } from 'react';



function Nav() {

    // add background on target link
    let backgroundTraget = (e) => {
        let children = e.target.parentElement.children
        if(e.target == children[0]){
            children[1].style.background = ''
            children[2].style.background = ''
            children[3].style.background = ''
            e.target.style.background = '#002c4e1a'
        }
        else if(e.target == children[1]){
            children[0].style.background = ''
            children[2].style.background = ''
            children[3].style.background = ''
            e.target.style.background = '#002c4e1a'
        }
        else if(e.target == children[2]){
            children[0].style.background = ''
            children[1].style.background = ''
            children[3].style.background = ''
            e.target.style.background = '#002c4e1a'
        }
        else if(e.target == children[3]){
            children[0].style.background = ''
            children[1].style.background = ''
            children[2].style.background = ''
            e.target.style.background = '#002c4e1a'
        }
    }

    //open sidebar
    const openSidebar = (e) => {
        let side = e.target.parentElement
            .parentElement
            .parentElement
            .children[3]

        if(side.style.width == '250px') side.style.width = '0px'
        else side.style.width = '250px'
        }

    
    

    return ( 
        <div className={style.nav}>
            {/* logo */}
            <Link href='/'><h1 className={style.logo}>Exclusive</h1></Link>

            {/* button links */}
            <div className={style.links} onClick={backgroundTraget}>
                <Link href='/' className={style.link}>Home</Link>
                <Link href='/component/contact'  className={style.link}>Contact</Link>
                <Link href='/component/about' className={style.link}>About</Link>
                <Link href='/component/signup'  className={style.link}>Sing Up</Link>
            </div>

            {/* serch and cart */}
            <div className={style.search_cart}>
                <div className={style.search} id={style.search}>
                    <input type="text" id={style.input} placeholder='What are you looking for?' />
                    <ion-icon name="search-outline" id={style.icon_search} ></ion-icon>
                </div>

                <div className={style.cart}>
                    <ion-icon name="heart-outline" id={style.heart}></ion-icon>  
                    <Link href='/component/cart'><ion-icon name="cart-outline" id={style.cart}></ion-icon> </Link>
                    <ion-icon name="reorder-three-outline" id={style.open_list} onClick={openSidebar}></ion-icon>

                </div>
            </div>

            <div id={style.sidebar}>

                <div className={style.search} id={style.search}>
                    <input type="text" id={style.input} placeholder='What are you looking for?' />
                    <ion-icon name="search-outline" id={style.icon_search} ></ion-icon>
                </div>
                {/* button links */}
                <div className={style.linksSidebar} onClick={backgroundTraget}>
                <Link href='/' className={style.link}>Home</Link>
                <Link href='/component/contact'  className={style.link}>Contact</Link>
                <Link href='/component/about' className={style.link}>About</Link>
                <Link href='/component/signup'  className={style.link} id={style.singUp}>Sing Up</Link>
            </div>
            </div>
        </div>
     );
}

export default Nav;