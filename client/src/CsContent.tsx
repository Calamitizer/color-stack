import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  fade,
} from '@material-ui/core';
import ResultViewer from '@client/JsonViewer/ResultViewer';
import ColorDropdown from '@client/ColorDropdown/Container';
import CreatePersonButton from '@client/CreatePersonModal/CreatePersonButton';

interface Props {}

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      minWidth: '100vw',
      width: '100vw',
      maxWidth: '100vw',

      minHeight: '100vh',
      height: '100vh',
      maxHeight: '100vh',

      overflow: 'hidden',
    },

    title: {
      flexGrow: 1,
      display: 'block',
    },

    colorSelect: {
      position: 'relative',
      backgroundColor: fade(palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(palette.common.white, 0.25),
      },
      marginLeft: spacing(2),
      marginRight: spacing(2),
      width: 'auto',
    },

    buttonSection: {
      display: 'flex',
    },

    menuButton: {
      marginRight: spacing(2),
    },

    grow: {
      flexGrow: 1,
    },

    content: {
      margin: spacing(4),
    },
  })
);

const CsContent: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            NoSQL Color Stack
          </Typography>
          <div className={classes.colorSelect}>
            <ColorDropdown />
          </div>
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            <CreatePersonButton />
          </div>
        </Toolbar>
      </AppBar>
      <Grid
        className={classes.content}
        container
        direction="column"
        // spacing={8}
        // justify="center"
        alignItems="center"
      >
        <ResultViewer />
      </Grid>
    </div>
  );
};

export default CsContent;
