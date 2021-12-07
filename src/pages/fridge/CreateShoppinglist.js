import React from 'react';
import TopBar from '../../components/fridge/CreateShoppinglistBar';
import UploadButtons from '../../components/fridge/UploadImage';
import FreeSolo from '../../components/fridge/Input';
import BasicButtons from  '../../components/fridge/SubmitButton';

function CreateShoppinglist () {
    return(
<div className="CreateShoppinglist">
    <TopBar />
    <UploadButtons />
    <div className="input-container"> 
        <div className="input-foodname">
            <h5>食物名稱：</h5>
            <FreeSolo />
    </div>
    <div className="input-amount">
    <h5>數 量：</h5>
    <FreeSolo />
    </div>
    <div className="input-unit">
    <h5>單 位：</h5>
    <FreeSolo />
    </div>
    <div className="input-remark">
    <h5>備 註：</h5>
    <FreeSolo />
    </div>
    <div className="submit">
    <BasicButtons/>
    </div>

    </div>
    </div>
    );
}

export default CreateShoppinglist;
