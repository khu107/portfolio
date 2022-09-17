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
          date="2012 - 2015"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            REPUBLIC OF UZBEKISTAN DIPLOMA OF PROFESSIONAL COLLEGE
          </h3>
          <p>computer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of
            Korea
          </h3>
          <p>computer engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - "
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of
            Korea
          </h3>
          <p>in graduate school</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experience;
