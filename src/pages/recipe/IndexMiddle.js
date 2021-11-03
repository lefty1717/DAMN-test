import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HotCard from "./HotCard";
import RecommendCard from "./RecommendCard";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function IndexMiddle() {
  const [hitoRecipes, setHitoRecipes] = useState([]);
  const query_hitoRecipes = query(
    collection(db, "recipes"),
    where("likes", ">=", 80)
  );

  const fetchHitoRecipes = async () => {
    const querySnapshot = await getDocs(query_hitoRecipes);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setHitoRecipes([...hitoRecipes, { ...doc.data(), id: doc.id }]);
      console.log({ ...doc.data(), id: doc.id });
    });
    console.log("ob");
  };
  console.log(hitoRecipes);
  useEffect(() => {
    fetchHitoRecipes();
  }, []);
  return (
    <div className="recipeIndexMiddle">
      <div className="recipeIndexMiddle__title">
        <h4>熱門討論</h4>
        <div className="recipeIndexMiddle__more">
          <span>更多</span>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="recipeIndexMiddle__cards">
        {hitoRecipes?.map((item) => (
          <HotCard key={item.id} data={item} />
        ))}
        {/* <HotCard />
        <HotCard />
        <HotCard /> */}
      </div>
      <div className="recipeIndexMiddle__title">
        <h4>推薦</h4>
      </div>
      <div className="recipeIndexMiddle__cards-1">
        <div className="recipeIndexMiddle__cards-2">
          <RecommendCard />
          <RecommendCard />
        </div>
      </div>
    </div>
  );
}

export default IndexMiddle;
