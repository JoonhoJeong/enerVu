import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
	card: {
		minWidth: 275,
		minHeight: 200,
		marginBottom: '30px',
	},
});

function DashBoard(props) {
	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						Weather
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card className={classes.card}>
						Production Overview
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card className={classes.card}>
					Recent Energy Flow
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className={classes.card}>
						Weekly Energy Graph
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}

// DashBoard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default DashBoard
