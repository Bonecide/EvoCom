import './PurpleButton.scss'
export default function PurpleButton({children,link, ...props}) {

    return(
        <a href={link? link : null} className="PurpleButton PurpleButton_text"  {...props}>
                {children}    
        </a>
    )
}