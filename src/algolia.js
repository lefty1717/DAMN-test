import algoliasearch from "algoliasearch";

const client = algoliasearch(
  //   process.env.ALGOLIA_SEARCH_APPLICATION_ID,
  //   process.env.ALGOLIA_SEARCH_ONLY_KEY
  "J7DTFHDUTR",
  "f21fb275a8c8418dea28825fc344be83"
);

const algolia = client.initIndex("ingredients");

export default algolia;
