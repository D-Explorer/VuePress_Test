# YAML 基本知识

## 一、基本规则

YAML 基本语法规则如下：

> - 大小写敏感
> - 使用缩进表示层级广西
> - 缩进时不允许使用 tab 键，自允许使用空格
> - 缩进的空格数目不重要，只要相同层级的元素对齐即可

`#` 表示注释，从这个字符一直到行位，都会被解析器忽略

YAML 支持的数据结构有三种：

> - 对象：键值对的集合，又称为映射（mapping）/哈希（hashes）/字典（dictionary）
> - 数组：医嘱按次序排列的值，又称为序列（sequence)/列表（list）
> - 纯量（scalars）：单个的、不可再分割的值

---

## 二、对象

对象的一组键值对，使用冒号结构表示：

```YAML
animal:pert
```

YAML 也允许另一种写法，将所有将只对写成一个行内对象：

```YAML
{hash:{name:'Steve', foo:'bar'}}
```

---

## 三、数组

一组连词线开头的行，构成一个数组：

```YAML
- Cat
- Dog
- Goldfish
```

数据结构的子成员是一个数组，则可以在该项相面缩进一个空格：

```YAML
-
 - Cat
 - Dog
 - Goldfish
```

数组也可以采用行内表示法：

```YAML
{animal:['Cat', 'Dog']}
```

---

## 四、复合结构

对象和数组可以结合使用，形成复合结构：

```YAML
languages:
 - Ruby
 - Perl
 - Python
websites:
 YAML: yaml.org
 Ruby: ruby-lang.org
 Python: python.org
 Perl: use.perl.org
```

---

## 五、纯量

纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量：

> - 布尔值
> - 整数
> - 浮点数
> - Null
> - 时间
> - 日期

数值直接以自恋量的形式表示：

```YAML
number:12.30
```

布尔值用`true`和`false`表示：

```YAML
isTrue:true
```

`null`用`~`表示

```YAML
parent:~
```

时间采用 ISO8601 格式

```YAML
iso8601: 2001-12-14t21:59:43.10-05:00
```

YAML 允许使用两个感叹号，强制类型转换

```YAML
e: !!str 123
f: !!str true
```

---

## 六、字符串

字符串时最常见，也是最复杂的一种数据类型。
字符串默认不使用引号表示

```YAML
str: This is a string
```

如果字符串之中包含空格或特殊字符，需要放在引号之中：

```YAML
str: '内容： 字符串'
```

单引号和双引号都可以使用，双引号不会对特殊字符转义。

```YAML
s1: '内容\n字符串'
s2: "内容\n字符串"
```

单引号之中如果还有单引号，必须连续使用两个单引号转义。

```YAML
str: 'labor''s day'
```

字符串可以写成多行，从第二行开始，必须有一个单空格缩进。换行符会被转为空格。

```YAML
str: 这是一段
  多行
  字符串
```

多行字符串可以使用`|`保留换行符，也可以使用`>`折叠换行。

```YAML
this: |
  Foo
  Bar
that: >
  Foo
  Bar
```

`+`表示保留文字块末尾的换行，`-`表示删除字符串末尾的换行。

```YAML
s1: |
  Foo

s2: |+
  Foo


s3: |-
  Foo
```

字符串之中可以插入 HTML 标记

```YAML
message: |

  <p style="color: red">
    段落
  </p>
```

---

## 七、引用

锚点`&`和别名`*`，可以用来引用

```YAML
defaults: &defaults
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

`&`用来建立锚点（`defaults`），`<<`表示合并到当前数据，`*`用来引用锚点。

下面是另一个例子。

```YAML
- &showell Steve
- Clark
- Brian
- Oren
- *showell
```
