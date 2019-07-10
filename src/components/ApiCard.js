import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



  

const styles = theme => ({
    card: {
      borderRadius: 0,
      boxShadow: "0 0 0 0 rgba(0,0,0,0)",
      backgroundColor:"#f7f7f7",
      height: '100%'
    },
    media: {
      backgroundColor:"#d8d8d8",
      paddingBottom: "56%",
    },
    cardContent: {
      padding: 20,
      flexGrow: 1
    },
    button: {
        boxShadow: 'none',
        textTransform: 'none',
        padding: '8px 28px',
        marginBottom: 10,
        height: 'auto',
        borderRadius: 50
    },
    list: {
      color: theme.palette.primary.main,
    },
    listItem: {
      marginBottom: 10,
    },
    actions: {
        padding: 20,
    }
  });
  

const ApiCard = ({api, classes}) => {
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image="/img/cards/contemplative-reptile.jpg"title=""/>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2" color="primary">{api.title}</Typography>
                { api.details.length
                ? <Typography variant="body2" color="textSecondary" component="p">{api.details}</Typography>
                : null
                }
                <ul className={classes.list}>
                { api.bullets.length 
                ? api.bullets.map((item, i) => {
                return (              
                    <li key={i} item={item} className={classes.listItem}>
                    <Typography variant="body2" color="textSecondary" component="span">{item.text}</Typography>
                    </li>
                )
                })
                : null
                }
                </ul>
            </CardContent>
            <CardActions className={classes.actions}>
                { api.page.length
                ? <Button className={classes.button} variant="contained" color="primary">View</Button>
                : <Button className={classes.button} variant="outlined" color="primary">Comming Soon</Button>
                }
            </CardActions>
      </Card>
    )
}

ApiCard.propTypes = {
    api: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ApiCard);
