

export const SocialsBox = () => {

    // const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

    const content = (

        
        <div className="socials__ribbon">
            <ul className="ul__social_list">
                <li className="li__social_link"><a href="https://www.instagram.com/f.george_/?hl=en" className="a__social_link">
                    {/* <img src="instagram.jpg" alt="" className="img__social_img" /> */}
                    Instagram
                </a></li>        
                <li className="li__social_link"><a href="" className="a__social_link">Email</a></li>   
                <li className="li__social_link"><a href="" className="a__social_link">Discord</a></li>
            </ul>
        </div>
    )

    return content
}

export default SocialsBox
