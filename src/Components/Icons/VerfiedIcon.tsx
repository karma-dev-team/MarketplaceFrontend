type iconProps = { width?: string, height?: string }

const VerifiedIcon: React.FC<iconProps> = (props: iconProps) => { 
    return ( 
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={props.width || "24"} 
            height={props.height || "24"} 
            viewBox={`0 0 ${props.width || "24"} ${props.height || "24"}`} 
            fill="none"
            style={{
                color: "transparent",
                maxWidth: "100%",
                height: "auto"
            }}
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 14.5859L17.293 7.29297L18.7072 8.70718L10.0001 17.4143L5.29297 12.7072L6.70718 11.293L10.0001 14.5859Z" fill="white"/>
        </svg>
    )
}

export default VerifiedIcon; 