import { Book } from '@/features/book/types/book.model';
import React from 'react';
import styled from 'styled-components';
import BookBestItem from '@/features/book/components/BookBestItem';

interface Props {
  books: Book[];
}

const MainBest = ({ books }: Props) => {
  return (
    <MainBestStyle>
      {books.map((book, i) => (
        <BookBestItem key={book.id} book={book} itemIndex={i} />
      ))}
    </MainBestStyle>
  );
};

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px; /* 아이템 간격 넓힘 */
  padding: 12px 12px 24px 12px; /* 바깥 여백 및 호버 시 잘리는 문제 방지 */

  @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 12px 0 24px 0;
  }
`;

export default MainBest;
