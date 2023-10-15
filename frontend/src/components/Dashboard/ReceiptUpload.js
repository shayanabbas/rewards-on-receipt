```javascript
import React, { useState } from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { uploadReceipt } from '../../utils/api';

const ReceiptUpload = () => {
  const { user } = useAuth0();
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('receipt', file);
    formData.append('userId', user.sub);
    uploadReceipt(formData);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <Button
        type="primary"
        icon={<UploadOutlined />}
        onClick={onFileUpload}
      >
        Upload
      </Button>
    </div>
  );
};

export default ReceiptUpload;
```