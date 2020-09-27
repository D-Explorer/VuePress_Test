---
title: VuePress 问题记录
---

[[toc]]

## 侧边栏显示的是文件路径，而非文件名

产生的原因是 markdown 文档内没有缺乏标题导致的。有两种方式解决。

1. 添加 [Front Matter](https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F) 的 title 属性。

```YAML
---
title: 标题
---
```

2. 添加 markdown 语法中的标题

```markdown
# 一级标题

## 二级标题
```
