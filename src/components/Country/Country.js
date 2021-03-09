import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Country = (props) => {
    const {name, flag} = props.country;
    const countryStyle = {

        width : '300px',
        margin : '10px',
        padding : '10px',
        boxShadow : '10px 10px 20px grey',
        borderRadius : '10px',
        textAlign : 'center'

    }


    // const useStyles = makeStyles({
    //     root: {
    //       maxWidth: 345,
    //     },
    //   });

    const useStyle = {

        maxWidth: '345px',
        margin: '20px',
        padding: '10px',

    }
      
  
    return (
        // <div style={countryStyle}>
        //     <img style={{width : '80%'}} src={flag} alt="flag"></img>
        //     <h3>{name}</h3>    
        //     <Link to={`/country/${name}`} ><button>Show Details</button></Link>
        // </div>


      <Card style={useStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/country/${name}`} ><Button size="small" color="primary">
          <strong>Learn More</strong>
        </Button></Link>
      </CardActions>
    </Card>

    );
};

export default Country;