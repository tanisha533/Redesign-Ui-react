import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img className="d-block w-100" src="images/3rd.jpeg" alt="First slide" />
          <div className="carousel-caption d-md-block">
            <h1><strong>Welcome to PATIL</strong></h1>
            <h1><strong>Eye Hospital</strong></h1>
            <Link to="/about" className="btn btn-primary">Explore</Link>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="images/2nd.jpeg" alt="Second slide" />
          <div className="carousel-caption d-md-block">
            <h1><strong>Welcome to PATIL</strong></h1>
            <h1><strong>Eye Hospital</strong></h1>
            <Link to="/about" className="btn btn-primary">Explore</Link>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="images/1st.jpeg" alt="Third slide" />
          <div className="carousel-caption d-md-block">
            <h1><strong>Welcome to PATIL</strong></h1>
            <h1><strong>Eye Hospital</strong></h1>
            <Link to="/about" className="btn btn-primary">Explore</Link>
          </div>
        </div>

      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
