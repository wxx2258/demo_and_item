import React, { useCallback, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Tabs ,Form, Input, Button} from 'antd';
import { ipcRenderer } from "electron";
import { projectPathCache } from './utils/cache';
import {config} from './config/config';
const { TabPane } = Tabs;

const initProjectPaths = {
  ...config,
  ...projectPathCache.getObjCacheValue()
}
function App() {
  const [projectPaths, setProjectPaths] = useState<Object>(initProjectPaths)
  const openVscode = useCallback(
    (path: string) => {
      ipcRenderer.send('openVscode', path)
    },
    [],
  )
  const addProject = useCallback(
    (val) => {
      console.log('val: ', val);
      setProjectPaths((preValue)=> {
        const newVal = {
          ...preValue,
          [val.name]: val.path
        }
        projectPathCache.setObjCache(newVal)
        return newVal
      })
    },
    [setProjectPaths],
  )
  return (
    <div className="App">
      <Tabs defaultActiveKey="快捷打开项目编辑器" >
        <TabPane tab="Tab 1" key="1">
          <Form layout="inline" onFinish={addProject}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                type="text"
                placeholder="名称"
              />
            </Form.Item>
            <Form.Item
              name="path"
              rules={[{ required: true, message: 'Please input your path!' }]}
            >
              <Input
                type="text"
                placeholder="路径"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">新增或修改</Button>
          </Form>
          <div className="tab1_button-list">
            {
              Object.keys(projectPaths).map(key=> {
                return <Button className="tab1_button-list_button" key={key} onClick={()=> {
                  // @ts-ignore
                  openVscode(projectPaths[key])
                }}>打开{key}</Button>
              })
            }
          </div>
          
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      
    </div>
  );
}

export default App;
