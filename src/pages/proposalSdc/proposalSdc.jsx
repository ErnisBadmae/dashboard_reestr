import React from 'react';
import ProposalCard from '../../components/CurrentCard/EditCard/ProposalCard';
import PreviewCardSdc from '../../components/Preview/Preview';

import './proposalSdc.scss';

function ProposalSdc(props) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <PreviewCardSdc />
                    <ProposalCard />
                </div>
            </div>
        </>
    );
}

export default ProposalSdc;
