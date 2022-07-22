import React from 'react';
import { Spin } from 'antd';

import './spinner.scss';

function Spinner(props) {
    return (
        //    <div className="main__table">
        <div className="spinner">
            <Spin tip="Загрузка данных..." className="spinner">
                {/* <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                /> */}
            </Spin>
        </div>
        //    </div>
    );
}

export default Spinner;
