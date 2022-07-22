import { Input, Form } from 'antd';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';

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
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="Выберите дату"
                        />
                    </Form.Item>
                </>
            );

        case '/organ-certification-experts/list':
            return (
                <>
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
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="Выберите дату"
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
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="Выберите дату"
                        />
                    </Form.Item>
                </>
            );

        default:
            return (
                <>
                    <Form.Item name="registrationCompany">
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
                        <InputMask
                            formatChars={{
                                9: '[0-9]',
                                a: '[A-Za-z]',
                                '*': '[А-Яа-яЁёA-Za-z]',
                            }}
                            className="current__input date"
                            mask="РОСС RU.99999.99***9"
                            placeholder="Регистрационный номер"
                        />
                    </Form.Item>
                    <Form.Item name="registrationDate">
                        <DatePicker
                            utcOffset={0}
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                localState.set(date);
                            }}
                            selected={localState.value}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="Выберите дату"
                        />
                    </Form.Item>
                </>
            );
    }
};
