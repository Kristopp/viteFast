import React, { useState, useEffect } from 'react';
import { Layout, Typography, Card, Button, Space, message } from 'antd';
import { RocketOutlined, ApiOutlined } from '@ant-design/icons';
import { apiService } from './services/api';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

interface HelloResponse {
  message: string;
  timestamp?: string;
}

interface HealthResponse {
  status: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'unknown' | 'online' | 'offline'>('unknown');

  const checkServerHealth = async () => {
    try {
      const response = await apiService.checkHealth();
      setServerStatus('online');
      message.success(`Server is ${response.status}`);
    } catch {
      setServerStatus('offline');
      message.error('Server is offline');
    }
  };

  const testApiCall = async () => {
    setLoading(true);
    try {
      const response = await apiService.getHello();
      message.success(response.message);
    } catch {
      message.error('Failed to call API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkServerHealth();
  }, []);

  const getStatusColor = () => {
    switch (serverStatus) {
      case 'online': return '#52c41a';
      case 'offline': return '#ff4d4f';
      default: return '#faad14';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        background: '#001529',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <RocketOutlined style={{ color: 'white', fontSize: '24px', marginRight: '12px' }} />
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          ViteFast AI Agent Template
        </Title>
      </Header>

      <Content style={{ padding: '24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={2}>Welcome to ViteFast! 🚀</Title>
                <Paragraph>
                  This is your AI agent project template built with:
                </Paragraph>
                <ul>
                  <li><strong>Backend:</strong> Fastify + TypeBox + Zod</li>
                  <li><strong>Frontend:</strong> Vite + React + TypeScript</li>
                  <li><strong>UI:</strong> Ant Design</li>
                </ul>
              </div>

              <Card
                title="Server Status"
                size="small"
                extra={
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: getStatusColor()
                  }} />
                }
              >
                <Paragraph>
                  Server is currently: <strong style={{ color: getStatusColor() }}>
                    {serverStatus.toUpperCase()}
                  </strong>
                </Paragraph>
                <Button onClick={checkServerHealth}>
                  Check Health
                </Button>
              </Card>

              <Card title="API Test" size="small">
                <Space>
                  <Button
                    type="primary"
                    icon={<ApiOutlined />}
                    loading={loading}
                    onClick={testApiCall}
                  >
                    Test API Call
                  </Button>
                </Space>
              </Card>
            </Space>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
