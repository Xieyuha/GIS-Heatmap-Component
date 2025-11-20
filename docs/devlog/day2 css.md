day2 css.md

# 目标

- 调整css

# 进展

- 对class进行重构，使用更语义化的命名
    - 全局前缀 `map-`
    - 命名风格 
        - Vue 组件 PascalCase
        - CSS 类 kebab-case

# 问题

- class和组件的命名
    - 页面的 wrapper 类名只能基于“该页面直接使用的组件名”。
    - 不能穿透，也不能引用更深层组件的名字。
- 组件的分类不同、class不同
    - 布局组件
        - Topbar 、Sidebar
    - 视觉组件
        - Infobar、MapArea 、按钮、卡片等
- 组件内铺满
    - 100% = 跟随父盒子
    - inset:0 = 绝对覆盖
    - flex:1 = 吃掉剩余空间
# 下一步

- 进行组件的抽离与封装
- 加载地图与基本的热力效果
