import React from 'react';
import './styles.css'
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

const showRatingStars = (rating) => {
   if (!isNaN(rating)) {
      const numberStars = Math.trunc(Number(rating) / 2)
      const stars = Array(numberStars).fill('').map(() => <Star className="ModalStars" />)
      const starsBorder = Array(5 - numberStars).fill('').map(() => <StarBorder className="ModalStarsBorder" />)
      return (
         <div className="ModalStarsContainer">
            {[...stars, ...starsBorder].map((item, index) => (<div key={index}>{item}</div>))}
         </div>
      )
   }
   return (<div></div>)
}

const noImage = 'http://eadatahandlers.co.ke/training/wp-content/themes/456ecology/assets//img/no-product-image.png'

const ModalResult = ({
   open,
   handleClose,
   Title,
   Poster,
   Year,
   imdbRating,
   Genre,
   Actors,
   Plot,
   Type
}) => (
      <Modal
         aria-labelledby={Title}
         aria-describedby={Type}
         open={open}
         onClose={handleClose} >
         <div className="ModalContainer">
            <Paper className="ModalPaper">
               <img
                  src={Poster === 'N/A' ? noImage : Poster}
                  alt={Title}
                  style={Poster === 'N/A' ? { width: 300, height: '100%' } : { width: 400 }}
                  className="ModalImage" />
               <div className="ModalInfo">
                  <span className="ModalTitle">{Title}</span>
                  <span className="ModalYear">{Year}</span>
                  {showRatingStars(imdbRating)}
                  <div className="ModalBadges">
                     {
                        Genre.split(',').map((item, index) => (<div key={index} className="ModalBadge">{item}</div>))
                     }
                  </div>
                  <p className="ModalActors">{Actors}</p>
                  <p className="ModalDescription">{Plot}</p>
                  <Button onClick={() => handleClose()} className="ModalButton" variant="contained">Close</Button>
               </div>
            </Paper>
         </div>
      </Modal>
   )

export default ModalResult;