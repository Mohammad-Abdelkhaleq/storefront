import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { connect } from "react-redux";
import { activeCategory, addToCart, removeFromCart, reset, openModal } from "../../store/Products";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 500,
    overflow: 'scroll'
};

function CartModal(props) {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    const handleClose = () => {
        // setOpen(false);
        props.openModal();
    }

    React.useEffect(() => {
        console.log(props.cart);
    }, [props.cart]);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={props.CartopenModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}   >
                    {props.cart.length !== 0 &&
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {props.cart.map((item, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ maxWidth: 345, height: 300, overflow: 'scroll' }}>
                                            <CardMedia
                                                sx={{ height: 200 }}
                                                image={item.image}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 'small', height: 50, marginBottom: 20 }}>
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small"
                                                    onClick={() => props.removeFromCart(item)}
                                                >remove</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    }

                    {props.cart.length === 0 && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your Cart is Empty
                    </Typography>}
                    <Typography variant="h6" component="div" style={{ fontSize: 'small', height: 50, marginBottom: 20 }}>
                        {(() => {
                            let totalitems = props.cart.length;
                            let price = Math.floor(Math.random() * 100);
                            return `Total Items: ${totalitems} / Total Price: ${price}`;
                        })()}
                    </Typography>

                    {/* <Button onClick={handleClose}>Close</Button> */}
                </Box>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state.products.products,
    Category: state.products.activeCategory,
    cart: state.products.cart,
    cartCount: state.products.cartCount,
    total: state.products.total,
    CartopenModal: state.products.openModal,
});

const mapDispatchToProps = { activeCategory, addToCart, removeFromCart, reset, openModal };


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);