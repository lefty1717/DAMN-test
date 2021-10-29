import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HotCard from './HotCard';
import RecommendCard from './RecommendCard';

function IndexMiddle() {
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
                <HotCard/>
                <HotCard/>
                <HotCard/>
            </div>
            <div className="recipeIndexMiddle__title">
                <h4>推薦</h4>
            </div>
            <div className="recipeIndexMiddle__cards-1">
                <div className="recipeIndexMiddle__cards-2">
                    <RecommendCard/>
                    <RecommendCard/>
                </div>
            </div>
            
        </div>
    )
}

export default IndexMiddle
