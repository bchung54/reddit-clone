import SidebarDropdown from '../SidebarDropdown';
import '../../../styles/molecules/popularSubs.css';

function PopularSubs() {
  return (
    <div className="popular-subs">
      <SidebarDropdown name="Popular Communities" textOnly />
      <SidebarDropdown name="Gaming" textOnly />
      <SidebarDropdown name="Sports" textOnly />
      <SidebarDropdown name="TV" textOnly />
      <SidebarDropdown name="Travel" textOnly />
      <SidebarDropdown name="Health & Fitness" textOnly />
      <SidebarDropdown name="Fashion" textOnly />
    </div>
  );
}

export default PopularSubs;
