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
import { activeCategory, addToCart, removeFromCart, reset, openModal, openProductModal } from "../../store/Products";

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
    height: 900,
    // overflow: 'scroll',
    // display: 'flex',
};

function ProductModal(props) {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    const handleClose = () => {
        // setOpen(false);
        props.openProductModal();
    }

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={props.productOpenmodal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}   >
                    {/* <Box sx={{ flexGrow: 1 }}> */}
                    <Card sx={{ maxWidth: 600, height: '100%', overflow: 'scroll', marginLeft: '20%' }}>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={props.prductData.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 'small', height: 50, marginBottom: 20 }}>
                                {props.prductData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ height: 200, overflow: 'scroll' }} >
                                {props.prductData.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    {/* </Box> */}

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
    productOpenmodal: state.products.productOpenmodal,
});

const mapDispatchToProps = { activeCategory, addToCart, removeFromCart, reset, openModal, openProductModal };


export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);