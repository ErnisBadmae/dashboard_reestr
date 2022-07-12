import { Table, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRequestSdsList } from '../../store/entries/actions/getEntries';
import { getReportTableColumns } from '../../helpers/reportsColumnTables';

const { Content } = Layout;

export const TableReports = ({ currentLabels }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestSdsList());
    }, [dispatch]);

    const { reportProfSdcCount } = useSelector((state) => state.reports);
    const { reportProfSdcYears } = useSelector((state) => state.reports);
    const { reportProfSdcMonth } = useSelector((state) => state.reports);
    const { reportProfSdcExperts } = useSelector((state) => state.reports);

    const getDataSource = (reportType) => {
        switch (reportType) {
            case 'years':
                return reportProfSdcYears?.data?.map((el) => ({
                    year: el.year,
                    sdcTitle: el.register_sdc_count.cnt,
                    ocTitle: el.register_oc_count.cnt,
                    expertTitle: el.register_oc_certified_experts_count.cnt,
                    certificateTitle:
                        el.register_oc_issued_certificates_count.cnt,
                }));

            case 'months':
                return reportProfSdcMonth?.data?.map((el) => ({
                    month: el.monthName,
                    sdcTitle: el.register_sdc_count.cnt,
                    ocTitle: el.register_oc_count.cnt,
                    expertTitle: el.register_oc_certified_experts_count.cnt,
                    certificateTitle:
                        el.register_oc_issued_certificates_count.cnt,
                }));

            case 'experts':
                return [
                    {
                        announced_count_title:
                            reportProfSdcExperts?.data?.announced_count.cnt,
                        admitted_count_title:
                            reportProfSdcExperts?.data?.admitted_count.cnt,
                        certified_count_title:
                            reportProfSdcExperts?.data?.certified_count.cnt,
                        certification_failed_count_title:
                            reportProfSdcExperts?.data
                                ?.certification_failed_count.cnt,
                    },
                ];
            default:
                return [
                    {
                        register_sdc_count_title:
                            reportProfSdcCount?.data?.register_sdc_count.cnt,
                        register_oc_count_title:
                            reportProfSdcCount?.data?.register_oc_count.cnt,
                        register_oc_certified_experts_count_title:
                            reportProfSdcCount?.data
                                ?.register_oc_certified_experts_count.cnt,
                        register_oc_issued_certificates_count_title:
                            reportProfSdcCount?.data
                                ?.register_oc_issued_certificates_count.cnt,
                    },
                ];
        }
    };

    const dataSource = getDataSource(currentLabels);

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={getReportTableColumns(currentLabels)}
                        dataSource={dataSource}
                        className="registry-sro__table"
                        size="medium"
                        rowKey={(obj) => obj.id}
                    />
                </div>
            </Content>
        </>
    );
};
