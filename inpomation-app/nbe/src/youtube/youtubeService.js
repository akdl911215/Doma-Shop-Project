const repository = require("./youtubeRepository");

class youtubeService {
  async searchList(search) {
    const list = await repository.searchList(search);
    console.log("list.items.length :: ", list.items.length);

    let arr = [];
    list.items.forEach((element, key) => {
      const result = repository.searchVideos({
        id: element?.id?.videoId,
      });
      console.log("result : ", result);

      arr.push(result);
    });
    console.log("arr ::: ", arr);

    return await arr;
    // const result = await repository.searchVideos(list);
    // console.log("youyube list reuslt : ", result);
    // return;
  }
}

module.exports = new youtubeService();
// list :: {
//     kind: "youtube#searchListResponse",
//     etag: "Y0Up1eHfgnI2IccoX5bPmoWsEkI",
//     nextPageToken: "CAUQAA",
//     regionCode: "KR",
//     pageInfo: { totalResults: 1000000, resultsPerPage: 5 },
//     items: [
//       {
//         kind: "youtube#searchResult",
//         etag: "Pr5hie9NOjes-7tt__kH7jM-7i4",
//         id: [Object],
//         snippet: [Object],
//       },
//       {
//         kind: "youtube#searchResult",
//         etag: "He5UGfhMBvMkZpcJql6oq3kBoNY",
//         id: [Object],
//         snippet: [Object],
//       },
//       {
//         kind: "youtube#searchResult",
//         etag: "KlAu_5yCvzr_PCwrTtlH7mNEYsQ",
//         id: [Object],
//         snippet: [Object],
//       },
//       {
//         kind: "youtube#searchResult",
//         etag: "TYJGtdM7F_iCBE8toWOmJMK3us0",
//         id: [Object],
//         snippet: [Object],
//       },
//       {
//         kind: "youtube#searchResult",
//         etag: "HnZO1Vj8K44RGdNiFIOwk8UdG9I",
//         id: [Object],
//         snippet: [Object],
//       },
//     ],
//   };
