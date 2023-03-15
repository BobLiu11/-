import http from "../axios/index";

export function getBookList() {
  return http({
    url: "api/book",
    method: "get",
  });
}

export function findBookInfo(id) {
  return http({
    url: "api/findBook",
    method: "get",
    params: { id },
  });
}

export function addBook(book) {
  return http({
    url: "api/addBook",
    method: "post",
    params: { book },
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
