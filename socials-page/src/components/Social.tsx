
type SocialPropsType = {
    platform: string;
    username: string;
    url: string;
    id: string;
}

const Social = ({ username, url, id }: SocialPropsType) => {


    const img: string = new URL(`../images/${id}.png`, import.meta.url).href

    const content = (
        <>
            <li className="li__social_link">
                
                <a href={url}>
                    <div className="flex__container">
                        <img src={img} alt="" className="img__social_img" />
                        <p className="a__social_link">{username}</p>
                    </div>
                </a>
            </li>
        </>
    )

    return content
}

export default Social