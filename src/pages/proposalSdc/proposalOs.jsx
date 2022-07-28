import React from 'react';
import ProposalCardOs from '../../components/CurrentCard/ProposalCardOs';
// import OsSdc from '../../components/OsSdc/OsSdc';
// import PreviewCardSdcOs from '../../components/Preview/Preview';
import Document from '../../components/Document/Document';

import './proposalSdc.scss';

function ProposalOs(props) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    {/* <PreviewCardOs /> */}
                    <ProposalCardOs />
                    {/* <Os /> */}
                    <Document />
                </div>
            </div>
        </>
    );
}

export default ProposalOs;
