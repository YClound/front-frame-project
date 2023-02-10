import React, { useState } from 'react';
import classnames from 'classnames';
import { uploadApi, getApi } from './serve';
import styles from './index.module.less';

const Upload = () => {
  const [list, setList] = useState<{ file: FileList, value: string | ArrayBuffer | null }[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formdata = new FormData()
    formdata.append('file', list[0].file);
    formdata.append('fieldname', +new Date + '.png')

    uploadApi(formdata).then(data => {
      console.log(data)
    }, data => {
      console.log(data, 'error')
    });
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

    <button type='submit'>上传图片</button>
  </form>
}

export default Upload;