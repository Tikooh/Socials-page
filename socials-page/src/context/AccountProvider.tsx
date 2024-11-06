import { createContext, ReactElement, useContext, useEffect, useState } from 'react'
import accounts from '../data/accounts.json'

type account = {
    platform: string,
    username: string,
    url: string,
    id: string,
}

type SocialMediaContextType = {
    social_media_accounts: account[]
}

const initial_account_state: SocialMediaContextType = {
    social_media_accounts: []
}

const SocialMediaContext = createContext<SocialMediaContextType>(initial_account_state)

export const useSocialMediaContext = (): SocialMediaContextType => {
    const context = useContext(SocialMediaContext)

    if (!context) {
        throw new Error('useSocialMedia must be used within a SocialMediaProvider');
      }

    return context
}

type childrenType = {
    children?: ReactElement
}


export const SocialMediaProvider = ({ children }: childrenType): ReactElement => {
    const [social_media_accounts, set_social_media_accounts] = useState<account[]>([])


    useEffect(() => {
        set_social_media_accounts(accounts.social_media_accounts)
    }, [])


    return (
        <SocialMediaContext.Provider value={{social_media_accounts}}>
            {children}
        </SocialMediaContext.Provider>
    )
}