import React from 'react';
import { useState } from 'react';
import { ButtonRegistry } from '../../components/Buttons/button-registry/button-registry';
import EditProposalCurrentSdc from '../../components/CurrentCard/EditCard/EditProposalCurrentSdc';
import FileUploadInput from '../../components/FileUploadInput/FileUploadInput';

import PreviewCardSdc from '../../components/Preview/Preview';

import './proposalSdc.scss';

function ProposalSdc(props) {
    const [isPreviewInfoMode, setIsPreviewInfoMode] = useState(true);
    const [activeBtn, setActiveBtn] = useState(false);

    return (
        <>
            <div className="card-container">
                <div className="card">
                    {/* <ButtonRegistry
                        text={
                            activeBtn
                                ? 'Скрыть подробности'
                                : 'Смотреть подробнее'
                        }
                        onClick={() => {
                            setIsPreviewInfoMode(!isPreviewInfoMode);
                            setActiveBtn(!activeBtn);
                        }}
                    /> */}

                    {/* {isPreviewInfoMode ? ( */}
                    {/* <PreviewCardSdc /> */}
                    {<EditProposalCurrentSdc />}

                    {/* ) : (
                        <CurrentProposalSdc />
                    )} */}
                </div>
            </div>
        </>
    );
}

export default ProposalSdc;
