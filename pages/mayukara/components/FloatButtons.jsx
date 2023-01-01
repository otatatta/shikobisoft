import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const FloatButtons = () => <FloatButton icon={<QuestionCircleOutlined />} tooltip={<div>Documents</div>} />;
export default FloatButtons;