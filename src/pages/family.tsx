import { Box, Grid } from "@mui/material";
import React from "react";
import PersonCard from "../components/person-card";

export default function Family() {
	const family = [
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank. He was first a machinist, an important career in a rapidly industrializin society. Later in life, we has co-owner of a family grocery store with his son, Edward."
		},
		{
			"type": "Vandenburghs",
			"name": "Anna Vandenburgh",
			"slug": "Anna was the mother of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
		{
			"type": "Vandenburghs",
			"name": "Moses Vandenburgh",
			"slug": "Moses was the father of Nathaniel, Jesse, Edward and Frank."
		},
	];


	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<h1>Family</h1>

				<p>Important members of Eddie and Ida's families.</p>

				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* {names.map(function (name, index) {
						return <li key={index}>{name}</li>;
					})} */}
					{family.map((_, index) => {
						return (
							<Grid item xs={4}>
								<PersonCard type={_.type} name={_.name} slug={_.slug}></PersonCard>
							</Grid>
						)
					})}

				</Grid>
			</Box>


		</React.Fragment>
	);
}