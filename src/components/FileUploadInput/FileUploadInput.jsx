import React from 'react';

export const FileUploadInput = (props) => {
    const { id, name, multiple, extensions, onChange } = props;
    const acceptExtensions = extensions.join(',');
    //     console.log('acceptExtensions :', acceptExtensions);
    return (
        <div>
            <label htmlFor={id}> тест</label>
            <input
                accept={acceptExtensions}
                id={id}
                multiple={multiple}
                type="file"
                name={name}
                onChange={onChange}
            />
        </div>
    );
};
