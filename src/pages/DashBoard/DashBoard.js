import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
		height: 200,
  },
  title: {
    fontSize: 14,
  },
});

function DashBoard(props) {
	const classes = useStyles();


	return (
		<div>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						Weather
					</Typography>
					
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						Production Overview
					</Typography>
					
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						Recent Energy Flow
					</Typography>
					
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						Weekly Energy Graph
					</Typography>
					
				</CardContent>
			</Card>
		</div>
	)
}

DashBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default DashBoard
