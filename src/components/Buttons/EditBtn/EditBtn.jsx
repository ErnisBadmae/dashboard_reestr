import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './editBtn.scss';

function EditBtn(props) {
    return (
        <div>
            <Button
                type="primary"
                style={{ margin: 50 }}
                icon={<EditOutlined />}
            >
                Редактировать
            </Button>
        </div>
    );
}

export default EditBtn;
