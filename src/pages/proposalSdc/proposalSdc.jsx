import React from 'react';
import ProposalCard from '../../components/CurrentCard/ProposalCard';
import OsSdc from '../../components/OsSdc/OsSdc';
import PreviewCardSdc from '../../components/Preview/Preview';
import Document from '../../components/Document/Document';

import './proposalSdc.scss';

function ProposalSdc(props) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <PreviewCardSdc />
                    <ProposalCard />
                    <OsSdc />
                    <Document />
                </div>
            </div>
        </>
    );
}

export default ProposalSdc;
