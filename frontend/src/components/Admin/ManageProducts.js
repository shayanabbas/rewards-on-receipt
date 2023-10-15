```javascript
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { getProducts, addProduct, deleteProduct } from '../../utils/api';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    await addProduct(values);
    fetchProducts();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Points Required',
      dataIndex: 'points',
      key: 'points',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button onClick={() => handleDelete(record.id)}>Delete</Button>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal title="Add Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item label="Product Name" name="name" rules={[{ required: true, message: 'Please input the product name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Points Required" name="points" rules={[{ required: true, message: 'Please input the points required!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
};

export default ManageProducts;
```