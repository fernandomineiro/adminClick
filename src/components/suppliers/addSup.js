import { Button, Card, Col, Form, Input, Row, Typography } from "antd";

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addSupplier } from "../../redux/actions/supplier/addSupplierAction";
import UploadMany from "../Card/UploadMany";
import styles from './AddSup.module.css';

const AddSup = () => {
  const dispatch = useDispatch();
  const { Title } = Typography;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      dispatch(addSupplier(values));

      form.resetFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <Row className="mr-top" justify="space-between" gutter={[0, 30]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={11}
          xl={11}
          className="rounded column-design">
          <Card bordered={false}>
            <Title level={4} className="m-2 text-center">
              Add fornecedores
            </Title>
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 7,
              }}
              labelWrap
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Nome"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input supplier name!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Telefone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input supplier Phone!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Endereço"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input supplier Address!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Senha"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input supplier Address!",
                  },
                ]}>
                <Input />
              </Form.Item>

              {/* //Due amount droped */}

              <Form.Item
                style={{ marginBottom: "10px" }}
                className={styles.addSupplierBtnContainer}
                >
                <Button type="primary" htmlType="submit" shape="round">
                  Add Fornecedor
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} className="rounded column-design">
          <Card bordered={false} className={styles.importCsvCard}>
            <Title level={4} className="m-2 text-center">
              Import From CSV
            </Title>
            <UploadMany urlPath={"supplier"} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddSup;
