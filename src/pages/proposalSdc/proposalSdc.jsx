import React from 'react';
import { useState } from 'react';
import { ButtonRegistry } from '../../components/Buttons/button-registry/button-registry';
import CurrentProposalSdc from '../../components/CurrentCard/CurrentProposalSdc';
import PreviewCardSdc from '../../components/Preview/Preview';

function ProposalSdc(props) {
    const [isPreviewInfoMode, setIsPreviewInfoMode] = useState(true);

    return (
        <>
            {isPreviewInfoMode ? <PreviewCardSdc /> : <CurrentProposalSdc />}
            <ButtonRegistry
                text="Preview mode"
                onClick={() => {
                    setIsPreviewInfoMode(!isPreviewInfoMode);
                }}
            />
        </>
    );
}

export default ProposalSdc;
