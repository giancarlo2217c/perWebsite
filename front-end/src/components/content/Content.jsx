import React from "react"
import { makeStyles } from '@material-ui/core/styles';

function Content(props) {

    const useStyles = makeStyles(() => ({
        paperH2: {
            marginTop: '30px',
            fontFamily: props.fontTitle
        },
    
        paperP: {
            margin: '15px',
            fontFamily: "Open Sans', sans-serif"
        },
    
        paperImg: {
            height: props.imgHieght,
            width: props.imgWidth
        }
        
    }));

    const classes = useStyles();

    return (
     <div>
    <h2 className = {classes.paperH2}> {props.title} </h2>
    <p className = {classes.paperP} >
        {props.text}
    </p>
    <img className = {classes.paperImg} src = {props.imgSrc} />
    </div>
 )
}

export default Content