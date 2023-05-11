import http from "../axios/index";

export function getBookList(value) {
  return http({
    url: "api/book",
    method: "get",
    params: { value },
  });
}

export function addBook(book) {
  return http({
    url: "api/addBook",
    method: "post",
    data: { book },
  });
}

export function updateBook(book) {
  return http({
    url: "api/updateBook",
    method: "put",
    params: { book },
  });
}

export function deleteBook(id) {
  return http({
    url: "api/deleteBook",
    method: "delete",
    data: { id },
  });
}
