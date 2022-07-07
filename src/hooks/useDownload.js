import { useRef, useState } from 'react';

// const { ref, url, download } = useDownloadFile({apiDefinition: dispatch(saveFile)})

export const useDownloadFile = ({
    data,
    //     preDownloading,
    //     postDownloading,
    onError,
    // getFileName,
}) => {
    const ref = useRef(null);
    const [url, setFileUrl] = useState();
    //     const [name, setFileName] = useState();
    // console.log(apiDefinition);

    const download = () => {
        const url = URL.createObjectURL(new Blob([data]));
        setFileUrl(url);

        //   setFileName(getFileName());
        ref.current?.click();
        //   postDownloading();
        URL.revokeObjectURL(url);
    };
    const name = new Date();

    return {
        download,
        ref,
        url,
        name,
    };
};
