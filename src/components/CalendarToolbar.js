import { Toolbar, ViewButton } from '../styles/calendarStyles';

export default ({ view, onViewChange, onNavigate, date }) => {
  return (
    <Toolbar>
      <div>
        <button onClick={() => onNavigate('PREV')}>‹</button>
        <button onClick={() => onNavigate('TODAY')}>Today</button>
        <button onClick={() => onNavigate('NEXT')}>›</button>
      </div>
      <h3>{date.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h3>
      <div>
        <ViewButton active={view === 'month'} onClick={() => onViewChange('month')}>
          Month
        </ViewButton>
        <ViewButton active={view === 'week'} onClick={() => onViewChange('week')}>
          Week
        </ViewButton>
        <ViewButton active={view === 'day'} onClick={() => onViewChange('day')}>
          Day
        </ViewButton>
      </div>
    </Toolbar>
  );
};