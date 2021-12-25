import { debounce } from "lodash";
import { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const client = algoliasearch(
  //   process.env.ALGOLIA_SEARCH_APPLICATION_ID,
  //   process.env.ALGOLIA_SEARCH_ONLY_KEY
  "J7DTFHDUTR",
//   "f21fb275a8c8418dea28825fc344be83"
  "1361597443b85106e149185063d7a0ea"
);

function useSearch(index = "ingredients", value) {
  // 第一個 參數 只接受  ingredients, recipes, users 其中一項，沒寫預設就是 ingredients
  // 第二個 參數 是查詢的字或詞
  const algolia = client.initIndex(index);
  const [result, setResult] = useState([]);
  //   const [data, setData] = useState([]);
  const q = query(collection(db, index));

  const moveDataToAlgolia = async () => {
    // fetch all data from firestore
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      data.push({ objectID: doc.id, ...doc.data() });
    });
    console.log(data);
    algolia.saveObjects(data)
  };
  useEffect(() => {
    moveDataToAlgolia();
  }, []);

  // 每當 index 或是 value 有變動時，就重新 fetchData
  useEffect(() => {
    // 為了避免過多的 request 設置 debounce (900 毫秒) 減少無意義的 request
    const fetchData = debounce(async function (value) {
      try {
        const result = await algolia.search(value);
        //   console.log(result?.hits);
        setResult(result?.hits);
      } catch (err) {
        // console.log(err);
        setResult(err);
      }
    }, 900);

    fetchData(value);
  }, [index, value]);

  return result;
}

export default useSearch;
