import { Book } from "@/features/book/types/book.model";
import React from "react";
import styled from "styled-components";
import BookItem from "@/features/book/components/BookItem";

interface Props {
  books: Book[];
}

const MainNewBooks = ({ books }: Props) => {
  return (
    <MainNewBooksStyle>
      {books.map((book) => (
        <BookItem key={book.id} book={book} view="grid" />
      ))}
    </MainNewBooksStyle>
  );
};

const MainNewBooksStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px; /* 더 넓은 여백으로 시원한 느낌 연출 */
  padding: 12px 12px 24px 12px;

  @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 12px 0 24px 0;
  }
`;

export default MainNewBooks;
