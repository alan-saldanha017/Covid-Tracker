import React from 'react';
import './Infobox.css';
import {Card, CardContent,Typography} from '@material-ui/core';

function Infobox({title, cases, total}){
    return(
<Card className="infoBox">
<CardContent>
    <Typography color="textSecondary">
        {title}
    </Typography>
    <h2 className="infoBox__cases">
        {cases}
    </h2>
    <Typography color="textSecondary" className="infoBox__total">
        {total}
    </Typography>
</CardContent>
</Card>
    );
}
export default Infobox;
