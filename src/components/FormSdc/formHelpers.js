import {
    postExpertOsSdc,
    postOrganSertificationSdc,
    postSdcRequest,
    postDeclarationHolder,
    editCurrentExpertOs,
} from '../../store/proposal/actions';

export const getFormData = (formType, data) => {
    switch (formType) {
        case 'expert':
        case 'editExpert':
            return {
                contractType: data.contractType,
                educationType: data.educationType,
                expertName: data.expertName,
                certificateNumber: data.certificateNumber,
                valid: data.valid.toLocaleDateString('en-CA'),
                area: data.area,
                experience: data.experience,
                introductionDate:
                    data.introductionDate.toLocaleDateString('en-CA'),
                exclusionDate: data.exclusionDate.toLocaleDateString('en-CA'),
                exclusionPosition: data.exclusionPosition,
                snils: data.snils,
                education: data.education,
                educationSpeciality: data.educationSpeciality,
                educationDate: data.educationDate.toLocaleDateString('en-CA'),
                educationOrganization: data.educationOrganization,
            };

        case 'osSdc':
            return {
                //убрать?
                fullNameCompany: data.fullNameCompany,
                fullNameOrganCertification: data.fullNameOrganCertification,
                shortNameOrganCertification: data.shortNameOrganCertification,
                certificateNumber: data.certificateNumber,
                certificateDate:
                    data.certificateDate.toLocaleDateString('en-CA'),
                decisionNumber: data.decisionNumber,
                inn: data.inn,
                ogrn: data.ogrn,
                managerName: data.managerName,
                address: data.address,
                email: data.email,
                phone: data.phone,
                site: data.site,
                area: data.area,
            };
        case 'newSdc':
            return {
                fullName: data.fullName,
                shortName: data.shortName,
                registrationNumber: data.registrationNumber,
                registrationDate:
                    data.registrationDate.toLocaleDateString('en-CA'),
                registrationCompany: data.registrationCompany,
                area: data.area,
                site: data.site,
                //   myFile: data.myFile,
            };
        case 'newHolder':
            return {
                fullName: data.fullName,
                shortName: data.shortName,
                inn: data.inn,
                ogrn: data.ogrn,
                //? исключить
                registrationNumber: data.registrationNumber,
                //? исключить
                registrationDate: data.registrationDate,
                //? исключить
                exclusionDate: data.exclusionDate,
                //? исключить
                area: data.area,
                managerName: data.managerName,
                managerPosition: data.managerPosition,
                address: data.address,
                phone: data.phone,
                email: data.email,
                site: data.site,
            };
        default:
            return {};
    }
};
export const sendData = ({
    formType,
    dispatch,
    navigate,
    formData,
    oSid,
    id,
    expertId,
}) => {
    switch (formType) {
        case 'expert':
            return () => {
                dispatch(postExpertOsSdc({ oSid, formData }))
                    .unwrap()
                    .then(() => {
                        navigate(-1);
                    });
            };
        case 'editExpert':
            return () => {
                dispatch(editCurrentExpertOs({ expertId, formData }))
                    .unwrap()
                    .then(() => {
                        navigate(-1);
                    });
            };
        case 'osSdc':
            return () => {
                dispatch(postOrganSertificationSdc({ id, formData }))
                    .unwrap()
                    .then(() => {
                        navigate(`/request_sdc/${id}`);
                    });
            };
        case 'newSdc':
            return () => {
                dispatch(postSdcRequest({ formData }))
                    .unwrap()
                    .then(({ id }) => navigate(`/request_sdc/${id}`));
            };
        case 'newHolder':
            return () => {
                dispatch(postDeclarationHolder({ id, formData }))
                    .unwrap()
                    .then(() => navigate(`/request_sdc/${id}`));
            };

        default:
            return () => {};
    }
};
