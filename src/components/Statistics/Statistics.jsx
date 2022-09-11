import PropTypes from 'prop-types';
import {
  Section,
  StatList,
  StatListItem,
  StatItemText,
} from './Statistics.styled';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(item => {
          return (
            <StatListItem
              key={item.id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <StatItemText>{item.label}</StatItemText>
              <br />
              <StatItemText>{item.percentage}%</StatItemText>
            </StatListItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
