export const RenderSVG = ({ svg, w, h }) => {
    return <div style={{ width: w + "px", height: h + "px" }} className="svg-container flex items-center" dangerouslySetInnerHTML={{ __html: svg }} />
}
