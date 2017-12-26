module.exports = {
    "plugins": [
        "stylelint-scss"
    ],
    "extends": "stylelint-config-recess-order",
    "rules": {
        /*
         * ------------------------------------------------
         * Possible errors
         * ------------------------------------------------
         */
        // 颜色值不能为无效值
        "color-no-invalid-hex": true,
        // 字体不能设置同名
        "font-family-no-duplicate-names": true,
        // 不允许丢失的字体名称关键字
        //"font-family-no-missing-generic-family-keyword": true,
        // calc的计算符前后必须有一个空格或换行和缩进
        "function-calc-no-unspaced-operator": true,
        // linear-gradient()内参数严格按照css规范
        "function-linear-gradient-no-nonstandard-direction": true,
        // 字符串之前不能有换行
        "string-no-newline": true,
        // 不允许未知符号
        "unit-no-unknown": true,
        // 能用简写属性就要尽量用简写 例如: margin: 1px 2px 1px 可以直接写成 margin: 1px 2px
        "shorthand-property-no-redundant-values": true,
        // 禁止未知属性
        "property-no-unknown": true,
        // 禁止在动画关键帧处使用!important(因为在某些浏览器会被忽略)
        "keyframe-declaration-no-important": true,
        // 禁止定义重复的属性值
        "declaration-block-no-duplicate-properties": true,
        // 禁止定义冗余的属性值
        "declaration-block-no-redundant-longhand-properties": true,
        // 禁止简写属性覆盖特定属性 例如：border-top-width: 1px; border: 2px solid blue;  border-top-width就被覆盖
        "declaration-block-no-shorthand-property-overrides": true,
        // 不允许模块内为空
        "block-no-empty": true,
        // 不允许css规范外的伪类选择器
        "selector-pseudo-class-no-unknown": true,
        // 不允许css规范外的伪元素选择器
        "selector-pseudo-element-no-unknown": true,
        // 禁止未知元素选择器
        "selector-type-no-unknown": true,
        // 不允许css规范外的媒体查询名称
        "media-feature-name-no-unknown": true,
        // 不允许空注释
        "comment-no-empty": true,
        // 选择的同一元素，不允许权重较轻的选择器出现在权重较重的之后
        "no-descending-specificity": true,
        // 不允许重复@import规则在样式表。
        //"no-duplicate-at-import-rules": true,
        // 一个样式表不允许相同的选择器出现
        "no-duplicate-selectors": true,
        // 样式表整个文件不能为空
        "no-empty-source": true,
        // 不允许多余的分号
        "no-extra-semicolons": true,
        // 不允许//注释 (scss里面可以使用//注释)
        "no-invalid-double-slash-comments": true,
        // animation的name不能是keyframes没有定义的
        "no-unknown-animations": true,

        /*
         * ------------------------------------------------
         * Limit language features
         * ------------------------------------------------
         */
        // 颜色必须被命名
        "color-named": "always-where-possible",
        // 禁止进制颜色
        "color-no-hex": true,
        // 函数黑名单
        //"function-blacklist": ["array", "of", "unprefixed"],
        // 函数白名单
        //"function-whitelist": [],
        // 禁止相对host url
        "function-url-no-scheme-relative": true,
        // url黑名单
        //"function-url-scheme-blacklist": [],
        // url白名单
        //"function-url-scheme-whitelist": [],
        // 单位最大精度
        "number-max-precision": [2, {ignoreUnits: ["/^my-/", "%"]}],
        // 最小毫秒数
        "time-min-milliseconds": 80,
        // 单位黑名单
        //"unit-blacklist": [],
        // 单位白名单
        //"unit-whitelist": [],
        // 禁止浏览器内核前缀 -
        //"value-no-vendor-prefix": true,
        // 属性黑名单
        //"property-blacklist": [],
        // 禁止属性前缀
        //"property-no-vendor-prefix": true,
        // 属性白名单
        //"property-whitelist": [],
        // no important
        //"declaration-no-important": true,
        // 声明属性单位黑名单
        //"declaration-property-unit-blacklist": [],
        // 声明属性单位白名单
        //"declaration-property-unit-whitelist": [],
        // 声明属性值黑名单
        //"declaration-property-value-blacklist": [],
        // 声明属性值白名单
        //"declaration-property-value-whitelist": [],
        // 一行中只能声明一个属性
        "declaration-block-single-line-max-declarations": 1,

        //selector-attribute-operator-blacklist: Specify a blacklist of disallowed attribute operators.
        //selector-attribute-operator-whitelist: Specify a whitelist of allowed attribute operators.
        //selector-class-pattern: Specify a pattern for class selectors.
        //selector-id-pattern: Specify a pattern for id selectors.
        //selector-max-attribute: Limit the number of attribute selectors in a selector.
        //selector-max-class: Limit the number of classes in a selector.
        //selector-max-combinators: Limit the number of combinators in a selector.
        //selector-max-compound-selectors: Limit the number of compound selectors in a selector.
        //selector-max-empty-lines: Limit the number of adjacent empty lines within selectors.
        //selector-max-id: Limit the number of id selectors in a selector.
        //selector-max-specificity: Limit the specificity of selectors.
        //selector-max-type: Limit the number of type in a selector.
        //selector-max-universal: Limit the number of universal selectors in a selector.
        //selector-nested-pattern: Specify a pattern for the selectors of rules nested within rules.
        //selector-no-qualifying-type: Disallow qualifying a selector by type.
        //selector-no-vendor-prefix: Disallow vendor prefixes for selectors.
        //selector-pseudo-class-blacklist: Specify a blacklist of disallowed pseudo-class selectors.
        //selector-pseudo-class-whitelist: Specify a whitelist of allowed pseudo-class selectors.
        //media-feature-name-blacklist: Specify a blacklist of disallowed media feature names.
        //media-feature-name-no-vendor-prefix: Disallow vendor prefixes for media feature names.
        //media-feature-name-whitelist: Specify a whitelist of allowed media feature names.
        //custom-media-pattern: Specify a pattern for custom media query names.
        //at-rule-blacklist: Specify a blacklist of disallowed at-rules.
        //at-rule-no-vendor-prefix: Disallow vendor prefixes for at-rules.
        //at-rule-whitelist: Specify a whitelist of allowed at-rules.
        //comment-word-blacklist: Specify a blacklist of disallowed words within comments.

        // sass中允许嵌套的深度最大为4
        "max-nesting-depth": 4,

        /*
         * ------------------------------------------------
         * Stylistic issues
         * ------------------------------------------------
         */
        // 颜色值为小写字母
        "color-hex-case": "lower",
        // 颜色值能简写就简写
        "color-hex-length": "short",
        // 方法中逗号后需空格
        "function-comma-space-after": "always",
        // 最大空行
        "function-max-empty-lines": 0,
        // 函数小写
        "function-name-case": "lower",
        // url必须加引号
        "function-url-quotes": "always",
        // 方法之间一定要空格
        "function-whitespace-after": "always",
        // 省略小于1的小数前面的0
        "number-leading-zero": "never",
        // 不能有数字末尾多余的0
        "number-no-trailing-zeros": true,
        // 字符串最外层用双引号，而不是单引号
        "string-quotes": "double",
        // 避免为0值指定单位
        "length-zero-no-unit": true,
        // 单位小写
        "unit-case": "lower",
        // 属性值小写
        "value-keyword-case": "lower",
        // 属性值列表逗号后需空格
        "value-list-comma-space-after": "always",
        // 属性名称小写
        "property-case": "lower",
        // !important中!后不空格
        "declaration-bang-space-after": "never",
        // !important中!前要有空格
        "declaration-bang-space-before": "always",
        // 每个属性声明单独一行
        "declaration-block-semicolon-newline-after": "always",
        // 分号不能在行首，只能在行尾
        "declaration-block-semicolon-newline-before": "never-multi-line",
        // 属性之间分号后空一格或换行
        "declaration-block-semicolon-space-after": "always-single-line",
        // 分号前不允许空格
        "declaration-block-semicolon-space-before": "never",
        // 最后一个属性必须有分号
        "declaration-block-trailing-semicolon": "always",
        // 声明块的左花括号后要有新行
        "block-opening-brace-newline-after": "always",
        // 声明块的左花括号前要有空格
        "block-opening-brace-space-before": "always",
        // 属性值要有引号([target="_blank"])
        "selector-attribute-quotes": "always",
        // 选择器后空一格 (div > a)
        "selector-combinator-space-after": "always",
        // 选择器前空一格 (div > a)
        "selector-combinator-space-before": "always",
        // 伪类选择器小写
        "selector-pseudo-class-case": "lower",
        // 伪元素选择器小写
        "selector-pseudo-element-case": "lower",
        // 标签选择器小写
        "selector-type-case": "lower",
        // 选择器分组时，将单独的选择器单独放在一行
        "selector-list-comma-newline-after": "always-multi-line",
        // 媒体查询属性值空格
        "media-feature-colon-space-after": "always",
        // 媒体查询名字小写
        "media-feature-name-case": "lower",
        // at-rule名字小写
        "at-rule-name-case": "lower",
        // at-rule分号后必须换行
        "at-rule-semicolon-newline-after": "always",
        // 注释之间要有空格
        "comment-whitespace-inside": "always",
        // 缩进
        "indentation": 2,
        // 最大空行数
        "max-empty-lines": 1,
        // 结尾空格
        "no-eol-whitespace": true,


        /*
         * ------------------------------------------------
         * SCSS
         * ------------------------------------------------
         */
        // 不允许scss规范外的at-rules (@if)
        "scss/at-rule-no-unknown": true,
        // 不允许@-else前面有空换行
        "scss/at-else-empty-line-before": "never",
        // @else if后面要有空格
        "scss/at-else-if-parentheses-space-before": "always",
        // 函数名和左括号之间不要有空格
        "scss/at-function-parentheses-space-before": "never",
        // @if结束括号后面要有空格
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        // @mixin
        "scss/at-mixin-parentheses-space-before": "never",
        // 变量定义冒号后面要有空格
        "scss/dollar-variable-colon-space-after": "always",
        // 变量定义冒号前面要有空格
        "scss/dollar-variable-colon-space-before": "never",
        // 运算符前后要有空格
        "scss/operator-no-unspaced": true
    }
};