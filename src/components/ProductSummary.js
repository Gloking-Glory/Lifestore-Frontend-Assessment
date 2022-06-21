import React, { useState } from 'react'
import '../component styles/ProductSummary.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

export default function ProductSummary({ productSummary, addToCart }) {

  const [ productNum, setProductNum ] = useState(1);

  return (
    <>
      <div 
        className="modal fade" 
        id="summary" 
        tabIndex="-1" 
        role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document"
        >
            <div className="modal-content">
              <div className="modal-header">
                <Button
                  startIcon={<CloseIcon />}
                  variant="contained"
                  color="secondary"
                  data-dismiss="modal"                          
                  className="mt-3 dismissModal"
                >
                  Close
                </Button>
              </div>
                <div className="modal-body">
                  <Grid container spacing={4}>
                    
                      <Grid item>
                        <Paper className="displayPaper p-3">
                          <img 
                              src={productSummary.image} 
                              alt="product" 
                              className="cartImage"
                          />
                          <Typography className="desc">
                              NAME:
                          </Typography>
                          <Typography variant="h4" className="productDetails">
                              { productSummary.name }
                          </Typography>
                          
                          <Typography className="desc">
                              DESCRIPTION:
                          </Typography>

                          <Typography variant="h6" className="text-center productDesc">
                              { productSummary.description }
                          </Typography>

                          <Typography className="desc">
                              PRICE:
                          </Typography>

                          <Typography variant="h5" className="productDetails" >
                              { productSummary.price }
                          </Typography>

                          <Typography className="desc">
                              SKU:
                          </Typography>

                          <Typography variant="h5" className="productDetails" >
                              { productSummary.sku }
                          </Typography>

                          <ButtonGroup className="mt-3">
                            <Button 
                              color="primary" 
                              variant="contained"
                              onClick={()=>setProductNum(+productNum + 1)}
                            >
                              <AddIcon />
                            </Button>

                            <TextField
                              disabled
                              value={productNum}
                              variant="standard"
                              inputProps={{style: {
                                  fontSize: '1.5em', 
                                  fontWeight: 'bolder', 
                                  textAlign: 'center',
                                  width: '50px'
                                  }}}
                              className="mt-2 productNumTextfield"
                            />

                            <Button
                              color="primary" 
                              variant="contained"
                              onClick={()=> setProductNum(+productNum - 1)}
                            >
                              <RemoveIcon />
                            </Button>

                          </ButtonGroup>

                          <br />

                          <Button 
                            variant="contained"
                            color="secondary"
                            className="mt-3"
                            data-dismiss="modal"        
                            startIcon={<AddShoppingCartIcon />}
                            onClick={()=> addToCart(productNum)}
                          > 
                              ADD TO CART 
                          </Button>
                        </Paper>
                      </Grid>
                  </Grid>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
