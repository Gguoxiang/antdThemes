<template>
  <a-locale-provider :locale="zh_CN">
    <a-config-provider>
      <template #renderEmpty>
        <div style="text-align: center">
          <img
            width="64px"
            src="./assets/noData3.png"
          />
          <p style="font-size: 14px; color: #B5BECB; letter-spacing: 1px;">暂无数据</p>
        </div>
      </template>
    <div id="app-show">
      <div class="component">
        <div class="name">图标</div>
        <div class="item">
          <div class="left">示例</div>
          <div class="right">
            <div>
              <a-space>
                <y-icon type="icon-youxiangshuangjiantou" size="16" class="custom-icon"/>
                <y-icon type="icon-a-2022xinsexiaoyun-15" size="20" self class="custom-icon"/>
                <y-icon type="icon-zuoxiangshuangjiantou" size="24" class="custom-icon"/>
              </a-space>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">自由配置</div>
          <div class="right">
            <div>
              <a-space direction="vertical">
                <span>图标名称：<a-input v-model="iconStyle.name"></a-input></span>
                <span>颜色：<a-input v-model="iconStyle.color"></a-input></span>
                <span>大小：<a-input v-model="iconStyle.size"></a-input></span>
                <span>鼠标小手：<a-switch v-model="iconStyle.cursor" /></span>
                <span>hover色：<a-input v-model="iconStyle.hover"></a-input></span>
                <span>多色图自身色：<a-switch v-model="iconStyle.self" /></span>
                <span>显示的图标：<y-icon :type="iconStyle.name" :color="iconStyle.color" :cursor="iconStyle.cursor" :self="iconStyle.self" :hover="iconStyle.hover" :size="iconStyle.size"/></span>
              </a-space>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">按钮</div>
        <div class="item">
          <div class="left">确定按钮</div>
          <div class="right">
            <a-button type="primary">
              Primary
            </a-button>
            <a-button type="primary" disabled>
              置灰
            </a-button>
          </div>
        </div>
        <div class="item">
          <div class="left">取消按钮</div>
          <div class="right">
            <a-button>Default</a-button>
            <a-button type="primary" disabled>
              置灰
            </a-button>
          </div>
        </div>
        <div class="item">
          <div class="left">无边框按钮</div>
          <div class="right">
            <a-button type="link">
              无边框
            </a-button>
            <a-button type="link" disabled>
              无边框置灰
            </a-button>
          </div>
          <div class="tip">注意：无边框按钮可以用作超链接，与超链接样式一致</div>
        </div>
      </div>
      <div class="component">
        <div class="name">分割线</div>
        <div class="item">
          <div class="left">竖线</div>
          <div class="right">
            <a-space>
              Text
              <a-divider type="vertical" />
              <a href="#">Link</a>
              <a-divider type="vertical" />
              <a href="#">Link</a>
            </a-space>
          </div>
        </div>
        <div class="item">
          <div class="left">实线</div>
          <div class="right">
            <a-space direction="vertical">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider>With Text</a-divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </a-space>
          </div>
        </div>
        <div class="item">
          <div class="left">虚线</div>
          <div class="right">
            <a-space direction="vertical">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider dashed />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider dashed>With Text</a-divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a-divider dashed />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </a-space>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">警告提示</div>
        <div class="item">
          <div class="left">基本样式</div>
          <div class="right">
            <a-space direction="vertical">
              <a-alert message="Success Tips" type="success" show-icon>
              </a-alert>
              <a-alert message="Informational Notes" type="info" show-icon></a-alert>
              <a-alert message="Warning" type="warning" show-icon></a-alert>
              <a-alert message="Error" type="error" show-icon></a-alert>
            </a-space>
          </div>
        </div>
        <div class="item">
          <div class="left">带提示</div>
          <div class="right">
            <a-space direction="vertical">
              <a-alert
                message="Success Tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                show-icon
              >
                <template #icon><y-icon type="icon-wancheng-xiao" size="16" color="#04CB81" class="custom-icon"/></template>
              </a-alert>
              <a-alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                show-icon
              >
                <template #icon><y-icon type="icon-xinxi-xiao" size="16" color="#0569FF" class="custom-icon"/></template>
              </a-alert>
              <a-alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                show-icon
              >
                <template #icon><y-icon type="icon-jingshi-xiao" size="16" color="#FF9B00" class="custom-icon"/></template>
              </a-alert>
              <a-alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                show-icon
              >
                <template #icon><y-icon type="icon-baocuo-xiao" size="16" color="#FF3131" class="custom-icon"/></template>
              </a-alert>
            </a-space>
          </div>
          <div class="tip">注意：带描述的提示的图标都是线框类型的，这是antd组件源码逻辑，如要修改需要手动修改源码</div>
        </div>
      </div>
      <div class="component">
        <div class="name">回到顶部</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-back-top />
            滚动页面，右下角出现回到顶部按钮
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">徽标数</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-space :size="20">
              <a-badge :count="9">
                <a-avatar>U</a-avatar>
              </a-badge>
              <a-badge :count="99" :overflow-count="10">
                <a-avatar>U</a-avatar>
              </a-badge>
              <a-badge :count="100">
                <a-avatar>U</a-avatar>
              </a-badge>
            </a-space>
          </div>
        </div>
        <div class="item">
          <div class="left">点</div>
          <div class="right">
            <a-space>
              <a-badge dot>
                <a-icon type="notification" />
              </a-badge>
              <a-badge dot>
                <a href="#">Link something</a>
              </a-badge>
            </a-space>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">面包屑</div>
        <div class="item">
          <div class="left">竖线</div>
          <div class="right">
            <a-breadcrumb separator="|">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item><a href="#">Application Center</a></a-breadcrumb-item>
              <a-breadcrumb-item><a href="#">Application List</a></a-breadcrumb-item>
              <a-breadcrumb-item>An Application</a-breadcrumb-item>
            </a-breadcrumb>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">日历</div>
        <div class="item">
          <div class="left">时刻选择器</div>
          <div class="right">
            <a-space direction="vertical">
              <a-time-picker :open.sync="open">
                <a-icon slot="suffixIcon" />
                <template slot="addon">
                  <div style="display: flex; justify-content: space-between;">
                    <a-button size="small" @click="handleThisTime">
                      此刻
                    </a-button>
                    <a-button size="small" type="primary" @click="handleClose">
                      确定
                    </a-button>
                  </div>
                </template>
              </a-time-picker>
            </a-space>
          </div>
        </div>
        <div class="item">
          <div class="left">日期选择器</div>
          <div class="right">
            <a-space direction="vertical">
              <a-date-picker :getCalendarContainer="(triggerNode) => triggerNode.parentNode" @change="onChange">
                <template #suffixIcon>
                  <y-icon type="icon-riqi" size="16" color="#5D6E7F" class="custom-icon"/>
                </template>
                <template #prevIcon>
                  <y-icon type="icon-youjiantou" size="16" color="#5D6E7F" class="custom-icon"/>
                </template>
                <template #superNextIcon>
                  <y-icon type="icon-zuojiantou" size="16" color="#5D6E7F" class="custom-icon"/>
                </template>
              </a-date-picker>
              <a-month-picker placeholder="请选择月份" @change="onChange" >
                <template #suffixIcon>
                  <y-icon type="icon-riqi" size="16" color="#5D6E7F" class="custom-icon"/>
                </template>
              </a-month-picker>
              <a-range-picker @change="onChange" />
            </a-space>
          </div>
          <div class="tip">注意：日期组件日期上面的左右箭头无法修改</div>
        </div>
      </div>
      <div class="component">
        <div class="name">卡片</div>
        <div class="item">
          <div class="left">无边框（推荐）</div>
          <div class="right">
            <a-space direction="vertical">
              <a-card title="Card title" :bordered="false">
                <p>Card content Card content Card content Card content Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </a-card>
            </a-space>
          </div>
          <div class="tip">注意：antd卡片是默认有边框的，如果无边框需要传参</div>
        </div>
      </div>
      <div class="component">
        <div class="name">级联选择</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-cascader :options="options" style="width: 300px" >
            </a-cascader>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">复选框</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-checkbox>
              默认
            </a-checkbox>
            <a-checkbox :checked="true">
              选中
            </a-checkbox>
            <a-checkbox :disabled="true">
              置灰
            </a-checkbox>
            <a-checkbox :checked="true" :disabled="true">
              选中置灰
            </a-checkbox>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">折叠面板</div>
        <div class="item">
          <div class="left">竖线</div>
          <div class="right" style="width: 600px">
            <a-collapse v-model="activeKey">
              <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3" disabled>
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <div class="tip">注意：UI提供的组件里没有折叠面板</div>
        </div>
      </div>
      <div class="component">
        <div class="name">抽屉Drawer</div>
        <div class="item">
          <div class="left">抽屉</div>
          <div class="right">
            <div>
              <a-button type="primary" @click="showDrawer2">
                Open
              </a-button>
              <a-drawer
                title="Basic Drawer"
                placement="right"
                :closable="false"
                :visible="visible2"
                :width="800"
                :after-visible-change="afterVisibleChange"
                @close="onClose2"
              >
                <div class="form" style="width: 100%; max-width: 790px">
                  <a-form :form="form" @submit="handleSubmit">
                    <div class="formBox">
                    <a-form-item v-bind="formItemLayout" label="E-mail">
                      <a-input
                        v-decorator="[
                          'email',
                          {
                            rules: [
                              {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                              },
                              {
                                required: true,
                                message: 'Please input your E-mail!',
                              },
                            ],
                          },
                        ]"
                      />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                      <a-input
                        v-decorator="[
                          'password',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Please input your password!',
                              },
                              {
                                validator: validateToNextPassword,
                              },
                            ],
                          },
                        ]"
                        type="password"
                      />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
                      <a-input
                        v-decorator="[
                          'confirm',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Please confirm your password!',
                              },
                              {
                                validator: compareToFirstPassword,
                              },
                            ],
                          },
                        ]"
                        type="password"
                        @blur="handleConfirmBlur"
                      />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout">
                      <span slot="label">
                        <a-tooltip title="What do you want others to call you?">
                          <a-icon type="question-circle-o" />
                        </a-tooltip>
                        Nickname
                      </span>
                      <a-input
                        v-decorator="[
                          'nickname',
                          {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          },
                        ]"
                      />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="Habitual Residence Habitual Residence">
                      <a-cascader
                        v-decorator="[
                          'residence',
                          {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [
                              { type: 'array', required: true, message: 'Please select your habitual residence!' },
                            ],
                          },
                        ]"
                        :options="residences"
                        :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                      />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="Phone Number">
                      <a-input
                        v-decorator="[
                          'phone',
                          {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                          },
                        ]"
                        style="width: 100%"
                      >
                        <a-select
                          :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                          slot="addonBefore"
                          v-decorator="['prefix', { initialValue: '86' }]"
                          style="width: 70px"
                        >
                          <a-select-option value="86">
                            +86
                          </a-select-option>
                          <a-select-option value="87">
                            +87
                          </a-select-option>
                        </a-select>
                      </a-input>
                    </a-form-item>
                    </div>
                  </a-form>
                </div>
                <div
                  :style="{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    padding: '20px',
                    background: '#fff',
                    textAlign: 'right',
                    zIndex: 1,
                  }"
                >
                  <a-button :style="{ marginRight: '8px' }" @click="onClose2">
                    取消
                  </a-button>
                  <a-button type="primary" @click="onClose2">
                    确定
                  </a-button>
                </div>
              </a-drawer>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">下拉菜单</div>
        <div class="item">
          <div class="left">基础用法</div>
          <div class="right">
            <a-dropdown>
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                Hover me <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </a-menu-item>
                <a-menu-item key="3" disabled>
                  3rd menu item（disabled）
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">空状态</div>
        <div class="item">
          <div class="left">基本</div>
          <div class="right">
            <a-empty :image="emptyImg" />
          </div>
          <div class="tip">
            注意：<br />
            1.对于组件中的空状态可以全局一次配置修改图片，如：<br />
            <img
              src="./assets/pic1.png"
            /><br />
            2.对于单独的空状态, 用法如下：<br />
            <img
              src="./assets/pic2.png"
            /><br />
            <img
              src="./assets/pic3.png"
            /><br />
            <img
              src="./assets/pic4.png"
            /><br />
          </div>
        </div>
        <div class="item">
          <div class="left">下拉框</div>
          <div class="right">
            <a-select :getPopupContainer="(triggerNode) => triggerNode.parentNode" :style="style" :options="[]" />
          </div>
        </div>
        <div class="item">
          <div class="left">树形下拉框</div>
          <div class="right">
            <a-tree-select :style="style" :tree-data="[]" />
          </div>
        </div>
        <div class="item">
          <div class="left">表格</div>
          <div class="right" style="width: 60%">
             <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
          </div>
        </div>
        <div class="item">
          <div class="left">大页面的暂无数据</div>
          <div class="right" style="width: 60%;">
            <div style="text-align: center">
              <img
                width="140px"
                src="./assets/noData2.png"
              />
              <p style="font-size: 14px; color: #B5BECB; letter-spacing: 1px;">暂无数据</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">创建空页面</div>
          <div class="right" style="width: 60%;">
            <div style="text-align: center">
              <img
                width="140px"
                src="./assets/noData1.png"
              />
              <p style="font-size: 14px; color: #B5BECB; letter-spacing: 1px;">开始你的XXX之旅吧~</p>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">表单</div>
        <div class="item">
          <div class="left">Form表单</div>
          <div class="right form" style="width: 100%; max-width: 790px">
            <a-form :form="form" @submit="handleSubmit">
              <div class="formBox">
              <a-form-item v-bind="formItemLayout" label="E-mail">
                <a-input
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          validator: validateToNextPassword,
                        },
                      ],
                    },
                  ]"
                  type="password"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
                <a-input
                  v-decorator="[
                    'confirm',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        {
                          validator: compareToFirstPassword,
                        },
                      ],
                    },
                  ]"
                  type="password"
                  @blur="handleConfirmBlur"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="Habitual Residence Habitual Residence">
                <a-cascader
                  v-decorator="[
                    'residence',
                    {
                      initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                      rules: [
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                      ],
                    },
                  ]"
                  :options="residences"
                  :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="Phone Number">
                <a-input
                  v-decorator="[
                    'phone',
                    {
                      rules: [{ required: true, message: 'Please input your phone number!' }],
                    },
                  ]"
                  style="width: 100%"
                >
                  <a-select
                    :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                    slot="addonBefore"
                    v-decorator="['prefix', { initialValue: '86' }]"
                    style="width: 70px"
                  >
                    <a-select-option value="86">
                      +86
                    </a-select-option>
                    <a-select-option value="87">
                      +87
                    </a-select-option>
                  </a-select>
                </a-input>
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout">
                <span slot="label">
                  <a-tooltip title="What do you want others to call you?">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                  Nickname
                </span>
                <a-input
                  v-decorator="[
                    'nickname',
                    {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    },
                  ]"
                />
              </a-form-item>
              </div>
              <template v-bind="tailFormItemLayout">
                <div style="textAlign: right; padding-top: 40px; padding-right: 18px;">
                  <a-button type="primary" html-type="submit">
                    Register
                  </a-button>
                </div>
              </template>
            </a-form>
          </div>
          <div class="tip">注意：<br />1.表单的样式大多自由调整，根据col占位，需要具体项目具体调整<br />2.底部按钮都是另外写，非form组件包含，所以项目自主调整<br />3.表单除底部按钮的内容要用元素单独包裹一层，以在内容过多滚动时不滚动底部按钮<br />4.带下拉框的需要加上属性:getPopupContainer="(triggerNode) => triggerNode.parentNode"，不然下拉框不跟随滚动条滚动<br />5.特别需要注意的是，滚动高度最好要超过下拉框下拉高度的两倍，不然下拉的起始位置异常</div>
        </div>
        <div class="item">
          <div class="left">FormModel 表单</div>
          <div class="right form" style="width: 100%; max-width: 790px">
            <a-form-model
              ref="ruleForm"
              :model="form1"
              :rules="rules1"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <div class="formBox">
              <a-form-model-item ref="name" label="Activity name" prop="name">
                <a-input
                  v-model="form1.name"
                  @blur="
                    () => {
                      $refs.name.onFieldBlur();
                    }
                  "
                />
              </a-form-model-item>
              <a-form-model-item label="Activity zone" prop="region">
                <a-select :getPopupContainer="(triggerNode) => triggerNode.parentNode" v-model="form1.region" placeholder="please select your zone" allowClear>
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item label="Activity time" required prop="date1">
                <a-date-picker
                  v-model="form1.date1"
                  show-time
                  type="date"
                  placeholder="Pick a date"
                  :getCalendarContainer="trigger => trigger.parentNode"
                >
                  <template #suffixIcon>
                    <y-icon type="icon-riqi" size="16" color="#5D6E7F" class="custom-icon"/>
                  </template>
                </a-date-picker>
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Instant delivery" prop="delivery">
                <a-switch v-model="form1.delivery" />
              </a-form-model-item>
              <a-form-model-item label="Activity type" prop="type">
                <a-checkbox-group v-model="form1.type">
                  <a-checkbox value="1" name="type">
                    Online
                  </a-checkbox>
                  <a-checkbox value="2" name="type">
                    Promotion
                  </a-checkbox>
                  <a-checkbox value="3" name="type">
                    Offline
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="Resources" prop="resource">
                <a-radio-group v-model="form1.resource">
                  <a-radio value="1">
                    Sponsor
                  </a-radio>
                  <a-radio value="2">
                    Venue
                  </a-radio>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item label="Activity form" prop="desc">
                <a-input v-model="form1.desc" type="textarea" />
              </a-form-model-item>
              </div>
              <template v-bind="tailFormItemLayout">
                <div style="textAlign: right; padding-top: 40px; padding-right: 18px;">
                  <a-button type="primary" html-type="submit">
                    Register
                  </a-button>
                </div>
              </template>
            </a-form-model>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">输入框</div>
        <div class="item">
          <div class="left">输入框</div>
          <div class="right" style="width: 300px">
            <a-input placeholder="Basic usage" />
          </div>
        </div>
        <div class="item">
          <div class="left">置灰</div>
          <div class="right" style="width: 300px">
            <a-input disabled placeholder="Basic usage" />
          </div>
        </div>
        <div class="item">
          <div class="left">允许清除</div>
          <div class="right" style="width: 300px">
            <a-input allowClear placeholder="Basic usage" />
          </div>
        </div>
        <div class="item">
          <div class="left">搜索</div>
          <div class="right" style="width: 300px">
            <a-input-search placeholder="input search text" >
              <template #suffix>
                <y-icon type="icon-sousuo" size="16" color="#5D6E7F" cursor/>
              </template>
            </a-input-search>
            <br /><br />
            <a-input-search disabled placeholder="input search text" >
              <template #suffix>
                <y-icon type="icon-sousuo" size="16" color="#5D6E7F"/>
              </template>
            </a-input-search>
            <br /><br />
            <a-input-group compact>
              <a-input style="width: calc(100% - 48px)" />
              <a-button type="primary"><y-icon type="icon-sousuo" size="16" color="#fff" cursor/></a-button>
            </a-input-group>
          </div>
        </div>
        <div class="item">
          <div class="left">textarea</div>
          <div class="right" style="width: 300px">
            <a-textarea
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 6 }"
            />
            <div style="margin: 24px 0" />
            <a-textarea
              disabled
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 6 }"
            />
          </div>
        </div>
        <div class="item">
          <div class="left">密码输入框</div>
          <div class="right" style="width: 300px">
            <a-input-password placeholder="input password" />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">数字输入框</div>
        <div class="item">
          <div class="left">数字输入框</div>
          <div class="right" style="width: 300px">
            <a-input-number :min="1" :max="100000" :default-value="3" />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">列表</div>
        <div class="item">
          <div class="left">竖线</div>
          <div class="right" style="width: 1000px">
            <a-table
              :columns="tableColumns"
              :data-source="tableData"
              :row-selection="rowSelection"
              :expanded-row-keys.sync="expandedRowKeys"
              :pagination="false"
            >
              <span slot="operation" slot-scope="v,record">
                <a-space>
                  <a-tooltip title="编辑">
                    <y-icon type="icon-bianji" size="16" cursor/>
                  </a-tooltip>
                  <a-tooltip title="删除">
                    <y-icon type="icon-shanchu" size="16" cursor/>
                  </a-tooltip>
                </a-space>
              </span>
            </a-table>
          </div>
          <div class="tip">注意：表格中的操作栏图标是人工写的，需要在项目中引入新图标组件后修改</div>
        </div>
      </div>
      <div class="component">
        <div class="name">全局提示</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-space>
              <a-button @click="success">
                Success
              </a-button>
              <a-button @click="info">
                Info
              </a-button>
              <a-button @click="error">
                Error
              </a-button>
              <a-button @click="warning">
                Warning
              </a-button>
              <a-button @click="loading">
                Loading
              </a-button>
            </a-space>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">对话框</div>
        <div class="item">
          <div class="left">对话框</div>
          <div class="right">
            <a-button type="primary" @click="showModal">
              Open Modal small
            </a-button>
            <a-button type="primary" @click="showModal1">
              Open Modal middle
            </a-button>
            <a-button type="primary" @click="showModal2">
              Open Modal big
            </a-button>
            <a-modal v-model="visible1" title="Basic Modal" class="modal-small" @ok="handleOk">
              <div class="form" style="width: 100%; max-width: 410px">
                <a-form :form="form" @submit="handleSubmit">
                  <div class="formBox">
                  <a-form-item v-bind="formItemLayout" label="E-mail">
                    <a-input
                      v-decorator="[
                        'email',
                        {
                          rules: [
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please input your E-mail!',
                            },
                          ],
                        },
                      ]"
                    />
                  </a-form-item>
                  <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                    <a-input
                      v-decorator="[
                        'password',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                            {
                              validator: validateToNextPassword,
                            },
                          ],
                        },
                      ]"
                      type="password"
                    />
                  </a-form-item>
                  </div>
                </a-form>
              </div>
            </a-modal>
            <a-modal v-model="visible11" title="Basic Modal" width="680px" class="modal-middle" @ok="handleOk1">
              <div class="form" style="width: 100%; max-width: 530px">
                <a-form :form="form" @submit="handleSubmit">
                  <div class="formBox">
                  <a-form-item v-bind="formItemLayout" label="E-mail">
                    <a-input
                      v-decorator="[
                        'email',
                        {
                          rules: [
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please input your E-mail!',
                            },
                          ],
                        },
                      ]"
                    />
                  </a-form-item>
                  <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                    <a-input
                      v-decorator="[
                        'password',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                            {
                              validator: validateToNextPassword,
                            },
                          ],
                        },
                      ]"
                      type="password"
                    />
                  </a-form-item>
                  </div>
                </a-form>
              </div>
            </a-modal>
            <a-modal v-model="visible12" title="Basic Modal" width="1040px" class="modal-big" @ok="handleOk2">
              <div class="form" style="width: 100%; max-width: 780px">
                <a-form :form="form" @submit="handleSubmit">
                  <div class="formBox">
                  <a-form-item v-bind="formItemLayout" label="E-mail">
                    <a-input
                      v-decorator="[
                        'email',
                        {
                          rules: [
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please input your E-mail!',
                            },
                          ],
                        },
                      ]"
                    />
                  </a-form-item>
                  <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
                    <a-input
                      v-decorator="[
                        'password',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                            {
                              validator: validateToNextPassword,
                            },
                          ],
                        },
                      ]"
                      type="password"
                    />
                  </a-form-item>
                  </div>
                </a-form>
              </div>
            </a-modal>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">通知提醒框</div>
        <div class="item">
          <div class="left">通知提醒框</div>
          <div class="right">
            <a-space>
              <a-button @click="() => openNotificationWithIcon('success')">
                Success
              </a-button>
              <a-button @click="() => openNotificationWithIcon('info')">
                Info
              </a-button>
              <a-button @click="() => openNotificationWithIcon('warning')">
                Warning
              </a-button>
              <a-button @click="() => openNotificationWithIcon('error')">
                Error
              </a-button>
            </a-space>
            <div class="tip">注意：通知提醒框成功、失败、提示、警告的图标都是默认图片，并且是默认线框的图标，修改需要改源码逻辑，可项目中做定制调整,无法更换图标</div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">分页</div>
        <div class="item">
          <div class="left">基本样式</div>
          <div class="right">
            <a-pagination size="small" show-quick-jumper :default-current="2" :total="500" show-size-changer :show-total="total => `共 ${total} 条`" />
          </div>
          <div class="tip">注意：快捷跳转某页的文字是源码内置，修改需要修改源码</div>
        </div>
        <div class="item">
          <div class="left">页码样式</div>
          <div class="right">
            <a-pagination size="small" :total="500" />
          </div>
        </div>
        <div class="item">
          <div class="left">简约样式</div>
          <div class="right">
            <a-pagination simple :default-current="2" :total="50" />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">通知会话框</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-popconfirm
              title="Are you sure delete this task?"
              ok-text="Yes"
              cancel-text="No"
            >
              <a href="#">Delete</a>
            </a-popconfirm>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">气泡卡片</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-popover title="Title">
              <template slot="content">
                <p>Content</p>
                <p>Content</p>
              </template>
              <a-button type="primary">
                Hover me
              </a-button>
            </a-popover>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">进度条</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right" style="width: 600px">
            <div>
              <a-progress :percent="30" />
              <a-progress :percent="50" status="active" />
              <a-progress :percent="70" status="exception" />
              <a-progress :percent="100" />
              <a-progress :percent="50" :show-info="false" />
            </div>
          </div>
          <div class="tip">注意：进度条的高度无法修改，需要修改源码,图标无法更换</div>
        </div>
      </div>
      <div class="component">
        <div class="name">单选框</div>
        <div class="item">
          <div class="left">基本用法</div>
          <div class="right">
            <div>
              <a-radio-group :options="plainOptions" :default-value="value2" />
              <br />
              <a-radio-group v-model="value3" :options="options1" />
              <br />
              <a-radio-group v-model="value4" :options="optionsWithDisabled" disabled />
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">单选按钮</div>
          <div class="right">
            <div>
              <div>
                <a-radio-group v-model="value5">
                  <a-radio-button value="a">
                    Hangzhou
                  </a-radio-button>
                  <a-radio-button value="b">
                    Shanghai
                  </a-radio-button>
                  <a-radio-button value="c">
                    Beijing
                  </a-radio-button>
                  <a-radio-button value="d">
                    Chengdu
                  </a-radio-button>
                </a-radio-group>
              </div>
              <div :style="{ marginTop: '16px' }">
                <a-radio-group default-value="a">
                  <a-radio-button value="a">
                    Hangzhou
                  </a-radio-button>
                  <a-radio-button value="b" disabled>
                    Shanghai
                  </a-radio-button>
                  <a-radio-button value="c">
                    Beijing
                  </a-radio-button>
                  <a-radio-button value="d">
                    Chengdu
                  </a-radio-button>
                </a-radio-group>
              </div>
              <div :style="{ marginTop: '16px' }">
                <a-radio-group disabled default-value="a">
                  <a-radio-button value="a">
                    Hangzhou
                  </a-radio-button>
                  <a-radio-button value="b">
                    Shanghai
                  </a-radio-button>
                  <a-radio-button value="c">
                    Beijing
                  </a-radio-button>
                  <a-radio-button value="d">
                    Chengdu
                  </a-radio-button>
                </a-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">评分</div>
        <div class="item">
          <div class="left">整星</div>
          <div class="right">
            <a-rate :default-value="2.5" />
          </div>
        </div>
        <div class="item">
          <div class="left">半星</div>
          <div class="right">
            <a-rate :default-value="2.5" allow-half />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">结果</div>
        <div class="item">
          <div class="left">提示</div>
          <div class="right">
            <a-result title="Your operation has been executed">
              <template #icon>
                <y-icon type="icon-xinxi-da" size="50" self/>
              </template>
              <template #extra>
                <a-button key="console" type="primary">
                  Go Console
                </a-button>
              </template>
            </a-result>
          </div>
          <div class="tip">注意：结果的图标是内置的，不修改的源码的情况下无法修改图片内部样式，但可以更换图标</div>
        </div>
        <div class="item">
          <div class="left">成功</div>
          <div class="right">
            <a-result status="success" title="Your operation has been executed">
              <template #icon>
                <y-icon type="icon-wancheng-da" size="50" self/>
              </template>
              <template #extra>
                <a-button key="console" type="primary">
                  Go Console
                </a-button>
              </template>
            </a-result>
          </div>
        </div>
        <div class="item">
          <div class="left">警告</div>
          <div class="right">
            <a-result status="warning" title="Your operation has been executed">
              <template #icon>
                <y-icon type="icon-jingshi-da" size="50" self/>
              </template>
              <template #extra>
                <a-button key="console" type="primary">
                  Go Console
                </a-button>
              </template>
            </a-result>
          </div>
        </div>
        <div class="item">
          <div class="left">错误</div>
          <div class="right">
            <a-result status="error" title="Your operation has been executed">
              <template #icon>
                <y-icon type="icon-baocuo-da" size="50" self/>
              </template>
              <template #extra>
                <a-button key="console" type="primary">
                  Go Console
                </a-button>
              </template>
            </a-result>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">选择器</div>
        <div class="item">
          <div class="left">基本用法</div>
          <div class="right">
            <a-select :getPopupContainer="(triggerNode) => triggerNode.parentNode" style="width: 300px" placeholder="请选择">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
            <a-select :getPopupContainer="(triggerNode) => triggerNode.parentNode" default-value="lucy" style="width: 300px">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
          </div>
          <div class="tip">注意：下拉框右侧的上下箭头图标无法修改</div>
        </div>
        <div class="item">
          <div class="left">分组</div>
          <div class="right">
            <a-select :getPopupContainer="(triggerNode) => triggerNode.parentNode" default-value="lucy" style="width: 300px">
              <a-select-opt-group>
                <span slot="label"><a-icon type="user" />Manager</span>
                <a-select-option value="jack">
                  Jack
                </a-select-option>
                <a-select-option value="lucy">
                  Lucy
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="Engineer">
                <a-select-option value="Yiminghe">
                  yiminghe
                </a-select-option>
              </a-select-opt-group>
            </a-select>
          </div>
        </div>
        <div class="item">
          <div class="left">多选</div>
          <div class="right">
            <a-select
              mode="multiple"
              :default-value="['a1', 'b2']"
              style="width: 300px"
              placeholder="Please select"
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="item">
          <div class="left">搜索匹配</div>
          <div class="right">
            <a-select
              show-search
              placeholder="Select a person"
              option-filter-prop="children"
              style="width: 300px"
              :filter-option="filterOption"
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
            >
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="tom">
                Tom
              </a-select-option>
            </a-select>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">滑动输入条</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right" style="width: 600px">
            <div>
              <a-slider id="test" :default-value="30" :disabled="disabled" />
              <a-slider range :default-value="[20, 50]" :disabled="disabled" />
              Disabled: <a-switch size="small" :checked="disabled" @change="handleDisabledChange" />
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">加载中</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-space>
              <a-spin size="small" />
              <a-spin />
              <a-spin size="large" />
            </a-space>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">统计数值</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <div>
              <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
              <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">步骤条</div>
        <div class="item">
          <div class="left">描述在右</div>
          <div class="right" style="width: 600px">
            <div>
              <a-steps :current="1">
                <a-step title="Finished" description="You can hover on the dot." />
                <a-step title="In Progress" description="You can hover on the dot." />
                <a-step title="Waiting" description="You can hover on the dot." />
              </a-steps>
            </div>
          </div>
          <div class="tip">注意：描述的字体颜色等无参考,图标无法更换，是通过边框写的，加圆角有点怪</div>
        </div>
        <div class="item">
          <div class="left">描述在下</div>
          <div class="right" style="width: 600px">
            <div>
              <a-steps :current="1" labelPlacement="vertical">
                <a-step title="Finished" description="You can hover on the dot." />
                <a-step title="In Progress" description="You can hover on the dot." />
                <a-step title="Waiting" description="You can hover on the dot." />
              </a-steps>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">错误</div>
          <div class="right" style="width: 600px">
            <div>
              <a-steps :current="1" status="error">
                <a-step title="Finished" description="This is a description." />
                <a-step title="In Progress" description="This is a description." />
                <a-step title="Waiting" description="This is a description." />
              </a-steps>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">开关</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-switch checked-children="开" un-checked-children="关" />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">标签页</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <div>
              <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Tab 1">
                  Content of Tab Pane 1
                </a-tab-pane>
                <a-tab-pane key="2" tab="Tab 2" force-render>
                  Content of Tab Pane 2
                </a-tab-pane>
                <a-tab-pane key="3" tab="Tab 3">
                  Content of Tab Pane 3
                </a-tab-pane>
              </a-tabs>
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">标签</div>
        <div class="item">
          <div class="left">默认</div>
          <div class="right">
            <div>
              <a-tag>Tag 1</a-tag>
              <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
              <a-tag closable>
                Tag 2
              </a-tag>
              <a-tag closable>
                Prevent Default
              </a-tag>
            </div>
          </div>
          <div class="tip">注意：antd多色标签的颜色种类较多，并且固定了不同颜色的标签名，与UI提供的色系很难对应，考虑到多色标签的颜色多为浅色系，建议暂不修改</div>
        </div>
        <div class="item">
          <div class="left">多色</div>
          <div class="right">
            <div>
              <a-tag closable color="pink">
                pink
              </a-tag>
              <a-tag closable color="red">
                red
              </a-tag>
              <a-tag closable color="orange">
                orange
              </a-tag>
              <a-tag closable color="green">
                green
              </a-tag>
              <a-tag closable color="cyan">
                cyan
              </a-tag>
              <a-tag closable color="blue">
                blue
              </a-tag>
              <a-tag closable color="purple">
                purple
              </a-tag>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">可选中</div>
          <div class="right">
            <a-checkable-tag v-model="checked1">
              Tag1
            </a-checkable-tag>
            <a-checkable-tag v-model="checked2">
              Tag2
            </a-checkable-tag>
            <a-checkable-tag v-model="checked3" color="purple">
              Tag3
            </a-checkable-tag>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">时间轴</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-timeline>
              <a-timeline-item color="green">
                Create a services site 2015-09-01
              </a-timeline-item>
              <a-timeline-item color="green">
                Create a services site 2015-09-01
              </a-timeline-item>
              <a-timeline-item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </a-timeline-item>
              <a-timeline-item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </a-timeline-item>
              <a-timeline-item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </a-timeline-item>
              <a-timeline-item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">滚动条</div>
        <div class="item">
          <div class="left">白色背景下</div>
          <div class="right">
            <div class="scroll scroll-white">
              白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下白色背景下
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">浅色背景下</div>
          <div class="right">
            <div class="scroll scroll-light">
              浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下浅色背景下
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">深色色背景下</div>
          <div class="right">
            <div class="scroll scroll-black">
              深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下深色色背景下
            </div>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">文字气泡</div>
        <div class="item">
          <div class="left">样式</div>
          <div class="right">
            <a-space>
              <a-tooltip>
                <template slot="title">
                  这是短的悬浮提示
                </template>
                Tooltip will show when mouse enter.
              </a-tooltip>
              <a-tooltip placement="right">
                <template slot="title">
                  prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt textprompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text prompt text
                </template>
                Tooltip will show when mouse enter.
              </a-tooltip>
            </a-space>
          </div>
          <div class="tip">注意：悬浮提示加了内容超长滚动效果</div>
        </div>
      </div>
      <div class="component">
        <div class="name">树</div>
        <div class="item">
          <div class="left">图形</div>
          <div class="right">
            <a-tree :tree-data="treeData" show-icon default-expand-all :default-selected-keys="['0-0-0']"></a-tree>
          </div>
        </div>
        <div class="item">
          <div class="left">选择</div>
          <div class="right">
            <a-tree
              checkable
              :tree-data="treeData1"
              :default-expanded-keys="['0-0-0', '0-0-1']"
              :default-selected-keys="['0-0-0', '0-0-1']"
              :default-checked-keys="['0-0-0', '0-0-1']"
            >
              <span slot="title0010">sss</span>
            </a-tree>
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">树选择</div>
        <div class="item">
          <div class="left">单选</div>
          <div class="right">
            <a-tree-select
              v-model="treeValue"
              style="width: 300px"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="treeData2"
              placeholder="Please select"
              tree-default-expand-all
            >
              <span v-if="key === '0-0-1'" slot="title" slot-scope="{ key, value }">
                Child Node1 {{ value }}
              </span>
            </a-tree-select>
          </div>
        </div>
        <div class="item">
          <div class="left">复选</div>
          <div class="right">
            <a-tree-select
              v-model="treeValue1"
              style="width: 300px"
              :tree-data="treeData3"
              tree-checkable
              :show-checked-strategy="SHOW_PARENT"
              search-placeholder="Please select"
            />
          </div>
        </div>
      </div>
      <div class="component">
        <div class="name">上传</div>
        <div class="item">
          <div class="left">基础样式</div>
          <div class="right" style="width: 300px">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :default-file-list="defaultFileList"
              :show-upload-list="false"
            >
              <template #removeIcon>
                <y-icon type="icon-shanchu" size="16"/>
              </template>
              <a-button type="primary">
                点击上传 
              </a-button>
            </a-upload>
          </div>
          <div class="tip">注意：上传组件限制，基础组件无法预览、重新上传等，样式修改局限性较大，只能修改一些颜色，字体等样式, 删除图标外部无法修改，只有修改源码或者升级antd到3.0才可以修改,上传列表的样式需要另外新写</div>
        </div>
        <div class="item">
          <div class="left">图片上传</div>
          <div class="right" style="width: 300px">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture"
            >
              <a-button type="primary"> <y-icon type="icon-shangchuan" size="16" style="margin-right: 4px" color="#fff"/></a-button>
            </a-upload>
          </div>
        </div>
        <div class="item">
          <div class="left">照片墙</div>
          <div class="right">
            <div class="clearfix">
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 8">
                  <a-icon type="plus" />
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">拖拽上传</div>
          <div class="right">
            <a-upload-dragger
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange1"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="plus" />
              </p>
              <p class="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </a-upload-dragger>
          </div>
        </div>
      </div>
    </div>
    </a-config-provider>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { TreeSelect } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const emptyImg = require('./assets/noData3.png')

