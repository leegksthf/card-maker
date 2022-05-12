class ImageUploader{
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'zmm3vpyh');
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dbc25ltz2/upload',
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json(); // json함수는 promise를 반환하기 때문에 await 써줌
    }
}

export default ImageUploader;