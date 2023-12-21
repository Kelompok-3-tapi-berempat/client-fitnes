import { Carousel } from 'react-bootstrap';
import './Landing.css';

export default function JumbotronComponent() {
    return (
        <div>
            <JumbotronCarousel/>
        </div>
    );
}

function JumbotronCarousel() {
    return (
        <Carousel className='mb-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/jumbo.png"
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3 >Judul Slide 1</h3>
                    <p >Teks penjelasan atau deskripsi slide pertama.</p>
                    <button className="btn btn-primary btn-lg">Tombol Slide 1</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}