moment.locale('zh-cn');
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options1 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'smile' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'smile' } },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-1-0', slots: { icon: 'smile' } },
      { title: 'leaf', key: '0-1-1', slots: { icon: 'smile' } },
    ],
  },
];
const treeData1 = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
];
const treeData2 = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        value: '0-0-1',
        key: '0-0-1',
        scopedSlots: {
          // custom title
          title: 'title',
        },
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
];
const treeData3 = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
        disabled: true,
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    width: '120px',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  },
];

const tableData = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    // children: [
    //   {
    //     key: 11,
    //     name: 'John Brown',
    //     age: 42,
    //     address: 'New York No. 2 Lake Park',
    //   },
    //   {
    //     key: 12,
    //     name: 'John Brown jr.',
    //     age: 30,
    //     address: 'New York No. 3 Lake Park',
    //     children: [
    //       {
    //         key: 121,
    //         name: 'Jimmy Brown',
    //         age: 16,
    //         address: 'New York No. 3 Lake Park',
    //       },
    //     ],
    //   },
    //   {
    //     key: 13,
    //     name: 'Jim Green sr.',
    //     age: 72,
    //     address: 'London No. 1 Lake Park',
    //     children: [
    //       {
    //         key: 131,
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 2 Lake Park',
    //         children: [
    //           {
    //             key: 1311,
    //             name: 'Jim Green jr.',
    //             age: 25,
    //             address: 'London No. 3 Lake Park',
    //           },
    //           {
    //             key: 1312,
    //             name: 'Jimmy Green sr.',
    //             age: 18,
    //             address: 'London No. 4 Lake Park',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  name: 'app',
  data () {
    return {
      zh_CN,
      emptyImg,
      iconStyle: {
        name: 'icon-gouxuan1',
        color: '#5D6E7F',
        size: '16',
        cursor: false,
        self: false,
        hover: 'red'
      },
      visible: false,
      visible1: false,
      visible2: false,
      visible11: false,
      visible12: false,
      open: false,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1'],
      style: { width: '200px' },
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
      ],
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          disabled: true,
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form1: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules1: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
      collapsed: false,
      theme: 'light',
      plainOptions,
      options1,
      optionsWithDisabled,
      value2: 'Apple',
      value3: 'Apple',
      value4: 'Apple',
      value5: 'a',
      disabled: false,
      checked1: false,
      checked2: true,
      checked3: false,
      treeData,
      treeData1,
      treeData2,
      treeData3,
      treeValue: undefined,
      treeValue1: ['0-1-0'],
      SHOW_PARENT,
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'error',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
      previewVisible: false,
      previewImage: '',
      fileList1: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error',
        },
      ],
      tableData,
      tableColumns,
      rowSelection,
      expandedRowKeys: [],
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    showModal1() {
      this.visible11 = true;
    },
    handleOk1(e) {
      console.log(e);
      this.visible11 = false;
    },
    showModal2() {
      this.visible12 = true;
    },
    handleOk2(e) {
      console.log(e);
      this.visible12 = false;
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleClose() {
      this.open = false;
    },
    handleThisTime() {},
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    showDrawer2() {
      this.visible2 = true;
    },
    onClose() {
      this.visible = false;
    },
    onClose2() {
      this.visible2 = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
    success() {
      this.$message.success('This is a success message');
    },
    error() {
      this.$message.error('This is an error message');
    },
    warning() {
      this.$message.warning('This is a warning message');
    },
    info() {
      this.$message.info('This is a normal message');
    },
    loading() {
      const hide = this.$message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    },
    showModal() {
      this.visible1 = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible1 = false;
    },
    openNotificationWithIcon(type) {
      // switch(type) {
      //   case 'success':
      //     this.$notification[type]({
      //       message: 'Notification Title',
      //       description:
      //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //       icon: <y-icon type="SucessCircle" size="50" color="#04CB81"/>,
      //     });
      //     break
      //   case 'info':
      //     this.$notification.open({
      //       message: 'Notification Title',
      //       description:
      //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //       icon: <y-icon type="InfoCircle" size="50" color="#0569FF"/>,
      //     });
      //     break
      //   case 'warning':
      //     this.$notification.open({
      //       message: 'Notification Title',
      //       description:
      //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //       icon: <y-icon type="WarningCircle" size="50" color="#FF9B00"/>,
      //     });
      //     break
      //   case 'error':
      //     this.$notification.open({
      //       message: 'Notification Title',
      //       description:
      //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //       icon: <y-icon type="ErrorCircle" size="50" color="#FF3131"/>,
      //     });
      //     break
      // }
      this.$notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleDisabledChange(disabled) {
      this.disabled = disabled;
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    handleChange1(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
}
</script>

<style lang="less">
// @import './common_style/yunwen_themes.less';
// @import './common_style/yunwen_style.less';
#app-show {
  font-family: @font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.component {
  padding-bottom: 10px;
  border-bottom: 1px solid #EDF0F3;
  margin-bottom: 10px;
}
.name {
  width: 180px;
  height: 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: @text-color;
}
.item {
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
}
.left {
  width: 180px;
  margin-right: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: @primary-hover;
}
.right {
  /* width: 800px; */
  padding-top: 12px;
  border-top: 1px dashed #EDF0F3;
}
.scroll {
  width: 300px;
  height: 180px;
  padding: 0 20px;
  color: @text-body;
  border-radius: @card-radius;
  overflow-y: auto;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: @scrollbar-bg;
  border-radius: @small-radius;
  border-style: dashed;
            border-color: transparent;
            border-width: 1.5px;
            background-clip: padding-box;
}
.scroll::-webkit-scrollbar-thumb:hover {
  background: @scrollbar-bg;
}
.scroll::-webkit-scrollbar {
  width: @scrollbar-size;
  height: @scrollbar-size;
}
.scroll-light {
  color: @text-body;
  background: @fill-background;
}
.scroll-light::-webkit-scrollbar-thumb {
  background-color: @scrollbar-bg-l;
}
.scroll-light::-webkit-scrollbar-thumb:hover {
  background: @scrollbar-bg-l;
}
.scroll-black {
  color: @white;
  background: @tooltip-mask;
}
.scroll-black::-webkit-scrollbar-thumb {
  background-color: @scrollbar-bg-h;
}
.scroll-black::-webkit-scrollbar-thumb:hover {
  background: @scrollbar-bg-h;
}
.right.right {
  border-left: 1px dashed #EDF0F3;
}
.formBox {
  max-height: 780px;
  overflow-y: auto;
}
.formBox::-webkit-scrollbar-thumb {
  background-color: @scrollbar-bg;
  border-radius: @small-radius;
  border-style: dashed;
            border-color: transparent;
            border-width: 1.5px;
            background-clip: padding-box;
}
.formBox::-webkit-scrollbar-thumb:hover {
  background: @scrollbar-bg;
}
.formBox::-webkit-scrollbar {
  width: @scrollbar-size;
  height: @scrollbar-size;
}
.tip {
  padding: 20px;
  max-width: 300px;
}
</style>
