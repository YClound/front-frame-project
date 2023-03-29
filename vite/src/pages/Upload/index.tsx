import React, { useState } from 'react';
import classnames from 'classnames';
import { uploadApi, mergedApi } from './serve';
import { createChunk } from './utils';
import styles from './index.module.less';

type IUploadList = {
  file: File | Blob,
  fileName: string;
  index: any;
  chunkName: string;
}

const Upload = () => {
  const [list, setList] = useState<{ file: File, value: string | ArrayBuffer | null }[]>([]);

  const uploadFile = async (list: IUploadList[]) => {
    const files = list[0].file;
    const requestList = list.map(({ file, fileName, index, chunkName }) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName)//文件名
      formData.append('chunkName', chunkName)//切片名
      formData.append('index', index)
      return { formData, index };
    }).map(({ formData, index }) => uploadApi(formData).then((data: any) => {
      console.log(data);
      let p = document.createElement('p')
      p.innerHTML = `${list[index].chunkName}--${data.message}`;
      document.getElementById('progress')?.appendChild(p);
    }))

    await Promise.all(requestList);
    mergedApi({ size: files.size, name: files.name });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!list || !list.length) {
      alert('请先上传图片')
      return;
    }

    const [{ file: files }] = list;
    const chunkList = createChunk(files, 1024 * 5);
    const uploadList = chunkList.map(({ file }, index) => ({
      index,
      file,
      percent: 0,
      size: file.size,
      chunkName: `${files.name}-${index}`,
      fileName: files.name,
    }))
    uploadFile(uploadList);
  }

  const handleInputChange = (event: any) => {
    const { files } = event.target;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      setList((old) => [...old, { value: reader.result, file: files[0] }]);
    };
  }

  return <form className={classnames(styles['file-upload'], 'flex center column')} onSubmit={handleSubmit}>
    <div className={classnames(styles['upload-item'], 'flex center')}>
      <div className={classnames(styles['upload-list'], 'flex center')}>
        {
          list.map((item, index) => <div className={styles['upload-list-item']} key={`${item.value}-${index}`}>
            <img src={item.value || ''} alt="" />
          </div>)
        }
      </div>
      <div className={classnames(styles['upload-icon'], 'flex center column')}>
        <span>+</span>
        <span>upload</span>
        <input type='file' name='file' multiple onChange={handleInputChange}></input>
      </div>
    </div>

    <div id='progress'></div>

    <button type='submit'>上传图片</button>
  </form>
}

export default Upload;