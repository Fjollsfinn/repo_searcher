import React from 'react';
import injectSheet from 'react-jss';


const styles = {
    overlay: {
        zIndex: 1, 
        top: 0, 
        left: 0, 
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .55)', 
        width: '100%', 
        height: '100%'
    }
}

const OverlayComponent = ({classes}) => (
    <div className={classes.overlay}></div>
)
const StyledOverlayComponent = injectSheet(styles)(OverlayComponent);

function Overlay ()  {
    return (
        <StyledOverlayComponent/>
    )
}

export default Overlay;