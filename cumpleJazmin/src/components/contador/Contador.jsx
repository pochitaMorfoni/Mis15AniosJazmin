import Countdown from 'react-countdown';

const CountdownBlocks = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    }

    return (
      <div className='container-countdown'>
        <div className="countdown">
          <div className="time-block">
            <span className="time-number">{days}</span>
            <span className="time-label">Días</span>
          </div>

          <div className="time-block">
            <span className="time-number">{hours}</span>
            <span className="time-label">Horas</span>
          </div>

          <div className="time-block">
            <span className="time-number">{minutes}</span>
            <span className="time-label">Min</span>
          </div>

          <div className="time-block">
            <span className="time-number">{seconds}</span>
            <span className="time-label">Seg</span>
          </div>
        </div>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownBlocks;