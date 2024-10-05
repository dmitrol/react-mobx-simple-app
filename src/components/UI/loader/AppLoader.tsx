import './AppLoader.css';

const AppLoader: React.FC = () => {
  return (
    <figure>
      <div className="dot white"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </figure>
  );
};

export { AppLoader };
