import { Dropdown } from 'components/ui/Dropdown';
import { useSubreddit } from 'contexts/SubredditContext';
import './style.css';

export default function RulesWidget() {
  const subreddit = useSubreddit();
  return (
    <div className="rules-widget">
      <h2
        style={{
          backgroundColor: `${subreddit.color}`,
          color: `${subreddit.textColor}`,
        }}
      >{`r/${subreddit.name} Rules`}</h2>
      <div className="description">
        {subreddit.rules.map((rule, index) => {
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
