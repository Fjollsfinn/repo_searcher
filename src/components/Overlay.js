import React from 'react';
import injectSheet from 'react-jss';


const styles = {
    overlay: {
        zIndex: 1, 
        top: 0, 
        left: 0, 
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, .55)', 
        width: '100%', 
        height: '100%',
    }
}

const OverlayComponent = ({classes, ...props}) => (
    <div className={classes.overlay} {...props}></div>
)
const StyledOverlayComponent = injectSheet(styles)(OverlayComponent);

function Overlay (props)  {
    return (
        <StyledOverlayComponent onClick={props.triggerPopup}/>
    )
}

export default Overlay;