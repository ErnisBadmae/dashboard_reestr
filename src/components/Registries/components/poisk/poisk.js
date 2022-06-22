import './poisk.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';

export const Poisk = () => {
    const { Search } = Input;

    const [data, setData] = useState();
    const [value, setValue] = useState('');

    const handleReset = () => {};
    const handleSearch = async (e) => {
        // e.preventDefault();
        //    return await axios
        //   .get(`http://localhost:3000/table?q=${value}`)
        //   .then((response) => {
        //       setData(response.data);
        //       setValue('');
        //   })
        //   .catch((err) => console.log(err));
        console.log(e);
    };
    return (
        <Space direction="vertical">
            <Search
                className="search"
                placeholder="рег. номер , наименование"
                onSearch={handleSearch}
                style={{
                    width: 200,
                }}
            />
        </Space>
        // <div className="search">
        //   {/* <div className={isActive ? 'search-placeholder-active' : 'search-placeholder'}> */}
        //     {/* <p>рег. номер , наименование</p> */}
        //   {/* </div> */}
        //   <input
        //     // onClick={ToggleClass}
        //     type="text"
        //     placeholder="рег. номер , наименование"
        //   />
        //   <SearchOutlined className="icon" />
        // </div>
    );
};
