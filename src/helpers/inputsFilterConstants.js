import { Input, Form } from 'antd';

export const handleInputsFilter = (pathname) => {
    switch (pathname) {
        case '/organ-certifications/list':
            return (
                <>
                    <Form.Item name="fullNameOrganCertification">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Полное наименование организации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="area">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Область сертификации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="inn">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="ИНН"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="certificateDate">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Дата сертификации"
                        ></Input>
                    </Form.Item>
                </>
            );

        case '/organ-certification-experts/list':
            return (
                <>
                    {/* <Form.Item name="area">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder=""
                        ></Input>
                    </Form.Item> */}

                    <Form.Item name="expertName">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Фамилия, имя, отчество эксперта"
                        ></Input>
                    </Form.Item>

                    <Form.Item name="certificateNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="№ сертификата (аттестата"
                        ></Input>
                    </Form.Item>

                    <Form.Item name="valid">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Срок действия сертификата"
                        ></Input>
                    </Form.Item>
                </>
            );

        case '/certificates/list':
            return (
                <>
                    <Form.Item name="companyName">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Полное наименование организации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="certificateDate">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Дата сертификата"
                        ></Input>
                    </Form.Item>
                </>
            );

        default:
            return (
                <>
                    <Form.Item name="registrationСompany">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Держатель"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="fullName">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Полное наименование организации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="registrationNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Регистрационный номер"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="registrationDate">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Дата регистрации"
                        ></Input>
                    </Form.Item>
                </>
            );
    }
};
