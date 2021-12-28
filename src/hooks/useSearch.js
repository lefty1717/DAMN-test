import { debounce } from "lodash";
import { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const client = algoliasearch(
  // 不知道為什麼 process.env 沒有用....?
  //   process.env.ALGOLIA_SEARCH_APPLICATION_ID,
  //   process.env.ALGOLIA_SEARCH_ONLY_KEY
  "J7DTFHDUTR",
  //   "f21fb275a8c8418dea28825fc344be83"
  // 用上方的 API 只能搜尋，無法做其他的事，所以需要開一支新的
  "1361597443b85106e149185063d7a0ea"
);

function useSearch(index = "ingredients", value) {
  // 第一個 參數 只接受  ingredients, recipes, users 其中一項，沒寫預設就是 ingredients
  // 第二個 參數 是查詢的字或詞
  const algolia = client.initIndex(index);
  const [result, setResult] = useState([]);
  //   const [data, setData] = useState([]);

  const moveDataToAlgolia = async () => {
    // fetch all data from firestore
    const q = query(collection(db, index));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      data.push({ objectID: doc.id, ...doc.data() });
    });
    console.log(data);
    algolia.saveObjects(data);
  };
  useEffect(() => {
    // 將 firestore 的資料，移到 algolia
    // 只需執行一次，之後 algolia 會監聽 firestore 的變化(理論上是)
    moveDataToAlgolia();
  }, []);

  // 每當 index 或是 value 有變動時，就重新 fetchData
  useEffect(() => {
    // 為了避免過多的 request 設置 debounce (900 毫秒) 減少無意義的 request
    const fetchData = debounce(async function (value) {
      console.log("search...");
      try {
        const result = await algolia.search(value, {
          hitsPerPage: 10,
          //   https://www.algolia.com/doc/api-reference/api-parameters/filters/#examples
          //   filters: "",
          //   analytics: true,
          similarQuery: value,
        });
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

export { client };
export default useSearch;
