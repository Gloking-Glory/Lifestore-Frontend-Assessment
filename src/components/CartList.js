import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartList({ cartList, deleteCart }) {
  return (
      <>
        {cartList.length === 0 && 
            <Typography variant="h3">
                NO PRODUCT IN THE CART
            </Typography>
        }
        <Grid container spacing={6} justify="center" className="displayGrid">
            {cartList.map((item, index)=> (
                <Grid item key={index}>
                    <Paper className="p-3">
                        <img 
                            src={item.image} 
                            alt="product" 
                        />
                        <Typography className="desc">
                            NAME:
                        </Typography>

                        <Typography variant="h4" className="productDetails">
                            { item.name }
                        </Typography>

                        <Typography className="desc">
                            PRICE:
                        </Typography>

                        <Typography variant="h5" className="productDetails" >
                            { item.price }
                        </Typography>

                        <Button
                            startIcon={<DeleteIcon />}
                            variant="contained"
                            color="secondary"
                            onClick={()=> deleteCart(index)}
                        >
                            DELETE
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </>
  )
}
