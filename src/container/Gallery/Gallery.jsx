import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">معرض الصور</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>هنا نعرض عملنا الماضي,من التصاميم المذهلة إلى المشاريع الاستثنائية ، استكشف محفظتنا وشاهد شغفنا لتقديم التميز في كل مسعى.</p>
        <a href="https://www.instagram.com/alhdyllmghasl/" target="_blank" rel="noopener noreferrer">
        <button type="button" className="custom__button" >عرض المزيد</button>
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, 
          images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10, images.gallery11, images.gallery12,
           images.gallery13, images.gallery14, images.gallery15, images.gallery16, images.gallery17, images.gallery18, images.gallery19, 
           images.gallery20, images.gallery21, images.gallery22, images.gallery23, images.gallery24, images.gallery25, images.gallery26, images.gallery27, images.gallery28,
            images.gallery29, images.gallery30, images.gallery31, images.gallery32, images.gallery33, images.gallery34, images.gallery35, images.gallery36, images.gallery37, images.gallery38,
            images.gallery39,images.gallery40].map((image, index) => (
            <a href="https://www.instagram.com/alhdyllmghasl/" target="_blank" rel="noopener noreferrer">
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
