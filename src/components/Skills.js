import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Using these skills, I have built complex applications that solve big cutomer-centric problems while following standard practices in writing clean, resuable codes. I am also updating my skills with newer technologies. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={meter1} alt="skill1" />
                              <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="skill2" />
                              <h5>React</h5>
                            </div>
                            <div className="item">
                              <img src={meter3} alt="skill3" />
                              <h5>CSS</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="skill4" />
                              <h5>HTML</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="skill5" />
                              <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                              <img src={meter2} alt="skill6" />
                              <h5>Redux</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="skill7" />
                              <h5>REST API's</h5>
                            </div>
                            <div className="item">
                              <img src={meter2} alt="skill8" />
                              <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="skill9" />
                              <h5>Git</h5>
                            </div>

                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
