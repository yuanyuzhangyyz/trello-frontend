const API_BASE = "http://localhost:8080/api/v1";

export async function loginTrello(payload) {
  let xhr = new XMLHttpRequest();
  xhr.open("post", `${API_BASE}/user/login`, true);
  xhr.setRequestHeader("content-type", "application/json");

  const promise = new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        let errData = xhr.responseText;
        errData = JSON.parse(errData);
        console.log(errData);
        reject({ error: "error" });
      }
    };
    xhr.send(JSON.stringify(payload));
  });
  return promise;
}
