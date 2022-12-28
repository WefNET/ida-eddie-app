import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

function EddieTimeline() {
	return (
		<Timeline
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2,
				},
			}}
		>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1600s
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					The Vandenburgh family immigrated the America from around Utrecht, Holland in the mid 1600s and settled in the Albany, New York area. (The
					more interesting Hollanders founded New Amsterdam.) Edward's great-grandfather and great-uncles fought in the American Revolutionary War.
					There is ancedotal evidence that the Vandenburgh family helped build the Erie Canal.
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1845
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					Edward was born in 1845 in Waterford, New York to Moses and Anna Vandenburgh. His hometown, Waterford, is at the confluence of the Mohawk and Hudson rivers
					and is the eastern gateway to the Erie Canal. I can imagine Edward and his older brothers, Nathaniel and Jesse, watching the boats and barges
					move into the canal on their trips to and from New York City and Buffalo. There is ancedotal evidence that Edward's family ran a
					ferry that crossed the Hudson.
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1862
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					By the time Edward was 17, he was living in Buffalo with his family and working as a compositor for the Buffalo Christian Advocats Office. Here is his letter of recommendation, now over 150 years old, made into a photograph, then posted on heavy cardboard:
					<p>
						<img className="hero-image" src="./img/edward_vandenburg_recommendation_letter.png" alt="A letter of recommendation" />
					</p>
					<p>
						"To whom it may concern, this may certify that Edward Vandeberg (sic) was appointed to me in A.D. 1862 as compositor in the Buffalo Christian Advocat Office and continuted in my employ until I sold out in 1863. Since which he has remained in the same office until quite recently, filling the position of foreman most of his time. His conduct has been exemplary, and his application and attention to the duties in the office very satisfactory; and I take pleasure in stating that I regard him as a young man of good principles, strict integrity, and industrious habits, whose success in life I sincerely hope may by equal to deserts."
					</p>
					Buffalo September 21, 1864<br /> Levius S Church<br /> Bethel Chaplain
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1866
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					By 1866, we find Edward in Chicago listed as a student at Bryant and Stratton's Business College (Clark and Washington) in the 1866 Chicago City Directory. This detail is interesting, considering there was a student in the same program	in the same year by the name of George Burdick. George may have been the the half-brother of Ida Shreffler, whom would marry Edward in 1875.
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1867
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					The 1867 Chicago City Directory shows Edward living with his father (Moses) at 75 S. Green. (The SW corner of Green and Madison.) His brother is listed twice, once as Nathaniel and once and Nathan, at the same address 269 W Kinzie. (Kinzie and Carpenter.)
					<br />
					<img className="hero-image" src="./img/chicago-directory-1867.png" alt="Chicago City Directory clipping 1867" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1869
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					By 1869, Edward was shown to have a job at Hitchcock &amp; Walden, a book publisher, as a printer. (That letter of recommendation must have came in handy.) He is still living with his father (Moses) at 263 Fulton. (Between Carpenter and Aberdeen.) Of note, brother Jesse makes an appearance in the Directory, and he is shown working for S.H. Harris, a manufacturer of safes and bank vault doors.
					<p>
						The "H. T. Vandenburgh" listed first below is no known relation. However, the line of business for "Vandenburgh &amp; Boswell" would soon prove very imporant to Eddie.
					</p>
					<p>
						<img className="hero-image" src="./img/chicago-directory-1869.png" />
					</p>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					1870
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					In the 1870 Chicago City Directory, Edward and his father, Moses, are listed with a grocery store named "M & E Vandenburgh" at 674 W Lake Street, which is the northeast corner of Lake and Wood Streets. (They lived together across Wood on the NW corner.) We have no idea why they opened a grocery store when they did or where they did. Edward would be in the business for the rest of his life.
					<p>
						<img className="hero-image" src="./img/chicago-directory-1870.png" />
					</p>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p>
						Soon after Edward's father died, the Vandenburghs welcomed a son
						to the family. Nothing is known of Vicky Vandenburgh outside of this newspaper
						clipping about his death found in an old family photo album.</p>
					<img src="./img/vicky-obit.jpg" alt="Vickie Vandenburgh obituary notice" />
				</TimelineContent>
			</TimelineItem>
		</Timeline >
	);
}

export default EddieTimeline;
