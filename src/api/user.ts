import http from "../axios/index";

export function getLogin(user: any) {
  return http({
    url: "api/user",
    method: "get",
    params: user,
  });
}
