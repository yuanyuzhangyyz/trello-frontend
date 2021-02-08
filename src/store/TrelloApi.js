const API_BASE = "http://localhost:8080/api/v1";

export async function loginTrello(payload) {
  let xhr = new XMLHttpRequest();
  xhr.open("post", `${API_BASE}/user/login`, true);
  xhr.setRequestHeader("content-type", "application/json");
  const promise = new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let authorization = xhr.getResponseHeader("Authorization");
        localStorage.setItem("authorization", authorization); //是否要在这里存储authorization
        resolve(JSON.parse(xhr.responseText));
      } else {
        let errData = xhr.responseText;
        const errResponse = JSON.parse(errData);
        reject(errResponse);
      }
    };
    xhr.send(JSON.stringify(payload));
  });
  return promise;
}

export async function registTrello(payload) {
  let xhr = new XMLHttpRequest();
  xhr.open("post", `${API_BASE}/user/register`, true);
  xhr.setRequestHeader("content-type", "application/json");
  const promise = new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        let errData = xhr.responseText;
        const errResponse = JSON.parse(errData);
        console.log("errResponse111", errResponse);
        reject(errResponse);
      }
    };
    xhr.send(JSON.stringify(payload));
  });
  return promise;
}
// xhr.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('authorization'));
