import { Card, CardContent, Typography } from "@mui/material";

function PersonCard({ type, name, slug }: any) {
	return (
		<Card>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
					{type}
				</Typography>
				<Typography variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2">
					{slug}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PersonCard;