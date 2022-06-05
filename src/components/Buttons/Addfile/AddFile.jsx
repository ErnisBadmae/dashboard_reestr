import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function AddFile(props) {
    return (
        <div>
            <Button
                type="primary"
                style={{ margin: 50 }}
                icon={<DownloadOutlined />}
            >
                Загрузить
            </Button>
        </div>
    );
}

export default AddFile;
