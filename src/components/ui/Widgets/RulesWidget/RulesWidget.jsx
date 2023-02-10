import PropTypes from 'prop-types';
import { Dropdown } from 'components/ui/Dropdown';
import './style.css';

export default function RulesWidget({ color, name, rules }) {
  return (
    <div className="rules-widget">
      <h2 style={{ backgroundColor: `${color}` }}>{`r/${name} Rules`}</h2>
      <div className="description">
        {rules.map((rule, index) => {
          return (
            <Dropdown
              labelText={`${index + 1}. ${rule.heading}`}
              key={rule.heading}
            >
              <div>{rule.subtext}</div>
            </Dropdown>
          );
        })}
      </div>
    </div>
  );
}

RulesWidget.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subtext: PropTypes.string,
    })
  ).isRequired,
};
