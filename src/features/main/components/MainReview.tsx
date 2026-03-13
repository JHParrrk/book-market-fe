import { BookReviewItem as IBookReviewItem } from '@/features/book/types/book.model';
import React from 'react';
import styled from 'styled-components';
import BookReviewItem from '@/features/book/components/BookReviewItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  reviews: IBookReviewItem[];
}

const MainReview = ({ reviews }: Props) => {
  const { isMobile } = useMediaQuery();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    gap: 16,
  };

  return (
    <MainReviewStyle>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <BookReviewItem key={review.id} review={review} />
        ))}
      </Slider>
    </MainReviewStyle>
  );
};

const MainReviewStyle = styled.div`
  padding: 0 0 24px 0;

  .slick-track {
    padding: 12px 0; /* 슬라이더 잘림 방지 */
  }

  .slick-slide > div {
    margin: 0 12px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.color.text};
    font-size: 2rem; /* 슬라이드 네비게이션 버튼 크기 키움 */
  }

  .slick-dots {
    li.slick-active button:before {
      color: ${({ theme }) =>
        theme.color.primary}; /* 활성 닷 색상 테마 강조색 사용 */
    }
    li button:before {
      color: ${({ theme }) => theme.color.text};
      opacity: 0.3;
    }
    li.slick-active button:before {
      opacity: 1;
    }
  }

  @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
    .slick-prev {
      left: -10px; /* 모바일에서 버튼이 카드를 가리지 않도록 위치 조정 */
      z-index: 10;
    }

    .slick-next {
      right: -10px;
      z-index: 10;
    }
  }
`;

export default MainReview;
