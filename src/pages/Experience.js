import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import School from '@mui/icons-material/School';
import Work from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random Hight School, Random Pleace, Random State{' '}
          </h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random Hight School, Random Pleace, Random State{' '}
          </h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random Hight School, Random Pleace, Random State{' '}
          </h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random Hight School, Random Pleace, Random State{' '}
          </h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random Hight School, Random Pleace, Random State{' '}
          </h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experience;
