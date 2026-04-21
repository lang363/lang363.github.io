# 编写数学表达式

使用 Markdown 在 GitHub 上显示数学表达式。

## 关于编写数学表达式

为了实现数学表达式的清晰传达，GitHub 支持 Markdown 中 LaTeX 格式的数学表达式。 有关详细信息，请参阅 Wikibook 中的 [LaTeX/数学](http://en.wikibooks.org/wiki/LaTeX/Mathematics)。

GitHub的数学呈现功能使用 MathJax;基于 JavaScript 的open source显示引擎。 MathJax 支持广泛的 LaTeX 宏，以及几个有用的辅助功能扩展。 有关详细信息，请参阅 [MathJax 文档](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support)和 [MathJax 辅助功能扩展文档](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide)。

数学表达式可在 GitHub Issues、GitHub Discussions、拉取请求、Wiki 和 Markdown 文件中呈现。

## 编写内联表达式

有两个选项可用于将内嵌在文本中的数学表达式分隔出来。 可以使用美元符号 (`$`) 将表达式括起来，或者以在表达式开头使用 <code>$\`</code>，并在其末尾使用 <code>\`$</code>。 当正在编写的表达式包含与 markdown 语法重叠的字符时，后一种语法很有用。 有关详细信息，请参阅“[基本写作和格式语法](/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)”。

```text
This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$
```

![呈现的 Markdown 的屏幕截图，展示了一个内联数学表达式：√(3x - 1) + (1 + x)²。](/assets/images/help/writing/inline-math-markdown-rendering.png)

```text
This sentence uses $\` and \`$ delimiters to show math inline: $`\sqrt{3x-1}+(1+x)^2`$
```

![呈现的 Markdown 屏幕截图，展示了一个使用反引号语法的内联数学表达式：√(3x - 1) + (1 + x)²。](/assets/images/help/writing/inline-backtick-math-markdown-rendering.png)

## 将表达式编写为块

要以块的形式添加数学表达式，请启动一个新行，并使用两个美元符号 `$$` 分隔表达式。

> \[!TIP] 如果在 .md 文件中写入内容，将需要使用特定格式创建换行符，例如在行末尾添加反斜杠，如下方示例所示。 有关 Markdown 中的换行符的更多信息，请查看 [基本写作和格式语法](/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#line-breaks)。

```text
**The Cauchy-Schwarz Inequality**\
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![呈现的 Markdown 屏幕截图，展示了一个复杂的公式。 在不等式公式上方，加粗文本显示“柯西 - 施瓦茨不等式”。](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

或者，可以使用 <code>\`\`\`math</code> 代码块语法将数学表达式显示为块。 使用此语法时，无需使用 `$$` 分隔符。 以下内容的呈现方式与上述内容相同：

````text
**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```
````

## 在数学表达式所在的行中和数学表达式内编写美元符号

要在数学表达式所在的同一行中将美元符号显示为字符，需要对非分隔符 `$` 进行转义以确保行正确呈现。

* 在数学表达式内，在显式 `\` 之前添加一个 `$` 符号。

  ```text
  This expression uses `\$` to display a dollar sign: $`\sqrt{\$4}`$
  ```

  ![呈现的 Markdown 的屏幕截图，其中显示了美元符号前的反斜杠如何将符号显示为数学表达式的一部分。](/assets/images/help/writing/dollar-sign-within-math-expression.png)

* 在数学表达式之外，但在同一行上，在显式 `$` 两边使用 span 标记。

  ```text
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Markdown 渲染效果的屏幕截图显示，美元符号两侧的 span 标签将其显示为内联文本，而非数学公式的一部分。](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 其他阅读材料

* ```
          [MathJax 网站](http://mathjax.org)
  ```
* ```
          [GitHub 上的写作与格式化入门](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
  ```
* ```
          [GitHub风格的“Markdown”规范](https://github.github.com/gfm/)
  ```