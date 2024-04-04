type props = { width?: string | undefined, color?: string | undefined, margin?: string | undefined }

const ContentLine: React.FC<props> = (props: props) => { 
    let color, width, margin; 
    width = props.width === undefined ? "100%" : props.width;
    color = props.color === undefined ? "var(--line-color)" : props.color; 
    margin = props.margin === undefined ? "10px" : props.margin; 

    return ( 
        <>
            <hr className="content-line" style={{
                backgroundColor: color, 
                width: width, 
                border: "none", 
                height: "1px", 
                margin: `${margin} 0`,
                zIndex: 676878
            }}/>
        </>
    )
}

export default ContentLine; 