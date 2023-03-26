import { Card, CardContent, Typography } from "@mui/material";

function PersonCard({ type, name, slug }: any) {
	return (
		<Card>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="info" gutterBottom>
					{type}
				</Typography>
				<Typography variant="h5" component="div" color="secondary" >
					{name}
				</Typography>
				<Typography variant="body2" color="error">
					{slug}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PersonCard;