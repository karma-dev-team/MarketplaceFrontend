type props = { width?: string, color?: string }

const ContentLine: React.FC<props> = (props: props) => { 
    let color, width; 
    width = props.width === undefined ? "100%" : props.width;
    color = props.color === undefined ? "var(--line-color)" : props.color; 

    return ( 
        <>
            <hr className="content-line" style={{
                backgroundColor: color, 
                width: width, 
                border: "none", 
                height: "1px", 
                margin: "10px 0"
            }}/>
        </>
    )
}

export default ContentLine; 