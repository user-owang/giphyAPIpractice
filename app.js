function addGIF(res) {
  console.log(res);
  let randomNum = Math.floor(Math.random() * res.data.length);
  $(".gifs").append(
    `<div><img src="${res.data[randomNum].images.downsized_large.url}"</div>`
  );
}
async function search(q) {
  const api_key = "tdLJacyavspykhPP7k96OG2E8jZ3wKhG";
  const lang = "en";
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q, api_key },
  });
  addGIF(res.data);
}
$("form").on("submit", function (e) {
  e.preventDefault();
  search($("#query").val());
  $("#query").val("");
});
$("#delete").on("click", function (e) {
  $(".gifs").empty();
});
