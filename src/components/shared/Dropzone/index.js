import { useState, useCallback } from 'react';

import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';

import {
    StyledDropzone,
    StyledHintMessage,
    StyledRemoveButton
} from 'components/shared/Dropzone/styled';
import { readUploadedFileAsUrl } from 'utils/helpers/file';

const Dropzone = ({ dropzoneOptions, onRemove, className, onChange, width, hintMessage }) => {
    const [previewUrl, setPreviewUrl] = useState();

    const onDrop = useCallback(
        acceptedFiles => {
            Promise.all(acceptedFiles.map(file => readUploadedFileAsUrl(file))).then(urls => {
                onChange(urls);
                setPreviewUrl(urls[0]);
            });
        },
        [onChange, setPreviewUrl]
    );

    const onDropAccepted = useCallback(() => {
        console.log('accepted');
        dropzoneOptions.onDropAccepted();
    }, []);
    const onDropRejected = useCallback((...args) => {
        console.log('rejected');
        dropzoneOptions.onDropRejected(...args);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        ...dropzoneOptions,
        onDrop,
        onDropAccepted,
        onDropRejected
    });
    const showRemoveButton = !!previewUrl && !!onRemove;

    const handleOnRemove = e => {
        e.stopPropagation();

        onRemove();
    };

    return (
        <div>
            <StyledDropzone
                {...getRootProps()}
                className={className}
                isDragActive={isDragActive}
                width={width}
                previewUrl={previewUrl}
            >
                <input {...getInputProps()} />
                {showRemoveButton && (
                    <StyledRemoveButton onClick={handleOnRemove} size="small">
                        <CloseIcon />
                    </StyledRemoveButton>
                )}
                {isDragActive ? <ArrowCircleDownIcon /> : <ImageIcon />}
            </StyledDropzone>
            <StyledHintMessage>{hintMessage}</StyledHintMessage>
        </div>
    );
};

Dropzone.propTypes = {
    onChange: PropTypes.func.isRequired,
    dropzoneOptions: PropTypes.object,
    className: PropTypes.string,
    hintMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    width: PropTypes.string,
    onRemove: PropTypes.func
};
Dropzone.defaultProps = {
    dropzoneOptions: {},
    className: '',
    hintMessage: '',
    width: undefined,
    onRemove: () => {}
};

export default Dropzone;
