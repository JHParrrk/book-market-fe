import { Book } from '@/features/book/types/book.model';
import React from 'react';
import styled from 'styled-components';
import BookItem, { BookItemStyle } from '@/features/book/components/BookItem';

interface Props {
  book: Book;
  itemIndex: number;
}

const BookBestItem = ({ book, itemIndex }: Props) => {
  return (
    <BookBestItemStyle>
      <BookItem book={book} view="grid" />
      <div className="rank">{itemIndex + 1}</div>
    </BookBestItemStyle>
  );
};

const BookBestItemStyle = styled.div`
  ${BookItemStyle} {
    .summary,
    .price,
    .likes {
      display: none;
    }

    /* 베스트 셀러 아이템을 위한 추가 스타일링 */
    a {
      background-color: ${({ theme }) =>
        theme.color
          .background_light}; /* 다크모드에서 패널 구분을 위해 background_light 사용 */
      border: 1px solid ${({ theme }) => theme.color.border}; /* 테두리 추가 */
    }

    .content {
      padding-bottom: 24px; /* likes 등 없으므로 불필요한 하단 여백 제거 */
    }

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 8px;
    }
  }

  position: relative;
  height: 100%; /* Ensure rank aligns relative to full card */

  .rank {
    position: absolute;
    top: -12px;
    left: -12px;
    width: 44px;
    height: 44px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 50%; /* 완전 원형 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 800;
    font-style: italic;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /* 랭크 아이콘 그림자 추가 */
    z-index: 10;
  }
`;

export default BookBestItem;
