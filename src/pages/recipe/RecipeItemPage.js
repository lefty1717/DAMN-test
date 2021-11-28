import React, { useEffect, useState } from "react";
import pasta from "../../images/pasta.jpg";
import Tabs from "./Tabs";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function RecipeItem({ propsData }) {
  const [data, setData] = useState(null);
  console.log(data)
  let params = useParams();

  const fetchData = async () => {
    const docRef = doc(db, "recipes", params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
    if (propsData) {
      setData(propsData);
    }
  }, []);
  return (
    <div className="recipeItem__container">
      <div className="recipeItem__wrap">
        <img src={data?.thumbnail?.url} alt="" />
        <div className="recipeItem__box">
          <h4>{data?.name}</h4>
        </div>
      </div>
      <Tabs data={data} />
    </div>
  );
}

export default RecipeItem;
