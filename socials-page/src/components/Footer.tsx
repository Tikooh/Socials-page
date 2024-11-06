

export const Footer = () => {
    
    const date = new Date()
    const content = (
        <>
            <footer className="footer">
                <p>{date.getFullYear()}</p>
            </footer>
        </>
    )

    return content
}

export default Footer