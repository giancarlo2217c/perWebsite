import React from 'react';
import styles from './Section.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Content from "../content/Content"

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginBottom: "50px"
    },
    paper: {
        height: 600,
        width: 600,
        testAlign: 'center'
    }
}));

function Section(props) {

    const classes =  useStyles();
    const paperStyle = classes.paper + " " + styles.paper;

    return (
        <div className = {classes.root} >
            <Grid container >
                <Grid item xs = {6} >
                <Grid container justify= "center" alignItems = "flex-start">
                    <Paper className = {paperStyle}> 
                    <Content fontTitle = {props.fontTitle1} title = {props.title1} fontP = {props.fontP1} imgHeight = {props.imgHeight1} imgWidth = {props.imgWidth1} imgSrc = {props.imgSrc1} text = {props.text1}/>
                    </Paper>
                </Grid>
                </Grid>
                <Grid item xs = {6}>
                <Grid container justify="center" alignItems = "flex-end">
                    <Paper className = {paperStyle} > 
                    <Content fontTitle = {props.fontTitle2} title = {props.title2} fontP = {props.fontP2} imgHeight = {props.imgHeight2} imgWidth = {props.imgWidth2} imgSrc = {props.imgSrc2} text = {props.text2} />
                    </Paper>
                </Grid>
                </Grid>

            </Grid>


        </div>

    )

}

export default Section