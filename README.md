# GIS Heatmap Component

当前仓库基于 Vite + Vue 3 + TypeScript，用于构建 GIS 热力图组件。下面整理了项目的结构，方便查阅。

## 项目结构

```text
.
├─.git/                     # Git 元数据
├─.vscode/                  # VS Code 工作区配置
├─node_modules/             # 自动安装的依赖（通常不手动修改）
├─public/                   # 静态资源，构建时原样拷贝
├─src/                      # 应用源码
│ ├─App.vue                 # 顶层应用组件
│ ├─main.ts                 # Vite 入口文件
│ ├─core/                   # 核心业务与通用逻辑
│ ├─map/                    # GIS / 地图相关模块
│ └─ui/                     # UI 分层
│   ├─components/           # 可复用基础组件
│   └─pages/                # 页面级组件
├─index.html                # Vite HTML 入口
├─package.json              # 项目依赖与脚本
├─package-lock.json         # 依赖锁定文件
├─tsconfig*.json            # TypeScript 配置
└─vite.config.ts            # Vite 构建配置
```

## 目录说明

- `public/`：放置 favicon、图标等无需编译的静态资源。
- `src/core/`：可抽象成与具体地图实现无关的通用逻辑与服务。
- `src/map/`：GIS 热力图核心逻辑、地图适配与封装。
- `src/ui/`：页面、组件等界面层实现，细分为 `components` 与 `pages` 两级。
- `index.html` + `main.ts` + `App.vue`：Vite + Vue 应用的标准入口链路。

根据需要在对应目录补充功能代码，即可保持清晰的层次划分。
