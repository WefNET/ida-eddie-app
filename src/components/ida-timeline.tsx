import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

const IdaTimeline = () => {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent>
                    1700s
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-title">Shreffler's in America</div>
                    <div className="timeline-info">
                        <p>
                            The Shreffler family came to America from Baden-Württemberg, Germany in the 1700s. They settled near Reading, Pennsylvania in Berks County.
                        </p>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    1776
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-title">American Revolution</div>
                    <div className="timeline-info">
                        <p>
                            Ida's Great Grand-Uncle, <a href="https://www.familysearch.org/tree/person/about/LV8W-9KW" target='_blank'>Henry Shreffler</a>, fought for the Colonies. His ability to speak German put him in command of captured Hessian soldiers.
                        </p>
                        <p>
                            Henry's name is in muster rolls of Captain Ferdinand Ritter's Company of the Sixth Battalion of Berks County Militia, commanded by Colonel Joseph Hiester, in the service of the United States.
                        </p>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    1855 (or 1857)
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-title">Sarah Ida Born</div>
                    <div className="timeline-info">
                        <p>
                            Ida was born in Morris, Illinois to Daniel and Nell Shreffler.
                        </p>
                        <p>
                            At some point before 1851, Ida's father. Daniel moved west to Kankakee County, Illinois. He married Eleanor Maria "Nell" Wright in 1851. Nell was 14 years younger than Daniel.
                        </p>
                        <p>
                            Morris, Illinois is a city along the Illinois and Michigan
                            canal. The canal was built to connect the Great Lakes to the Mississippi River. It's possible that Daniel worked on the canal.
                        </p>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    1862
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-title">
                        The American Civil War
                    </div>
                    <div className="timeline-info">
                        <p>
                            Ida's father, Daniel, served in the Civil War for 3 years. He was a member of the 148th Regiment, Pennsylvania Infantry. He was a drummer in Company G.
                        </p>
                        <p>
                            Daniel mustered into service in September, 1862 in Pennsylvania. He was discharged in August, 1865 in Washington, D.C.
                        </p>
                    </div>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    )
}

export default IdaTimeline;