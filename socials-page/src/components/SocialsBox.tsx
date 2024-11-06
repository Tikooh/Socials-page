import { useSocialMediaContext } from "../context/AccountProvider"
import Social from "./Social"

export const SocialsBox = () => {

    const { social_media_accounts } = useSocialMediaContext()
    

    const content = (

        
        <div className="socials__ribbon">
            <ul className="ul__social_list">
                {social_media_accounts.map((account) => {

                    return (
                        <Social
                            key={account.id}
                            platform={account.platform}
                            username={account.username}
                            url={account.url}
                            id={account.id}>
                        </Social>
                    )
                })}
            </ul>
        </div>
    )

    return content
}

export default SocialsBox
