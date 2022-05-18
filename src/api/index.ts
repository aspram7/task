const path =
  "https://gist.githubusercontent.com/taroninak/e1f66913a6b280cf0a47534fdfcd9dda/raw/b173b772e994f556799cba9a11c96d8c1a452f10/mock-backend.json";

export function getProducts() {
  return fetch(path).then((response) => response.json());
}
