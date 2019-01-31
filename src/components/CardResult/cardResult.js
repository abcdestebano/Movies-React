import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// STYLES
import './styles.css'

const noImage = 'http://eadatahandlers.co.ke/training/wp-content/themes/456ecology/assets//img/no-product-image.png'

const CardResult = ({
   title,
   image,
   year,
   id,
   handleShowResult,
}) => (
      <Card className="CardResult">
         <CardActionArea onClick={() => handleShowResult(id)}>
            <CardMedia
               component="img"
               alt={title}
               className="CardResultImage"
               height="300"
               image={image !== 'N/A' ? image : noImage}
               title={title}
            />
            <CardContent className="CardContent">
               <span className="CardTitle">{title}</span>
               <span className="CardYear">{year}</span>
            </CardContent>
         </CardActionArea>
      </Card>
   )

export default CardResult