import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

function Reports2(props) {
    const dispatch = useDispatch();
    const { trata } = useSelector((state) => state.trata);

    const [data, setData] = useState({});

    useEffect(() => {}, []);
    return <div></div>;
}

export default Reports2;
