import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';


import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "20px"
  },
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
    height: '276px',
    width: '100%',
    objectFit: 'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    },
      root: {
        '& > span': {
          margin: theme.spacing(2),
        },
      },
      iconHover: {
        '&:hover': {
          color: red[800],
        },
      },
      dropdown: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
      marginRight: theme.spacing(3),
    },
  },
}));

export default function DinosaurCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickDropDown = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div className={classes.fake} />;

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    }
  })(props => (
    <Menu
    elevation = {0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);





  return (
    <Card className={classes.card}>
      <CardHeader

        avatar=
          <Avatar aria-label="DinosaurCard" className={classes.avatar}>
           {props.avatar}
          </Avatar>

        title={props.name}
        subheader={props.subheader}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        component="img"
      />
   <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >{props.content}
</Typography>
    </CardContent>
    <div className={classes.root}>
      <Icon>add_circle</Icon>
    </div>

<div>
     <Button
       aria-controls="customized-menu"
       aria-haspopup="true"
       variant="contained"
       color="primary"
       onClick={handleClickDropDown}
     >
       Paddocks
     </Button>
     <StyledMenu
       id="customized-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
     >
       <StyledMenuItem>
         <ListItemText primary="Paddock 1" />
       </StyledMenuItem>
       <StyledMenuItem>
         <ListItemText primary="Paddock 2" />
       </StyledMenuItem>
       <StyledMenuItem>
         <ListItemText primary="Paddock 3" />
       </StyledMenuItem>
     </StyledMenu>
   </div>


    <CardActions disableSpacing>
      <IconButton
           className={clsx(classes.expand, {
             [classes.expandOpen]: expanded,
           })}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         >
           <ExpandMoreIcon />
         </IconButton>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Typography paragraph>Facts:</Typography>
           <Typography paragraph>
            {props.facts}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
