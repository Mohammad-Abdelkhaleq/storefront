import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { connect } from "react-redux";
import { activeCategory, addToCart, removeFromCart, reset,getProducts,getPrductsBasedOnCategory } from "../../store/Products";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

 function ProductList(props) {

    const [products, setProducts] = React.useState([]);


    // async function getProducts() {
    //     const response = await axios.get('https://fakestoreapi.com/products');
    //     setProducts(response.data);
    // }
    // React.useEffect(() => {
    //     getProducts();
    // }, []);

    React.useEffect(() => {
        props.getProducts(props.Category);
    }, []);

    React.useEffect(() => {
        props.getProducts(props.Category);
    }, [props.Category]);

   
    // React.useEffect(() => {
    //     props.getPrductsBasedOnCategory(props.Category);
    // }, [props.Category]);




    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                { props.products.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, height: 500 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 'small', height: 50, marginBottom:20 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ height: 200, overflow: 'scroll' }} >
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                    onClick={() => props.addToCart(item)}
                                    >add to cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        Category: state.products.activeCategory,
        active: state.products.active,
        cart: state.products.cart,
        cartCount: state.products.cartCount,
        total: state.products.total,
    }

}

const mapDispatchToProps = {
    activeCategory,
    addToCart,
    removeFromCart,
    reset,
    getProducts,
    getPrductsBasedOnCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)