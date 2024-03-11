import React from 'react';
import classes from "./Blocks.module.scss"
import { Link} from 'react-router-dom';

export default function Block(props) {
    return (<Link to={props.toPage} className={classes.blocksLink}>
    <div className={classes.block} style={{backgroundImage:`url(${props.img})`}}>
        <div className={classes.textroom}><h2>{props.title}</h2></div>
    </div></Link>)
}