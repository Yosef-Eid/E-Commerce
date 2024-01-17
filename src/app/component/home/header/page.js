'use client'
import Link from 'next/link'
import style from './headr.module.css'
import Image from 'next/image'
import img from './imgs/pexels-karolina-grabowska-5625002.jpg'
import img2 from './imgs/pexels-obi-onyeador-13009437.jpg'
import img3 from './imgs/pexels-thom-bradley-5741878.jpg'

export default function Header() {


    // let data_shoping = {
    //     nameProduct:'',
    //     iconProduct:'',
    //     offerProduct:'',
    //     ImageProduct:''
    // }

  return (
    <div id={style.header_home}>
      <div id={style.aside_header}>
        <Link className={style.links} href='/'>Woman’s Fashion</Link>
        <Link className={style.links} href='/'>Men’s Fashion</Link>
        <Link className={style.links} href='/'>Electronics</Link>
        <Link className={style.links} href='/'>Home & Lifestyle</Link>
        <Link className={style.links} href='/'>Medicine</Link>
        <Link className={style.links} href='/'>Sports & Outdoor</Link>
        <Link className={style.links} href='/'>Baby’s & Toys</Link>
        <Link className={style.links} href='/'>Groceries & Pets</Link>
        <Link className={style.links} href='/'>Health & Beauty</Link>
      </div>

{/* slid product */}
<div id={style.shoping}>
<div  style={{
        width: '82%',
        height: '100%',
        padding:'10px'
      }} id="carouselExampleCaptions " class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div style={{width:'100%', height:'350px'}} class="carousel-item active">
      <Image src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image style={{width:'100%', height:'350px'}} src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}
