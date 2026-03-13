import { fetchBanners } from "@/features/main/api/banner.api";
import { fetchBestBooks, fetchBooks } from "@/features/book/api/books.api";
import { fetchReviewAll } from "@/features/book/api/review.api";
import { Banner } from "@/features/main/types/banner.model";
import { Book, BookReviewItem } from "@/features/book/types/book.model";
import { useEffect, useState } from "react";

export const useMain = () => {
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);
  const [newBooks, setNewBooks] = useState<Book[]>([]);
  const [bestBooks, setBestBooks] = useState<Book[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetchReviewAll().then((reviews) => {
      setReviews(reviews);
    });

    fetchBooks({
      category_Id: undefined,
      isNew: true,
      currentPage: 1,
      limit: 4,
    }).then(({ books }: { books: Book[] }) => {
      setNewBooks(books || []);
    });

    fetchBestBooks().then((books: Book[]) => {
      setBestBooks(books || []);
    });

    // fetchBanners().then((banners) => {
    //   setBanners(banners);
    // });
  }, []);

  return { reviews,  newBooks, bestBooks /*, banners */ };
};
