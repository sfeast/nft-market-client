export const readUploadedFileAsUrl = inputFile => {
    const FR = new FileReader();

    return new Promise((resolve, reject) => {
        FR.onerror = () => {
            FR.abort();
            reject(new DOMException('Problem parsing input file.'));
        };

        FR.onload = () => {
            resolve(FR.result);
        };
        FR.readAsDataURL(inputFile);
    });
};
