import React from 'react';
import AddFile from '../../components/Buttons/Addfile/AddFile';
import EditBtn from '../../components/Buttons/EditBtn/EditBtn';

function Test(props) {
    return (
        <div className="test-component">
            Сведения о повышении квалификации
            <AddFile />
            <EditBtn />
        </div>
    );
}

export default Test;
