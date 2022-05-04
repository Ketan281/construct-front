import React from 'react'
import styles from "./Navbar.module.css";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'; 
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ReactComponent as CartLogoIcon } from "../SVG/CartLogoIcon.svg";
import HistoryIcon from '@mui/icons-material/History';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
// import axios from "axios";
 import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch } from "react-redux";
// import { getQuery } from "../Redux/action";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
 import NavbarFloat from "./NavbarFloat";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const Navbar = () => {
    return (
        <>
        <div className={styles.Main_Header}>
        <div>
            <div className={styles.upper}>
                <div className={styles.header_conatainer}>
                    <Link to='/'>
                        <div className={styles.header_logo}>
                            <CartLogoIcon />
                        </div>
                    </Link>
                    <div className={styles.Search_Input}>
                        <div className={styles.icon}>
                            <SearchIcon />
                        </div>
                        <input  className={styles.search_input} type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
                    </div>
                    <div className={styles.cards_container}>
                        <div className={`${styles.downloadCard} ${styles.hideOnSm}`}>
                            <div className={styles.cards}>
                                <PhoneAndroidIcon className={styles.android} />
                                <p>Download App</p>
                                <div className={styles.dropdownContent}>
                                    <h5>Downlaod From</h5>
                                    <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow" target="_blank">
                                        <img className={styles.appBtn} src="https://images.meesho.com/images/pow/homepage/google-play-button.jpg" alt="google play btn" />
                                    </a>
                                    <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank">
                                        <img className={styles.appBtn} src="https://images.meesho.com/images/pow/homepage/appstore-button.jpg" alt="app store btn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.hideOnSm} style={{ width: "2px", height: "40px", backgroundColor: "lightgray" }}></div>
                        <div className={styles.hideOnSm} >Become A Supplier</div>
                        <div className={styles.hideOnSm} style={{ width: "2px", height: "40px", backgroundColor: "lightgray" }}></div>
                        <div className={styles.profileCard}>
                            <div className={styles.profile}>
                                <PermIdentityIcon />
                                <p>Profile</p>
                                <div className={styles.profileContent}>
                                    
                                        <div style={{ cursor: "default", }}>
                                            <div style={{ cursor: "text", gap: "0.5rem", display: "flex", justifyContent: "centrer", alignItems: "center" }}>
                                                <AccountCircleRoundedIcon style={{ cursor: "default", }} fontSize="large" />
                                                <div>
                                                    <p style={{ fontSize: "18px", marginBlockStart: "0.5em", marginBlockEnd: "0.2em", fontWeight: "bold" }}>Hello User</p>
                                                    <p style={{ fontSize: "16px", marginBlockEnd: "0.5em" }}>+91</p>
                                                </div>
                                            </div>
                                            <div className={styles.dividerLines}></div>
                                            <h3 style={{ cursor: "pointer", margin: 0, justifyContent: "left", alignItems: "center" }}><ShoppingBagIcon fontSize="medium" />My Orders</h3>
                                            <div style={{ cursor: "pointer", margin: "auto", width: "100%" }}>
                                                <div className={styles.dividerLines}></div>
                                                <h3  style={{ cursor: "pointer", margin: 0, paddingBottom: 15, justifyContent: "left", alignItems: "center" }}><LogoutRoundedIcon />Logout</h3>
                                            </div>
                                        </div>
                                    
                                            <>
                                                <p style={{ fontSize: "18px", marginBlockStart: "0.5em", marginBlockEnd: "0.2em", fontWeight: "bold" }}>Hello User</p>
                                                <p style={{ fontSize: "12px", marginBlockEnd: "0.5em" }}>To access your Meesho account</p>
                                                <Link style={{ textDecoration: "none" }} to="/signup">
                                                    {/* //<SignUpButton variant="contained">SIGN UP</SignUpButton> */}
                                                </Link>
                                                <div className={styles.dividerLines}></div>
                                                <h4 style={{ alignItems: "center" }}><ShoppingBagIcon fontSize="medium" />My Orders</h4>

                                            </>
                                       </div>
                                     </div>
                        </div>

                        <div className={styles.cart}>
                            <ShoppingCartIcon />
                            <p>Cart</p>
                            <div className={styles.cartTotal}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        <div className={styles.dividerLines}></div>
        <div className={styles.links}>
                   
                    <Link  to= "/cat" className={styles.LinkContent}>Mens Wear</Link>
                    <NavbarFloat key="Mens Top "  textArr={[["All Men", "View All"], ["Top Wear", "All Top Wear", "Tshirts", "Shirts"], ["Bottom Wear", "Track Pants", "Jeans", "Trousers"], ["Men Accessories", "All Men Accessories", "Watches", "Belts", "Wallets", "Jewellery", "Sunglasses", "Bags"], ["Men Footwear", "Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals"], ["Ethnic Wear", "Men Kurtas", "Ethnic Jackets", "Inner & Sleep Wear", "All Inner & Sleep Wear"]]} />
                    <Link to="/cat"  className={styles.LinkContent}>Womens Wear</Link>
                    <NavbarFloat key="women"  textArr={[["All Women", "View All"], ["All Suits & Dress Material", "Cotton Suits", "Embroidered Suits", "Chanderi Suits"], ["Other Ethnic", "Blouses", "Dupattas", "Lehanga", "Gown", "Ethnic Bottomwear"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Sarees</Link>
                    <NavbarFloat key="Sarees" textArr={[["All Sarees", "View All"], ["Silk Sarees", "Cotton Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Satin Sarees", "Embroidered Sarees"]]} />
                    <Link to= "/cat"  className={styles.LinkContent}>Jewellery</Link>
                    <NavbarFloat key="Jewellery"  textArr={[["All Jewellery", "View All"], ["Jewellery", "Jewellery Set", "Mangalsutras", "Earrings", "Studs", "Bangles", "Necklaces", "Rings", "Anklets"], ["Women Accessory", "Bags", "Watches", "Hair Accessories", "Sunglasses", "Socks"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Dresses</Link>
                    <NavbarFloat key="Dresses"  textArr={[["All Dresses", "View All"], ["Suits & Dress Material", "All Suits & Dress Material", "Cotton Suits", "Embroidered Suits", "Chanderi Suits"], ["Other Ethnic", "Blouses", "Dupattas", "Lehanga", "Gown", "Ethnic Bottomwear"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Beauty Products</Link>
                    <NavbarFloat key="Beauty n"  textArr={[["All Beauty Products", "View All"], ["Make up", "Face", "Eyes", "Lips", "Nails"], ["Wellness", "Sanitizers", "Oral Care", "Feminine Hygiene", "Skincare", "Deodorants"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Health Products</Link>
                    <NavbarFloat key="Beauty an"  textArr={[["All Beauty Products", "View All"], ["Make up", "Face", "Eyes", "Lips", "Nails"], ["Wellness", "Sanitizers", "Oral Care", "Feminine Hygiene", "Skincare", "Deodorants"]]} />
                    <Link to= "/cat"  className={styles.LinkContent}>Bags and Footwear</Link>
                    <NavbarFloat key="Bags and" textArr={[["Women Bags", "All Women Bags", "Handbags", "Clutches", "Slingbags"], ["Men Bags", "All Men Bags", "Men Wallets"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Home</Link>
                    <NavbarFloat key="Home and" textArr={[["Home Furnishing", "Bedsheets", "Doormats", "Curtains & Sheers", "Cushions & Cushion Covers", "Mattress Protectors"], ["Home Decor", "All Home Decor", "Stickers", "Clocks", "Showpieces", "Kitchen & Dining", "Kitchen Storage", "Cookware & Bakeware"]]} />
                    <Link  to= "/cat"  className={styles.LinkContent}>Kitchen</Link>
                    <NavbarFloat key="Home"  textArr={[["Home Furnishing", "Bedsheets", "Doormats", "Curtains & Sheers", "Cushions & Cushion Covers", "Mattress Protectors"], ["Home Decor", "All Home Decor", "Stickers", "Clocks", "Showpieces", "Kitchen & Dining", "Kitchen Storage", "Cookware & Bakeware"]]} />
                </div>
            
         </>  
    )
}

export default Navbar