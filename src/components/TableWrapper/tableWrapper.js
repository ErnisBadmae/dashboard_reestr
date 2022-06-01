import { Layout, Button } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const TableWrapper = () => {
    return (
        <Content style={{ padding: '0 20px' }}>
            <div>
                <div className="registry-sro__buttons-wrapper">
                    <Button
                        className="custom-button"
                        //   onClick={() => setFilterModalVisible(false)}
                    >
                        Добавить заявку
                    </Button>
                </div>
                <Outlet />
            </div>
        </Content>
    );
};
