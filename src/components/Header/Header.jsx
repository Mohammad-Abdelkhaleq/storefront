import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge';
import axios from 'axios';
import { connect } from "react-redux";
import { activeCategory, addToCart, removeFromCart, reset, openModal } from "../../store/Products";
import { PropaneSharp } from '@mui/icons-material';



function Header(props) {
    const [category, setCategory] = React.useState([]);
    const [ourCategory, setOurCategory] = React.useState([]);
    const navigate = useNavigate();


    // const handleCategoryChange = (event) => {
    //     setCategory(event.target.value);
    // };

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        props.openModal();
        
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        props.activeCategory(e.target.innerText);
    };

    async function getCatagories() {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategory(response.data);
    }
    React.useEffect(() => {
        getCatagories();
    }, []);

    React.useEffect(() => {  
        setOurCategory(category);
    }, [category]);

    React.useEffect(() => {
        console.log(props.Category);
    }, [props.Category]);


    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        {/* <FormControl
                            sx={{ m: 1, minWidth: 150 }}
                        >
                            <InputLabel id="category-label">Categories</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category-select"
                                value={category}
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value="electronics"
                                    type='button'
                                    onClick={() => navigate('/electronics')}
                                >Electronics</MenuItem>
                                <MenuItem value="cosmetics"
                                    type='button'
                                    onClick={() => navigate('/cosmetics')}
                                >Cosmetics</MenuItem>
                            </Select>
                        </FormControl> */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            catagories
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            {props.Category}
                        </IconButton>

                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                          {
                            ourCategory.map((item, index) => {
                                return <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
                        })
                        }
                      
                    </Menu>

                    </Box>
                </Toolbar>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={() => navigate('/cart')}
                        onClick={() => handleMenu()}
                        color="inherit"
                        sx={{ mr: 2, marginTop: 2 }}
                    >

                        <StyledBadge badgeContent={props.cartCount } color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>

                    </IconButton>





                    {/* <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        // <MenuItem onClick={handleClose}>Profile</MenuItem>
                        // <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu> */}
                </div>
            </Container>
        </AppBar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
