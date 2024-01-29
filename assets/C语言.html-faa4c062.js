import{_ as s,r as a,o as t,c as p,b as e,w as o,d as c,a as i}from"./app-521e935c.js";const l={},u=c("h1",null,"C Language",-1),k=i(`<h2 id="一、什么是c语言" tabindex="-1"><a class="header-anchor" href="#一、什么是c语言" aria-hidden="true">#</a> 一、什么是C语言？</h2><blockquote><p>C语言是一门<strong>面向过程</strong>的、<strong>抽象化</strong>的通用程序设计语言，广泛应用于<strong>底层开发</strong>。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言。尽管C语言提供了许多低级处理的功能，但仍然保持着跨平台的特性，以一个标准规格写出的C语言程序可在包括类似嵌入式处理器以及超级计算机等作业平台的许多计算机平台上进行编译。</p></blockquote><h2 id="_2、关键字" tabindex="-1"><a class="header-anchor" href="#_2、关键字" aria-hidden="true">#</a> 2、关键字</h2><blockquote><blockquote><p><strong>数据类型关键字</strong></p><p><strong>char；</strong>：修饰字符，字符型关键字，也可以是整形。</p><p><strong>short</strong>：修饰int，<strong>短整型数据</strong>，可省略被修饰的int。（K&amp;R时期引入）</p><p><strong>long</strong>：修饰int，长整型数据，可省略被修饰的int。（K&amp;R时期引入）</p><p><strong>long long</strong>：修饰int，<strong>超长整型数据</strong>，可省略被修饰的int。（C99标准新增）</p><p><strong>long long int</strong>：修饰int，<strong>双长整型数据</strong>，可省略被修饰的int。（C99标准新增）</p><p><strong>float</strong>：<strong>单精度浮点型</strong>。</p><p><strong>double</strong>：<strong>单精度浮点型</strong>。</p><p><strong>long double</strong>：<strong>长双精度浮点型</strong>。</p><p><strong>void</strong>：<strong>空类型</strong>，如果是指针就是通用指针。</p><p><strong>_Bool</strong>：<strong>布尔类型</strong>，0表示假，非0表示真。（C99标准新增）</p><p><strong>_Complex</strong>：<strong>复数类型</strong>，可选三种复数类型：float _Complex、double _Complex 、long double _Complex。（C99标准新增）</p><p><strong>_Imaginary</strong>：<strong>虚数类型</strong>，可选三种虚数类型：float _Imaginary、double _Imaginary、 long double _Imaginary，虚数类型只有虚部，没有实部。（C99标准新增）</p><p><strong>signed</strong>：修饰整型数据，<strong>有符号数据类型</strong>，整形默认是signed并且可省略，被signed修饰的类型数据类型，二进制中左边的第一位如果为0代表是正数、如果是1代表代表是负数。比如int=32位，如果被signed修饰 代表 32位中的第一位用来表示正数或负数，其余31位用来表示数值。如果被unsigned修饰代表32位全部用来表示数值（C89标准新增）</p><p><strong>unsigned</strong>：修饰整型数据，<strong>无符号数据类型</strong>。（K&amp;R时期引入）</p><p><strong>restrict</strong>：用于限定和约束指针，并表明<strong>指针是访问一个数据对象的初始且唯一的方式</strong>。（C99标准新增）</p></blockquote><blockquote><p><strong>复杂类型关键字</strong></p><p><strong>struct</strong>：<strong>结构体</strong>声明。（K&amp;R时期引入）</p><p><strong>union</strong>：<strong>联合体</strong>声明。（K&amp;R时期引入）</p><p><strong>enum</strong>：<strong>枚举</strong>声明。（C89标准新增）</p><p><strong>typedef</strong>：声明<strong>类型别名</strong>。（K&amp;R时期引入）</p><p><strong>sizeof</strong>：<strong>得到特定类型或特定类型变量的大小</strong>。（K&amp;R时期引入）</p><p><strong>inline</strong>:<strong>内联函数</strong>用于取代宏定义，会在任何调用它的地方展开。（C99）标准新增）</p></blockquote><blockquote><p><strong>存储级别关键字</strong></p><p><strong>auto</strong>：指定为<strong>自动变量</strong>，由编译器自动分配及释放。通常在栈上分配。与static相反。当变量未指定时默认为auto。（K&amp;R时期引入）</p><p><strong>static</strong>：指定为<strong>静态变量</strong>，分配在静态变量区，修饰函数时，指定函数作用域为文件内部。（K&amp;R时期引入）</p><p><strong>register</strong>：指定为<strong>寄存器变量</strong>，建议编译器将变量存储到寄存器中使用，也可以修饰函数形参，建议编译器通过寄存器而不是堆栈传递参数。（K&amp;R时期引入）</p><p><strong>extern</strong>：指定对应变量为外部变量，即标示变量或者函数的定义在别的文件中，提示编译器遇到此变量和函数时在其他模块中寻找其定义。（K&amp;R时期引入）</p><p><strong>const</strong>：指定变量<strong>不可被当前线程改变</strong>（但有可能被系统或其他线程改变）。（C89标准新增）</p><p><strong>volatile</strong>：指定变量的值有可能会被系统或其他线程改变，<strong>强制编译器每次从内存中取得该变量的值</strong>，阻止编译器把该变量优化成寄存器变量。（C89标准新增）</p></blockquote><blockquote><p><strong>流程控制关键字</strong></p><p><strong>跳转结构</strong></p><p><strong>return</strong>：用在函数体中，返回特定值（如果是void类型，则不返回函数值）。（K&amp;R时期引入）</p><p><strong>continue</strong>：结束当前循环，开始下一轮循环。（K&amp;R时期引入）</p><p><strong>break</strong>：跳出当前循环或switch结构。（K&amp;R时期引入）</p><p><strong>goto</strong>：无条件跳转语句。（K&amp;R时期引入）</p><p><strong>分支结构</strong></p><p><strong>if</strong>：条件语句，后面不需要放分号。（K&amp;R时期引入）</p><p><strong>else</strong>：条件语句否定分支（与if连用）。（K&amp;R时期引入）</p><p><strong>switch</strong>：开关语句（多重分支语句）。（K&amp;R时期引入）</p><p><strong>case</strong>：开关语句中的分支标记，与switch连用。（K&amp;R时期引入）</p><p><strong>default</strong>：开关语句中的“其他”分支，可选。（K&amp;R时期引入）</p></blockquote><blockquote><p><strong>循环结构关键字</strong></p><p><strong>for</strong>：for（表达式1;表达式2;表达式3）循环体语句。（其中；不能省略）</p><p><strong>do</strong>：do循环结构和while配合使用，do{1：代码块} while(2){代码块};的执行顺序是1-&gt;2-&gt;1...循环，2为循环条件。</p><p><strong>while</strong>：while循环结构，while(1) 2;的执行顺序是1-&gt;2-&gt;1...循环，1为循环条件</p></blockquote><blockquote><p><strong>C11关键字</strong></p><p><strong>_Alignas</strong></p><p><strong>_Alignof</strong></p><p><strong>_Atomic</strong></p><p><strong>_Static_assert</strong></p><p><strong>_Noreturn</strong></p><p><strong>_Thread_local</strong></p><p><strong>_Generic</strong></p></blockquote></blockquote><h2 id="二、正文" tabindex="-1"><a class="header-anchor" href="#二、正文" aria-hidden="true">#</a> 二、正文</h2><h3 id="_1、输出控制符" tabindex="-1"><a class="header-anchor" href="#_1、输出控制符" aria-hidden="true">#</a> 1、输出控制符</h3><blockquote><p>%d 输出整数</p><p>%2d 输出整数，占用两个位置</p><p>%ld 长整形</p><p>%lld 长长整形</p><p>%ud 无符号整形</p><p>%f 输出浮点数 、%.2f表示保留2位小数、%10.6f 表示占用10个位置并且保留6位小数</p><p>%c 输出字符</p><p>%s 输出字符串</p><p>%o 输出八进制或者十六进制</p><p>%#o 输出八进制或十六进制带前缀 八进制：0 ，十六进制 0x</p><p>%p 输出地址</p></blockquote><h3 id="_2、转义字符" tabindex="-1"><a class="header-anchor" href="#_2、转义字符" aria-hidden="true">#</a> 2、转义字符</h3><blockquote><p>\\n：换行 \\t：缩进 \\b ：退格 \\0：字符串结尾</p></blockquote><h3 id="_3、需要注意c语言的一些标准" tabindex="-1"><a class="header-anchor" href="#_3、需要注意c语言的一些标准" aria-hidden="true">#</a> 3、需要注意C语言的一些标准</h3><blockquote><blockquote><p>sizeof 数据类型或者表达式大小 （c语言没有限制不同的数据类型的具体大小，只限制了 比如 n&lt;int&lt;long int&lt; n ，n&lt;double&lt;long double ... , ...；不同操作系统位数不同，大小可能也不同；要获取当前操作系统数据类型占用大小可以通过 sizeof）</p></blockquote><blockquote><p>C语言没有规定一个字节的尺寸，只是规定了“可寻址的数据存储单位，其尺寸必须可以容纳运行环境的基本字符集（ASCII）的任何成员”，主流的C语言编译器一般是1字节=8位。</p></blockquote><blockquote><p>补码</p><ul><li><p>整数补码</p><ul><li><p>正数的补码是该数的二进制形式</p></li><li><p>负数的补码需要通过以下几步获得：</p><ol><li>先取得该数的绝对值二进制形式</li><li>再将第1步的值按位取反</li><li>最后将第2步的值加1</li></ol></li></ul></li><li><p>浮点数补码：...</p></li></ul></blockquote><blockquote><p><strong>内存对齐</strong></p><ul><li>什么是内存对齐</li><li>现代计算机中，内存空间按照字节划分，理论上可以从任何起始地址访问任意类型的变量。但实际中在访问特定类型变量时经常在特定的内存地址访问，这就需要各种类型数据按照一定的规则在空间上排列，而不是顺序一个接一个地存放，这就是对齐。</li><li>对齐的原因和作用</li><li>不同硬件平台对存储空间的处理上存在很大的不同。某些平台对特定类型的数据只能从特定地址开始存取，而不允许其在内存中任意存放。例如Motorola 68000 处理器不允许16位的字存放在奇地址，否则会触发异常，因此在这种架构下编程必须保证字节对齐。</li><li>-但最常见的情况是，如果不按照平台要求对数据存放进行对齐，会带来存取效率上的损失。比如32位的Intel处理器通过总线访问(包括读和写)内存数据。每个总线周期从偶地址开始访问32位内存数据，内存数据以字节为单位存放。如果一个32位的数据没有存放在4字节整除的内存地址处，那么处理器就需要2个总线周期对其进行访问，显然访问效率下降很多。</li><li>因此，通过合理的内存对齐可以提高访问效率。为使CPU能够对数据进行快速访问，数据的起始地址应具有“对齐”特性。比如4字节数据的起始地址应位于4字节边界上，即起始地址能够被4整除。</li><li>此外，合理利用字节对齐还可以有效地节省存储空间。但要注意，在32位机中使用1字节或2字节对齐，反而会降低变量访问速度。因此需要考虑处理器类型。还应考虑编译器的类型。在VC/C++和<strong>GNU GCC中都是默认是4字节对齐</strong>。</li></ul></blockquote><p>1</p></blockquote><h4 id="_3、短路判断-运算" tabindex="-1"><a class="header-anchor" href="#_3、短路判断-运算" aria-hidden="true">#</a> 3、短路判断/运算</h4><blockquote><p>只有当第一个条件无法确定逻辑运算结果时，才会对第二个条件进行判断。</p></blockquote><h3 id="_4、从控制台读取输入" tabindex="-1"><a class="header-anchor" href="#_4、从控制台读取输入" aria-hidden="true">#</a> 4、从控制台读取输入</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token function">sanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//代表从控制台读取一个整数赋值到age变量。</span>

<span class="token comment">//也可以这么使用</span>
	<span class="token comment">//数据类型 变量名;</span>
	<span class="token comment">//sanf(&quot;%x(格式化类型)&quot;,&amp;变量名);</span>


<span class="token comment">//从控制台读取一个字符</span>
<span class="token keyword">char</span> c<span class="token punctuation">;</span>
c<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、i-与-i" tabindex="-1"><a class="header-anchor" href="#_5、i-与-i" aria-hidden="true">#</a> 5、i++ 与 ++i</h3><p>前者先使用再自增，后者先自增再使用</p><h3 id="_6、goto" tabindex="-1"><a class="header-anchor" href="#_6、goto" aria-hidden="true">#</a> 6、goto</h3><p>**注意：**在任何编程语言中，都不建议使用 goto 语句。因为它使得程序的控制流难以跟踪，使程序难以理解和难以修改。任何使用 goto 语句的程序可以改写成不需要使用 goto 语句的写法。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nfuck i=%d,j=%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">goto</span> Fuck<span class="token punctuation">;</span> <span class="token comment">//当条件成立，将跳转到Fuck标签处执行，并中断循环（包括嵌套）。</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    Fuck<span class="token operator">:</span><span class="token punctuation">{</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nfuck i=%d,j=%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//Fuck标签,大括号可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、数组" tabindex="-1"><a class="header-anchor" href="#_7、数组" aria-hidden="true">#</a> 7、数组</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//将数组中所有元素初始化为0，可以这么写：</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//实际上这里只是将第一个元素初始化为0 ，剩余的应该是编译器自动填充的</span>
<span class="token comment">//也可以只初始化前面几个元素，剩余没初始化的会自动填充0</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//C99的新特性，可以对指定索引元素初始化，剩余的会自动给初始化为0</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//二维数组是线性存放的，因此可以将所有的值写在一个花括号内</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//二维数组也可以仅对部分元素初始化</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//如果希望整个二维数组初始化为0，也可以这样做</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//C99新特性，也可以对二维数组的指定元素初始化,未被初始化的会自动初始化为0</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//定义时初始化可以省略第一个维度的长度定义</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、指针" tabindex="-1"><a class="header-anchor" href="#二、指针" aria-hidden="true">#</a> 二、指针</h2><blockquote><p>普通变量保存是值,指针变量保存的是其他变量的地址，*取指向地址的值；（&amp;取变量的地址，非指针也适用）</p></blockquote><h3 id="_1、指针的基础用法" tabindex="-1"><a class="header-anchor" href="#_1、指针的基础用法" aria-hidden="true">#</a> 1、指针的基础用法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//取地址运算符和取值运算符</span>
<span class="token comment">//取地址运算符&amp;</span>
	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">666</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> c<span class="token operator">=</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>pa<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">&amp;</span>c<span class="token punctuation">;</span>
	
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t%c\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pa<span class="token punctuation">,</span><span class="token operator">*</span>pc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Now Buy MacBook Pro To Me&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> c<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1.1f</span><span class="token punctuation">,</span> <span class="token number">2.2f</span><span class="token punctuation">,</span> <span class="token number">3.3f</span><span class="token punctuation">,</span> <span class="token number">4.4f</span><span class="token punctuation">,</span> <span class="token number">5.5f</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> d<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">6.6</span><span class="token punctuation">,</span> <span class="token number">7.7</span><span class="token punctuation">,</span> <span class="token number">8.8</span><span class="token punctuation">,</span> <span class="token number">9.9</span><span class="token punctuation">,</span> <span class="token number">10.10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     *（1）数组名其实是数组第一个元素的地址，每个地址间隔 数据类型的大小 如 double占8字节
     * 当数组d的第一个元素地址为0x7ff7b994f820，那么下一个就是0x7ff7b994f828（+8）
     * 再下一个就是那么下一个就是0x7ff7b994f830（+8）,以此类推
     */</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;数组地址：%p，第一个地址：%p，第二个地址：%p，第三个地址：%p，第四个地址：%p\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;数组地址：%p，第一个地址：%p，第二个地址：%p，第三个地址：%p，第四个地址：%p\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;数组地址：%p，第一个地址：%p，第二个地址：%p，第三个地址：%p，第四个地址：%p\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;数组地址：%p，第一个地址：%p，第二个地址：%p，第三个地址：%p，第四个地址：%p\\n\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     *（2）如果用一个指针指向数组，可以这样做
     * char *p;
     * p=a; 或者 p=&amp;a[0];
     */</span>

    <span class="token keyword">char</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    <span class="token comment">//p = a;</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;指针指向数组：%c&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     *（3）当指针指向数组元素的时候我们可以对指针进行加减乘除，和（1）类似，*(p+1)
     * 其中 +1 其实是 根据数据类型判断，设数据类型大小为x，p=0x7ff7b994f820，(p+1)则=0x7ff7b994f820 + x
     */</span>

    <span class="token keyword">double</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> d<span class="token punctuation">;</span>
  	<span class="token comment">//指向的是指针的第一个元素，并不是数组。不适用于《数组指针》</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用指针获取数组的下一个元素的值：p1 -&gt; %f，(p1+1) -&gt; %f，(p1+2) -&gt; %f\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p1<span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>p1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>p1 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 这里相当于指向了 字符串常量的第一个地址
     */</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token string">&quot;Now Buy MacBook Pro To Me&quot;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用指针获取数组的下一个元素的值：p2 -&gt; %c，(p2+1) -&gt; %c，(p2+2) -&gt; %c\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p2<span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>p2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>p2 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、指针数组和数组指针" tabindex="-1"><a class="header-anchor" href="#_2、指针数组和数组指针" aria-hidden="true">#</a> 2、指针数组和数组指针</h3><blockquote><blockquote><p>int *p1[5];//指针数组。指针数组是一个数组，每个元素存放着一个指针变量</p></blockquote><blockquote><p>int (*p2)[5];//数组指针。数组指针是一个指针，它指向的是一个数组</p></blockquote></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * 通过指针获取字符串长度
     */</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;CAO NI MA DE FUCK YOU MATHER&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>target <span class="token operator">=</span> str<span class="token punctuation">;</span>

    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>target<span class="token operator">++</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 指针数组，元素都是指针                                    
     */</span>

    <span class="token keyword">char</span> fuck <span class="token operator">=</span> <span class="token char">&#39;P&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>ps<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;AOC NI HEL 1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;IOC NI HEL 2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;BOC NI HEL 3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ALL NI HEL 4&quot;</span><span class="token punctuation">,</span>
            <span class="token operator">&amp;</span>fuck
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//输出整串字符</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> ps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出首个（数组名指向的是数组第一个元素的地址）</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 数组指针，数组指针是一个指针，它指向的是一个数组
     */</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>temp<span class="token punctuation">;</span><span class="token comment">//数组指针指向数组时，不能像普通指针那样指向数组名(数组第一个元素的地址)，需要用&amp;运算符来取数组的地址，这两个的地址值虽然一样，但是概念不一样 不加&amp;跨度是数组元素的总字节大小，加&amp;跨度是数组单个元素的字节大小。在取值的时候也要多加一层解引用</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//*p2 + j 获取到的是地址</span>
        <span class="token comment">// *(*p2 + j) 获取地址的值</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>p2 <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、指针和二维数组" tabindex="-1"><a class="header-anchor" href="#_3、指针和二维数组" aria-hidden="true">#</a> 3、指针和二维数组</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> arrays<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arrays<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
		<span class="token comment">//没有*号指向的是整个数组，跨度是子数组的总字节长度,加了*号指向的是子数组的第一个元素，跨度是子数组的子元素的字节长度</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*(arrays+1)：%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>arrays <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arrays[1]：%p\\n&quot;</span><span class="token punctuation">,</span> arrays<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;arrays[1][0]：%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arrays<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**arrays：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">(</span>arrays <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arrays[1][3]：%d\\n&quot;</span><span class="token punctuation">,</span> arrays<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token comment">//多注意思考这里！！！！</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*(*(arrays + 1) + 3)：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>arrays <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     输出：{
     *(arrays+1)：0x7ff7bef6c7f4
    arrays[1]：0x7ff7bef6c7f4
    &amp;arrays[1][0]：0x7ff7bef6c7f4
    **arrays：5
    arrays[1][3]：8
    *(*(arrays + 1) + 3)：8
     }
     */</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> arrays1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                         <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> arrays1<span class="token punctuation">;</span><span class="token comment">//(数组名指向的是数组第一个元素的地址)</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">(</span>p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">(</span>arrays1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> arrays1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>arrays1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> arrays1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
        3
        3
        3
        5
        5
        5
     */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、void指针和null指针" tabindex="-1"><a class="header-anchor" href="#_4、void指针和null指针" aria-hidden="true">#</a> 4、void指针和NULL指针</h3><blockquote><p>void指针我们通常称之为<strong>通用指针</strong>，指的是 void指针可以指向<strong>任意数据类型</strong>，换句话说就是 任何类型的指针都可以赋值给void指针，<strong>p+1时步进是1字节</strong></p></blockquote><blockquote><p>当还不清楚要将指针初始化为什么地址时，就将它初始化为NUll，在对指针进行解引用时先检查该指针是否为NULL。解析NULL也会直接报错，不会出现野指针</p></blockquote><blockquote><p>NULL是一个宏定义 #define NULL ((void *)0)，将0转成一个void指针，在大部分操作系统中代表一个不被使用的地址</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10086</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>ps <span class="token operator">=</span> <span class="token string">&quot;CAONIMA&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>pv<span class="token punctuation">;</span>

    pv <span class="token operator">=</span> p1<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;pi：%p，pv：%p\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">,</span> pv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*pv：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span> pv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    pv <span class="token operator">=</span> ps<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ps：%p，pv：%p\\n&quot;</span><span class="token punctuation">,</span> ps<span class="token punctuation">,</span> pv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*ps：%s\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>pv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
        pi：0x7ff7b7e63828，pv：0x7ff7b7e63828
        *pv：10086
        ps：0x10809ff76，pv：0x10809ff76
        *ps：CAONIMA
     */</span>

    <span class="token keyword">int</span> <span class="token operator">*</span>p2<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p3 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*d：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//随机值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*d：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错，不能输出</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、指向指针的指针" tabindex="-1"><a class="header-anchor" href="#_5、指向指针的指针" aria-hidden="true">#</a> 5、指向指针的指针</h3><blockquote><p>可以无限套下去，* * 指向指针的指针，* * * 指向指向指针的指针.....，定义时多少个 * 解引用时就用多少个 * ，如定义 int ***pp，解引用 * * * p</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">520</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>pp<span class="token operator">=</span><span class="token operator">&amp;</span>p<span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num ：%d\\n&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p ：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**pp ：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token operator">*</span>pp<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num_p ：%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;p_p ：%p\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;p_pp ：%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
num ：520
*p ：520
**pp ：520
num_p ：0x16af07728
&amp;p_p ：0x16af07728
&amp;p_pp ：0x16af07728
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">char</span> <span class="token operator">*</span>drives<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">&quot;iPhone 12&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;iPhone 13&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;iPhone 12 Pro Max&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;iPhone 13 Pro Max&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;MacBook Pro 16 2021&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;Apple Pods Pro&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;iPad Pro 2021&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>like_drive<span class="token punctuation">;</span>
        <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>my_drives<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        like_drive<span class="token operator">=</span><span class="token operator">&amp;</span>drives<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        my_drives<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">&amp;</span>drives<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        my_drives<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">&amp;</span>drives<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        my_drives<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">&amp;</span>drives<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        my_drives<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">&amp;</span>drives<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;刘玉培最喜欢的设备：%s\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>like_drive<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;刘玉培拥有的设备：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>my_drives<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
刘玉培最喜欢的设备：MacBook Pro 16 2021
刘玉培拥有的设备：
iPhone 12
MacBook Pro 16 2021
Apple Pods Pro
iPad Pro 2021
/*
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>至少有两个好处</strong></p><ul><li>避免重复分配内存</li><li>只需要一处修改</li></ul></blockquote><blockquote><p>代码的灵活性和安全性都有显著的提高</p></blockquote><h3 id="_6、数组指针和二维数组" tabindex="-1"><a class="header-anchor" href="#_6、数组指针和二维数组" aria-hidden="true">#</a> 6、数组指针和二维数组</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span>array<span class="token punctuation">;</span><span class="token comment">//表示一个int类型的指针，跨度是int*4 字节，将array第一个元素的地址赋值给指针</span>
    
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%3d&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> array1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>p1<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">&amp;</span>array1<span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%3d&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>p1<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、常量与指针常量" tabindex="-1"><a class="header-anchor" href="#_7、常量与指针常量" aria-hidden="true">#</a> 7、常量与指针常量</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token keyword">double</span> pi<span class="token operator">=</span><span class="token number">3.1415926</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span>pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//pi=3.14;</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   
    <span class="token keyword">int</span> num <span class="token operator">=</span><span class="token number">168</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> cnum<span class="token operator">=</span><span class="token number">188</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">&amp;</span>cnum<span class="token punctuation">;</span>
   
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cnum: %d,&amp;cnum: %p\\n&quot;</span><span class="token punctuation">,</span>cnum<span class="token punctuation">,</span><span class="token operator">&amp;</span>cnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*pc: %d,pc: %p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pc<span class="token punctuation">,</span>pc<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//*pc=1001;//报错，const 修饰的指针指向的是常量不能修改</span>

    pc<span class="token operator">=</span><span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num: %d,&amp;num: %p\\n&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//168</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*pc: %d,pc: %p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pc<span class="token punctuation">,</span>pc<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//*pc=1001;//报错，const 修饰的指针不能通过指针修改</span>
    num<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">;</span><span class="token comment">//可以修改</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num: %d,&amp;num: %p\\n&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1001</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*pc: %d,pc: %p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pc<span class="token punctuation">,</span>pc<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*指向常量的指针
	-指向常量的指针必须也被const在前面修饰  const int *pc=&amp;cnum;
  -可以通过解引用来读取指针指向的值
  -指针可以修改为指向不同的常量
			-不能通过指针修改常量
  		-不可以通过解引用修改指针指向的变量的值
  -指针可以修改为指向不同的变量
  		-因为被const 在前面修饰，所以指针不能通过指针修改变量的值
  		-可以修改变量的值从而改变指针的指向的变量的值
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> cnum <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> dnum<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">const</span> p <span class="token operator">=</span><span class="token operator">&amp;</span>num<span class="token punctuation">;</span><span class="token comment">//不能修改指向的地址,没被const在前面修饰不能指向常量</span>
   
    <span class="token operator">*</span>p<span class="token operator">=</span><span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p: %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1024</span>
    <span class="token comment">//p=&amp;cnum;//报错</span>
    <span class="token comment">//p=&amp;dnum;//报错</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*常量指针
	-不能修改常量指针指向的地址
	-可以通过指针修改指向的变量的值
	-没被const在前面修饰不能指向常量
*/</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">11</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> cnum<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">;</span>
  
    <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">const</span> p<span class="token operator">=</span><span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
	  num<span class="token operator">=</span><span class="token number">333</span><span class="token punctuation">;</span><span class="token comment">//可以修改num，从而改变指针指向的变量的值</span>
  
    <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">const</span> p<span class="token operator">=</span><span class="token operator">&amp;</span>cnum<span class="token punctuation">;</span>
	  cnum<span class="token operator">=</span><span class="token number">333</span><span class="token punctuation">;</span><span class="token comment">//报错，常量不能修改</span>
  
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p : %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  *p=333;//报错</span>
<span class="token comment">//  printf(&quot;*p : %d\\n&quot;,*p);</span>
<span class="token comment">//  p=&amp;cnum;//报错</span>
<span class="token comment">//  printf(&quot;*p : %d\\n&quot;,*p);</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*指向常量的常量指针
	-不可以修改指针指向的地址
	-不可以通过解引用修改指针指向的变量的值
	-可以指向常量
		-不可以修改指向的变量的值
	-可以指向变量
		-可以修改变量的值，从而改变指针指向的变量的值
		
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//指向 指向常量的常量指针 的指针</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> cnum <span class="token operator">=</span> <span class="token number">222</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">const</span> <span class="token operator">*</span>pp<span class="token operator">=</span> <span class="token operator">&amp;</span>p<span class="token punctuation">;</span>

    num <span class="token operator">=</span> <span class="token number">5555</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;pp: %p,&amp;p: %p\\n&quot;</span><span class="token punctuation">,</span>pp<span class="token punctuation">,</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*pp %p,p : %p,&amp;num: %p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>pp<span class="token punctuation">,</span>p<span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**p: %d,*p: %d,num: %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token operator">*</span>pp<span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
pp: 0x16dcb3708,&amp;p: 0x16dcb3708
*pp 0x16dcb3718,p : 0x16dcb3718,&amp;num: 0x16dcb3718
**p: 5555,*p: 5555,num: 5555
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、函数" tabindex="-1"><a class="header-anchor" href="#三、函数" aria-hidden="true">#</a> 三、函数</h2><h3 id="_1、函数的基本用法" tabindex="-1"><a class="header-anchor" href="#_1、函数的基本用法" aria-hidden="true">#</a> 1、函数的基本用法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数声明（Declaration），作用是告诉编译器需要用到到这个函数，具体实现稍后再补全</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入n的值：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1+2+3+...+(n-1)+n的结果是：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> result<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span><span class="token punctuation">{</span>
        result<span class="token operator">+=</span>n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//参数和指针</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>x<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>x<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;In swap，交换前：x=&gt;%d,y=&gt;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>x<span class="token punctuation">,</span><span class="token operator">*</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp<span class="token operator">=</span><span class="token operator">*</span>x<span class="token punctuation">;</span>
    <span class="token operator">*</span>x<span class="token operator">=</span><span class="token operator">*</span>y<span class="token punctuation">;</span>
    <span class="token operator">*</span>y<span class="token operator">=</span>temp<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;In swap，交换后：x=&gt;%d,y=&gt;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>x<span class="token punctuation">,</span><span class="token operator">*</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;In main，交换前：x=&gt;%d,y=&gt;%d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;In main，交换后：x=&gt;%d,y=&gt;%d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
In main，交换前：x=&gt;1,y=&gt;9
In swap，交换前：x=&gt;1,y=&gt;9
In swap，交换后：x=&gt;9,y=&gt;1
In main，交换后：x=&gt;9,y=&gt;1
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//参数和数组</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">get_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">get_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">999</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[%d]=%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;GetArray中的数组sizeof：%lu&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Main中的数组sizeof：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">get_array</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;---------In Main----------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[%d]=%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
test3.c:9:50: warning: sizeof on array function parameter will return size of &#39;int *&#39; instead of &#39;int [10]&#39; [-Wsizeof-array-argument]
        printf(&quot;GetArray中的数组sizeof：%lu&quot;,sizeof(a));
                                                   ^
test3.c:4:20: note: declared here
void get_array(int a[10]){
                   ^
1 warning generated.
Main中的数组sizeof：40
a[0]=1
a[1]=2
a[2]=3
a[3]=4
a[4]=5
a[5]=6
a[6]=999
a[7]=8
a[8]=9
a[9]=10
GetArray中的数组sizeof：8---------In Main----------
a[0]=1
a[1]=2
a[2]=3
a[3]=4
a[4]=5
a[5]=6
a[6]=999
a[7]=8
a[8]=9
a[9]=10


原因是数组作为参数传给函数时，是传给数组的地址，而不是传给整个的数组空间，因而
sizeof(arr)这句话会报错。有的编译器输出的是4，代表传入的是数组的第一个元素
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//可变参数</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdarg.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    va_list vap<span class="token punctuation">;</span>
    <span class="token function">va_start</span><span class="token punctuation">(</span>vap<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum<span class="token operator">+=</span><span class="token function">va_arg</span><span class="token punctuation">(</span>vap<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">va_end</span><span class="token punctuation">(</span>vap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
6
60
600
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、指针函数" tabindex="-1"><a class="header-anchor" href="#_2、指针函数" aria-hidden="true">#</a> 2、指针函数</h3><blockquote><ul><li><p>指针函数是一个函数，可以返回指针类型的数据</p></li><li><p>函数类型指的是函数的返回值类型</p></li></ul></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//指针函数 -&gt; int *p();</span>
<span class="token comment">//函数类型指的是函数的返回值类型</span>
<span class="token comment">//指针函数是一个函数，可以返回指针类型的数据</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">getWord</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数声明的参数名可以忽略</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">getWord</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//演示局部变量不能被返回，返回结果不符合预期</span>
	<span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> str2<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> str3<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> str4<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Dog&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> str5<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> str1<span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token char">&#39;B&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> str2<span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token char">&#39;C&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> str3<span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token char">&#39;D&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> str4<span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">return</span> str5<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/*没有定义到局部变量的字符串会被存储到常量区域 作用范围不仅在函数内，所以没问题
	switch(c){
        case &#39;A&#39;: return &quot;Apple;
        case &#39;B&#39;: return &quot;Banana&quot;;
        case &#39;C&#39;: return &quot;Cat&quot;;
        case &#39;D&#39;: return &quot;Dog&quot;;
        default: return &quot;None&quot;;
    }
	*/</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> input<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个字符：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span><span class="token function">getWord</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、函数指针" tabindex="-1"><a class="header-anchor" href="#_3、函数指针" aria-hidden="true">#</a> 3、函数指针</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//函数指针 -&gt; int (*p)();</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num<span class="token operator">*</span>num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">,</span>result<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回值类型 (*函数指针名) (参数类型...)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个整数：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fp<span class="token operator">=</span>square<span class="token punctuation">;</span>
    result<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//result=fp(num);//可以这么写，但是不建议，和函数调用一样，容易搞混</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d * %d = %d \\n&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">,</span>num<span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//函数指针作为参数</span>
	<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1<span class="token operator">+</span>num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1<span class="token operator">-</span>num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;6 + 8 = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">calc</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;6 - 8 = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">calc</span><span class="token punctuation">(</span>sub<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//函数指针作为返回值</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数原型中的函数作为参数也可以忽略变量名</span>
<span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一个函数名为select参数是（char）的函数，函数的返回值是一个int类型并且参数是(int,int)参数的函数</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1<span class="token operator">+</span>num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1<span class="token operator">-</span>num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">char</span> op<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span><span class="token keyword">return</span> add<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span><span class="token keyword">return</span> sub<span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token keyword">return</span> add<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">;</span>
    <span class="token keyword">char</span> op<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入式子（如1+2）:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%c%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num1<span class="token punctuation">,</span><span class="token operator">&amp;</span>op<span class="token punctuation">,</span><span class="token operator">&amp;</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fp<span class="token operator">=</span><span class="token function">select</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %d = %d\\n&quot;</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>op<span class="token punctuation">,</span>num2<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、生存期与存储类型" tabindex="-1"><a class="header-anchor" href="#四、生存期与存储类型" aria-hidden="true">#</a> 四、生存期与存储类型</h2><h3 id="_1、全局变量" tabindex="-1"><a class="header-anchor" href="#_1、全局变量" aria-hidden="true">#</a> 1、全局变量</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//全局变量直到程序退出的时候才销毁，局部变量是离开了局部变量就销毁</span>
<span class="token comment">//与局部变量不同，局部变量未手动初始化会自动指向随机数，全局变量则自动初始化为0</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">/*
void func();
void func(){
    extern int count;
    count ++;
}
int count=10;
*/</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//func();</span>
    <span class="token keyword">extern</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span><span class="token comment">//extern int 代表int 类型的参数 先不要报错，等待count值初始化</span>
    count <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、链接属性" tabindex="-1"><a class="header-anchor" href="#_2、链接属性" aria-hidden="true">#</a> 2、链接属性</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*external  可以被不同文件访问
	-全局变量默认拥有external属性
*/</span>
<span class="token comment">/*internal	只能在当前文件访问
	-ststic声明后拥有此属性

*/</span>
<span class="token comment">/*none	只能在局部访问
	-局部变量是这个属性
*/</span>

<span class="token comment">//a.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;count变成了%d！\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//b.c</span>
<span class="token keyword">int</span> count<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//c.c</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    count <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//执行</span>
gcc a<span class="token punctuation">.</span>c b<span class="token punctuation">.</span>c c<span class="token punctuation">.</span>c <span class="token operator">&amp;&amp;</span> <span class="token punctuation">.</span><span class="token operator">/</span>a<span class="token punctuation">.</span>out 
<span class="token comment">//输出：count变成了7</span>

  
<span class="token comment">//b.c 或者 c.c 的变量或者函数 加上static关键字变量的链接属性变成internal，报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、生存期与存储类型" tabindex="-1"><a class="header-anchor" href="#_3、生存期与存储类型" aria-hidden="true">#</a> 3、生存期与存储类型</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*C语言的变量拥有两种生存期
	-静态存储期（static storage duration）
		-具有文件作用域（全局变量、external、internal）的变量和函数属于静态存储期。属于静态存储期的变量和函数			 在程序运行期间将一直占据着存储空间，直到程序关闭
	-自动存储期（automation storage duration）
		-具有代码块作用域（局部变量、none）的变量一般情况下属于自动存储期。属于自动存储期的变量在代码块结束时将自			动释放存储空间。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*存储类型指的是存储变量值的内存类型，C语言提供了5种不同的存储类型
	-auto（自动变量）
		-代码块种声明的变量默认的存储类型其实就是auto，使用关键字auto来描述。（如果全局变量和局部变量名一样，那		 么可以在局部变量的前面加上auto用来区分）
	-register（寄存器变量）
		-将一个变量声明为寄存器变量，那么该变量就有可能存放于CPU的寄存器（寄存器存在CPU的内部，速度极快，几乎没			 有延迟）中。为什么说有可能呢？因为寄存器的空间十分有限，编译器不会让你为所欲为 把所有的变量都存到寄存器			 中，甚至所有的register关键字都会被忽略变成普通变量，编译器会权衡那些变量最常用的才存储到寄存器。
		-寄存器和自动变量在很多方面是一样的，它们都拥有代码块作用域，自动存储期和none（局部变量）链接属性
		-有一点需要注意的是：当变量声明为寄存器变量，那么就不能通过取址运算符来获取该变量的地址，因为CPU的寄存器的地址默认是不允许获取的，否则会报错
	-static
		-使用static来声明局部变量可以将局部变量指定为静态局部变量，但是链接属性还是none（只能在所属代码块内访			 问），只初始化一次，再次访问时变量还是上次初始化或改变的值，未初始化的变量值默认初始化为0
		-static使得局部变量具有静态存储期，所以它的生存期与全局变量是一样的，直到程序结束才释放
	-extern
		-extern int 代表int 类型的参数 先不要报错，等待count值初始化，有些情况不加extern也是没有问题的，但是还是加上用于区分比较好
	-typedef
		-xxx
*/</span>

<span class="token comment">//auto 与 register 演示</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">auto</span> <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//100</span>
    <span class="token keyword">register</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//error: address of register variable requested</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//static 与 extern演示</span>
<span class="token comment">//a.c</span>
<span class="token keyword">int</span> count1<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//b.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> count1<span class="token punctuation">;</span><span class="token comment">//这种情况编译器会自动加上extern关键字，可以不加但是不建议不加</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>count1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//执行：gcc test2.c test3.c &amp;&amp; ./a.out</span>
<span class="token comment">/*输出
0
500
1
500
2
500
*/</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、汉诺塔与快速排序" tabindex="-1"><a class="header-anchor" href="#五、汉诺塔与快速排序" aria-hidden="true">#</a> 五、汉诺塔与快速排序</h2><h3 id="_1、汉诺塔" tabindex="-1"><a class="header-anchor" href="#_1、汉诺塔" aria-hidden="true">#</a> 1、汉诺塔</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*递归移动汉诺塔
	-当汉诺塔只有一层时，直接将A移动到C
	-当层数超过1层时把汉诺塔整体看成2块。比如有5块，把上面的4块看成是1块(n-1)，把第5块看成1块(n)，就变成了移	 动两块的问题了
	-	A(n-1)===&gt;B
	-	A(n)  ===&gt;C
	-	B(n-1)===&gt;C
	-	
	-切记不要一味的从结果找规律，还得需要多思考如何在过程找规律！！！！
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">char</span><span class="token punctuation">,</span><span class="token keyword">char</span><span class="token punctuation">,</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">char</span> a<span class="token punctuation">,</span><span class="token keyword">char</span> b<span class="token punctuation">,</span><span class="token keyword">char</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
	  <span class="token comment">//只有一块盘</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c---&gt;%c\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A(n)  ===&gt;C</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">move</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A(n-1)===&gt;B</span>
        <span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A(n)  ===&gt;C</span>
        <span class="token function">move</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//B(n-1)===&gt;C</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入汉诺塔层数：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">move</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、快速排序" tabindex="-1"><a class="header-anchor" href="#_2、快速排序" aria-hidden="true">#</a> 2、快速排序</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> left<span class="token punctuation">,</span> j <span class="token operator">=</span> right<span class="token punctuation">,</span> pivot <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
    <span class="token comment">//条件不成立时代表以基准点为中心把小的和大的分成了两半，则结束或者继续递归</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//从左往右找到大于等于基准点元素，为什么大于等于呢？因为从右找来的可能小于基准点需要和基准点或者和基准点大小一样的互换</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//从右往左找到小于等于基准点元素，为什么小于等于呢？因为从左找来的可能小于基准点需要和基准点或者和基准点大小一样的互换</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/**
         * i==j可能是这种情况
         * left/right得到的基准点可能在最左边或者最右边，当i和j相等，代表它们是顺序的，就没必要对比下去了
         */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//用于下一次直接对比</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果i &lt; j代表左边的i索引的值比j索引的大,则互换</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//用于下一次直接对比</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//还未找到第一个元素，说明没排序完，继续递归</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//从第一个元素找到最后右边找过来的索引</span>
        <span class="token function">quick_sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//未找到最后元素，说明没排序完，继续递归</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//从前面找过来的索引找到最后</span>
        <span class="token function">quick_sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> i1<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%4d&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-----%d---%d\\n&quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">63</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">67</span><span class="token punctuation">,</span><span class="token number">454</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">quick_sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/*
  36  54   6   5  12  23  45  63   1   2  67 454  32  43  67  34  13  45  56  43-----0---20
   2  54   6   5  12  23  45  63   1-----0---9
   2   1   6   5  12  23  45  63-----1---8
   1-----0---1
   1   2   6   5  12  23  45  63  54  36  43 454  32  43  67  34  13  45  56-----10---19
   1   2   6   5  12  23  45  63  54  36  43  56  32  43  67  34  13  45-----11---18
   1   2   6   5  12  23  45  63  54  36  43  56  32  43  45  34  13-----14---17
   1   2   6   5  12  23  13  63  54  36  43  56  32  43  45  34-----6---16
   1   2   6   5  12  23  13  34  54  36  43  56  32  43  45-----7---15
   1   2   6   5  12  23  13  34  32  36  43  56-----8---12
   1   2   6   5  12  13-----5---6
   1   2   5-----2---3
   1   2   5   6  12  13  23  32-----7---8
   1   2   5   6  12  13  23  32  34  36  43  56  54-----10---13
   1   2   5   6  12  13  23  32  34  36  43  43  54-----11---13
   1   2   5   6  12  13  23  32  34  36  43  43  45  56  45  63-----12---16
   1   2   5   6  12  13  23  32  34  36  43  43  45  45-----13---14
   1   2   5   6  12  13  23  32  34  36  43  43  45-----12---13
   1   2   5   6  12  13  23  32  34  36  43  43  45  45  56  54-----15---16
   1   2   5   6  12  13  23  32  34  36  43  43  45  45  54-----14---15
   1   2   5   6  12  13  23  32  34  36  43  43  45  45  54  56  63  67  67-----18---19
   1   2   5   6  12  13  23  32  34  36  43  43  45  45  54  56  63  67-----17---18
   1   2   5   6  12  13  23  32  34  36  43  43  45  45  54  56  63  67  67 454-----0---20
/*
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、动态内存管理" tabindex="-1"><a class="header-anchor" href="#六、动态内存管理" aria-hidden="true">#</a> 六、动态内存管理</h2><h3 id="_1、动态内存管理" tabindex="-1"><a class="header-anchor" href="#_1、动态内存管理" aria-hidden="true">#</a> 1、动态内存管理</h3><blockquote><p>以mem开头的内存管理函数被编入字符串标准库，函数的声明包含在string.h这个头文件中：</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*

malloc
  -申请动态内存空间
  -函数原型：void * malloc(size_t size);
  -malloc函数的作用是：向系统申请分配size个字节的内存空间，并返回一个指向这块空间的指针。
  -如果函数调用成功，返回一个所申请内存空间的指针。由于返回类型是void指针(void *),所以它可以转换成任意类型的数据；如果函数调用失败，返回的是NULL，另外，如果size的参数设为0，返回值也可能是NULL，但这并不意味着函数调用失败
  -!!!需要注意，malloc申请的内存空间是存放在堆上的，如果不主动释放内存资源，那么它将永远的存在，直到程序		被关闭。局部变量是存放在栈上面的，
  
free
  -释放动态内存空间
  -函数原型：void free(void *ptr);
  -free函数的作用是释放ptr参数指向的内存空间，需要注意的是，该内存空间必须是由malloc、calloc或者				 realooc函数申请的，否则该函数将导致未定义行为。如果ptr参数是NULL，则不执行任何操作。注意：该函数不会	 修改ptr参数的值，所以调用free释放内存后，ptr依然指向的是原来的地方（变成了非法空间）。
  
  
calloc
	-申请并自动初始化内存空间
	-函数原型：void *calloc(size_t nmemb,size_t size);
	-calloc函数在内存中动态地申请nmemb个长度size的连续内存空间（即 nmemb*size），并且这些内存空间全部		被初始化为0
	-calloc与malloc的一个重要区别是：calloc会自动初始化内存空间为0
	-calloc等价于      ptr=(int *)malloc(sizeof(int)*N);&amp;memset(ptr,0,N*sizeof(int));
	
	
realloc
	-重新分配内存空间，并拷贝数据
	-函数原型：void *realloc(void *ptr,size_t size);
	-有几点需要注意
		-realloc函数的作用是：修改ptr指向新的内存空间大小为size字节的地址
		-如果新分配的内存空间比原来的大，旧内存中的数据不会发生改变；如果新的内存空间大小小于旧的内存空间，可			能会导致数据丢失
		-如果ptr参数为NULL，那么调用该函数就相当于调用了malloc(size)
		-如果size参数为0，并且ptr参数不为NULL，那么调用该函数就相当于调用了free(ptr)
		-除非ptr参数为NULL，否则ptr的值必须由之前调用的malloc、calloc或者relloc函数返回的，换句话说就是			必须是动态内存（存放在堆）的指针
*/</span>

<span class="token comment">/*初始化内存空间
		-memset 
			-使用一个常量字节填充内存
			函数原型：void *memset(void *str, int c, size_t n)
			-复制字符 c（一个无符号字符）到参数 str 所指向的字符串的前 n 个字符。
			-memset这个函数的作用是将数字以单个字节逐个拷贝的方式放到指定的内存中去
			-int类型的变量一般占用4个字节，对每一个字节赋值0的话就变成了“00000000 00000000 000000000 					00000000” （即10进制数中的0）
			-赋值为-1的话，放的是 “11111111 11111111 11111111 11111111 ”（十进制的-1） 
			-这样你可能以为如果你赋值1的话会让整个dp数组里的每一个int变成1,数组的内容为 00000001 				00000001 00000001 00000001 转化为十进制后不为1
			
		-memcpy 
			- 从 src 复制 n 个字节到 dest。
			函数原型：void *memcpy(void *dest, const void *src, size_t n)
			
		-memmove 
			-另一个用于从 src 复制 n 个字节到 dest 的函数。区别是如果dest和src内存区域重叠，memmove是可以正常拷贝的，memcpy不行
			函数原型：void *memmove(void *dest, const void *src, size_t n)
			
		-memcmp 
			-把 str1 和 str2 的前 n 个字节进行比较。
			-函数原型：int memcmp(const void *str1, const void *str2, size_t n)
			
		-memchr
			-在参数 str 所指向的字符串的前 n 个字节中搜索第一次出现字符 c（一个无符号字符）的位置。
			-函数原型：void *memchr(const void *str, int c, size_t n)
*/</span>



<span class="token comment">//malloc</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>
    ptr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//申请一个int所需空间（因为int类型不同操作&gt;系统占用的字节可能不一样，所以需要使用sizeof），(int *)可以不写，因为返回的是void指针，而void指针可以赋值给任意类型的指针，这里主要是给人看的</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptr<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;分配内存失败!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//退出程序</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个整数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的整数是：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放内存空间</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的整数是：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*内存泄漏主要有几种情况
	-隐式内存泄漏（即用完内存块没有及时使用free函数释放内存）
	-丢失内存块地址（指指针本来指向的是申请的内存地址，不知不觉的被其他普通指针地址覆盖了）
*/</span>
<span class="token comment">//演示内存泄漏</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*类似数组一样使用
		-malloc可以申请一块任意尺寸的内存空间，因为申请的内存空间是连续的，所以可以像数组一样索引，比如 			 ptr[1]得到的是，步进接收的指针类型的大小(int *)
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">,</span>num<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要录入的整数个数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>num<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请录入第%d个整数：&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ptr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的整数是：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>num<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span>ptr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr：%p---&amp;ptr[0]：%pptr[1]：%p\\n&quot;</span><span class="token punctuation">,</span>ptr<span class="token punctuation">,</span><span class="token operator">&amp;</span>ptr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ptr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
请输入您要录入的整数个数：2
请录入第1个整数：1
请录入第2个整数：2
您输入的整数是：
1	ptr：0x6000039d0000---&amp;ptr[0]：0x6000039d0000ptr[1]：0x6000039d0004
2	ptr：0x6000039d0000---&amp;ptr[0]：0x6000039d0000ptr[1]：0x6000039d0004
*/</span>





<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">10</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    ptr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptr<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>N<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>N<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span>ptr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//0	0	0	0	0	0	0	0	0	0</span>


<span class="token comment">/*测试动态申请内存

*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr1<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr2<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">//第一次申请内存</span>
    ptr1<span class="token operator">=</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//申请10*int个字节，并初始化为0</span>
    <span class="token comment">//发现内存不够用</span>
    <span class="token comment">//第二次申请内存</span>
    ptr2<span class="token operator">=</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//申请int*20个字节</span>
    <span class="token comment">//将ptr1的数据拷贝到ptr2</span>
    <span class="token function">memcpy</span><span class="token punctuation">(</span>ptr2<span class="token punctuation">,</span>ptr1<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//拷贝到ptr2，从ptr1，拷贝10字节个数据</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>ptr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>ptr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//用完ptr2</span>
    <span class="token function">free</span><span class="token punctuation">(</span>ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/*relloc*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">,</span>num<span class="token punctuation">,</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个整数（输入-1表示结束）：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        length<span class="token operator">++</span><span class="token punctuation">;</span>
        ptr<span class="token operator">=</span><span class="token function">realloc</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ptr<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ptr<span class="token punctuation">[</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的整数分别是：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span>ptr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
请输入一个整数（输入-1表示结束）：123
请输入一个整数（输入-1表示结束）：1234
请输入一个整数（输入-1表示结束）：12345
请输入一个整数（输入-1表示结束）：123456
请输入一个整数（输入-1表示结束）：-1
您输入的整数分别是：123	1234	12345	123456
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、c语言内存布局" tabindex="-1"><a class="header-anchor" href="#七、c语言内存布局" aria-hidden="true">#</a> 七、C语言内存布局</h2><h3 id="_1、c语言内存布局" tabindex="-1"><a class="header-anchor" href="#_1、c语言内存布局" aria-hidden="true">#</a> 1、C语言内存布局</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*C语言内存布局规律
	变量名-----------------内存地址------------注释
	local_var1 			       高 			   局部变量
	local—var2									局部变量
	malloc_var									动态申请的内存空间
	global_uninit_var							全局变量（未初始化）
	static_uninit_var							局部变量（未初始化）
	static_init_var								局部变量（初始化）
	global_uninit_var2							全局变量（初始化）
	global_uninit_var1							全局变量（初始化）
	str2										字符串常量
	str1										字符串常量
	func					低				 函数
	变量名-----------------内存地址------------注释

	-内存地址发展趋势
		-内存地址由低-&gt;高发展：代码段-&gt;数据段-&gt;bss段-&gt;堆-&gt;
		-未使用的内存空间
		-内存地址由高-&gt;低发展：栈-&gt;命令行参数和环境变量-&gt;
	-代码段
		-代码段(Text Segment)，又称为文本段。存储可执行文件的指令，通常是指用来存放程序执行代码的一块内存区域。这部分区域的大小在程序运行前就已经确定，并且该内存区域通常属于只读，二进制程序代码主体、函数主体等，在代码段中，也可以能包含一些只读的常数变量，例如字符串常量等。
	-数据段
		-数据段(Initialized data segment)通常用来存放已经初始化的全局变量和静态变量。
	-BSS段
		-BSS段(BSS segment/Uninitialized data segment)通常是指用来存放程序中未初始化的全局变量和静态		变量的一块内存区域，BSS是英文Block Started by Symbol 的简称，这个区段中的数据在程序运行前会				被自动初始化为数字0
	-堆
		-堆是用于存放进程运行中被动态分配的内存段，它的大小并不固定，可动态扩展或缩小。当进程调用malloc等函				数分配内存时，新分配的内存就被动态添加到堆上；当利用free等函数释放内存时，被释放的内存从堆中剔除。
		-由程序员分配，释放，如果不释放，程序结束时可能由操作系统释放。
		-生存周期：由程序员申请到主动释放位置，不同函数之间均可自由访问
	-栈
		-由编译器自动分配，翻译。存放函数的参数值和局部变量的值。
		-生存周期：从调用函数开始到函数执行结束，函数之间的局部变量不能互相访问
*/</span>

<span class="token comment">//测试变量函数在内存中所处位置的分布规律</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> global_uninit_var<span class="token punctuation">;</span>
<span class="token keyword">int</span> global_init_var1<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> global_init_var2<span class="token operator">=</span><span class="token number">10086</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> local_var1<span class="token punctuation">;</span>
	<span class="token keyword">int</span> local_var2<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> static_uninit_var<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> static_init_var<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>str1<span class="token operator">=</span><span class="token string">&quot;fuck you study&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>str2<span class="token operator">=</span><span class="token string">&quot;I no like study&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>malloc_var<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\\

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of func-&gt;%p\\n&quot;</span><span class="token punctuation">,</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of str1-&gt;%p\\n&quot;</span><span class="token punctuation">,</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of str2-&gt;%p\\n&quot;</span><span class="token punctuation">,</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of global_init_var1-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>global_init_var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of global_init_var2-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>global_init_var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of static_init_var-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>static_init_var<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of static_uninit_var-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>static_uninit_var<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of global_uninit_var-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>global_uninit_var<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of malloc_var-&gt;%p\\n&quot;</span><span class="token punctuation">,</span>malloc_var<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of local_var1-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>local_var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addrress of local_var2-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>local_var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
addrress of func-&gt;0x10241fcc8
addrress of str1-&gt;0x10241fe50
addrress of str2-&gt;0x10241fe5f
addrress of global_init_var1-&gt;0x102424000
addrress of global_init_var2-&gt;0x102424004
addrress of static_init_var-&gt;0x102424008
addrress of static_uninit_var-&gt;0x10242400c
addrress of global_uninit_var-&gt;0x102424010
addrress of malloc_var-&gt;0x600002b68030
addrress of local_var1-&gt;0x16d9e3718
addrress of local_var2-&gt;0x16d9e3714
*/</span>

<span class="token comment">//测试堆的不同函数访问</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    ptr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptr<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>ptr<span class="token operator">=</span><span class="token number">1008611</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    ptr<span class="token operator">=</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：1008611</span>


<span class="token comment">//测试一个奇怪的代码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
    <span class="token operator">*</span>p<span class="token operator">=</span><span class="token number">258</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p-&gt;%p-&gt;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出1 2？什么情况？
	0x16b52f71b-&gt;0x16b52f71a-&gt;0x16b52f71a
	1 2

	解密：
		-局部变量存放在栈中，而栈内存地址是由高位-&gt;低位发展的
		-此时变量a和变量b为高位-&gt;低位的连续的内存：00000000 00000000
		-                                    00000001 00000010(低位b向高位a覆盖)
		-258二进制为100000010，即a处留下的是00000001(=1)，b处留下的是00000010(=2)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、高级宏定义" tabindex="-1"><a class="header-anchor" href="#八、高级宏定义" aria-hidden="true">#</a> 八、高级宏定义</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*高级宏定义
	-这三个属于预处理，编译器不会检查语法，只负责替换
		-宏定义
			-为了和普通的变量进行区分，宏的名字通常我们约定全部由大写字母组成
			-宏定义只是简单的替换，并且由于预处理是在编译之前进行的，而编译器工作的任务之一就是语法检查，所以编			 译器不会对宏定义进行语法检查。
			-宏定义不是说明或语句，在末尾无须加分号
			-宏定义的作用域是从定义的位置开始到整个程序结束。
			-可以用 #under 宏名 来终止宏定义的作用域
			-宏定义运行嵌套
		-包含文件
		-条件编译
*/</span>

<span class="token comment">//宏定义测试</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">R</span> <span class="token expression"><span class="token number">6371</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.1415926</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">V</span> <span class="token expression">PI <span class="token operator">*</span> R <span class="token operator">*</span> R <span class="token operator">*</span> R <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">3</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;地球的体积大概是：%f\\n&quot;</span><span class="token punctuation">,</span>V<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：地球的体积大概是：1083206898368.235840</span>

<span class="token comment">/*测试带参数宏定义
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">MAX</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span><span class="token comment">//注意MAX后面没有空格，带参数宏定义是这样的,这里的括号不能省略，否则可能会出现一些意想不到的错误，但是尽管加上括号也不一定是稳定正确的，分场景使用</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入两个整数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;最大值是：%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
请输入两个整数：12 77
最大值是：77
*/</span>

<span class="token comment">/*带参数宏定义的一些坑例
	-运算时加上括号，可以避免一些可能出现的问题
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">SQUARE</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> x<span class="token operator">*</span>x</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个整数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d的平方是：%d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span><span class="token function">SQUARE</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d的平方是：%d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token function">SQUARE</span><span class="token punctuation">(</span>x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//宏定义只负责替换，这里变成了：x+1*x+1</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
请输入一个整数：5
5的平方是：25
6的平方是：11
*/</span>

<span class="token comment">/*测试带参数宏定义运算时加括号也出现结果错误
	
*/</span>
<span class="token comment">/*这是正常的程序
	-但是因为调用普通函数参数会频繁的把参数、返回值压入栈中，执行一百次就要进行100次压栈等操作，太浪费资源了，效率也不太好，尝试一下用带参数宏定义实现（见下个例子）
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d的平方是：%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token function">square</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*用带参数宏定义实现
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">SQUARE</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d的平方是：%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token function">SQUARE</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//因为这里会被替换成((i++)*(i++))，i++取值执行操作再运算，执行到第一个(i++)时，因为括号优先级关系会先取第2个(i++)的值再++，取完第2个的值，第1个开始++，i变成了2，又因为 i++取值再运算，这时是执行完 2*1，第2个i才进行运算</span>
	<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
1的平方是：2
3的平方是：12
5的平方是：30
7的平方是：56
9的平方是：90
11的平方是：132
...........
//明显结果不对
*/</span>



<span class="token comment">/*内联函数（在函数前面加上inline关键字）
	-内联函数的原理跟宏定义展开是差不多的，当编译器解析到执行的是一个内联函数的时候，它会将代码直接向宏定义一样展开替换
	-它的优点就是避免宏定义的缺点
	-它可以解决 调用普通函数参数会频繁的把参数、返回值压入栈中 的问题
	-因为内联函数嵌入调用者代码中的操作是一种优化操作，因此只有进行优化编译时才会执行潜入处理，若编译过程中		没有使用优化选项 ‘-O’，那么内联函数的代码就不会真正的嵌入到调用者代码中，而是只作为普通函数调用来处		理。所以编译的时候应该使用 gcc xxx.c -O 进行编译
	-内联函数虽然节省了函数调用的资源、时间消耗问题，但由于每一个函数出现的地方都要进行替换，因此增加了代码的编译时间。另外并不是所有的函数都能变成内联函数的。
	-现在的编译器很聪明，就算不写inline，它也会自动地将一些函数优化成内联函数。
	-总结：编译器比你更了解哪些函数应该内联或不内联，所以这个知识点知道就好...
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">inline</span> <span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d的平方是：%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token function">square</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出正常</span>


<span class="token comment">/*#和##（预处理运算符）
	-在带参数的宏定义中，#运算符后面应该跟一个参数，预处理会把这个参数转换为一个字符串。
	#会把连续的多个空格变成一个
	-##运算符被称为记号连接运算符，比如我们可以使用##运算符连接两个参数。
*/</span>
<span class="token comment">//#</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">STR</span><span class="token expression"><span class="token punctuation">(</span>s<span class="token punctuation">)</span> # s</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span><span class="token function">STR</span><span class="token punctuation">(</span>HELLO     NIHAOMA<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token function">STR</span><span class="token punctuation">(</span><span class="token operator">%</span>s<span class="token operator">-&gt;</span><span class="token operator">%</span>d\\n<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">STR</span><span class="token punctuation">(</span>NIHAO<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10010</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
HELLO NIHAOMA
NIHAO-&gt;10010
*/</span>

<span class="token comment">//##</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">JOIN</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> x </span><span class="token punctuation">##</span> <span class="token expression">y</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">he</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> x <span class="token operator">*</span> x</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">JOIN</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">he</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
250
25
*/</span>

<span class="token comment">/*带参数宏定义使用可变参数
-__VA_ARGS__ 是一个可变参数的宏，很少人知道这个宏，这个可变参数的宏是新的C99规范中新增的，目前似乎只有gcc支持（VC6.0的编译器不支持）。
-##__VA_ARGS__ 宏前面加上##的作用在于，当可变参数的个数为0时，这里的##起到把前面多余的&quot;,&quot;去掉的作用,否则会编译出错
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">PRINT0</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span>#__VA_ARGS__<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">PRINT</span><span class="token expression"><span class="token punctuation">(</span>format<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span># format<span class="token punctuation">,</span></span><span class="token punctuation">##</span><span class="token expression">__VA_ARGS__<span class="token punctuation">)</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">PRINT0</span><span class="token punctuation">(</span>GO to heal<span class="token punctuation">,</span>FUCK<span class="token punctuation">,</span>FUCK<span class="token punctuation">,</span>FUCK\\n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//#将参数转换成字符串</span>
    <span class="token function">PRINT</span><span class="token punctuation">(</span>str<span class="token operator">=</span><span class="token operator">%</span>s<span class="token operator">-&gt;</span><span class="token operator">%</span>d<span class="token operator">-&gt;</span><span class="token operator">%</span>d\\n<span class="token punctuation">,</span><span class="token string">&quot;NOPERSON&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">PRINT</span><span class="token punctuation">(</span>GO to heal\\n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
GO to heal,FUCK,FUCK,FUCK
str=NOPERSON-&gt;5-&gt;20
GO to heal
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、复杂数据类型" tabindex="-1"><a class="header-anchor" href="#九、复杂数据类型" aria-hidden="true">#</a> 九、复杂数据类型</h2><h3 id="_1、结构体" tabindex="-1"><a class="header-anchor" href="#_1、结构体" aria-hidden="true">#</a> 1、结构体</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*结构体&amp;&amp;结构体数组

*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">Date</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> year<span class="token punctuation">;</span>
	<span class="token keyword">int</span> mouth<span class="token punctuation">;</span>
	<span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
	<span class="token keyword">char</span> title<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> price<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span><span class="token comment">//嵌套结构体</span>
	<span class="token keyword">char</span> publisher<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">// book;</span>

<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token function">input_book</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入作者：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入售价：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%f&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>book<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入出版日期：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%d-%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>year<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>mouth<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入出版社：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> book<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_book_info</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n======输出书籍信息======\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;作者：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;售价：%2f\\n&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版日期：%d-%d-%d\\n&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>year<span class="token punctuation">,</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>mouth<span class="token punctuation">,</span>book<span class="token punctuation">.</span>date<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版社：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*struct Book{
		....
	} book;//这样也允许*/</span>
	<span class="token comment">/*struct Book{
        ....
    } book[20];//这样也允许*/</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> book<span class="token punctuation">;</span>
	book<span class="token operator">=</span><span class="token function">input_book</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数形参是结构体时是值传递所以需要返回值，当数据量大结构复杂时，会浪费大量空间、时间资源，这是C99标准。下一个例子测试结构体指针用法</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> book1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;shuming&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zuozhe&quot;</span><span class="token punctuation">,</span><span class="token number">99.99</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">2021</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;Guanxi University of Information engineer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这是可行的，但是此初始化方式只能在声明结构体时一起顺序初始化完所有成员变量，允许直接初始化struct Xxxx xxxx={...},但是不允许声明完后再初始化许struct Xxxx xxxx;xxxx={...}，不能通过此方式修改先声明好的结构体</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> book2<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">.</span>title<span class="token operator">=</span><span class="token string">&quot;书名&quot;</span><span class="token punctuation">,</span><span class="token punctuation">.</span>author<span class="token operator">=</span><span class="token string">&quot;作者&quot;</span><span class="token punctuation">,</span><span class="token punctuation">.</span>date<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这是可行的，但是此初始化方式只能在声明结构体时初始化指定的成员变量，允许直接初始化struct Xxxx xxxx={...},但是不允许声明完后再初始化struct Xxxx xxxx;xxxx={...}，不能通过此方式修改先声明好的结构体</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> books<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>book1<span class="token punctuation">,</span>book2<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;量子力学&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;量子力学作者&quot;</span><span class="token punctuation">,</span><span class="token number">999.99</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">1980</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;Guanxi University of Information engineer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这是可行的，，允许直接初始化struct Xxxx xxxx={...},但是不允许声明完后再初始化struct Xxxx xxxx;xxxx={...}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">output_book_info</span><span class="token punctuation">(</span>books<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
请输入书名：金瓶梅
请输入作者：武大郎
请输入售价：22
请输入出版日期：1998-10-21
请输入出版社：Beijing University            

======输出书籍信息======

书名：shuming
作者：zuozhe
售价：99.989998
出版日期：2021-12-31
出版社：Guanxi University of Information engineer

======输出书籍信息======

书名：书名
作者：作者
售价：0.000000
出版日期：2022-12-31
出版社：

======输出书籍信息======

书名：量子力学
作者：量子力学作者
售价：999.989990
出版日期：1980-11-31
出版社：Guanxi University of Information engineer

======输出书籍信息======

书名：
作者：
售价：0.000000
出版日期：0-0-0
出版社
*/</span>

<span class="token comment">//-------------------分割线-----------------------</span>
<span class="token comment">//例1</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
        <span class="token keyword">char</span> a<span class="token punctuation">;</span>
        <span class="token keyword">int</span> b<span class="token punctuation">;</span>
        <span class="token keyword">char</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;x&#39;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token char">&#39;y&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof：%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：sizeof：12</span>
<span class="token comment">//例2</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
        <span class="token keyword">char</span> a<span class="token punctuation">;</span>
        <span class="token keyword">char</span> c<span class="token punctuation">;</span>
        <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> a<span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;x&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;y&#39;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof：%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：sizeof：8</span>

<span class="token comment">/*为什么会这样呢？明明成员变量类型都一样。
	-这是因为编译器对结构体成员进行内存对齐后的结果，因为内存对齐后可以让CPU更快的读取和处理这些数据。(详细看下个注释解析)
	-对齐前：abbbbc(字节分布，a一个字节，b四个字节，0代表不使用)
	-对齐后：a000bbbbc000(字节分布，a一个字节，b四个字节，0代表不使用)(例1)
	-调整后：ac00bbbb(字节分布，a一个字节，b四个字节，0代表不使用)(例2)
	
*/</span>

<span class="token comment">/*结构体指针
	-通过结构体指针访问结构体成员有两种方式：
		-(*结构体指针).成员名
		-结构体指针-&gt;成员名

*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">Date</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> year<span class="token punctuation">;</span>
	<span class="token keyword">int</span> mouth<span class="token punctuation">;</span>
	<span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
	<span class="token keyword">char</span> title<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> price<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>
	<span class="token keyword">char</span> publisher<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> book<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">input_book</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span>book<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">*</span>book<span class="token punctuation">)</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入作者：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">*</span>book<span class="token punctuation">)</span><span class="token punctuation">.</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//测试结构体指针取值方式1</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入售价：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%f&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token operator">*</span>book<span class="token punctuation">)</span><span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入出版日期：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%d-%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>year<span class="token punctuation">,</span><span class="token operator">&amp;</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>mouth<span class="token punctuation">,</span><span class="token operator">&amp;</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//测试结构体指针取值方式2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入出版社：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_book_info</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span>book<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n======输出书籍信息======\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;作者：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;售价：%2f\\n&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版日期：%d-%d-%d\\n&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>year<span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>mouth<span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版社：%s\\n&quot;</span><span class="token punctuation">,</span>book<span class="token operator">-&gt;</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span>books<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">do</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前图书馆书本数量有本%d书!\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span>book<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">input_book</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
		books<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token operator">=</span>book<span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;录入第%d本书完毕!\\n&quot;</span><span class="token punctuation">,</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;===========图书馆已满==============\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">output_book_info</span><span class="token punctuation">(</span>books<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、单链表" tabindex="-1"><a class="header-anchor" href="#_2、单链表" aria-hidden="true">#</a> 2、单链表</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//头插法</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> title<span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">input_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入作者：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">add_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">,</span><span class="token operator">*</span>temp<span class="token punctuation">;</span>
	node<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存申请失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">input_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//第一个节点</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    node<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">//插入头部</span>
    temp<span class="token operator">=</span><span class="token operator">*</span>nodes<span class="token punctuation">;</span>
    <span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>next<span class="token operator">=</span>temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token operator">=</span>nodes<span class="token punctuation">;</span>
	<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Node%d：\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
		node<span class="token operator">=</span>node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		next<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token function">free</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入y开始录入图书，其他任意字符退出：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token char">&#39;y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Bye\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">add_node</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入nodes指针的指针实际是为了在其他函数中对nodes的修改，影响到main中的node罢了。</span>
		<span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入nodes指针的指针实际是为了在其他函数中对nodes的修改，影响到main中的node罢了。</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
输入y开始录入图书，其他任意字符退出：y
请输入书名：11
请输入作者：11
输入y开始录入图书，其他任意字符退出：y 
请输入书名：22
请输入作者：22
输入y开始录入图书，其他任意字符退出：y
请输入书名：33
请输入作者：33
输入y开始录入图书，其他任意字符退出：n
Bye
Node1：
书名：33
书名：33
Node2：
书名：22
书名：22
Node3：
书名：11
书名：11
*/</span>


<span class="token comment">//尾插法（遍历链表查找尾部，数据量大可能效率会较低）</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> title<span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">input_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入作者：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">add_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">,</span><span class="token operator">*</span>temp<span class="token punctuation">;</span>
	node<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存申请失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">input_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	node<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token comment">//第一个节点</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		temp<span class="token operator">=</span><span class="token operator">*</span>nodes<span class="token punctuation">;</span>
		<span class="token comment">//定位单链表尾部</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token operator">-&gt;</span>next<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			temp<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//插入节点</span>
		temp<span class="token operator">-&gt;</span>next<span class="token operator">=</span>node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token operator">=</span>nodes<span class="token punctuation">;</span>
	<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Node%d：\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
		node<span class="token operator">=</span>node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		next<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token function">free</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入y开始录入图书，其他任意字符退出：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token char">&#39;y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Bye\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">add_node</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//尾插法优化版（每次插入记录链表尾部）,与搜索</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> title<span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">input_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入作者：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">add_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>tail<span class="token punctuation">;</span>
	node<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存申请失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">input_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	node<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token comment">//第一个节点</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token comment">//上一个尾节点，记住下一个节点</span>
		tail<span class="token operator">-&gt;</span>next<span class="token operator">=</span>node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//记住链表的尾节点</span>
	tail<span class="token operator">=</span>node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>node<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token operator">=</span>nodes<span class="token punctuation">;</span>
	<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Node%d：\\n&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">output_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
		node<span class="token operator">=</span>node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		next<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token function">free</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token function">search_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">*</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>nodes<span class="token operator">-&gt;</span>title<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token operator">||</span><span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>nodes<span class="token operator">-&gt;</span>author<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> nodes<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		nodes<span class="token operator">=</span>nodes<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入y开始录入图书，其他任意字符退出：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token char">&#39;y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Bye\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">add_node</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> target<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入书名或作者关键字：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>result<span class="token punctuation">;</span>
	result<span class="token operator">=</span><span class="token function">search_node</span><span class="token punctuation">(</span>nodes<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;很遗憾，未找到！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">do</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;找到了：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">output_node</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token operator">=</span><span class="token function">search_node</span><span class="token punctuation">(</span>result<span class="token operator">-&gt;</span>next<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/*输出：
  输入y开始录入图书，其他任意字符退出：y
  请输入书名：天堂的颜色
  请输入作者：有持无恐
  输入y开始录入图书，其他任意字符退出：y
  请输入书名：只有羡慕
  请输入作者：刘玉培
  输入y开始录入图书，其他任意字符退出：y
  请输入书名：不 找了找不到的
  请输入作者：刘玉培
  输入y开始录入图书，其他任意字符退出：n
  Bye
  Node1：
  书名：天堂的颜色
  书名：有持无恐
  Node2：
  书名：只有羡慕
  书名：刘玉培
  Node3：
  书名：找了找不到的
  书名：刘玉培
  请输入书名或作者关键字：刘玉培
  找到了：
  书名：只有羡慕
  书名：刘玉培
  找到了：
  书名：找了找不到的
  书名：刘玉培
  -------------------------------
  Node1：
  书名：天堂的颜色
  书名：有持无恐
  Node2：
  书名：只有羡慕
  书名：刘玉培
  Node3：
  书名：找了找不到的
  书名：刘玉培
*/</span>


<span class="token comment">//单链表插入到某个节点，与删除某个节点</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> value<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">insert_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">remove_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">output_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">insert_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>node<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;申请内存失败！！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	node<span class="token operator">-&gt;</span>value<span class="token operator">=</span>value<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		node<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>temp<span class="token operator">=</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token operator">*</span>previous<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span>temp<span class="token operator">-&gt;</span>value<span class="token operator">&lt;</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			previous<span class="token operator">=</span>temp<span class="token punctuation">;</span>
			temp<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//当循环结束，temp比输入的值要大，把它的指针赋值给当前新增的节点</span>
		node<span class="token operator">-&gt;</span>next<span class="token operator">=</span>temp<span class="token punctuation">;</span>
		<span class="token comment">//如果等于空，代表是链表中最小的节点，放到第一</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>previous<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token operator">*</span>nodes<span class="token operator">=</span>node<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token comment">//否则上一个节点指向当前新增的节点</span>
			previous<span class="token operator">-&gt;</span>next<span class="token operator">=</span>node<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">remove_node</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>temp<span class="token operator">=</span><span class="token operator">*</span>nodes<span class="token punctuation">,</span><span class="token operator">*</span>previous<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">,</span><span class="token operator">*</span>current<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-&gt;</span>value<span class="token operator">==</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
			current<span class="token operator">=</span>temp<span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
        previous<span class="token operator">=</span>temp<span class="token punctuation">;</span>
		temp<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>current<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;没有找到您要删除的整数！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>previous<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>current<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		previous<span class="token operator">-&gt;</span>next<span class="token operator">=</span>current<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">free</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">output_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%3d&quot;</span><span class="token punctuation">,</span>nodes<span class="token operator">-&gt;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		nodes<span class="token operator">=</span>nodes<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>temp<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		temp<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token function">free</span><span class="token punctuation">(</span><span class="token operator">*</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>nodes<span class="token operator">=</span>temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>nodes<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> value<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要添加的一个整数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token function">insert_node</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span>

	 <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要删除一个整数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token function">remove_node</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开始退出，并释放资源！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token function">release_nodes</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;释放资源成功！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">output_nodes</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
请输入您要添加的一个整数：23
 23
请输入您要添加的一个整数：4
  4 23
请输入您要添加的一个整数：5
  4  5 23
请输入您要添加的一个整数：7
  4  5  7 23
请输入您要添加的一个整数：2
  2  4  5  7 23
请输入您要添加的一个整数：8
  2  4  5  7  8 23
请输入您要添加的一个整数：0
  0  2  4  5  7  8 23
请输入您要添加的一个整数：-1
请输入您要删除一个整数：0
  2  4  5  7  8 23
请输入您要删除一个整数：2
  4  5  7  8 23
请输入您要删除一个整数：4
  5  7  8 23
请输入您要删除一个整数：-1
  5  7  8 23
开始退出，并释放资源！
释放资源成功！
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、单链表与内存池" tabindex="-1"><a class="header-anchor" href="#_3、单链表与内存池" aria-hidden="true">#</a> 3、单链表与内存池</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*内存碎片
	-没有内存碎片
	———————————
	｜ C=16KB ｜
	———————————
	｜ B=12KB ｜
	———————————
	｜ A=16KB ｜
	———————————
	-当B被释放
	———————————
	｜ C=16KB ｜
	———————————
	｜ 12KB ｜
	———————————
	｜ A=16KB ｜
	———————————
	就会产生一块碎片，除非下次申请的内存块小于或等于12KB才会用到12KB这块碎片内存
	-每次申请内存都要从应用层-&gt;内核层-&gt;应用层 切换，很消耗资源
	
	-内存池
		-用单链表维护一个简单的内存池
		-需要申请内存的时候，先从链表中获取，如果有，直接取出来，否则才申请一块内存
		-当需要释放资源的时候，把它先放到内存池里面，等下次需要时直接从内存池中取出来
*/</span>

<span class="token comment">/*内存池与单链表增删改查测试
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX</span> <span class="token expression"><span class="token number">1024</span></span></span>

<span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> phone<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>pool<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">add_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token function">find_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>person<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">change_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">del_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">display_contacts</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">release_persons</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">add_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>person<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>tail<span class="token punctuation">;</span>
	<span class="token comment">//如果内存池不等于NULL</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pool<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//取出内存池头节点</span>
		person<span class="token operator">=</span>pool<span class="token punctuation">;</span>
		<span class="token comment">//将第二个节点设置为头节点</span>
		pool<span class="token operator">=</span>person<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token comment">//内存池的容量减1</span>
		count<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--------从内存池中申请---------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token comment">//如果内存池为空，则请求分配内存</span>
		person<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>person<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;申请内存失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n-------重新申请内存---------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入联系人名称：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>person<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入联系人电话：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>person<span class="token operator">-&gt;</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//尾插法，不管取的是内存池头节点还是重新申请的内存块，都将next设置为指向NULL</span>
	person<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token comment">//如果通讯录是NULL</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>persons<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//设置头节点</span>
		<span class="token operator">*</span>persons<span class="token operator">=</span>person<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	<span class="token comment">//上一个节点，指向新增节点</span>
		tail<span class="token operator">-&gt;</span>next<span class="token operator">=</span>person<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//设置上一个节点</span>
	tail<span class="token operator">=</span>person<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;新增成功！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token function">find_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>persons<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>persons<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>persons<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> persons<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		persons<span class="token operator">=</span>persons<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">change_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>person<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要修改的联系人名称：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	person<span class="token operator">=</span><span class="token function">find_person</span><span class="token punctuation">(</span><span class="token operator">*</span>persons<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>person<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;未找到您要修改的联系人！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入新的电话号码：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>person<span class="token operator">-&gt;</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;修改成功！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">del_person</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>previous<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">,</span><span class="token operator">*</span>person<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">,</span><span class="token operator">*</span>temp<span class="token operator">=</span><span class="token operator">*</span>persons<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要删除的联系人名称：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//找到上一个节点，和匹配节点</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>temp<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            person<span class="token operator">=</span>temp<span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		previous<span class="token operator">=</span>temp<span class="token punctuation">;</span>
		temp<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//如果没找到匹配的节点，提示并返回</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>person<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;未找到您要删除的联系人！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//如果上一个节点为空，证明要删除的节点是头节点，把头节点设置成被删除节点的下一个节点</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>previous<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>persons<span class="token operator">=</span>person<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token comment">//不为空，则将上一个节点，指向当前将被删除的节点的下一个节点</span>
		previous<span class="token operator">-&gt;</span>next<span class="token operator">=</span>person<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//如果内存池没满</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span>MAX<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//如果内存池是空的</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>pool<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//将被删除点的下一个节点的指针设置为NULL</span>
			person<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
			<span class="token comment">//将头节点设置成当前被删除的节点</span>
			pool<span class="token operator">=</span>person<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token comment">//插入头部</span>
			temp<span class="token operator">=</span>pool<span class="token punctuation">;</span>
            pool<span class="token operator">=</span>person<span class="token punctuation">;</span>
            pool<span class="token operator">-&gt;</span>next<span class="token operator">=</span>temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//增加内存池中内存块的数量</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token comment">//内存池满了，删除</span>
		<span class="token function">free</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">display_contacts</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>persons<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">++</span>num<span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;联系人%d\\n&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;联系人姓名：%s\\n&quot;</span><span class="token punctuation">,</span>persons<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;联系人电话：%s\\n&quot;</span><span class="token punctuation">,</span>persons<span class="token operator">-&gt;</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
		persons<span class="token operator">=</span>persons<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">release_persons</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>temp<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>persons<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		temp<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
		<span class="token function">free</span><span class="token punctuation">(</span><span class="token operator">*</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">*</span>persons<span class="token operator">=</span>temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;资源释放成功！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>persons<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> op<span class="token punctuation">;</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;--------欢迎使用单链表实现的带有内存池的通讯录--------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1.新增联系人\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2.查找联系人\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3.修改联系人\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4.删除联系人\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;5.显示当前通讯录\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;6.退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入对应的序号：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">switch</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
				<span class="token function">add_person</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要查找的联系人名称：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token operator">*</span>person<span class="token operator">=</span><span class="token function">find_person</span><span class="token punctuation">(</span>persons<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>person<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;未找到联系人！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token function">display_contacts</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
				<span class="token function">change_person</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
				<span class="token function">del_person</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
				<span class="token function">display_contacts</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
				<span class="token keyword">goto</span> END<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	END<span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token function">release_persons</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">release_persons</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pool<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Bye～\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出没毛病*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、typedef-给类型定别名" tabindex="-1"><a class="header-anchor" href="#十、typedef-给类型定别名" aria-hidden="true">#</a> 十、typedef（给类型定别名）</h2><h3 id="_1、typedef用法" tabindex="-1"><a class="header-anchor" href="#_1、typedef用法" aria-hidden="true">#</a> 1、typedef用法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//基础用法</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> integer<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    integer a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    a<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
    b<span class="token operator">=</span>a<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>									<span class="token comment">//a = 10010</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b = %d\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>									<span class="token comment">//b = 10010</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a sizeof = %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//a sizeof = 4</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//给指针定义别名</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">//写法一</span>
<span class="token comment">//typedef int integer;</span>
<span class="token comment">//typedef int *print;</span>
<span class="token comment">//写法二</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> integer<span class="token punctuation">,</span><span class="token operator">*</span>print<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    integer a<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
    print b<span class="token punctuation">,</span>c<span class="token punctuation">;</span><span class="token comment">//相当于 int *b,*c;</span>
    b<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
    c<span class="token operator">=</span>b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//a = 10010</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*b = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">//*b = 10010</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b = %p\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//b = 0x16b43b5e8</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*c = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">//*c = 10010</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c = %p\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//c = 0x16b43b5e8</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试typedef与宏定义的区别</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> integer<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">print</span> <span class="token expression"><span class="token keyword">int</span><span class="token operator">*</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    integer a<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
    print b<span class="token punctuation">,</span>c<span class="token punctuation">;</span><span class="token comment">//因为#define只是机械的替换，所以这里变成了 int *b,c;因此报错了</span>
    b<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
    c<span class="token operator">=</span>b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*b = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b = %p\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*c = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c = %p\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出 报错
warning: incompatible pointer to integer conversion assigning to &#39;int&#39; from &#39;int *&#39;; dereference with * [-Wint-conversion]
        c=b;
         ^~
          *
test3.c:15:21: error: indirection requires pointer operand (&#39;int&#39; invalid)
        printf(&quot;*c = %d\\n&quot;,*c);
                           ^~
test3.c:16:23: warning: format specifies type &#39;void *&#39; but the argument has type &#39;int&#39; [-Wformat]
    printf(&quot;c = %p\\n&quot;,c);
                ~~    ^
                %d
2 warnings and 1 error generated.
*/</span>


<span class="token comment">//typedef与结构体</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Date</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> year<span class="token punctuation">;</span>
    <span class="token keyword">int</span> month<span class="token punctuation">;</span>
    <span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span> DATE<span class="token punctuation">,</span><span class="token operator">*</span>PDATE<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Date</span> <span class="token operator">*</span>date<span class="token punctuation">;</span>
    date<span class="token operator">=</span><span class="token punctuation">(</span>PDATE<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DATE<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>date<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    date<span class="token operator">-&gt;</span>year<span class="token operator">=</span><span class="token number">2022</span><span class="token punctuation">;</span>
    date<span class="token operator">-&gt;</span>month<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    date<span class="token operator">-&gt;</span>day<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d年%d月%d日\\n&quot;</span><span class="token punctuation">,</span>date<span class="token operator">-&gt;</span>year<span class="token punctuation">,</span>date<span class="token operator">-&gt;</span>month<span class="token punctuation">,</span>date<span class="token operator">-&gt;</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2022年2月10日</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//高级用法一：int *(*PTR_TO_FUN)(int)</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>PTR_TO_FUN<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一个返回int指针、形参为int的函数指针</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">A</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">B</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">C</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">A</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A---&gt;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">B</span><span class="token punctuation">(</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;B---&gt;%d\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">C</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C---&gt;%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	PTR_TO_FUN ptf<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&amp;</span>A<span class="token punctuation">,</span><span class="token operator">&amp;</span>B<span class="token punctuation">,</span><span class="token operator">&amp;</span>C<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token punctuation">(</span><span class="token operator">*</span>ptf<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：//报错是因为形参为局部变量，函数执行结束值也就被释放了，所以这是正常的
test5.c:10:10: warning: address of stack memory associated with parameter &#39;a&#39; returned [-Wreturn-stack-address]
        return &amp;a;
                ^
test5.c:14:13: warning: address of stack memory associated with parameter &#39;b&#39; returned [-Wreturn-stack-address]
    return &amp;b;
            ^
test5.c:18:13: warning: address of stack memory associated with parameter &#39;c&#39; returned [-Wreturn-stack-address]
    return &amp;c;
            ^
3 warnings generated.
A---&gt;1
B---&gt;2
C---&gt;3
*/</span>

<span class="token comment">//高级用法二：int (*PTR_TO_FUN)(int,int)</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>PTR_TO_FUN<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span>PTR_TO_FUN<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">calc</span><span class="token punctuation">(</span>PTR_TO_FUN fp<span class="token punctuation">,</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">char</span> op<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span>
			<span class="token keyword">return</span> add<span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span>
			<span class="token keyword">return</span> sub<span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> add<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您要计算的式子：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
	<span class="token keyword">char</span> op<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%c%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>op<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %c %d = %d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>op<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">select</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、-union-共用体" tabindex="-1"><a class="header-anchor" href="#_2、-union-共用体" aria-hidden="true">#</a> 2、 Union（共用体）</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*用法和struct差不多，union
	-成员共用一个内存地址，因此不能同时对各个成员一起赋值，这没有意义，后面赋值的会把前面赋值的覆盖
	-共用体的字节大小不一定等于共用体中最大成员的字节大小，还是因为内存对齐（在VC/C++和GNU GCC中都是默认是4字		节对齐）
*/</span>

<span class="token comment">/*
union Data{			//这里的共用体类型名可以省略成：union {...};，struct结构体也同样可以
	int i;
	char ch;
	float f;
}

union Data data={10010};//初始化第一个成员
union Data data=data0;//初始化为已存在的共用体
union Data data={.ch=&#39;A&#39;};//C99新特性，指定初始化成员

*/</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">union</span> Test<span class="token punctuation">{</span>
    <span class="token keyword">int</span> number<span class="token punctuation">;</span>
    <span class="token keyword">double</span> PI<span class="token punctuation">;</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">union</span> Test test<span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>number<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>PI<span class="token operator">=</span><span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token comment">//test.str=&quot;HelloApple&quot;;//字符串直接赋值是只能够在初始化阶段的时候才能够使用的</span>
    <span class="token function">strcpy</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>str<span class="token punctuation">,</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//test.PI=3.14;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addr of test.number：%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>test<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addr of test.PI：%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>test<span class="token punctuation">.</span>PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;addr of test.str：%p\\n\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>test<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value of test.number：%d\\n&quot;</span><span class="token punctuation">,</span>test<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value of test.PI：%lf\\n&quot;</span><span class="token punctuation">,</span>test<span class="token punctuation">.</span>PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value of test.str：%s\\n\\n&quot;</span><span class="token punctuation">,</span>test<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of test：%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	addr of test.number：0x16b5135c8
	addr of test.PI：0x16b5135c8
	addr of test.str：0x16b5135c8

	value of test.number：1819043144
	value of test.PI：	2191444119706963415345639101882402617070952317017776099732075945943680039407307212501870429040900672146338833938303659439237740635160500855813030357492372682887858054616489605441589829740433065995076650229152079883597110973562880.000000
value of test.str：Hello World

	size of test：16
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、enum" tabindex="-1"><a class="header-anchor" href="#十一、enum" aria-hidden="true">#</a> 十一、Enum</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*Enum（枚举类型）
	-如果一个变量只有几种可能的值，那么就可以将其定义为枚举（enumeration）类型。
	-声明枚举类型(常量)
		enum 枚举类型名称 {枚举值名称,枚举值名称,...};
	-定义枚举变量
		enum 枚举类型名称 枚举变量1,枚举变量2,...;
	-枚举变量/常量是int整型的
*/</span>

<span class="token comment">/*struct tm是time头文件里面定义的
		struct tm{
				int tm_sec;		//秒，范围 0～59 ，60表示闰秒
				int tm_min;		//分，范围 0～59
				int tm_hour;	//时，范围 0～23
				int tm_mday;	//一个月中的第几天，范围是 1～31
				int tm_mon;		//一年中的第几个月，范围是 0～11
				int tm_year;	//自1990年往后的第几年
				int tm_wday;	//星期几，自星期天开始算起，范围是 0 ～ 6
				int tm_yday;	//一年中的第几天，范围是 0 ～ 365
				int tm_isdst;	//指定日光节约时间是否生效，正数表示生效，0表示不生效，负数表示该信息不可用
		};

*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">Week</span> <span class="token punctuation">{</span>sun<span class="token punctuation">,</span>mon<span class="token punctuation">,</span>tue<span class="token punctuation">,</span>wed<span class="token punctuation">,</span>thu<span class="token punctuation">,</span>fri<span class="token punctuation">,</span>sat<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">enum</span> <span class="token class-name">Week</span> today<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span>pt<span class="token punctuation">;</span>
    <span class="token class-name">time_t</span> t<span class="token punctuation">;</span><span class="token comment">//宏定义，实际是一个无符号整形</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取1990至当前的毫秒数</span>
    pt<span class="token operator">=</span><span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//转换成结构体对象</span>
    today<span class="token operator">=</span>pt<span class="token operator">-&gt;</span>tm_wday<span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>today<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> mon<span class="token operator">:</span>
        <span class="token keyword">case</span> tue<span class="token operator">:</span>
        <span class="token keyword">case</span> wed<span class="token operator">:</span>
        <span class="token keyword">case</span> thu<span class="token operator">:</span>
        <span class="token keyword">case</span> fri<span class="token operator">:</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Work Day~T_T~\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> sat<span class="token operator">:</span>
        <span class="token keyword">case</span> sun<span class="token operator">:</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Holiday!!!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">Week</span> <span class="token punctuation">{</span>sun<span class="token punctuation">,</span>mon<span class="token punctuation">,</span>tue<span class="token punctuation">,</span>wed<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span>thu<span class="token punctuation">,</span>fri<span class="token punctuation">,</span>sat<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//枚举常量默认是从0开始的，如果指定值，则后面的自动+1</span>
    <span class="token keyword">enum</span> <span class="token class-name">Week</span> today<span class="token punctuation">;</span><span class="token comment">//枚举变量是随机值</span>
  	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>today<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*for(today=sun;today&lt;=sat;today++){ //只有c语言的枚举变量支持自增
        printf(&quot;%d\\t&quot;,today);
    }*/</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sun =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>sun<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;mon =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;tue =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>tue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;wed =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>wed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;thu =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>thu<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;fri =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>fri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sat =&gt; %d\\n&quot;</span><span class="token punctuation">,</span>sat<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//sun=5</span>
    today<span class="token operator">=</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nsize of week：%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>sun<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of today：%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>today<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>today<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	83083360
	sun =&gt; 0
	mon =&gt; 1
	tue =&gt; 2
	wed =&gt; 8
	thu =&gt; 9
	fri =&gt; 10
	sat =&gt; 11
	
	size of week：4
	size of today：4
	-5
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二、位域-也叫-位段-或-位字段" tabindex="-1"><a class="header-anchor" href="#十二、位域-也叫-位段-或-位字段" aria-hidden="true">#</a> 十二、位域（也叫 “位段” 或 “位字段”）</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*位域
	-可以将一个字节拆开使用，也就是对位进行操作（1字节=8位）
	-位域的用法是在结构体定义时，在结构体成员后面使用冒号（:）和数字（n）来表示该成员所占的位数
	-c语言标准，只有unsigned int和signed int支持位域，c99标准新增Bool类型也支持位域
	-无名位域也就是没有名称的位域，只需要给出数据类型和位宽即可。
		-因为无明位域没有名称，所以不能直接拿来使用
		-无名位域一般是用来填充或调整成员在内存之间的位置	
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//允许存1位，0｜1</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> b<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//允许存1位，0｜1</span>
	      <span class="token keyword">unsigned</span> <span class="token keyword">int</span>  <span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//无名位域</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> c<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//允许存2位，00｜01｜10｜11</span>
        <span class="token comment">//unsigned int c:33;//Error，操作系统规定int类型不能超过4个字节（32位）</span>
    <span class="token punctuation">}</span> test<span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>c<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">//test.c=4;//Error，test.c是2位最多可以表示到3，二进制位为：11</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d,b = %d,c = %d\\n&quot;</span><span class="token punctuation">,</span>test<span class="token punctuation">.</span>a<span class="token punctuation">,</span>test<span class="token punctuation">.</span>b<span class="token punctuation">,</span>test<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a = 0,b = 1,c = 2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of test = %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//size of test = 4（字节对齐所以=4）</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十三、位操作" tabindex="-1"><a class="header-anchor" href="#十三、位操作" aria-hidden="true">#</a> 十三、位操作</h2><blockquote><p>C语言没有规定一个字节的尺寸，只是规定了“可寻址的数据存储单位，其尺寸必须可以容纳运行环境的基本字符集（ASCII）的任何成员”，主流的C语言编译器一般是1字节=8位。</p></blockquote><h3 id="_1、位操作" tabindex="-1"><a class="header-anchor" href="#_1、位操作" aria-hidden="true">#</a> 1、位操作</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;limits.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a byte bit size -&gt; %d\\n\\n&quot;</span><span class="token punctuation">,</span>CHAR_BIT<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed char min size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>SCHAR_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed char max size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>SCHAR_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a unsigned char max size -&gt; %u\\n\\n&quot;</span><span class="token punctuation">,</span>UCHAR_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed short min size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>SHRT_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed short max size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>SHRT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a unsigned short max size -&gt; %u\\n\\n&quot;</span><span class="token punctuation">,</span>USHRT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed int min size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>INT_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed int max size -&gt; %d\\n&quot;</span><span class="token punctuation">,</span>INT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a unsigned int max size -&gt;%u\\n\\n&quot;</span><span class="token punctuation">,</span>UINT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed long min size -&gt; %ld\\n&quot;</span><span class="token punctuation">,</span>LONG_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed long max size -&gt; %ld\\n&quot;</span><span class="token punctuation">,</span>LONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a unsigned long max size -&gt; %lu\\n\\n&quot;</span><span class="token punctuation">,</span>ULONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed long long min size -&gt; %lld\\n&quot;</span><span class="token punctuation">,</span>LLONG_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a signed long long max size -&gt; %lld\\n&quot;</span><span class="token punctuation">,</span>LLONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a unsigned long long max size -&gt; %llu\\n\\n&quot;</span><span class="token punctuation">,</span>ULLONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of char -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of short -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of int -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of long -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of long long -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of long long int -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of float -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of double -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of long double-&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of _Bool -&gt; %lu\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">_Bool</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*输出：
a byte bit size -&gt; 8

a signed char min size -&gt; -128
a signed char max size -&gt; 127
a unsigned char max size -&gt; 255

a signed short min size -&gt; -32768
a signed short max size -&gt; 32767
a unsigned short max size -&gt; 65535

a signed int min size -&gt; -2147483648
a signed int max size -&gt; 2147483647
a unsigned int max size -&gt;4294967295

a signed long min size -&gt; -9223372036854775808
a signed long max size -&gt; 9223372036854775807
a unsigned long max size -&gt; 18446744073709551615

a signed long long min size -&gt; -9223372036854775808
a signed long long max size -&gt; 9223372036854775807
a unsigned long long max size -&gt; 18446744073709551615

size of char -&gt; 1
size of short -&gt; 2
size of int -&gt; 4
size of long -&gt; 8
size of long long -&gt; 8
size of long long int -&gt; 8
size of float -&gt; 4
size of double -&gt; 8
size of long double-&gt; 8
size of _Bool -&gt; 1
*/</span>

<span class="token comment">/*逻辑位运算符，它是只作用于整形数据的，对整形的二进制进行逻辑位运算
	~
		-含义：按位取反
		-优先级：高
		-例子：~a
			~ 1010 1111
			------------
				 0101 0000
		-说明：
			-如果a为1，~a为0
			-如果a为0，~a为1
	&amp;
		-含义：按位与
		-优先级：中
		-例子：a &amp; b
			  1010 1111
			&amp; 1010 0101
			------------
				1010 0101
		-说明：
			-只有a和b同时为1，结果才为1
			-只要a和b其中一个为0，结果为0
	^
		-含义：按位取异或
		-优先级：低
		-例子：a ^ b
			  1010 1111
			^ 1010 0101
			------------
				0000 1010
		-说明：
			-如果a和b不同，其结果为1
			-如果a和b相同，其结果为0
	｜
		-含义：按位或
		-优先级：最低
		-例子：a ｜ b
			  1010 1111
			&amp; 1010 0101
			------------
				1010 1111
		-说明：
			-只要a和b其中一个为1，其结果为1
			-只有a和b同时为0，结果为0
      
  -------------------------------------------------
  这四个运算符，除了按位取反只有一个操作数之外，其他三个都可以跟赋值号（=）结合一块，使得代码更加简洁。
*/</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> mask <span class="token operator">=</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>		<span class="token comment">// 000000000000000011111111</span>
    <span class="token keyword">int</span> v1 <span class="token operator">=</span> <span class="token number">0xABCDEF</span><span class="token punctuation">;</span>	<span class="token comment">// 101010111100110111101111</span>
    <span class="token keyword">int</span> v2 <span class="token operator">=</span> <span class="token number">0xABCDEF</span><span class="token punctuation">;</span>	<span class="token comment">// 101010111100110111101111</span>
    <span class="token keyword">int</span> v3 <span class="token operator">=</span> <span class="token number">0xABCDEF</span><span class="token punctuation">;</span>	<span class="token comment">// 101010111100110111101111</span>
    v1 <span class="token operator">&amp;=</span> mask<span class="token punctuation">;</span><span class="token comment">//mask&amp;v1 = 000000000000000011101111</span>
    v2 <span class="token operator">|=</span> mask<span class="token punctuation">;</span><span class="token comment">//mask|v2 = 101010111100110111111111</span>
    v3 <span class="token operator">^=</span> mask<span class="token punctuation">;</span><span class="token comment">//mask^v3 = 101010111100110100010000</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;v1 = %#X\\n&quot;</span><span class="token punctuation">,</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;v2 = %#X\\n&quot;</span><span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;v3 = %#X\\n&quot;</span><span class="token punctuation">,</span>v3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*输出
	v1 = 0XEF					//000000000000000011101111
	v2 = 0XABCDFF			//101010111100110111111111
	v3 = 0XABCD10			//101010111100110100010000
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、移位和位操作的应用" tabindex="-1"><a class="header-anchor" href="#_2、移位和位操作的应用" aria-hidden="true">#</a> 2、移位和位操作的应用</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*移位，将整数的二进制位，左移或右移n位
	-左移
		-左移n位表示舍去左边n位，在右边补上n个0
		-例子：左移3位
			-befor
				100101011010110
      -after
				101011010110000
				
	-右移
		-右移n位表示舍去右边n位，在左边补上n个0
		-例子：右移3位
			-befor
				100101011010110
      -after
				000100101011010
	-未定义行为
		-左移、右移运算符右边的操作数如果是负数，或者右边的操作数大于左边操作数的最大宽度，那么表达式的结果均为：
		“未定义行为”
		-左边的操作数是有符号或无符号数其实也对移位运算符有着不同的影响，无符号肯定没问题，因为这时候变量里面所有			的位都用于表达该数值的大小。但是如果有符号，那就要区别对待了，因为有符号数的左边第一位是符号位，如果恰好		 个操作数是个负数，那么移动之后是否覆盖符号位的决定权是在编译器手里的（因为c语言标准没有明确说明）。
		
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>value<span class="token operator">&lt;</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	      <span class="token comment">// value = value &lt;&lt; 1;</span>
        value <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      	<span class="token comment">//向左移动1位就是乘以2的1次方(n*2^1）</span>
      	<span class="token comment">//向左移动2位就是乘以2的1次方(n*2^2)</span>
	      <span class="token comment">//向左移动3位就是乘以2的1次方(n*2^3)</span>
      	<span class="token comment">//向左移动4位就是乘以2的1次方(n*2^4)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value = %d\\n&quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n----------------------------------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    value <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	      <span class="token comment">// value = value &gt;&gt; 2;</span>
        value <span class="token operator">&gt;&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
      	<span class="token comment">//向右移动2位就是除以2的2次方(1024/2^2)</span>
      	<span class="token comment">//向右移动4位就是除以2的2次方(1024/2^4)</span>
      	<span class="token comment">//向右移动6位就是除以2的2次方(1024/2^6)</span>
      	<span class="token comment">//向右移动8位就是除以2的2次方(1024/2^8)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value = %d\\n&quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
  value = 2			//v=v*1^1
  value = 4			//v=v*1^2
  value = 8			//v=v*1^3
  value = 16		//v=v*1^4
  value = 32		//v=v*1^5
  value = 64		//v=v*1^6
  value = 128		//v=v*1^7
  value = 256		//v=v*1^8
  value = 512		//v=v*1^9
  value = 1024	//v=v*1^10

  ----------------------------------------
  value = 256		//v=1024/(2^2)
  value = 64		//v=1024/(2^4)
  value = 16		//v=1024/(2^6)
  value = 4			//v=1024/(2^8)
  value = 1			//v=1024/(2^10)
  value = 0			//v=1024/(2^12)
*/</span>


<span class="token comment">//------------------------------------------------------------------------</span>

<span class="token comment">/*掩码
	-掩码在计算机学科中和数字逻辑中指的是一串二进制数字，通过与目标数据按位操作来达到屏蔽指定位的需求而实现的。
	-例子，配电箱，1代表开启状态，0代表关闭状态
		-需求1：判断主卧电源是否开启
      -----------------------------------------
      总  客厅  餐厅  厨房  主卧  次卧  书房  卫生间
      1    1    0    0     1    0    0      0
      ---------以下为判断主卧是否开启的掩码---------
      1    0    0    0     1    0    0      0
      -----------将以上两者进行按位与操作-----------
      1    0    0    0     1    0    0      0
      ------------------------------------------
      if((value &amp; mask)==mask){
        printf(&quot;相等代表是打开的！&quot;);
      }
		
		-需求2：打开位，不影响其他电源的情况下，打开主卧电源
      -----------------------------------------
      总  客厅  餐厅  厨房  主卧  次卧  书房  卫生间
      1    1    0    0     0    0    0      0
      ----------以下为打开主卧电源的掩码-----------
      1    0    0    0     1    0    0      0
      -----------将以上两者进行按位或操作----------
      1    1    0    0     1    0    0      0
      ------------------------------------------
      
		-需求3：关闭位，不影响其他电源的情况下，关闭客厅电源
      -----------------------------------------
      总  客厅  餐厅  厨房  主卧  次卧  书房  卫生间
      1    1    0    0     1    0    0      0
      ----------以下为关闭客厅电源的掩码-----------
      1    0    1    1     1    1    1      1
      -----------将以上两者进行按位与操作-----------
      1    0    0    0     1    0    0      0
      ------------------------------------------
      
		-需求4:转置位，不影响其他电源的情况下，将客厅和主卧进行转置（开的变成关的，关的变成开的）
      -----------------------------------------
      总  客厅  餐厅  厨房  主卧  次卧  书房  卫生间
      1    1    0    0     0    0    0      0
      ----------以下为将客厅和主卧进行转置的掩码-----------
      0    1    0    0     1    0    0      0
      -----------将以上两者进行按位异或操作-----------
      1    0    0    0     1    0    0      0
      ------------------------------------------
*/</span>

<span class="token comment">//置某一位为1</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">SET_BIT_ONE</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">|=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="token comment">//置某一位为0</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">SET_BIT_ZERO</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&amp;=</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="token comment">//某一位取反</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">REV_BIT</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">^=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="token comment">//获取谋一位的值</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">GET_BIT</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span></span></span>

<span class="token comment">//XOR加密</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> key<span class="token operator">=</span><span class="token number">981</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> message<span class="token operator">=</span><span class="token number">10010</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;待加密报文：%d\\n&quot;</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//待加密报文：10010</span>
    <span class="token keyword">int</span> encyptedMessage<span class="token operator">=</span>message<span class="token operator">^</span>key<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;加密后报文：%d\\n&quot;</span><span class="token punctuation">,</span>encyptedMessage<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加密后报文：9423</span>
    <span class="token keyword">int</span> decryptedMessage<span class="token operator">=</span>encyptedMessage<span class="token operator">^</span>key<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;还原后报文：%d\\n&quot;</span><span class="token punctuation">,</span>decryptedMessage<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//还原后报文：10010</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十四、文件读写" tabindex="-1"><a class="header-anchor" href="#十四、文件读写" aria-hidden="true">#</a> 十四、文件读写</h2><h3 id="_1、文件读写" tabindex="-1"><a class="header-anchor" href="#_1、文件读写" aria-hidden="true">#</a> 1、文件读写</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*打开和关闭文件：
	 -从本质上来说，文本文件也属于二进制文件，只不过它存放的是相应的字符编码值。
	 -打开方式要区分文本模式和二进制模式的原因，主要是因为换行符的问题。c语言用\\n表示换行符，Unix系统是\\n,
	 	Windows系统是\\r\\n,MacOS系统是\\r,如果在Windows系统上以文本模式打开一个文件，从文件读到的是\\r\\n会自动转换成\\n，而写入文件则是将\\n替换为\\r\\n,但如果以二进制模式打开则不会做这样的转换。Unix系统的换行符跟C语言是一致的，所以不管以文本模式还是二进制模式打开，结果都是一样的。
	 -函数：
	 	-fopen(path,mode);
	 		-path
	 			-文件的相对路径或绝对路径
	 		-mode
	 			-&quot;r&quot;
		 			1.以只读的模式打开一个文本文件，从文件头开始读取
	 				2.该文本文件必须存在
	 			-&quot;w&quot;
	 				1.以只写的模式打开一个文本文件，从文件头开始写入
	 				2.如果文件不存在则自动创建一个新的文件
	 				3.如果文件已经存在则将原有的内容覆盖
	 			-&quot;a&quot;
	 				1.以追加的模式打开一个文本，从文件末尾追加写入内容
	 				2.如果文件不存在则创建一个新的
	 			-&quot;r+&quot;
	 				1.以读和写的模式打开一个文本文件，从文件头开始读取和写入
	 				2.该文件必须存在
	 				3.该模式只会覆盖重新写入的内容
	 			-&quot;w+&quot;
	 				1.以读和写的模式打开一个文本文件，从文件头开始读取和写入
	 				2.如果文件不存在则自动创建一个新的文件
	 				3.如果文件已经存在则将原有的内容覆盖
	 			-&quot;a+&quot;
	 				1.以读和追加写模式打开一个文件
	 				2.如果文件不存在则自动创建一个新的文件
	 				3.读取是从文件头开始的，而写入则是在文件末尾追加的
	 			-&quot;b&quot;
	 				1.与上面6种模式均可结合使用（&quot;rb&quot;,&quot;wb&quot;,&quot;ab&quot;,&quot;r+b&quot;,&quot;w+b&quot;,&quot;a+b&quot;）
	 				2.其描述的含义一样，只不过操作的对象是二进制的文文件
	 		
	 		-返回值
	 			1.如果文件打开成功，则返回一个指向FILE结构的文件指针
	 			2.如果文件打开失败，则返回NULL并设置errno为指定的错误	
	 */</span>

<span class="token comment">//--------------------------------------------------------------------------</span>
<span class="token comment">//读取文件测试</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">int</span> ch<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//EXIT_FAILURE是一个宏定义实际是1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//EOF是一个宏定义实际是-1</span>
        <span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用了此方法，系统才回将缓冲区的数据写入文件中，注意：我们读取一个文件，或者写入数据都不是直接进行的，它的中间有一个缓冲区，只有调用了fclose系统才回将数据写入文件，并且释放该文件的相关资源。如果文件成功关闭，它的返回值是0否则就是EOF(-1)，关闭文件之后fp指针就失效了，没有意义了</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	Hello
	World
*/</span>
<span class="token comment">//--------------------------------------------------------------------------</span>

<span class="token comment">/*文件字符读写
	-顺序读写：打开文件的时候从文件开头的位置开始读写，也就说读取数据的顺序跟数据存储在文件中的物理数据时一致的
		-读取单个字符
			-fgetc
				-函数用于从文件流中读取一个字符并推进文件的位置指示器（用来指示接下来要读写的下一个字符的位置）
				-函数原型：int fgetc(FILE *stream);
					-参数
						-stream：该参数是一个FILE对象的指针，指定一个待读取的文件
					-返回值
						1.该函数将读取到的unsigned char类型转换为int类型并返回
						2.如果文件结束或者遇到错误则返回EOF（EOF是一个宏定义，一般是-1）
			-getc
			-备注
				1.fgetc函数和getc函数，两个的功能和描述基本是一模一样的，它们的主要区别在于实现上，fgetc是一个函					数；而getc则是一个宏的实现
				2.有的情况下宏可能会产生较大的代码，但是避免了函数调用堆栈的操作，所以速度会相对快一点
				3.由于getc是由宏实现的，对其的参数可能有不止一次的调用，所以不能使用带有副作用（side effects）的						参数。所谓副作用的参数例如getc(fp++),因为参数在宏的实现中可能会被多次调用，想法是fp++，而副作用						产生的结果可能是fp++++++。
		-写入单个字符
			-fputc
				-函数用于将一个字符写入到指定的文件中并推进文件的位置指示器（用来指示接下来要读写的下一个字符的位置）
				-函数原型：int fputc(int c,FILE *stream);
					-参数
						-c：待写入的字符
						-stream：该参数是一个FILE对象的指针，指定一个待写入的文件流
					-返回值
						1.如果函数没有错误，返回值是写入的字符
						2.如果函数发生错误，返回值是（EOF是一个宏定义，一般是-1）
			-putc
			-备注
				1.fputc函数和getc函数，两个的功能和描述基本是一模一样的，它们的主要区别在于实现上，fputc是一个函					数；而putc则是一个宏的实现
				2.有的情况下宏可能会产生较大的代码，但是避免了函数调用堆栈的操作，所以速度会相对快一点
				3.由于putc是由宏实现的，对其的参数可能有不止一次的调用，所以不能使用带有副作用（side effects）的						参数。所谓副作用的参数例如putc(&#39;X&#39;,fp++),因为参数在宏的实现中可能会被多次调用，想法是fp++，而副						作用产生的结果可能是fp++++++。
				
				
		
		-读取字符串：fgets
			-函数用于从指定中读取字符串，最多可以读取size-1个字符，因为c语言字符串结尾处会自动添加一个字符串结束				符&#39;\\0&#39;，当读取到换行符(&#39;\\n&#39;)或文件结束符(EOF)时，\\n表示结束本次读取,EOF表示结束读取（&#39;\\n&#39;会被当				作为一个合法的字符读取）
			-函数原型：char fgets(char *s,int size,FILE *stream);
				-s：字符串指针，指向字符存放的位置
				-size：指定读取的字符数（包括最后c语言字符串自动添加的&#39;\\0&#39;）
				-stream：该参数是一个FILE对象的指针，指定一个待读取的文件流
			-返回值
				1.如果函数调用成功，返回s参数指向的地址
				2.如果在读取字符的过程中遇到EOF，则eof指示器被设置；如果还没有读取到任何字符就遇到EOF，则s参数指向						的位置保持原来的内容，函数返回NULL。
				3.如果在读取过程中发生错误，则error指示器被设置，函数返回NULL，但s参数指向的内容可能会被改变。
		-写入字符串：fputs
			-函数用于将一串字符写入到指定的文件中。
			-函数原型：int fputs(const char *s,FILE *stream);
				-s：字符串指针，指向待写入字符串的地址
				-*stram：该参数是一个FILE对象的指针，指定一个待写入的数据流
			-返回值
				1.如果函数调用成功，返回一个非0值
				2.如何函数调用失败，返回EOF
			
			格式化读写文件
				-fscanf();
					-第一个参数为文件流指针，其他用法和scanf一样，只不过一个是从键盘读取输入，一个是从文件中读取输入
				-fprintf();
					-第一个参数为文件流指针，用法和printf一样，只不过一个是输出到控制台，一个是写入到文件
			
	-随机读写：打开文件之后先定位到指定位置开始读写
		-获取文件指示器所在位置：ftell
      -函数原型：long ftell(FILE *stream);
      -stream：该参数是一个FILE对象的指针，指定一个待读取的文件流
      -返回值，当前读取到的位置或者当前写入的位置从0开始
      
		-设置文件指示器为0(也就是开头的位置)：rewind
			-void rewind(FILE *stream);
			-注意：指示器设为0后，再次写入会覆盖原来的内容
		-fseek
			-函数用于设置文件流的位置指示器
			-函数原型：int fseek(FILE *stream,long int offset,int whence);
				-参数
          -stream：该参数是一个FILE对象的指针，指定一个待操作的文件流
          -offset：指定从whence参数的位置起偏移多少个字节
          -whence
            -SEEK_SET - 文件头
            -SEEK_CUR	- 当前读写的位置
            -SEEK_END - 文件末尾
        -返回值
        	1.如果函数调用成功返回0，否则返回非0
      -可移植性问题
      	-对于以二进制模式打开的文件，fseek函数在某些操作系统的whence参数可能不支持SEEK_END位置。
      	-对于以文本模式打开的文件，fseek函数的whence参数只有SEEK_SET是有意义的，并且传递给offset的参数					是0，要么是上一次对同一个文件调用ftell函数获取到的返回值，这样就能避免了操作系统对不同换行符的处						理方式导致的问题
	*/</span>



<span class="token comment">//--------------------------------------------------------------------------</span>
<span class="token comment">//fgets()与fputs()与feof()测试</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX</span> <span class="token expression"><span class="token number">1024</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
	<span class="token keyword">char</span> buffer<span class="token punctuation">[</span>MAX<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;Line one: Hello World!\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;Line two: How do you do!\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;Line three: Nice too meet to you\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//需要先关闭流，否则文件的位置指示器指向的是文件末尾，而且要写入的字符串还在缓冲区里面，还没有写入进去</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

  <span class="token comment">/*这样也正确的
  while(fgets(buffer,MAX,fp) != NULL){
		printf(&quot;%s&quot;,buffer);
	}
	*/</span>
  <span class="token comment">//这是小甲鱼写的</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">feof</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">fgets</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span>MAX<span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：//第4行重样是因为“当读取到换行符(&#39;\\n&#39;)或文件结束符(EOF)时，\\n表示结束本次读取,EOF表示结束读取”，读取到第3行也没有找到EOF所以继续往下找，就直接遇到了EOF，“如果还没有读取到任何字符就遇到EOF，则s参数指向的位置保持原来的内容，函数返回NULL。”
  Line one: Hello World!
  Line two: How do you do!
  Line three: Nice too meet to you
  Line three: Nice too meet to you
	*/</span>


<span class="token comment">//--------------------------------------------------------------------------</span>
<span class="token comment">//fscanf()与fprointf()测试</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
	<span class="token class-name">time_t</span> t<span class="token punctuation">;</span>
	<span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	p<span class="token operator">=</span><span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fprintf</span><span class="token punctuation">(</span>fp<span class="token punctuation">,</span><span class="token string">&quot;%d-%d-%d&quot;</span><span class="token punctuation">,</span><span class="token number">1900</span><span class="token operator">+</span>p<span class="token operator">-&gt;</span>tm_year<span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span>p<span class="token operator">-&gt;</span>tm_mon<span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>tm_mday<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> year<span class="token punctuation">,</span>month<span class="token punctuation">,</span>day<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fscanf</span><span class="token punctuation">(</span>fp<span class="token punctuation">,</span><span class="token string">&quot;%d-%d-%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>year<span class="token punctuation">,</span><span class="token operator">&amp;</span>month<span class="token punctuation">,</span><span class="token operator">&amp;</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%d-%d\\n&quot;</span><span class="token punctuation">,</span>year<span class="token punctuation">,</span>month<span class="token punctuation">,</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//输出：2022-2-12</span>

<span class="token comment">//--------------------------------------------------------------------------</span>
	<span class="token comment">/*文件二进制读写
			-fread
				-函数用于从指定的文件读取指定尺寸的数据
				-函数原型：size_t fread(void *ptr,size_t size,size nmemb,FILE *stream);
					-ptr：指向存放数据的内存块指针，该内存块的尺寸最小应该是size * nmemb 个字节
					-size：指定要读取的每个元素的尺寸，最终尺寸等于size * nmemb
					-nmemb：指定要读取的元素个数，最终尺寸等于size * nmemb
					-stram：该参数是一个FILE对象的指针，指定一个待读取的数据流
				-返回值
					1.返回值是实际读取到的元素个数(nmemb)
					2.如果返回值比nmemb的参数值要小，表示可能读取到文件末尾或发生错误(可以使用feof函数或ferror函数						进一步判断)
			-fwrite
				-函数用于将指定尺寸的数据写入到指定的文件中
				-函数原型：size_t fwrite(const void *ptr,size_t size,size nmemb,FILE *stream);
					-ptr：指向存放数据的内存块指针，该内存块的尺寸最小应该是size * nmemb 个字节
					-size：指定要写入的每个元素的尺寸，最终尺寸等于size * nmemb
					-nmemb：指定要写入的元素个数，最终尺寸等于size * nmemb
					-stram：该参数是一个FILE对象的指针，指定一个待写入的数据流
				-返回值
					1.返回值是实际写入到文件中的元素个数(nmemb)
					2.如果返回值与nmemb参数的值不同，则是发生了错误
			*/</span>
<span class="token comment">//测试二进制文件读写</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;9&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;8&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;1&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//hello.txt：981</span>



<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Date</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> year<span class="token punctuation">;</span>
	<span class="token keyword">int</span> month<span class="token punctuation">;</span>
	<span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> author<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> publisher<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span>book_for_write<span class="token punctuation">,</span><span class="token operator">*</span>book_for_read<span class="token punctuation">;</span>
	book_for_write<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	book_for_read<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>book_for_write <span class="token operator">==</span> <span class="token constant">NULL</span> <span class="token operator">||</span> book_for_read <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 
	<span class="token function">strcpy</span><span class="token punctuation">(</span>book_for_write<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span><span class="token string">&quot;《生死疲劳》&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">strcpy</span><span class="token punctuation">(</span>book_for_write<span class="token operator">-&gt;</span>author<span class="token punctuation">,</span><span class="token string">&quot;莫言&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">strcpy</span><span class="token punctuation">(</span>book_for_write<span class="token operator">-&gt;</span>publisher<span class="token punctuation">,</span><span class="token string">&quot;中国人民出版社&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	book_for_write<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>year<span class="token operator">=</span><span class="token number">2020</span><span class="token punctuation">;</span>
	book_for_write<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>month<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span>
	book_for_write<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>day<span class="token operator">=</span><span class="token number">28</span><span class="token punctuation">;</span>
	
  <span class="token comment">//if((fp=fopen(&quot;hello.txt&quot;,&quot;wb&quot;)) == NULL)</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp<span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//打开二进制文件应该使用&quot;wb&quot;,这里使用&quot;w&quot;是为了测试,结论：使用文本模式和二进制模式打开文件，并不能够决定写入的数据形式，它们影响的只是那个换行符</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fwrite</span><span class="token punctuation">(</span>book_for_write<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp<span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fread</span><span class="token punctuation">(</span>book_for_read<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;书名：%s\\n&quot;</span><span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;作者：%s\\n&quot;</span><span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版社：%s\\n&quot;</span><span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>publisher<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出版日期：%d-%d-%d\\n&quot;</span><span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>year<span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>month<span class="token punctuation">,</span>book_for_read<span class="token operator">-&gt;</span>date<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	书名：《生死疲劳》
  作者：莫言
  出版社：中国人民出版社
  出版日期：2020-12-28
  ➜  Test15-file cat hello.txt         //vim打开后里面是二进制
  《生死疲劳》莫言中国人民出版社?
                                 %  
*/</span>


<span class="token comment">//----------------------------------测试随机读写----------------------------------</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前文件指示器的位置：%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;N&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前文件指示器的位置：%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;IHaoMa\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前文件指示器的位置：%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">rewind</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前文件指示器的位置：%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;Hello\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//rewind重置了文件指示器位置，所以会把之前的覆盖</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前文件指示器的位置：%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
    当前文件指示器的位置：0
    当前文件指示器的位置：1
    当前文件指示器的位置：8
    当前文件指示器的位置：0
    当前文件指示器的位置：6
    ➜  Test15-file cat hello.txt       
    Hello
    a
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">4</span></span></span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> num<span class="token punctuation">;</span>
	<span class="token keyword">float</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span> students<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>sb<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开始录入成绩（格式：姓名 学号 成绩）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %d %f&quot;</span><span class="token punctuation">,</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token operator">&amp;</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token punctuation">,</span><span class="token operator">&amp;</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fwrite</span><span class="token punctuation">(</span>students<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">,</span>N<span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fseek</span><span class="token punctuation">(</span>fp<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token constant">SEEK_SET</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将文件指示器从开头往后偏移两个学生（sizeof(struct Student)*2），如果是负数则是往前偏移</span>
	<span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sb<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//从偏移位置读取sizeof(struct Student)个字节</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s(%d)的成绩是：%.2f\\n&quot;</span><span class="token punctuation">,</span>sb<span class="token punctuation">.</span>name<span class="token punctuation">,</span>sb<span class="token punctuation">.</span>num<span class="token punctuation">,</span>sb<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	gcc test8.c&amp;&amp;./a.out
  开始录入成绩（格式：姓名 学号 成绩）1 1 1   
  2 2 2
  3 3 3   
  4 4 4
  3(3)的成绩是：3.00
	*/</span>


<span class="token comment">/*标准流：程序被执行的时候，c语言会自动为其打开三个面向终端的文件流指针（不用定义）
    -标准输入流(stdin)				//使用scanf()从键盘上接收数据的时候，实际上就是从标准输入流中读取数据
    -标准输出流(stdout)			//使用printf()输出字符串的时候，其实就是往标准输出流写入字符串
    -标准错误输出流(stderr)	//程序警告或者报错的时候，其实就是将对应的错误信息写入到标准错误输出流中。
		--重定向（扩展知识）
				-由于标准输出流和标准错误输出流都是直接打印在控制台，看起来没有什么区别。为了区分它们，我们可以使用				Linux shell的重定向功能将错误信息输出到不同文件中。（重定向哪种流，哪种流就不会再输出到控制台）
				-重定向标准输入流：./xxx.c &lt; xxx.txt						//不会自动创建文件
				-重定向标准输出流：./xxx.c &gt; xxx.txt						//会自动创建文件
				-重定向标准错误输出流：./xxx.c 2&gt; xxx.txt			 //会自动创建文件
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;不存在的文件.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;标准输出！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败!\\n&quot;</span><span class="token punctuation">,</span><span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;手动设置的标准输入流的内容：%s\\n&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*输出：
  ➜  Test15-file gcc test9.c&amp;&amp;./a.out
  标准输出！
  打开文件失败!
  ➜  Test15-file ./a.out &gt; stdout.txt
  打开文件失败!
  ➜  Test15-file ./a.out 2&gt; stderr.txt
  标准输出！
  ➜  Test15-file ./a.out &lt; stderr.txt
  标准输出！
  打开文件失败!
  ➜  Test15-file ./a.out &gt; stdout.txt 2&gt; stderr.txt &lt; stderr.txt
	➜  Test15-file 
	*/</span>


<span class="token comment">/*错误处理：
		-ferror：错误指示器
			-ferror函数只能检测是否出错，无法获取错误的原因。不过，大多数系统函数在出现错误的时候会将错误原因记录			在errno头文件
		-feof
      -函数用于检测文件的末尾指示器（end-of-file indicator）是否被设置
      -函数原型：int feof(FILE *stream);
        -stream：该参数是一个FILE对象的指针，指定一个待检测的文件流
      -返回值
        1.如果监测到末尾指示器被设置，返回一个非0值
        2.如果监测不到末尾指示器，返回值为0
      -备注
        1.feof函数仅检测末尾指示器的值，它并不会修改文件的位置指示器
        2.文件的末尾显示器只能用clearerr函数清除
		-clearerr
			-clearerr函数可以人为地清除文件末尾指示器和错误指示器的状态（不能清除其中一个）。
		-perror：函数可以直观的打印出错误的原因
		-strerror：string头文件下的函数，可以直接返回错误码对应的错误信息
	*/</span>

<span class="token comment">//ferror测试</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">int</span> ch<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//</span>
        <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败！\\n&quot;</span><span class="token punctuation">,</span><span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">feof</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token comment">//clearerr(fp); //重置文件末尾指示器和文件错误指示器状态，if(ferror(fp))将不成立</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">ferror</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;出错了，因为文件打开方式是只读模式！\\n&quot;</span><span class="token punctuation">,</span><span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*输出：
	➜  Test15-file gcc test10.c&amp;&amp;./a.out
	出错了，因为文件打开方式是只读模式！
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;errno.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;不存在的文件.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件错误代码：%d\\n&quot;</span><span class="token punctuation">,</span>errno<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件错误信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件错误信息：%s\\n&quot;</span><span class="token punctuation">,</span><span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span><span class="token string">&quot;打开文件错误信息 ---&gt; %s &lt;---\\n&quot;</span><span class="token punctuation">,</span><span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在指定位置显示错误信息，可以使用格式写入函数，写入到标准错误输出流</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
  打开文件错误代码：2
  打开文件错误信息: No such file or directory
  打开文件错误信息：No such file or directory
  打开文件错误信息 ---&gt; No such file or directory &lt;---
	*/</span>


<span class="token comment">//--------------------------------IO缓冲区-----------------------------------</span>
<span class="token comment">/*IO缓冲区（input(输入)和output(输出)），就是输入输出设备的意思
		-因为IO设备的速度跟CPU速度，相差很多很多很多...,为了协调IO设备与CPU设备之间的速度不匹配问题，我们就设计			出了IO缓冲区。
		-当应用程序要读取某块数据的时候，如果这块数据已经存到缓冲区里边，就直接从缓冲区里面读取，那么就不用进行IO			设备的读写操作了
		-相反如果程序要往这个设备里边写入数据的时候，它是先写入到IO缓冲区，等IO缓冲区满了或者等这个程序关闭了或者			执行刷新缓冲区之类的操作，才会把IO缓冲区中的数据写入到IO设备里面
		-IO缓冲区的设计原理与内存池的原理是类似的。
		- fflush：函数用于强制刷新缓冲区。
		-标准IO提供了三种类型的缓冲区模式
			-setvbuf：函数用于指定一个输出流的缓存模式。
				-函数原型：int setvbuf(FILE *stream,char *buf,int mode,size_t size);
				-参数
					-stream 该参数是一个FILE对象的指针，指定一个打开的数据流
					-buf
						1.指定一个自定义缓冲区
						2.如果该参数为NULL，那么函数会自动分配一个指定尺寸的缓冲区
					-mode 指定数据流的缓冲模式
            - _IOFBF 按块缓存：也称为全缓存，即在填满缓冲区后才进行实际的设备读写操作
            - _IOLBF 按行缓存：按行缓存是指在接收到换行符之前(\\n)，数据都是先缓存在缓冲区的；
            - _IONBF 不缓存：允许直接读写设备上的数据
          -size 指定缓冲区的字节大小
        -返回值
        	1.如果函数调用成功返回0，否则是非0值
			
*/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World\\n&quot;</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//会阻塞程序，不输入一个字符不会往下执行，因为没有刷新缓冲区所以此时打开另一个窗口查看hello.txt会发现文件是空的，fclose会自动刷新缓冲区并关闭文件流，如果想要只刷新缓冲区不关闭流，可以使用fflush()函数</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> buff<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>buff<span class="token punctuation">,</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>buff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//填充字符串的每个元素都为结束符\\0</span>
    <span class="token comment">//setvbuf(stdout,buff,_IONBF,1024);//不缓存，下面两句打印都会直接输出到显示设备</span>
    <span class="token function">setvbuf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span>buff<span class="token punctuation">,</span>_IOFBF<span class="token punctuation">,</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//缓存块</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span><span class="token string">&quot;Hello System\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fflush</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//强制刷新缓冲区</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span><span class="token string">&quot;Bye C Language Base\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*输出：
	➜  Test16-iobuffer gcc test2.c &amp;&amp; ./a.out
  Hello System
	a							//getchar()阻塞了，输入一个字符后，关闭程序自动刷新缓冲区，下面这句才能出来
  Bye C Language Base
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,111);function r(d,v){const n=a("center");return t(),p("div",null,[e(n,null,{default:o(()=>[u]),_:1}),k])}const b=s(l,[["render",r],["__file","C语言.html.vue"]]);export{b as default};
