import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { green, lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    iconColor: {
        color: lightGreen[900]
    }
});

const theme = createMuiTheme({
    palette: {
        secondary: green,
    },
});
const Cart = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <div>
        <Paper square className={classes.root}>
            <ThemeProvider theme={theme} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab className={classes.iconColor} icon={<ShoppingBasketOutlinedIcon />} label="SEPETİM" />
                    <Tab className={classes.iconColor}  icon={<PersonPinCircleOutlinedIcon />} label="Adres" />
                    <Tab className={classes.iconColor} icon={<PaymentOutlinedIcon />} label="Ödeme" />
                </Tabs>
            </ThemeProvider>
        </Paper>
    </div>
}

export default Cart;