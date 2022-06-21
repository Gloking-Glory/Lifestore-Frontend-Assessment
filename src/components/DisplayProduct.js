import React, { useContext, useState } from 'react'
import '../component styles/DisplayProduct.css';
import CartList from './CartList';
import ProductSummary from './ProductSummary';
import { ProductContext } from '../contexts/ProductContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function DisplayProduct() {
  const productInfo = useContext(ProductContext);
  const [ productSummary, setProductSummary ] = useState({});
  const [ cartList, setCartList ] = useState([]);
  const [ displayCart, setDisplayCart ] = useState(false);
  
  const addToCart = productNum => {
    setCartList([...cartList, {...productSummary, productNum}]);
    alert("Product added to cart successfully");
  }

  const deleteCartProduct = index => {
    let newCartList = cartList.filter((_, i)=> i !== index);
    setCartList(newCartList);
    alert("Product deleted");
  }

  return (
    <>
        <AppBar color="primary">
            <Toolbar>
              <Typography variant="h4" onClick={()=> setDisplayCart(false)}>
                LIFE STORES
              </Typography>
              
            <IconButton onClick={()=> setDisplayCart(true)}>
                <AddShoppingCartIcon />
                <sup> { cartList.length }</sup>
            </IconButton>

            </Toolbar>
        </AppBar>

        <div className="displayContainer">

            {!displayCart && 
                <Grid container 
                spacing={6} 
                justify="center" 
                >
                    {productInfo.map ((product, index)=> (
                        <Grid item key={index}>
                            <Paper className="p-3">
                                <img 
                                    src={product.image} 
                                    alt="product" 
                                />
                                <Typography className="desc">
                                    NAME:
                                </Typography>

                                <Typography variant="h4" className="productDetails">
                                    { product.name }
                                </Typography>

                                <Typography className="desc">
                                    PRICE:
                                </Typography>

                                <Typography variant="h5" className="productDetails" >
                                    { product.price }
                                </Typography>

                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    className="mt-3"
                                    startIcon={<AddShoppingCartIcon />}
                                    data-target="#summary"
                                    data-toggle="modal" 
                                    onClick={()=> setProductSummary(product)}
                                > 
                                    ADD TO CART 
                                </Button>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            }
            <ProductSummary productSummary={productSummary} addToCart={addToCart} />
            
            { displayCart && 
                <CartList cartList={cartList} deleteCart={deleteCartProduct} />
            }
        </div>


    </>
  )
}
