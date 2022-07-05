import { Input, Form } from 'antd';
import DatePicker from 'react-datepicker';

export const handleInputsFilter = (pathname, localState) => {
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
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                localState.set(date);
                            }}
                            showYearDropdown
                            yearDropdownItemNumber={8}
                            // scrollableYearDropdown
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
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
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                localState.set(date);
                            }}
                            showYearDropdown
                            yearDropdownItemNumber={8}
                            // scrollableYearDropdown
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
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
                    <Form.Item name="companyInn">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Инн компании"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="number">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Номер сертификата"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="certificateDate">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                localState.set(date);
                            }}
                            showYearDropdown
                            yearDropdownItemNumber={8}
                            // scrollableYearDropdown
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
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
                        <DatePicker
                            utcOffset={0}
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                localState.set(date);
                            }}
                            showYearDropdown
                            yearDropdownItemNumber={8}
                            // scrollableYearDropdown
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
                    </Form.Item>
                </>
            );
    }
};
