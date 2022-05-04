import { Space, Input } from 'antd';
// import { useState } from 'react';
// // import axios from 'axios';

import './search.scss';

export const Search = () => {
    //     const [data, setData] = useState();
    //     const [value, setValue] = useState('');

    const handleSearch = async (e) => {
        // e.preventDefault();
        //    return await axios
        //        .get(`http://localhost:3000/table?q=${value}`)
        //        .then((response) => {
        //            setData(response.data);
        //            setValue('');
        //        })
        //        .catch((err) => console.log(err));
        console.log(e);
    };
    return (
        <Space direction="vertical">
            <Input.Search
                className="search"
                placeholder="рег. номер , наименование"
                onSearch={handleSearch}
                style={{
                    width: 200,
                }}
            />
        </Space>
    );
};
