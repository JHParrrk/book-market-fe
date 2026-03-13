import { BookReviewItem as IBookReviewItem } from '@/features/book/types/book.model';
import { formatDate } from '@/utils/format';
import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

interface Props {
  review: IBookReviewItem;
}

const Star = (props: Pick<IBookReviewItem, 'rating'>) => {
  return (
    <span className="star">
      {Array.from({ length: props.rating }, (_, i) => (
        <FaStar key={i} />
      ))}
    </span>
  );
};

const BookReviewItem = ({ review }: Props) => {
  return (
    <BookReviewItemStyle>
      <header className="header">
        <div className="user">
          <span>{review.user_id}</span>
          <Star rating={review.rating} />
        </div>
        <div>{formatDate(review.created_at || '')}</div>
      </header>
      <div className="content">
        <p>{review.content}</p>
      </div>
    </BookReviewItemStyle>
  );
};

const BookReviewItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.color.background_light};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color.secondary};
    padding: 0;
    margin-bottom: 8px;

    .user {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.text};
    }

    .star {
      padding: 0;
      display: flex;
      align-items: center;
      gap: 2px;
      svg {
        fill: ${({ theme }) => theme.color.primary};
      }
    }
  }

  .content {
    flex: 1; /* 리뷰 내용이 짧아도 카드 높이를 일정하게 유지 */
    p {
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
      color: ${({ theme }) => theme.color.text};
      display: -webkit-box;
      -webkit-line-clamp: 4; /* 리뷰 길 경우 생략 표시 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default BookReviewItem;
