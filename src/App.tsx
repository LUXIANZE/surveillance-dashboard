import React, { useEffect, useState } from 'react';
import { ApiOutlined, BgColorsOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Card, Col, ConfigProvider, Layout, Menu, Row, Table, Typography, theme, Image, Divider, Button, Select } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { REPORTS, Report } from './mock-data/reports';
import { RULES, UAUC } from './mock-data/rules';
import { LOCATIONS, Location } from './mock-data/location';
import { RULE_1_ACTION_ITEMS_SUGGESTIONS, RULE_2_ACTION_ITEMS_SUGGESTIONS } from './mock-data/action-items';

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedReport, setSelectedReport] = useState<Report>()
  const [selectedReportRule, setSelectedReportRule] = useState<UAUC>()
  const [selectedReportLocation, setSelectedReportLocation] = useState<Location>()
  const [actionItemOptions, setActionItemOptions] = useState<{ label: string, value: string }[]>()

  useEffect(() => {
    // clean up states
    setSelectedReportRule(undefined)
    setSelectedReportLocation(undefined)
    setActionItemOptions(undefined)

    // re-init states
    if (selectedReport) {
      setSelectedReportRule(RULES.find(rule => rule.id === selectedReport.ruleId))
      setSelectedReportLocation(LOCATIONS.find(location => location.id === selectedReport.locationId))
      if (selectedReport.ruleId === 1) {
        setActionItemOptions(RULE_1_ACTION_ITEMS_SUGGESTIONS)
      } else {
        setActionItemOptions(RULE_2_ACTION_ITEMS_SUGGESTIONS)
      }
    }
  }, [selectedReport])

  function handleSearch(value: string): void {
    console.log('Searching >>: ', value)
    if (selectedReport) {
      let suggestions = selectedReport.ruleId === 1 ? RULE_1_ACTION_ITEMS_SUGGESTIONS : RULE_2_ACTION_ITEMS_SUGGESTIONS

      if (Boolean(value)) {
        suggestions = [{ label: value, value: value }, ...suggestions]
      }

      console.log('suggestions >>: ', suggestions)
      setActionItemOptions(suggestions)
    }
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <div className="App">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, .2)',
              borderRadius: 6,
            }} />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                (icon, index) => ({
                  key: String(index + 1),
                  icon: React.createElement(icon),
                  label: `nav ${index + 1}`,
                }),
              )}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} >
              <div style={{ margin: '10px 30px' }}>
                <Typography.Title level={4}>Action Items Auto Suggestion</Typography.Title>
              </div>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <Row gutter={16}>
                <Col span={10}>
                  <Card bodyStyle={{ padding: '10px 0px', borderRadius: '0 0 8px 8px' }}>
                    <Table pagination={false} dataSource={REPORTS} columns={[{
                      key: 'id',
                      render: (item) => <Row key={item.id} onClick={() => setSelectedReport(item)}>
                        <Col span={2}>
                          {item.ruleId === 1 ? <ApiOutlined /> : <BgColorsOutlined />}
                        </Col>
                        <Col span={22}>
                          {RULES.find(rule => rule.id === item.ruleId)?.rule}
                        </Col>
                      </Row>
                    }]}>
                    </Table>
                  </Card>
                </Col>
                <Col span={14}>
                  {selectedReport ?
                    <Card title={selectedReportRule?.rule} bordered={false} style={{ width: '100%' }}>
                      <Row>
                        <Col span={24}><Image src={selectedReport.imageUrl} fallback="data:image/png;base64,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" /></Col>
                      </Row>
                      <Divider />
                      <Row>
                        <Col span={4}>Location</Col>
                        <Col span={20}>{`${selectedReportLocation?.office}, Level ${selectedReportLocation?.floor}, ${selectedReportLocation?.room}`}</Col>
                      </Row>
                      <Row>
                        <Col span={4}>Date Time</Col>
                        <Col span={20}>{selectedReport.dateTime.toLocaleString()}</Col>
                      </Row>
                      <Row>
                        <Col span={4}>Action Item</Col>
                        <Col span={20}>
                          <Select
                            showSearch
                            onSearch={handleSearch}
                            options={actionItemOptions}
                            placeholder='Select suggested action item or create new action item'
                            filterOption={() => true}
                            style={{ width: '100%' }}
                            notFoundContent={null}></Select>
                        </Col>
                      </Row>
                      <Divider />
                      <Row>
                        <Col span={20}></Col>
                        <Col span={4}><Button type='primary' onClick={() => window.location.reload()}>Submit</Button></Col>
                      </Row>
                    </Card> :
                    <Card bordered={false} style={{ width: '100%' }}>
                      <Typography.Text>Please Select A Report</Typography.Text>
                    </Card>
                  }
                </Col>
              </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  )
}

export default App;