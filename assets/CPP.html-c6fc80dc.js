import{_ as i,o as n,c as e,a as l}from"./app-521e935c.js";const s={},d=l(`<p style="text-align:center;font-size:50px;font-weight:600;">C Plus Plus Language</p><h2 id="cpp-结构体与-c-的差异" tabindex="-1"><a class="header-anchor" href="#cpp-结构体与-c-的差异" aria-hidden="true">#</a> CPP 结构体与 C 的差异</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">Older</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span> older <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">.</span>sex<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">189</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Older</span> older1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;
struct Older {
    string name;//默认占24个字节好像，存放的应该是一个指针
    //const int sex;//当使用了const修饰结构体中的任意成员，都会导致结构体的值不能被覆盖例如：older={},且在初始化后 const修饰的成员也不能通过 例：older.sex=1 修改。
    int sex;
    int age;
} older = {&quot;Hello&quot;, 0, 189,};//cpp只给一个值指定名字会有警告；c都可以,甚至在中间指定名字两边不指定，没有警告
int main() {
    cout &lt;&lt; older.name &lt;&lt; &quot;   &quot; &lt;&lt; older.age &lt;&lt; endl;
    older = {.name=&quot;432&quot;};//cpp可以覆盖赋值结构体；c不可以
    cout &lt;&lt; older.name &lt;&lt; &quot;   &quot; &lt;&lt; older.age &lt;&lt; endl;
    Older older1 = {&quot;&quot;,};//cpp可以省略struct；c不可以
    cout &lt;&lt; &amp;older &lt;&lt; &quot;   &quot; &lt;&lt; &amp;older.name &lt;&lt; &quot;   &quot; &lt;&lt; &amp;older.age &lt;&lt; endl;//内存也是连续的
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、内存分区模型" tabindex="-1"><a class="header-anchor" href="#一、内存分区模型" aria-hidden="true">#</a> 一、内存分区模型</h2><p>C++在程序在执行期间，将内存划为4个区域</p><ul><li><p>代码区：存放函数体的二进制代码，由操作系统进行管理</p></li><li><p>全局区：存放全局变量、静态变量以及常量。</p></li><li><p>栈区：由编译器自动分配和释放，存放函数的参数值、局部变量等。</p></li><li><p>堆区：由程序员分配和释放，若程序员不释放，程序结束时由操作系统回收。</p></li></ul><h3 id="_1-1、程序运行前" tabindex="-1"><a class="header-anchor" href="#_1-1、程序运行前" aria-hidden="true">#</a> 1.1、程序运行前</h3><p>程序编译后，生成了 .out（或 .exe）可执行程序，在未执行该程序前分为两个区域</p><ul><li><p><strong>代码区</strong></p><ul><li><strong>存放CPU执行的机器指令</strong>。</li><li>代码区是<strong>共享</strong>的，共享的目的对于频繁被执行的程序，只需要在内存中有一份代码即可。</li><li>代码区是<strong>只读</strong>的，使其只读的原因是为了防止程序意外地修改了它的指令。</li></ul></li><li><p>全局区</p><ul><li>全局变量和静态变量存放在此</li><li>全局区还包括了常量区，字符串常量和其他常量也存放在此。</li></ul></li></ul><h3 id="程序运行后" tabindex="-1"><a class="header-anchor" href="#程序运行后" aria-hidden="true">#</a> 程序运行后：</h3><p>​ <strong>栈区</strong>：</p><ul><li><p>由编译器自动分配/释放，存放函数的参数值、局部变量等。</p></li><li><p>注意事项：不要返回局部变量的地址，栈区开辟的数据由编译器释放。</p></li></ul><p>​</p><p>​ <strong>堆区</strong>：</p><ul><li><p>由程序员分配释放，若程序员不释放，程序结束时由操作系统回 收</p></li><li><p>在C++中主要利用new关键字在堆区开辟内存。</p></li></ul><h3 id="new操作符" tabindex="-1"><a class="header-anchor" href="#new操作符" aria-hidden="true">#</a> new操作符</h3><p>C++利用 new 操作符在堆区开辟内存空间</p><p>堆区开辟的空间，由程序员手动分配，手动释放</p><p>释放内存空间用 delete 操作符</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

//new 关键字开辟空间返回一个对应类型的指针
int *func() {
    int *a = new int(99);//开辟空间并初始化
    return a;
}

int main() {
    int *p = func();

    int *b = new int;//仅开辟空间，不初始化，默认值是0
    *b = 100;

    int *arr = new int[10];//堆区开辟数组

    for (int i = 0; i &lt; 10; ++i) {
        arr[i] = i + 1;
    }

    for (int i = 0; i &lt; 10; ++i) {
        cout &lt;&lt; arr[i] &lt;&lt; &#39;\\t&#39;;
    }
    cout &lt;&lt; &#39;\\n&#39;;

    cout &lt;&lt; *b &lt;&lt; endl;
    cout &lt;&lt; *p &lt;&lt; endl;

    delete p;//释放堆区变量
    delete b;//释放堆区变量
    delete[] arr;//释放堆区数组，delete加上[]

    //cout &lt;&lt; *b &lt;&lt; endl; //变成野指针
    //cout &lt;&lt; *p &lt;&lt; endl; //变成野指针
    return 0;
}

/*output:
1	2	3	4	5	6	7	8	9	10	
100
99
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、引用" tabindex="-1"><a class="header-anchor" href="#二、引用" aria-hidden="true">#</a> 二、引用</h2><h3 id="_1-1-引用注意事项" tabindex="-1"><a class="header-anchor" href="#_1-1-引用注意事项" aria-hidden="true">#</a> 1.1 引用注意事项</h3><ul><li>引用必须在定义的时候初始化</li><li>引用在初始化后不可改变</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

int main() {
    int a = 10;
    int b = 20;
    //int &amp;c;//error //引用必须在定义时初始化
    int &amp;c = a;      //直接赋值即可改变引用指向的变量
    //&amp;c = b;//error  //初始化之后不可改变
    cout &lt;&lt; c &lt;&lt; endl;  //输出引用指向的变量的值  //10
    c = b;               //改变引用指向的值
    cout &lt;&lt; a &lt;&lt; endl;//20
    return 0;
}

/*output:
10
20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-引用作为函数参数" tabindex="-1"><a class="header-anchor" href="#_1-2-引用作为函数参数" aria-hidden="true">#</a> 1.2 引用作为函数参数</h3><p><strong>作用</strong>：函数传参时，引用可以指向实参</p><p><strong>优点</strong>：可以简化指针修改实参</p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;


void swap1(int a, int b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}

void swap2(int *a, int *b) {
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}

void swap3(int &amp;a, int &amp;b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}

int main() {
    int a = 10;
    int b = 20;
    swap1(a, b);
    cout &lt;&lt; a &lt;&lt; &#39;\\t&#39; &lt;&lt; b &lt;&lt; endl;

    a = 10;
    b = 20;
    swap2(&amp;a, &amp;b);
    cout &lt;&lt; a &lt;&lt; &#39;\\t&#39; &lt;&lt; b &lt;&lt; endl;

    a = 10;
    b = 20;
    swap3(a, b);
    cout &lt;&lt; a &lt;&lt; &#39;\\t&#39; &lt;&lt; b &lt;&lt; endl;
    return 0;
}


/*output:
10	20
20	10
20	10
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-引用作为函数返回值" tabindex="-1"><a class="header-anchor" href="#_2-3-引用作为函数返回值" aria-hidden="true">#</a> 2.3 引用作为函数返回值</h3><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

int &amp;func1() {
    int a = 10;
    return a;
}

int &amp;func2() {
    static int a = 10;
    return a;

}

int main() {
    //int &amp;ref1 = func1();//不能返回局部变量
    //cout &lt;&lt; ref1 &lt;&lt; endl;
    int &amp;ref2 = func2();
    cout &lt;&lt; ref2 &lt;&lt; endl;//10
    ref2 = 200;
    cout &lt;&lt; ref2 &lt;&lt; endl;//200
    func2() = 300;
    cout &lt;&lt; ref2 &lt;&lt; endl;//300
    cout &lt;&lt; func2() &lt;&lt; endl;//300
    return 0;
}

/*output:
10
200
300
300
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p><ul><li>不能返回局部变量的引用</li><li>函数作为左值时，函数的返回值必须是引用。</li></ul><h3 id="_2-4-引用的本质" tabindex="-1"><a class="header-anchor" href="#_2-4-引用的本质" aria-hidden="true">#</a> 2.4 引用的本质</h3><p><strong>本质</strong>：引用的本质在c++内部实现是一个指针常量</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void func(int&amp; ref){//编译器发现是引用，帮我们转换为 int* const ref = &amp;a;
  
	ref = 100; // ref是引用，编译器帮我们转换为*ref = 100
}
int main(){
	int a = 10;
	int&amp; ref = a; //编译器自动转换为 int* const ref = &amp;a; 指针常量是指针指向不可改，也说明为什么引用不可更改
  
	ref = 20; //编译器发现ref是引用，自动帮我们转换为: *ref = 20;
    
	cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; endl;
	cout &lt;&lt; &quot;ref:&quot; &lt;&lt; ref &lt;&lt; endl;
    
	func(a);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong>：C++推荐我们用引用技术，因为语法方便，引用本质是指针常量，但所以的指针操作编译器都帮我们做了。</p><h3 id="_2-5-常量引用" tabindex="-1"><a class="header-anchor" href="#_2-5-常量引用" aria-hidden="true">#</a> 2.5 常量引用</h3><p><strong>作用</strong>：常量引用主要用来修饰形参，防止误操作。</p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

void func(const int &amp;b) {
    //b = 30;//error
    cout &lt;&lt; b &lt;&lt; endl;
}

int main() {
    //int &amp;ref = 10;//引用的指向需要是一个合法的空间，因此这行是错误的
    const int &amp;ref = 10;//加入const，编译器会帮我们优化代码，变成 int temp=10;const int &amp;ref=temp;
    //ref = 100;//const 修饰后的引用，不可修改
    cout &lt;&lt; ref &lt;&lt; endl;

    const int b = 20;
    func(b);//函数中利用常量修饰引用防止实参被修改

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、函数提高" tabindex="-1"><a class="header-anchor" href="#三、函数提高" aria-hidden="true">#</a> 三、函数提高</h2><h3 id="_1-1-函数默认值" tabindex="-1"><a class="header-anchor" href="#_1-1-函数默认值" aria-hidden="true">#</a> 1.1 函数默认值</h3><p><strong>在C++中，函数的参数列表中，形参是可以有默认值的</strong></p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

//void func(int a, int b = 20, int c)//error 参数列表中某个参数有默认值时，后面的参数都要指定默认值
void func(int a, int b = 20, int c = 30) {
    cout &lt;&lt; a + b + c &lt;&lt; endl;
}

void func2(int a, int b = 20);

//void func2(int a, int b = 20){}//函数声明指定了默认值，函数实现就不能再指定默认值了
void func2(int a, int b) {
    cout &lt;&lt; a + b &lt;&lt; endl;
}

int main() {
    func(10);//60       //指定了默认值的参数可以不传参
    func(10, 30);//70
    func(10, 30, 40);//80

    func2(10);//30
    func2(10, 90);//100
    return 0;
}
/*output:
60
70
80
30
100
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-函数占位符" tabindex="-1"><a class="header-anchor" href="#_1-2-函数占位符" aria-hidden="true">#</a> 1.2 函数占位符</h3><p>C++中函数的形参列表中 可以有占位参数，用来占位，调用函数时必须填补该位置</p><p>在现阶段占位参数存在的意义不大，后面会用到该技术</p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

int func(int a, int, int b) {
    cout &lt;&lt; a &lt;&lt; &#39;\\t&#39; &lt;&lt; b &lt;&lt; endl;
}

int main() {
    func(10, 20, 20);//10 20
    return 0;
}
/*output:
10 20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-函数重载" tabindex="-1"><a class="header-anchor" href="#_1-3-函数重载" aria-hidden="true">#</a> 1.3 函数重载</h3><p><strong>作用</strong>：函数名可以相同，提高复用性</p><p><strong>函数重载条件</strong>：</p><ul><li><p>同一个作用域下</p></li><li><p>函数名相同</p></li><li><p>函数参数 <strong>类型不同</strong> 或者 <strong>个数不同</strong> 或者 <strong>顺序不同</strong></p></li><li><p><strong>注意</strong>：返回值不能作为函数重载条件</p></li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

void func() {
    cout &lt;&lt; &quot;call: int func()&quot; &lt;&lt; endl;
}

void func(int a) {
    cout &lt;&lt; &quot;call: void func(int a)&quot; &lt;&lt; endl;
}

void func(double a) {
    cout &lt;&lt; &quot;call: void func(double a)&quot; &lt;&lt; endl;
}

void func(int a, double b) {
    cout &lt;&lt; &quot;call: void func(int a, double b)&quot; &lt;&lt; endl;
}

void func(double a, int b) {
    cout &lt;&lt; &quot;call: void func(double a, int b)&quot; &lt;&lt; endl;
}
//函数返回值不能作为重载条件
/*int func(double a, int b) {
    cout &lt;&lt; &quot;call: void func(double a, int b)&quot; &lt;&lt; endl;
}*/

int main() {
    func();                     //int func()
    func(1);                 //void func(int a)
    func(1.1);               //void func(double a)
    func(1, 1.1);         //void func(int a, double b)
    func(1.1, 1);         //void func(double a, int b)
    return 0;
}

/*output:
call: int func()
call: void func(int a)
call: void func(double a)
call: void func(int a, double b)
call: void func(double a, int b)
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数重载注意事项</strong></p><ul><li>引用作为重载条件</li><li>函数重载碰到函数默认值</li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

void func(int &amp;a) {
    cout &lt;&lt; &quot;call: void func(int &amp;a)&quot; &lt;&lt; endl;
}

void func(const int &amp;a) {
    cout &lt;&lt; &quot;call: void func(const int &amp;a)&quot; &lt;&lt; endl;
}

//void func(int a){}//error

void func2(int a) {
    cout &lt;&lt; &quot;call: void func(int a)&quot; &lt;&lt; endl;
}

void func2(int a, int b = 20) {
    cout &lt;&lt; &quot;call: void func(int a, int b = 20)&quot; &lt;&lt; endl;
}


int main() {
    int a = 10;
    func(a);                 //call: void func(int &amp;a)
    func(10);                //call: void func(const int &amp;a)
    //func2(10);                //碰到默认参数产生歧义，需要避免
    func2(10, 20);        //call: void func(int a, int b = 20)
    return 0;
}

/*output:
call: void func(int &amp;a)
call: void func(const int &amp;a)
call: void func(int a, int b = 20)
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、类和对象" tabindex="-1"><a class="header-anchor" href="#四、类和对象" aria-hidden="true">#</a> 四、类和对象</h2><p>C++面向对象的三大特性</p><ul><li>封装</li><li>继承</li><li>多态</li></ul><p>C++认为万事万物皆为对象，对象有其属性和行为</p><p><strong>例如</strong>：</p><ul><li>人 <ul><li>属性：姓名、年龄、身高、体重、...</li><li>行为：走、跑、吃饭、睡觉、...</li></ul></li><li>车 <ul><li>属性：品牌、型号、车型、年代</li><li>行为：启动、刹车、转弯、前进、后退</li></ul></li></ul><p>具有相同性质的对象，我们可以抽象称为 类</p><ul><li>人属于人类</li><li>车输入车类</li><li>动物输入动物类</li></ul><h3 id="_1-1、封装" tabindex="-1"><a class="header-anchor" href="#_1-1、封装" aria-hidden="true">#</a> 1.1、封装</h3><p>封装是C++面向对象三大特性之一</p><p><strong>封装的意义</strong>：</p><ul><li>将属性和行为作为一个整体，表现生活中的事物</li><li>将属性和行为加以权限控制</li></ul><h4 id="封装的意义一" tabindex="-1"><a class="header-anchor" href="#封装的意义一" aria-hidden="true">#</a> 封装的意义一</h4><p>在设计类的时候，属性和行为写在一起，表现事物</p><p>语法： <code>class 类名{ 访问权限： 属性 / 行为 };</code></p><p><strong>示例1</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

const double PI = 3.1415926;

class Circle {
public:

    //属性
    int r;//半径

    //行为
    double calculateZC() {//计算圆的周长
    //2 * pi  * r
        return 2 * PI * r;
    }

};

int main() {
    Circle circle;
    circle.r = 10;
    double zc = circle.calculateZC();
    cout &lt;&lt;&quot;perimeter：&quot;&lt;&lt; zc &lt;&lt; endl;
    return 0;
}
/*output:
perimeter：62.8319
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

//用到的属性可以后定义
class Student {
public:
    void setName(string name1) {
        name = name1;
    }

public:
    int id;
    string name;

public:
    void setId(int id1) {
        id = id1;
    }

    void show() {
        cout &lt;&lt; &quot;ID：&quot; &lt;&lt; id &lt;&lt; &#39;,&#39;;
        cout &lt;&lt; &quot;Name：&quot; &lt;&lt; name &lt;&lt; endl;
    }
};

int main() {
    Student student;
    student.setId(100);
    student.setName(&quot;fuck&quot;);
    student.show();
    return 0;
}
/*output:
ID：100,Name：fuck
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装的意义二" tabindex="-1"><a class="header-anchor" href="#封装的意义二" aria-hidden="true">#</a> 封装的意义二</h4><p>类在设计时，可以把属性和行为放在不同的权限下，加以控制</p><p>访问权限有三种：</p><ul><li>public（公有权限） <ul><li>能被类成员函数</li><li>子类函数、友元访问</li><li>也能被类的对象访问。</li></ul></li><li>protected（保护权限） <ul><li>只能被类成员函数</li><li>子类函数及友元访问</li><li>不能被其他任何访问</li><li>本身的类对象也不行。</li></ul></li><li>private（私有权限） <ul><li>只能被类成员函数及友元访问</li><li>不能被其他任何访问</li><li>本身的类对象也不行。</li></ul></li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
private:
    string name;
    string gender;
    int age;

public:
    void setName(string name1) {
        name = name1;
    }

    void setGender(string gender1) {
        gender = gender1;
    }

    void setAge(int age1){
        age = age1;
    }

    void show(){
        cout &lt;&lt; &quot;name: &quot; &lt;&lt; name &lt;&lt; endl;
        cout &lt;&lt; &quot;gender: &quot; &lt;&lt; gender &lt;&lt; endl;
        cout &lt;&lt; &quot;age: &quot; &lt;&lt; age &lt;&lt; endl;
    }
};

int main() {
    Person person;
    //person.name //error
    //person.gender /error
    //person.age    //error
    person.setName(&quot;fuck&quot;);
    person.setGender(&quot;male&quot;);
    person.setAge(52);
    person.show();
    return 0;
}
/*output:
name: fuck
gender: male
age: 52
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="struct-和-class-的区别" tabindex="-1"><a class="header-anchor" href="#struct-和-class-的区别" aria-hidden="true">#</a> struct 和 class 的区别</h4><p>在C++中 struct和class唯一的区别就在于，默认的访问全选不同</p><ul><li>struct 默认权限为 public</li><li>class 默认权限为 private</li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class PC {
    string name;
};

struct PS {
    string name;
private://都是可以的。。。
    int age;

    void show() {
        
    }
};

int main() {
    PC pc;
    PS ps;
    //pc.name = &quot;fail&quot;;
    ps.name = &quot;success&quot;;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限" aria-hidden="true">#</a> 访问权限</h4><p><strong>优点1</strong>：将所有成员属性设置为私有，可以直接控制读写权限</p><p><strong>优点2</strong>：对于写权限， 我们可以交验数据的合法性</p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
private:
    string name;
    string gender;
    int age;
public:
    void setName(string name1) {
        name = name1;
    }

    void setGender(string gender1) {
        gender = gender1;
    }

    void setAge(int age1) {
        if (age1 &gt; 150) {
            cout &lt;&lt; &quot;请去死人那边排队!&quot; &lt;&lt; endl;
            return;
        }
        if (age1 &lt; 0) {
            cout &lt;&lt; &quot;急着投胎？&quot; &lt;&lt; endl;
            return;
        }
        age = age1;
    }

    string getName() {
        return name;
    }

    string getGender() {
        return gender;
    }

    int getAge() {
        return age;
    }
};

int main() {
    Person person;
    person.setName(&quot;fuck&quot;);
    person.setGender(&quot;male&quot;);
    person.setAge(151);
    person.setAge(52);
    person.setAge(-1);

    cout &lt;&lt; person.getName() &lt;&lt; endl;
    cout &lt;&lt; person.getGender() &lt;&lt; endl;
    cout &lt;&lt; person.getAge() &lt;&lt; endl;

    return 0;
}

/*output:
请去死人那边排队!
急着投胎？
fuck
male
52
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的初始化和清理" tabindex="-1"><a class="header-anchor" href="#对象的初始化和清理" aria-hidden="true">#</a> 对象的初始化和清理</h3><h4 id="构造函数和析构函数" tabindex="-1"><a class="header-anchor" href="#构造函数和析构函数" aria-hidden="true">#</a> 构造函数和析构函数</h4><ul><li><p>生活中我们买的电子产品基本会有出厂设置，在某一天我们不用的时候也会删除一些自己的信息，保证数据安全</p></li><li><p>C++中的面向对象来源于生活，每个对象都会有初始化设置，以及对象销毁前的清理数据的设置。</p></li><li><p>对象的初始化和清理也是两个非常重要的安全问题</p><ul><li>一个对象或者变量没有初始状态，对其使用后果是未知的</li><li>同样使用完一个对象或变量，没有及时清理，也会造成一定的安全问题。</li></ul></li></ul><p>C++利用了<strong>构造函数</strong>和<strong>析构函数</strong>解决上述问题，<strong>这两个函数会被编译器自动调用</strong>，完成对象初始化和清理工作。</p><p>对象的初始化和清理工作是编译器强制我们做的事情，因此我们如果不提供构造和析构函数，编译器会提供。</p><ul><li><strong>编译器提供的构造函数和析构函数都是空实现</strong>。</li></ul><p><strong>构造函数</strong>：主要作用在创建对象时为对象的成员属性赋值，构造函数由编译器自动调用，无须手动调用。</p><ul><li>构造函数，没有返回值，且也不写void</li><li>构造函数名称与类名相同</li><li>构造函数可以有参数，因此可以重载</li><li>在创建对象时会自动调用构造函数，无须手动调用，而且只会调用一次</li></ul><p><strong>析构函数</strong>：主要作用在于对象销毁前执行一些清理工作，系统自动调用。</p><ul><li>析构函数，没有返回值，且也不写void</li><li>函数名称与类名相同，在名称前面加上符号 <code>～</code></li><li>构造函数不可以有参数，且不能重载</li><li>在对象销毁前自动调用析构，无须手动调用，只会调用一次</li></ul><h4 id="构造函数的分类及调用" tabindex="-1"><a class="header-anchor" href="#构造函数的分类及调用" aria-hidden="true">#</a> 构造函数的分类及调用</h4><p>两种分类：</p><ul><li>按参数分：有参构造和无参构造</li><li>按类型分：普通构造和拷贝构造</li></ul><p>三种调用方式：</p><ul><li>括号法</li><li>显式法</li><li>隐式转换法</li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person() {
        cout &lt;&lt; &quot;无参构造函数！&quot; &lt;&lt; endl;
    }

    Person(string name1) {
        name = name1;
        cout &lt;&lt; &quot;有参构造函数！&quot; &lt;&lt; endl;
    }

    Person(int age1) {
        age = age1;
        cout &lt;&lt; &quot;有参构造函数重载！&quot; &lt;&lt; endl;
    }

    Person(string name1, int age1) {
        name = name1;
        age = age1;
        cout &lt;&lt; &quot;有参构造函数重载！&quot; &lt;&lt; endl;
    }

    //拷贝构造函数必须通过引用传递其第一个参数
    Person(const Person &amp;p) {
        name = p.name;
        age = p.age;
        cout &lt;&lt; &quot;拷贝构造函数！&quot; &lt;&lt; endl;
    }

    ~Person() {
        cout &lt;&lt; &quot;析构函数！&quot; &lt;&lt; endl;
    }

};

int main() {
    //括号法
    Person p1(&quot;括号法，常用&quot;);//括号法，常用
    Person p2(p1);//括号法

    //显式法
    Person p3 = Person(&quot;显式法&quot;);
    Person p4 = Person(p2);//显示法，拷贝构造函数

    //单独写就是匿名对象  当前行结束之后，马上析构
    Person(20);

    //隐式转换法
    Person p5 = 10;//隐式转换法  Person p2 = Person(10);
    Person p6 = p4;//隐式转换法  Person p2 = Person(p4);



    //-----------------------------注意----------------------------------
    //Person p2();          //调用无参构造函数不能加括号，如果加了编译器认为这是一个函数声明
    //Person(&quot;显式法&quot;);      //单独写就是匿名对象  当前行结束之后，马上析构
    //Person(p4);           //不能利用 拷贝构造函数 初始化匿名对象 编译器认为是对象声明
    //-----------------------------注意----------------------------------

    cout &lt;&lt; p2.name &lt;&lt; endl;
    return 0;
}

/*output：
有参构造函数！
拷贝构造函数！
有参构造函数！
拷贝构造函数！
有参构造函数重载！
析构函数！
有参构造函数重载！
拷贝构造函数！
括号法，常用
析构函数！
析构函数！
析构函数！
析构函数！
析构函数！
析构函数！
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拷贝构造函数调用时机" tabindex="-1"><a class="header-anchor" href="#拷贝构造函数调用时机" aria-hidden="true">#</a> 拷贝构造函数调用时机</h4><p>C++中拷贝构造函数调用时机通常有三种情况</p><ul><li>使用一个已有的对象来初始化一个新对象</li><li>值传递的方式给函数参数传值</li><li>以值方式返回局部对象</li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person() {
        cout &lt;&lt; &quot;无参构造函数！&quot; &lt;&lt; endl;
    }

    Person(string name1) {
        name = name1;
        cout &lt;&lt; &quot;有参构造函数！&quot; &lt;&lt; endl;
    }

    Person(int age1) {
        age = age1;
        cout &lt;&lt; &quot;有参构造函数重载！&quot; &lt;&lt; endl;
    }

    Person(string name1, int age1) {
        name = name1;
        age = age1;
        cout &lt;&lt; &quot;有参构造函数重载！&quot; &lt;&lt; endl;
    }

    //拷贝构造函数必须通过引用传递其第一个参数
    Person(const Person &amp;p) {
        name = p.name;
        age = p.age;
        cout &lt;&lt; &quot;拷贝构造函数！&quot; &lt;&lt; endl;
    }

    ~Person() {
        cout &lt;&lt; &quot;析构函数！&quot; &lt;&lt; endl;
    }

};

void func1(Person p) {
    cout &lt;&lt; &quot;值传递的方式给函数参数传值&quot; &lt;&lt; endl;
}

Person func2(){
    cout &lt;&lt; &quot;以值方式返回局部对象&quot; &lt;&lt; endl;
    Person p;
    return p;
}

int main() {
    Person p1(&quot;Human&quot;, 2000);//有参构造函数重载！
    Person p2(p1);//拷贝构造函数！//使用一个已有的对象来初始化一个新对象
    cout &lt;&lt; endl &lt;&lt; &quot;------值传递的方式给函数参数传值-------&quot; &lt;&lt; endl;
    func1(p1);
    cout &lt;&lt; &quot;------值传递的方式给函数参数传值-------&quot; &lt;&lt; endl;
    cout &lt;&lt; endl &lt;&lt; &quot;------以值方式返回局部对象-------&quot; &lt;&lt; endl;
    func2();
    cout &lt;&lt; &quot;------以值方式返回局部对象-------&quot; &lt;&lt; endl &lt;&lt; endl;
    return 0;
}

/*output:
有参构造函数重载！
拷贝构造函数！

------值传递的方式给函数参数传值-------
拷贝构造函数！
值传递的方式给函数参数传值
析构函数！
------值传递的方式给函数参数传值-------

------以值方式返回局部对象-------
以值方式返回局部对象
无参构造函数！
析构函数！
------以值方式返回局部对象-------

析构函数！
析构函数！
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造函数调用规则" tabindex="-1"><a class="header-anchor" href="#构造函数调用规则" aria-hidden="true">#</a> 构造函数调用规则</h4><p>默认情况下，C++编译器至少给一个类添加3个函数</p><ol><li>默认构造函数(无参，函数体为空)</li><li>默认析构函数(无参，函数体为空)</li><li>默认拷贝构造函数，对属性进行值拷贝</li><li>赋值运算符 operator=, 对属性进行值拷贝</li></ol><p>构造函数调用规则如下：</p><ul><li>如果用户定义有参构造函数，C++不再提供默认无参构造，但会提供默认拷贝构造</li><li>如果用户定义拷贝构造函数，C++不会再提供其他构造函数</li></ul><p><strong>如果不提供拷贝构造，编译器会自动添加拷贝构造，并且做浅拷贝操作</strong>:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name1) {
        name = name1;
        cout &lt;&lt; &quot;有参构造函数！&quot; &lt;&lt; endl;
    }
};

int main() {
    Person p1(&quot;Hello&quot;);
    Person p2(p2);//如果不提供拷贝构造，编译器会自动添加拷贝构造，并且做浅拷贝操作
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果用户提供有参构造，编译器不会提供默认构造，会提供拷贝构造</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name1) {
        name = name1;
        cout &lt;&lt; &quot;有参构造函数！&quot; &lt;&lt; endl;
    }
};

int main() {
    Person p1;//error //如果用户提供有参构造，编译器不会提供默认构造，会提供拷贝构造
    Person p2(&quot;Hello&quot;);//用户提供了有参
    Person p3(p2);//如果用户没有提供拷贝构造，编译器会提供
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果用户提供拷贝构造，编译器不会提供其他构造函数</strong>:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(const Person &amp;p) {
        name = p.name;
        cout &lt;&lt; &quot;有参构造函数！&quot; &lt;&lt; endl;
    }
};

int main() {
    Person p1;//error //如果用户提供有参构造，编译器不会提供默认构造，会提供拷贝构造
    Person p2(&quot;Hello&quot;);//error  //此时如果用户自己没有提供有参，会出错
    Person p3(p2);///用户自己提供拷贝构造
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝" aria-hidden="true">#</a> 深拷贝和浅拷贝</h4><p>深浅拷贝是面试经典问题，也是常见的一个坑</p><p>浅拷贝：简单的赋值操作</p><p>深拷贝：在堆区重新申请内存空间，再赋值操作</p><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    string name;
    int *age;

    Person() {
        cout &lt;&lt; &quot;无参构造函数！&quot; &lt;&lt; endl;
    }

    Person(string name1, int age1) {
        name = name1;
        age = new int(age1);
        cout &lt;&lt; &quot;有参构造函数&quot; &lt;&lt; endl;
    }

    Person(const Person &amp;p) {
        name = p.name;
        //如果不用深拷贝，会导致浅拷贝带来的重复释放堆区问题
        age = new int(*p.age);
    }

    ~Person() {
        cout &lt;&lt; &quot;析构函数&quot; &lt;&lt; endl;
        if (age != nullptr) {
            delete age;
        }
    }
};

int main() {
    Person p1(&quot;Hello&quot;, 50);
    Person p2(p1);
    cout &lt;&lt; p1.name &lt;&lt; &quot;,&quot; &lt;&lt; *p1.age &lt;&lt; endl;
    cout &lt;&lt; p2.name &lt;&lt; &quot;,&quot; &lt;&lt; *p2.age &lt;&lt; endl;
    return 0;
}

/*output:
有参构造函数
Hello,50
Hello,50
析构函数
析构函数
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：如果有在堆区开辟的属性，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题</p></blockquote><h4 id="初始化列表" tabindex="-1"><a class="header-anchor" href="#初始化列表" aria-hidden="true">#</a> 初始化列表</h4><p><strong>作用</strong>：C++提供了初始化列表语法，用来初始化属性</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
private:
    int id;
    string name;
    int age;

public:
    //初始化列表，就算函数体没有内容，代码块{}也要保留
    //Person(int id1, string name1, int age1) : id(id1), name(name1), age(age1){}
    //执行完初始化列表之后，接着会执行代码块{}里面的内容
    Person(int id1, string name1, int age1) : id(id1), name(name1), age(age1) {
        cout &lt;&lt; &quot;初始化列表执行啦，something&quot; &lt;&lt; endl;
        id++;
    }

    void show() {
        cout &lt;&lt; &quot;id: &quot; &lt;&lt; id &lt;&lt; endl;
        cout &lt;&lt; &quot;name: &quot; + name &lt;&lt; endl;
        cout &lt;&lt; &quot;age: &quot; &lt;&lt; age &lt;&lt; endl;
    }
};

int main() {
    Person p(99, &quot;Hello&quot;, 50);
    p.show();
    return 0;
}

/*output:
初始化列表执行啦，
id: 100
name: Hello
age: 50
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类对象作为类成员" tabindex="-1"><a class="header-anchor" href="#类对象作为类成员" aria-hidden="true">#</a> 类对象作为类成员</h4><p>C++类中的成员可以是另一个类的对象，我们称该成员为 对象成员</p><p><strong>例如</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class A {
};
class B{
    A a;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当创建B对象时，A与B的构造和析构的执行顺序</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class A {
public:
    A() {
        cout &lt;&lt; &quot;A 构造&quot; &lt;&lt; endl;
    }

    ~A() {
        cout &lt;&lt; &quot;A 析构&quot; &lt;&lt; endl;
    }
};

class B {
private:
    A a;
public:
    B() {
        cout &lt;&lt; &quot;B 构造&quot; &lt;&lt; endl;
    }

    ~B() {
        cout &lt;&lt; &quot;B 析构&quot; &lt;&lt; endl;
    }
};

int main() {
    B b;
    return 0;
}

/*output:
A 构造
B 构造
B 析构
A 析构
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h4><p>静态成员就是成员变量和成员函数前加上关键字 static，称为静态成员。</p><p>静态成员分为：</p><ul><li>静态成员变量 <ul><li>所有对象共享同一份数据</li><li>在编译阶段分配内存</li><li>类内声明，类外初始化</li></ul></li><li>静态成员函数 <ul><li>所有对象共享同一个函数</li><li>静态成员函数只能访问静态成员变量</li></ul></li></ul><p><strong>示例</strong>：静态成员变量</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    static int a;
  
    void setA() {
        Person::a = 100;
    }
private:
    static int b;//私有静态成员变量也是有访问权限的
};


int Person::a = 10;//必须这样初始化后，静态成员变量才可以被访问，否则会报错（相当于上面定义的是函数声明，函数实现）
int Person::b = 20;//必须这样初始化后，静态成员变量才可以被访问，否则会报错（相当于上面定义的是函数声明，函数实现）

int main() {
    //静态成员的两种访问方式
    //1 可以通过对象访问公有的静态成员，但是不能访问私有的静态成员
    Person p1;
    p1.a = 10;
    cout &lt;&lt; p1.a &lt;&lt; endl;//10
    Person p2;
    p2.a = 20;
    cout &lt;&lt; p1.a &lt;&lt; endl;//p1.a=20 共享同一份数据

    //2 通过类名
    Person::a = 100;
    cout &lt;&lt; Person::a &lt;&lt; endl;//100
    cout &lt;&lt; p1.a &lt;&lt; endl;//100

    //cout &lt;&lt; Person::b &lt;&lt; endl; //私有权限访问不到
    //cout &lt;&lt; p1.b &lt;&lt; endl; //私有权限访问不到
    
    return 0;
}
/*output:
10
20
100
100
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例</strong>：静态成员函数</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    static int a;
    int b;

    static void func1() {
        cout &lt;&lt; &quot;call: func1&quot; &lt;&lt; endl;
        a = 100;
        //b = 200; //error 静态成员函数只能访问静态成员属性
    }

private:
    static void func2() {
        cout &lt;&lt; &quot;call: func2&quot; &lt;&lt; endl;
        a = 1000;
        //b = 2000; //error 静态成员函数只能访问静态成员属性
    }
};

int Person::a = 10;//必须这样初始化后，静态成员变量才可以被访问，否则会报错（相当于上面定义的是函数声明，函数实现）

int main() {
    //通过对象
    Person p1;
    p1.func1();
    //通过类名
    Person::func1();
    
    //私有权限访问不到
    //p1.func2();
    //Person::func2();
    return 0;
}

/*output：
call: func1
call: func1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-对象模型和this指针" tabindex="-1"><a class="header-anchor" href="#c-对象模型和this指针" aria-hidden="true">#</a> C++对象模型和this指针</h3><h4 id="成员变量和成员函数分开存储" tabindex="-1"><a class="header-anchor" href="#成员变量和成员函数分开存储" aria-hidden="true">#</a> 成员变量和成员函数分开存储</h4><ul><li>在C++中，类的成员变量和成员函数分开存储的</li><li>只有非静态的成员变量才属于类的对象</li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    //静态成员不占用对象空间
    static int a;
    //非静态成员占用对象空间
    int b;
    Person() {
        a = 10;
        b = 20;
    }
    //函数也不占用对象空间，所有对象共用一个函数实例
    void func(){
        cout &lt;&lt; &quot;call: func&quot; &lt;&lt; endl;
    }
    //静态成员函数也不占用对象空间，所有对象共用一个函数实例
    void s_func(){
        cout &lt;&lt; &quot;call: static func&quot; &lt;&lt; endl;
    }
};

int main() {
    cout &lt;&lt; sizeof(Person) &lt;&lt; endl;//4      //就一个非静态成员变量占用了int=4个字节
    return 0;
}

/*output:
4
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="this指针概念" tabindex="-1"><a class="header-anchor" href="#this指针概念" aria-hidden="true">#</a> <strong>this指针概念</strong></h4><p>通过上一节，我们知道C++中成员变量和成员函数是分开存储的。</p><p><strong>每一个非静态成员函数只会诞生一份函数实例，也就是说多个同类型的对象，会共用一块代码。</strong></p><p>那么问题是，这一块代码是如何区分哪个对象调用自己的？</p><ul><li><p>C++通过提供特殊的对象指针：this指针，解决上述问题。</p></li><li><p><strong>this指针指向被调用成员函数所属的对象</strong>。</p></li></ul><p>this指针是隐含每一个非静态成员函数内的一种指针</p><p>this指针不需要定义，直接使用即可。</p><p>this指针的用途：</p><ul><li>当形参和成员变量同名时，可用this指针来区分</li><li>在类的非静态成员函数中返回对象本身，可使用 <code>return *this</code></li></ul><p><strong>示例</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    int age;

    Person(int age) {
        this-&gt;age = age;
    }

    Person &amp;addPerson(const Person &amp;p) {
        this-&gt;age += p.age;
        return *this;//this是一个指针，返回引用需要解引用
    }
};

int main() {
    Person p(10);
    p.addPerson(p)//20
            .addPerson(p)//40
            .addPerson(p)//80
            .addPerson(p);//160
    cout &lt;&lt; p.age &lt;&lt; endl;//160
    return 0;
}
/*output:
160
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="空指针访问成员函数" tabindex="-1"><a class="header-anchor" href="#空指针访问成员函数" aria-hidden="true">#</a> <strong>空指针访问成员函数</strong></h4><p>C++中空指针也是可以调用成员函数的，但是也要注意有没有用到this指针。</p><p>如果用到this指针，需要加以判断保证代码的健壮性</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    int age;

    void showClassName() {
        cout &lt;&lt; &quot;I am the Person&quot; &lt;&lt; endl;
    }

    void showPerson() {
        if (this == nullptr) {//如果当前对象是null，不加空指针判断会报错
            return;
        }
        cout &lt;&lt; this-&gt;age &lt;&lt; endl;
    }
};

int main() {
    Person *p = nullptr;
    p-&gt;showClassName();//空指针可以调用成员函数：I am the Person
    p-&gt;showPerson();
    return 0;
}
/*output:
I am the Person
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="const修饰成员函数" tabindex="-1"><a class="header-anchor" href="#const修饰成员函数" aria-hidden="true">#</a> <strong>const修饰成员函数</strong></h4><p><strong>常函数</strong>：</p><ul><li>成员函数加const，我们称之为常函数</li><li>常函数内不可以修改成员属性</li><li>成员属性声明时加上关键字：<code>mutable</code>后，在常函数中可以被修改</li></ul><p><strong>常对象：</strong></p><ul><li>声明对象前加const称之为常对象。</li><li>常对象只能调用常函数</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    int a;
    mutable int b; //可修改的  可变的

    //this指针是一个指针常量，指针的指向不可以修改
    //this-&gt;a = 100; //但是this指针指向的对象的数据是可以修改的
    //this = NULL; //不能修改指针的指向 Person* const this;
    //如果想让指针指向的值也不可以修改，需要声明常函数

    Person() {

    }

    void showPerson() const {
        //const 修饰成员函数，表示指针指向的内存空间的数据不可以修改，出了mutable修饰的变量
        this-&gt;b = 20;
        cout &lt;&lt; &quot;call: const func&quot; &lt;&lt; endl;
    }

    void func() {

    }
};

int main() {
    //常对象
    const Person p;
    p.showPerson();//常对象只能调用常函数
    //p.func();//不能调用普通函数

    cout &lt;&lt; p.a &lt;&lt; endl;//可以访问
    //p.a = 10;//但是不能修改

    p.b = 20;//mutable修饰的可以访问也可以修改

    return 0;
}

/*output:
call: const func
1			//这是没初始化，出现的随机值
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="友元" tabindex="-1"><a class="header-anchor" href="#友元" aria-hidden="true">#</a> 友元</h3><p>生活中你的家有客厅（Public），有你的卧室（Private）</p><p>客厅所有来的客人都可以进去，但是你的卧室是私有的，也就是说只有你能进去</p><p>但是呢，你也可以允许某些人进去</p><p>在程序里，有些私有属性，也想让类外特殊一些的函数或者类访问，就需要用到友元技术。</p><p>友元的目的就是允许一个函数或者类访问另一个类的私有成员</p><p>友元的关键字为：<code>friend</code></p><p><strong>友元的三种实现</strong></p><ul><li>全局函数做友元</li><li>类做友元</li><li>成员函数做友元</li></ul><h4 id="全局函数做友元" tabindex="-1"><a class="header-anchor" href="#全局函数做友元" aria-hidden="true">#</a> 全局函数做友元</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class BigHouse {
public:
    string sittingRoom;
private:
    string bedRoom;

public:
    BigHouse() {
        sittingRoom = &quot;MyFamilySittingRoom&quot;;
        bedRoom = &quot;MyPrivateBedRoom&quot;;
    }

    friend void GayFriendVisit(BigHouse &amp;bigHouse);
};

void GayFriendVisit(BigHouse &amp;bigHouse) {
    //友元函数可以访问它的私有成员
    cout &lt;&lt; &quot;Hay,My gay friend Just you can into the &quot; &lt;&lt; bigHouse.bedRoom &lt;&lt; &quot; of the BigHouse！&quot; &lt;&lt; endl;
}

void StrangerVisit(BigHouse &amp;bigHouse) {
  //bigHouse.bedRoom;//不能访问
    cout &lt;&lt; &quot;Who are you fucking?&quot; &lt;&lt; endl &lt;&lt; &quot;You are can&#39;t into my bedroom ,you just can into &quot;
         &lt;&lt; bigHouse.sittingRoom
         &lt;&lt; endl;
}

int main() {
    BigHouse bigHouse;
    GayFriendVisit(bigHouse);
    StrangerVisit(bigHouse);
    return 0;
}

/*output:
Hay,My gay friend Just you can into the MyPrivateBedRoom of the BigHouse！
Who are you fucking?
You are can&#39;t into my bedroom ,you just can into MyFamilySittingRoom
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类做友元" tabindex="-1"><a class="header-anchor" href="#类做友元" aria-hidden="true">#</a> 类做友元</h4><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class BigHouse;//类声明
class GayFriend {
public:
    string name;
    int age;

    GayFriend();//构造函数声明

    void visit();//成员函数声明

private:
    BigHouse *bigHouse;
};

class BigHouse {

public:
    string sittingRoom;
private:
    string bedRoom;

public:
    BigHouse();//构造函数声明

    friend class GayFriend;//友元类
};

BigHouse::BigHouse() {//构造函数实现
    this-&gt;sittingRoom = &quot;SittingRoom&quot;;
    this-&gt;bedRoom = &quot;BedRoom&quot;;
}

GayFriend::GayFriend() {//构造函数实现
    this-&gt;bigHouse = new BigHouse;
}

void GayFriend::visit() {//类函数实现
    cout &lt;&lt; &quot;I now arrived you BigHouse about&quot; &lt;&lt; endl
         &lt;&lt; &quot;Where are you?&quot; &lt;&lt; endl
         &lt;&lt; &quot;Please open the door for me! give me into you are &quot; &lt;&lt; bigHouse-&gt;sittingRoom &lt;&lt; &quot; wait you wash body!&quot;
         &lt;&lt; endl;
    cout &lt;&lt; &quot;Sweeter ,I will into you &quot; &lt;&lt; bigHouse-&gt;bedRoom &lt;&lt; &quot; and up you BigBed Are you washed body?&quot; &lt;&lt; endl;
}

int main() {
    GayFriend bf;
    bf.visit();

    BigHouse bigHouse;
    //bigHouse.bedRoom;//不能访问
    return 0;
}
/*output:
I now arrived you BigHouse about
Where are you?
Please open the door for me! give me into you are SittingRoom wait you wash body!
Sweeter ,I will into you BedRoom and up you BigBed Are you washed body?
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员函数做友元" tabindex="-1"><a class="header-anchor" href="#成员函数做友元" aria-hidden="true">#</a> <strong>成员函数做友元</strong></h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class BigHouse;//类声明
class GayFriend {
public:
    string name;
    int age;

    GayFriend();//构造函数声明

    void visit();//成员函数声明

    void GayFriendFriend();//成员函数声明

private:
    BigHouse *bigHouse;
};

class BigHouse {

public:
    string sittingRoom;
private:
    string bedRoom;

public:
    BigHouse();//构造函数声明

    friend void GayFriend::visit();//友元成员函数
};

BigHouse::BigHouse() {//构造函数实现
    this-&gt;sittingRoom = &quot;SittingRoom&quot;;
    this-&gt;bedRoom = &quot;BedRoom&quot;;
}

GayFriend::GayFriend() {//构造函数实现
    this-&gt;bigHouse = new BigHouse;
}

void GayFriend::visit() {//成员函数实现
    cout &lt;&lt; &quot;I now arrived you BigHouse about&quot; &lt;&lt; endl
         &lt;&lt; &quot;Where are you?&quot; &lt;&lt; endl
         &lt;&lt; &quot;Please open the door for me! give me into you are &quot; &lt;&lt; bigHouse-&gt;sittingRoom &lt;&lt; &quot; wait you wash body!&quot;
         &lt;&lt; endl;
    cout &lt;&lt; &quot;Sweeter ,I will into you &quot; &lt;&lt; bigHouse-&gt;bedRoom &lt;&lt; &quot; and up you BigBed Are you washed body?&quot; &lt;&lt; endl;
}

void GayFriend::GayFriendFriend() {//成员函数实现
    //bigHouse-&gt;bedRoom// 不能访问
    cout &lt;&lt; &quot;you fucking have patient??? fucking bitch go to hell after get out !!!&quot; &lt;&lt; endl;
}

int main() {
    GayFriend bf;
    bf.visit();
    bf.GayFriendFriend();
    BigHouse bigHouse;
    //bigHouse.bedRoom;//不能访问
    return 0;
}

/*output:
I now arrived you BigHouse about
Where are you?
Please open the door for me! give me into you are SittingRoom wait you wash body!
Sweeter ,I will into you BedRoom and up you BigBed Are you washed body?
you fucking have patient??? fucking bitch go to hell after get out !!!
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符重载" tabindex="-1"><a class="header-anchor" href="#运算符重载" aria-hidden="true">#</a> 运算符重载</h3><p><strong>运算符重载概念</strong></p><ul><li>对已有的运算符重新定义，赋予其另一种功能，以适应不同的数据类型</li></ul><h4 id="加号运算符重载" tabindex="-1"><a class="header-anchor" href="#加号运算符重载" aria-hidden="true">#</a> 加号运算符重载</h4><p><strong>作用</strong>：实现两个自定义数据类型相加的运算</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    int a;
    int b;
public:
    Person() {}

    Person(int a, int b) {
        this-&gt;a = a;
        this-&gt;b = b;
    }

    //运算符重载
    Person operator+(const Person &amp;p) const {
        Person tmp;
        tmp.a = a + p.a;
        tmp.b = b + p.b;
        return tmp;
    }

};

//运算符重载函数参数必须有一个类或者枚举   //和 成员函数运算符重载调用方法是一样的 ：Person operator+(const Person &amp;p) const
//Person operator+(const Person &amp;p1, const Person &amp;p2) {
//    Person tmp;
//    tmp.a = p1.a + p2.a;
//    tmp.b = p2.b + p2.b;
//    return tmp;
//}

//全局函数运算符重载 参数必须 有一个类或者枚举 //error：Person operator+(int a, int val)
Person operator+(const Person &amp;p, int val) {
    Person tmp;
    tmp.a = p.a + val;
    tmp.b = p.b + val;
    return tmp;
}


int main() {
    Person p1(10, 20);
    Person p2(100, 200);
    //成员函数方式
    Person sum = p1 + p2;//相当于 p1.operator+(p2)
    cout &lt;&lt; sum.a &lt;&lt; &#39;\\t&#39; &lt;&lt; sum.b &lt;&lt; endl;
    //全局函数方式
    sum = p1 + 10;//相当于 operator+(p3,10)
    cout &lt;&lt; sum.a &lt;&lt; &#39;\\t&#39; &lt;&lt; sum.b &lt;&lt; endl;
    return 0;
}
/*output：
110	220
20	30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>对于内置数据类型的运算符是不可能改变的</li><li>不要滥用运算符重载</li></ul></blockquote><h4 id="左移运算符重载" tabindex="-1"><a class="header-anchor" href="#左移运算符重载" aria-hidden="true">#</a> 左移运算符重载</h4><p><strong>作用</strong>：可以输出自定义数据类型</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
private:
    int a;
    int b;
public:
    Person(int a, int b) {
        this-&gt;a = a;
        this-&gt;b = b;
    }


    friend ostream &amp;operator&lt;&lt;(ostream &amp;out, const Person p);

    //成员函数 实现不了  p &lt;&lt; p 不是我们想要的效果
    void operator&lt;&lt;(Person &amp;p) {
        cout &lt;&lt; &quot;p &lt;&lt; p   a: &quot; &lt;&lt; p.a &lt;&lt; &quot;,&quot; &lt;&lt; &quot;b: &quot; &lt;&lt; p.b &lt;&lt; endl;
    }
};

//全局函数实现左移重载
//ostream对象只能有一个 ，，运算符重载会自动根据类型重载
ostream &amp;operator&lt;&lt;(ostream &amp;out, const Person p) {
    out &lt;&lt; &quot;a: &quot; &lt;&lt; p.a &lt;&lt; &quot;,&quot; &lt;&lt; &quot;b: &quot; &lt;&lt; p.b &lt;&lt; endl;
    return out;
}


int main() {
    Person p(10, 20);
    cout &lt;&lt; p &lt;&lt; &quot;Hello&quot; &lt;&lt; endl;//链式编程
    p &lt;&lt; p;
    return 0;
}

/*output:
a: 10,b: 20
Hello
p&lt;&lt;p   a: 10,b: 20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：重载左移运算符配合友元可以实现输出自定义数据类型</p></blockquote><h4 id="递增运算符重载" tabindex="-1"><a class="header-anchor" href="#递增运算符重载" aria-hidden="true">#</a> 递增运算符重载</h4><p><strong>作用</strong>：通过重载递增运算符，实现自己的整型数据</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class MyInteger {
    friend ostream &amp;operator&lt;&lt;(ostream &amp;out, MyInteger mi);

private:
    int num;
public:
    MyInteger() {
        num = 0;
    }

    //前置++
    MyInteger &amp;operator++() {
        //先++
        num++;
        //再返回
        return *this;
    }

    //后置++
    MyInteger operator++(int) {
        //先返回
        MyInteger tmp = *this;
        //再++
        num++;
        return tmp;
    }

};

ostream &amp;operator&lt;&lt;(ostream &amp;out, MyInteger mi) {
    out &lt;&lt; mi.num;
    return out;
}

int main() {
    MyInteger myInteger;
    cout &lt;&lt; myInteger++ &lt;&lt; endl;//0
    cout &lt;&lt; myInteger &lt;&lt; endl;//1
    cout &lt;&lt; ++myInteger &lt;&lt; endl;//2
    cout &lt;&lt; myInteger &lt;&lt; endl;//2
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：前置递增返回引用，后置递增返回值</p></blockquote><h4 id="赋值运算符重载" tabindex="-1"><a class="header-anchor" href="#赋值运算符重载" aria-hidden="true">#</a> 赋值运算符重载</h4><p>C++编译器至少给一个类添加4个函数</p><ol><li>默认构造函数(无参，函数体为空)</li><li>默认析构函数(无参，函数体为空)</li><li>默认拷贝构造函数，对属性进行值拷贝</li><li>赋值运算符 operator=, 对属性进行值拷贝</li></ol><p>如果类中有属性指向堆区，做赋值操作时也会出现深浅拷贝问题</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
public:
    int *age;

    Person() {}

    Person(int age) {
        this-&gt;age = new int(age);
    }

    Person &amp;operator=(const Person &amp;p) {
        //编译器提供的代码是浅拷贝
        //age = p.age;

        //防止当前对象属性的指针被覆盖，指针丢失
        if (age != nullptr) {
            delete age;
            age = nullptr;
        }
        //再创建一个，防止赋值的对象中有一个释放了内存，所有对象都变成野指针。
        age = new int(*p.age);
        return *this;
    }

    ~Person() {
        if (age != nullptr) {
            delete age;
            age = nullptr;
        }
    }

};

int main() {
    Person p1(10);
    Person p2(20);
    Person p3(30);
    p3 = p2 = p1;
    cout &lt;&lt; &quot;p1: age:&quot; &lt;&lt; *p1.age &lt;&lt; endl;
    cout &lt;&lt; &quot;p2: age:&quot; &lt;&lt; *p2.age &lt;&lt; endl;
    cout &lt;&lt; &quot;p3: age:&quot; &lt;&lt; *p3.age &lt;&lt; endl;
    return 0;
}

/*output:
p1: age:10
p2: age:10
p3: age:10
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关系运算符重载" tabindex="-1"><a class="header-anchor" href="#关系运算符重载" aria-hidden="true">#</a> 关系运算符重载</h4><p>**作用：**重载关系运算符，可以让两个自定义类型进行对比</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Person {
private:
    string name;
    int age;
public:
    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age;
    }

    bool operator==(const Person &amp;person) {
        return this-&gt;name == person.name &amp;&amp; this-&gt;age == person.age;
    }

    bool operator!=(const Person &amp;person) {
        return !(this-&gt;name == person.name &amp;&amp; this-&gt;age == person.age);
    }
};

int main() {
    Person p1(&quot;Hello&quot;, 50);
    Person p2(&quot;Hello&quot;, 40);
    Person p3(&quot;Hello&quot;, 50);

    cout &lt;&lt; (p1 == p2) &lt;&lt; endl;
    cout &lt;&lt; (p1 != p2) &lt;&lt; endl;
    cout &lt;&lt; (p1 == p3) &lt;&lt; endl;
    return 0;
}
/*output:
0
1
1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数调用运算符重载" tabindex="-1"><a class="header-anchor" href="#函数调用运算符重载" aria-hidden="true">#</a> 函数调用运算符重载</h4><ul><li>函数调用运算符 <code>()</code> 也可以重载</li><li>由于重载后使用的方式非常类似函数的调用，因此称之为仿函数</li><li>仿函数没有固定写法，非常灵活</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class MyPrinter {
public:
    void operator()(string text) {
        cout &lt;&lt; text &lt;&lt; endl;
    }
};

class MyAdder {
public:
    int operator()(int a, int b) {
        return a + b;
    }
};

int main() {
    MyPrinter mp;
    MyAdder ma;
    mp(&quot;hello&quot;);
    cout &lt;&lt; ma(10, 20) &lt;&lt; endl;
    MyPrinter()(&quot;匿名函数调用&quot;);
    cout &lt;&lt; MyAdder()(10, 20) &lt;&lt; endl;
    return 0;
}

/*output：
hello
30
匿名对象调用
30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>继承是面向对象三大特性之一</p><p>有些类与类之间存在特殊的关系，例如：</p><ul><li>人 <ul><li>白 <ul><li>犹太人</li><li>...</li></ul></li><li>黄 <ul><li>汉族</li><li>...</li></ul></li><li>黑 <ul><li>nigger</li><li>...</li></ul></li></ul></li></ul><p>我们发现，定义这些类时，下级别的成员除了拥有上一级的共性，还有自己的特性。比如：中国人只坑中国人</p><h4 id="继承的基本语法" tabindex="-1"><a class="header-anchor" href="#继承的基本语法" aria-hidden="true">#</a> 继承的基本语法</h4><p>例如，我们看到很多网站中，都有公共的头部，公共的底部，甚至公共的左侧列表，只有中心内容不一样。</p><p>加下来请看普通写法和继承写法，看一下继承存在的意义以及好处。</p><p><strong>普通实现：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Java {
public:
    void header() {
        cout &lt;&lt; &quot;首页、公开课、登录、注册...（公共头部）&quot; &lt;&lt; endl;
    }

    void footer() {
        cout &lt;&lt; &quot;帮助中心、交流合作、站内地图...(公共底部)&quot; &lt;&lt; endl;
    }

    void left() {
        cout &lt;&lt; &quot;Java,JS,C++...(公共分类列表)&quot; &lt;&lt; endl;
    }

    void content() {
        cout &lt;&lt; &quot;Java 课程视频&quot; &lt;&lt; endl;
    }
};

class JS {
public:
    void header() {
        cout &lt;&lt; &quot;首页、公开课、登录、注册...（公共头部）&quot; &lt;&lt; endl;
    }

    void footer() {
        cout &lt;&lt; &quot;帮助中心、交流合作、站内地图...(公共底部)&quot; &lt;&lt; endl;
    }

    void left() {
        cout &lt;&lt; &quot;Java,JS,C++...(公共分类列表)&quot; &lt;&lt; endl;
    }

    void content() {
        cout &lt;&lt; &quot;JS 课程视频&quot; &lt;&lt; endl;
    }
};
class CPP {
public:
    void header() {
        cout &lt;&lt; &quot;首页、公开课、登录、注册...（公共头部）&quot; &lt;&lt; endl;
    }

    void footer() {
        cout &lt;&lt; &quot;帮助中心、交流合作、站内地图...(公共底部)&quot; &lt;&lt; endl;
    }

    void left() {
        cout &lt;&lt; &quot;Java,JS,C++...(公共分类列表)&quot; &lt;&lt; endl;
    }

    void content() {
        cout &lt;&lt; &quot;CPP 课程视频&quot; &lt;&lt; endl;
    }
};
int main() {
    cout &lt;&lt; &quot;---------------Java 视频------------------&quot; &lt;&lt; endl;
    Java java;
    java.header();
    java.footer();
    java.left();
    cout &lt;&lt; &quot;---------------JS 视频--------------------&quot; &lt;&lt; endl;
    JS js;
    js.header();
    js.footer();
    js.left();
    cout &lt;&lt; &quot;---------------CPP 视频-------------------&quot; &lt;&lt; endl;
    CPP cpp;
    cpp.header();
    cpp.footer();
    cpp.left();
    cout &lt;&lt; &quot;-----------------------------------------&quot; &lt;&lt; endl;
    return 0;
}

/*output:
---------------Java 视频------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
---------------JS 视频--------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
---------------CPP 视频-------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
-----------------------------------------
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承实现：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class BasePage {
public:
    void header() {
        cout &lt;&lt; &quot;首页、公开课、登录、注册...（公共头部）&quot; &lt;&lt; endl;
    }

    void footer() {
        cout &lt;&lt; &quot;帮助中心、交流合作、站内地图...(公共底部)&quot; &lt;&lt; endl;
    }

    void left() {
        cout &lt;&lt; &quot;Java,JS,C++...(公共分类列表)&quot; &lt;&lt; endl;
    }
};

class Java : public BasePage {
public:
    void content() {
        cout &lt;&lt; &quot;Java 课程视频&quot; &lt;&lt; endl;
    }
};

class JS : public BasePage {
public:
    void content() {
        cout &lt;&lt; &quot;JS 课程视频&quot; &lt;&lt; endl;
    }
};

class CPP : public BasePage {
public:
    void content() {
        cout &lt;&lt; &quot;CPP 课程视频&quot; &lt;&lt; endl;
    }
};

int main() {
    cout &lt;&lt; &quot;---------------Java 视频------------------&quot; &lt;&lt; endl;
    Java java;
    java.header();
    java.footer();
    java.left();
    cout &lt;&lt; &quot;---------------JS 视频--------------------&quot; &lt;&lt; endl;
    JS js;
    js.header();
    js.footer();
    js.left();
    cout &lt;&lt; &quot;---------------CPP 视频-------------------&quot; &lt;&lt; endl;
    CPP cpp;
    cpp.header();
    cpp.footer();
    cpp.left();
    cout &lt;&lt; &quot;-----------------------------------------&quot; &lt;&lt; endl;
    return 0;
}
/*output:
---------------Java 视频------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
---------------JS 视频--------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
---------------CPP 视频-------------------
首页、公开课、登录、注册...（公共头部）
帮助中心、交流合作、站内地图...(公共底部)
Java,JS,C++...(公共分类列表)
-----------------------------------------
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>继承的好处：<strong>可以减少重复的代码</strong></p><p>class A : public B</p><ul><li>A 类称为子类 或 派生类</li><li>B 类称为父类 或 基类</li></ul><h4 id="继承方式" tabindex="-1"><a class="header-anchor" href="#继承方式" aria-hidden="true">#</a> 继承方式</h4><p>继承的三种方式</p><ul><li><p>公有继承</p><ul><li>继承基类的非私有属性</li><li>属性的访问权限修饰符不变</li></ul></li><li><p>保护继承</p><ul><li>继承父类的非私有属性</li><li>public 权限变为 protected</li></ul></li><li><p>私有继承</p><ul><li>继承父类的非私有属性</li><li>public 和 protected 变 private</li></ul></li></ul><p><strong>继承只能继承基类的非私有属性</strong></p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class BaseClass {
public:
    int a;
protected:
    int b;
private:
    int c;
};

class Son1 : public BaseClass {
public:
    Son1() {
        this-&gt;a = 10;
        this-&gt;b = 20;
        //this-&gt;c = 20;//继承只能继承基类的非私有属性
    }
};

class Son2 : protected BaseClass {
public:
    Son2() {
        this-&gt;a = 10;
        this-&gt;b = 20;
        //this-&gt;c = 20;//继承只能继承基类的非私有属性
    }
};

class Son3 : private BaseClass {
public:
    Son3() {
        this-&gt;a = 10;
        this-&gt;b = 20;
        //this-&gt;c = 20;//继承只能继承基类的非私有属性
    }
};


int main() {
    //继承只能继承基类的非私有属性

    Son1 son1;//属性的访问权限修饰符不变，其他类只能访问 公有权限
    son1.a;

    Son2 son2;//public 权限变为 protected，其他类不能访问
    //son2.a;//error

    Son3 son3;//public 和 protected 变 private，其他类不能访问
    //son3.a;//error
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承中的对象模型" tabindex="-1"><a class="header-anchor" href="#继承中的对象模型" aria-hidden="true">#</a> 继承中的对象模型</h4><p>问题：从父类继承过来的成员，哪些属于子类对象？</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base {
public:
    int a;
protected:
    int b;
private:
    int c;//私有成员只是被隐藏了，还是会继承下去
};

class Son : public Base {
public:
    int d;
};

int main() {
    cout &lt;&lt; &quot;sizeof son : &quot; &lt;&lt; sizeof(Son) &lt;&lt; endl;//16，基类加派生类一共16个字节，证明私有成员还是会被继承，只是编译器隐藏了而已
    return 0;
}
/*output:
sizeof son : 16
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用工具查看：</p><p>打开工具窗口后，定位到当前CPP文件的盘符</p><p>然后输入： cl /d1 reportSingleClassLayout查看的类名 所属文件名</p><p>**结论：**父类中私有成员也被子类继承了，只是编译器给隐藏了访问不到</p><h4 id="继承中构造和析构顺序" tabindex="-1"><a class="header-anchor" href="#继承中构造和析构顺序" aria-hidden="true">#</a> 继承中构造和析构顺序</h4><p>子类继承基类后，当创建子类对象，也会调用父类的构造函数</p><p>问题：父类和子类的构造和析构顺序是谁先谁后。</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base {
public:
    Base() {
        cout &lt;&lt; &quot;Base 构造函数！&quot; &lt;&lt; endl;
    }

    ~Base() {
        cout &lt;&lt; &quot;Base 析构函数！&quot; &lt;&lt; endl;
    }
};

class Son : public Base {
public:
    Son() {
        cout &lt;&lt; &quot;Son 构造函数！&quot; &lt;&lt; endl;
    }

    ~Son() {
        cout &lt;&lt; &quot;Son 析构函数！&quot; &lt;&lt; endl;
    }
};

int main() {
    Son son;
    //Base 构造函数！
    //Son 构造函数！
    //Son 析构函数！
    //Base 析构函数！
    return 0;
}
/*output:
Base 构造函数！
Son 构造函数！
Son 析构函数！
Base 析构函数！
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：继承中 先调用父类构造函数，再调用子类构造函数，析构顺序与构造相反</p></blockquote><h4 id="继承同名成员处理方式" tabindex="-1"><a class="header-anchor" href="#继承同名成员处理方式" aria-hidden="true">#</a> 继承同名成员处理方式</h4><p>问题：当派生类与父类出现同名成员，如果通过子类对象，访问到子类或父类只能够同名的成员。</p><ul><li>访问子类同名成员，直接访问即可</li><li>访问父类同名成员，需要加作用域</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base {
public:
    int a;

    Base() {
        a = 100;
    }

    void func() {
        cout &lt;&lt; &quot;Call func of Base&quot; &lt;&lt; endl;
    }
    void func2(int b) {
        cout &lt;&lt; &quot;Call func of Base Params: &quot; &lt;&lt; b &lt;&lt; endl;
    }
};

class Son : public Base {
public:
    int a;

    Son() {
        a = 200;
    }

    void func() {
        cout &lt;&lt; &quot;Call func of Son&quot; &lt;&lt; endl;
    }
};

int main() {
    Son son;
    cout &lt;&lt; &quot;a of Son : &quot; &lt;&lt; son.a &lt;&lt; endl;
    cout &lt;&lt; &quot;a of Base : &quot; &lt;&lt; son.Base::a &lt;&lt; endl;

    son.func();
    son.Base::func();
    son.Base::func2(200);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>派生类对象可以直接访问到派生类中同名成员</li><li>派生类对象加作用域可以访问到基类同名成员</li><li>当派生类与基类拥有同名的成员函数，派生类会隐藏基类的同名成员函数，加作用域可以访问到基类中的同名函数</li></ol><h4 id="继承同名静态成员处理方式" tabindex="-1"><a class="header-anchor" href="#继承同名静态成员处理方式" aria-hidden="true">#</a> 继承同名静态成员处理方式</h4><p>问题：继承中同名的静态成员在子类对象上如何进行访问？</p><p>静态成员和非静态成员出现同名，处理方式一致</p><ul><li>访问子类同名成员，直接访问即可</li><li>访问父类同名成员，需要加作用域</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base {
public:
    static int a;

    static void func() {
        cout &lt;&lt; &quot;static int func() of Base&quot; &lt;&lt; endl;
    }
};

int Base::a = 100;


class Son : public Base {
public:
    static int a;

    static void func() {
        cout &lt;&lt; &quot;static int func() of Son&quot; &lt;&lt; endl;
    }
};

int Son::a = 200;


int main() {
    Son son;

    //同名成员属性
    cout &lt;&lt; &quot;通过对象访问属性&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;a of Son : &quot; &lt;&lt; son.a &lt;&lt; endl;
    cout &lt;&lt; &quot;a of Base : &quot; &lt;&lt; son.Base::a &lt;&lt; endl;

    cout &lt;&lt; &quot;通过类名访问属性&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;a of Son : &quot; &lt;&lt; Son::a &lt;&lt; endl;
    cout &lt;&lt; &quot;a of Base : &quot; &lt;&lt; Son::Base::a &lt;&lt; endl;

    //同名成员函数
    cout &lt;&lt; &quot;通过对象访问函数&quot; &lt;&lt; endl;
    son.func();
    son.Base::func();

    cout &lt;&lt; &quot;通过类名访问函数&quot; &lt;&lt; endl;
    Son::func();
    Son::Base::func();
    return 0;
}
/*output：
通过对象访问属性
a of Son : 200
a of Base : 100
通过类名访问属性
a of Son : 200
a of Base : 100
通过对象访问函数
static int func() of Son
static int func() of Base
通过类名访问函数
static int func() of Son
static int func() of Base
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：同名静态成员处理方式和非静态处理方式一样，只不过有两种访问方式（对象 和 类名）</p></blockquote><h4 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h4><p>C++允许一个类继承多个类</p><p>语法：<code>class 派生类 : 权限 基类1 , 权限 基类2 ,... </code></p><p>多继承可能会引发父类中有同名成员出现，需要加作用域区分</p><p><strong>C++实际开发中不建议用多继承。</strong></p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base1 {
public:
    int a;

    Base1() {
        a = 100;
    }
};

class Base2 {
public:
    int a;

    Base2() {
        a = 200;
    }
};

class Son : public Base1, public Base2 {
public:
    int c;
    int d;
    Son(){
        c = 300;
        d = 400;
    }
};

int main() {
    Son son;
    cout &lt;&lt; &quot;sizeof son object: &quot; &lt;&lt; sizeof(son) &lt;&lt; endl;//16
    cout &lt;&lt; son.Base1::a &lt;&lt; endl;
    cout &lt;&lt; son.Base2::a &lt;&lt; endl;
    return 0;
}
/*output：
sizeof son object: 16
100
200
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：多继承中如果基类中出现同名的情况，派生类需要加不同的作用域</p></blockquote><h4 id="菱形继承" tabindex="-1"><a class="header-anchor" href="#菱形继承" aria-hidden="true">#</a> 菱形继承</h4><p><strong>菱形继承概念：</strong></p><ul><li>两个派生类继承同一个基类</li><li>又有某个类继承这两个派生类</li><li>这种继承被称为棱形继承 或者 钻石继承</li></ul><p>典型的棱形继承案例：</p><p><img src="https://cxrs.oss-cn-shenzhen.aliyuncs.com/202208191519776.jpg" alt="clip_image002"></p><p><strong>菱形继承问题：</strong></p><ol><li>羊继承了动物的数据，驼同样继承了动物的数据，当草泥马使用数据时，就会产生二义性。</li><li>草泥马继承自动物的数据继承了两份，其实我们应该清楚，这份数据我们只需要一份就可以了。</li></ol><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Animal {
public:
    int age;
};

//继承前加virtual关键字后，变为虚继承
//此时公共的父类Animal称为虚基类
class Sheep : virtual public Animal {
};

class Tuo : virtual public Animal {
};

class SheepTuo : public Sheep, public Tuo {
};

int main() {
    SheepTuo st;
    st.Sheep::age = 20;
    st.Tuo::age = 30;

    cout &lt;&lt; &quot;age of Sheep : &quot; &lt;&lt; st.Sheep::age &lt;&lt; endl;
    cout &lt;&lt; &quot;age of Tuo : &quot; &lt;&lt; st.Tuo::age &lt;&lt; endl;
    cout &lt;&lt; &quot;age of SheepTuo : &quot; &lt;&lt; st.age &lt;&lt; endl;
    st.age = 10;
    cout &lt;&lt; &quot;age of Sheep : &quot; &lt;&lt; st.Sheep::age &lt;&lt; endl;
    cout &lt;&lt; &quot;age of Tuo : &quot; &lt;&lt; st.Tuo::age &lt;&lt; endl;
    cout &lt;&lt; &quot;age of SheepTuo : &quot; &lt;&lt; st.age &lt;&lt; endl;
    return 0;
}

/*output：
age of Sheep : 30
age of Tuo : 30
age of SheepTuo : 30
age of Sheep : 10
age of Tuo : 10
age of SheepTuo : 10
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>菱形继承带来的主要问题是子类继承两份相同的数据，导致资源浪费以及毫无意义</li><li>利用虚继承可以解决菱形继承问题</li></ul><p><strong>多继承时，不使用虚继承，多继承的派生类（如：SheepTuo）不能继承父类同名的成员。</strong></p><p><strong>虚继承之后，同名的成员只有一份在派生类，父类、基类的同名属性指向都是派生类的成员。</strong>（上例：输出值一样）</p><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><h4 id="多态的基本概念" tabindex="-1"><a class="header-anchor" href="#多态的基本概念" aria-hidden="true">#</a> 多态的基本概念</h4><p><strong>多态是C++面向对象的三大特性之一</strong></p><p>多态分为两类</p><ul><li>静态多态：函数重载 和 运算符重载属于静态多态，复用函数名。</li><li>动态多态：派生类和虚函数实现运行时多态。</li></ul><p>静态多态和动态多态的区别：</p><ul><li>静态多态的函数地址早绑定 - 编译阶段确定函数地址</li><li>动态多态的函数地址晚绑定 - 运行阶段确定函数地址</li></ul><p><strong>函数前面加上virtual关键字，变成虚函数，那么编译器在编译的时候就不能确定函数调用了</strong></p><p><strong>例子：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Animal {
public:
    //函数前面加上virtual关键字，变成虚函数，那么编译器在编译的时候就不能确定函数调用了
    virtual void Speck() {
        cout &lt;&lt; &quot;Animal Specking...&quot; &lt;&lt; endl;
    }
};

class Cat : public Animal {
public:
    void Speck() {
        cout &lt;&lt; &quot;Cat Specking...&quot; &lt;&lt; endl;
    }
};

class Dog : public Animal {
public:
    void Speck() {
        cout &lt;&lt; &quot;Dog Specking...&quot; &lt;&lt; endl;
    }
};

//我们希望传入什么对象，那么就调用什么对象的函数
//如果函数地址在编译阶段就能确定，叫做静态联编
//如果函数地址在运行阶段才能确定，叫做动态联编
void do_speck(Animal &amp;animal) {
    animal.Speck();
}

int main() {
    Cat cat;
    do_speck(cat);

    Dog dog;
    do_speck(dog);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p><strong>多态满足条件</strong></p><ul><li>有继承关系</li><li>子类重写父类中的虚函数</li></ul><p><strong>多态使用条件</strong></p><ul><li>父类指针或引用指向子类对象</li></ul><p>重写：函数返回值类型 函数名 参数列表 完全一致称为重写</p><h4 id="多态案例一-计算器类" tabindex="-1"><a class="header-anchor" href="#多态案例一-计算器类" aria-hidden="true">#</a> 多态案例一 （计算器类）</h4><p>案例描述：</p><p>分别利用普通写法和多态技术，设计实现两个操作数计算的计算器类</p><p><strong>多态的优点：</strong></p><ul><li>代码组织结构清晰</li><li>可读性强</li><li>利于前期和后期的扩展以及维护</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

//普通实现
class Calculator {
public:
    int a;
    int b;

    int get_result(char oper) {
        switch (oper) {
            case &#39;+&#39;:
                return a + b;
            case &#39;-&#39;:
                return a - b;
            case &#39;*&#39;:
                return a * b;
            case &#39;/&#39;:
                return a / b;
        }
      //如果要提供新的计算，需要修改源码
        return 0;
    }
};

//多态实现
//抽象计算器类
//多态优点：代码组织结构清晰，可读性强，利于前期和后期的扩展以及维护
//如果需要提供新的计算，只需要继承抽象计算类并重写即可
class AbstractCalculator {
public:
    int a;
    int b;

    virtual int get_result() {
        return 0;
    }
};

class Add : public AbstractCalculator {
public:
    int get_result() {
        return a + b;
    }
};

class Subtract : public AbstractCalculator {
public:
    int get_result() {
        return a - b;
    }
};

class Multiply : public AbstractCalculator {
public:
    int get_result() {
        return a * b;
    }
};

class Divide : public AbstractCalculator {
public:
    int get_result() {
        return a / b;
    }
};

int main() {
    AbstractCalculator *calc;
    calc = new Add;
    calc-&gt;a = 10;
    calc-&gt;b = 2;
    cout &lt;&lt; calc-&gt;a &lt;&lt; &quot; + &quot; &lt;&lt; calc-&gt;b &lt;&lt; &quot; = &quot; &lt;&lt; calc-&gt;get_result() &lt;&lt; endl;
    delete calc;

    calc = new Subtract;
    calc-&gt;a = 10;
    calc-&gt;b = 2;
    cout &lt;&lt; calc-&gt;a &lt;&lt; &quot; - &quot; &lt;&lt; calc-&gt;b &lt;&lt; &quot; = &quot; &lt;&lt; calc-&gt;get_result() &lt;&lt; endl;
    delete calc;

    calc = new Multiply;
    calc-&gt;a = 10;
    calc-&gt;b = 2;
    cout &lt;&lt; calc-&gt;a &lt;&lt; &quot; * &quot; &lt;&lt; calc-&gt;b &lt;&lt; &quot; = &quot; &lt;&lt; calc-&gt;get_result() &lt;&lt; endl;
    delete calc;

    calc = new Divide;
    calc-&gt;a = 10;
    calc-&gt;b = 2;
    cout &lt;&lt; calc-&gt;a &lt;&lt; &quot; / &quot; &lt;&lt; calc-&gt;b &lt;&lt; &quot; = &quot; &lt;&lt; calc-&gt;get_result() &lt;&lt; endl;
    delete calc;
    return 0;
}

/*
10 + 2 = 12
10 - 2 = 8
10 * 2 = 20
10 / 2 = 5
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：C++开发提倡利用多态设计程序架构，因为多态优点很多</p></blockquote><h4 id="纯虚函数和抽象类" tabindex="-1"><a class="header-anchor" href="#纯虚函数和抽象类" aria-hidden="true">#</a> 纯虚函数和抽象类</h4><p>在多态中，通常父类中的虚函数的实现是毫无意义的，主要都是调用子类重写的函数。</p><p>因此可以将虚函数改为<strong>纯虚函数</strong></p><p>纯虚函数语法：virtual 返回值 函数名 (参数列表) = 0;</p><p>当类中有了纯虚函数，这个类也称为 <strong>抽象类</strong></p><p><strong>抽象类特点</strong>：</p><ul><li>无法实例化对象</li><li>子类必须重写抽象类中的纯虚函数，否者也属于抽象类</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Base {
public:
    /**
     * 纯虚函数
     * 类中只要有一个纯虚函数就称这个类位抽象类
     * 抽象类无法实例化
     * 子类必须重写父类中的纯虚函数，否则也属于抽象类
     */
    virtual void func() = 0;
};

class Son : public Base {
public:
    virtual void func() {
        cout &lt;&lt; &quot;Call func by Son&quot; &lt;&lt; endl;
    }
};


int main() {
    Base *base = nullptr;
    //base = new Base;// 错误，抽象类无法实例化对象
    base = new Son;
    base-&gt;func();
    delete base;
    return 0;
}
/*output：
Call func by Son
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多态案例二-制作饮品" tabindex="-1"><a class="header-anchor" href="#多态案例二-制作饮品" aria-hidden="true">#</a> 多态案例二 （制作饮品）</h4><p>案例描述：</p><p>制作饮品的大致流程为：烧水 - 冲泡 - 倒入杯中 - 加入辅料</p><p>利用多态技术实现本案例，提供抽线制作饮品基类，提供子类制作咖啡和茶。</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class AbstractDrinking {
public:
    //烧水
    virtual void boil() = 0;

    //冲泡
    virtual void brew() = 0;

    //倒入杯中
    virtual void pour_in_cup() = 0;

    //加入辅料
    virtual void put_something() = 0;

    //制作流程
    void making_drink() {
        boil();
        brew();
        pour_in_cup();
        put_something();
    }
};

class Coffee : public AbstractDrinking {
public:
    virtual void boil() {
        cout &lt;&lt; &quot;煮农夫山泉！&quot; &lt;&lt; endl;
    }

    virtual void brew() {
        cout &lt;&lt; &quot;冲泡咖啡！&quot; &lt;&lt; endl;
    }

    virtual void pour_in_cup() {
        cout &lt;&lt; &quot;倒入咖啡杯！&quot; &lt;&lt; endl;
    }

    virtual void put_something() {
        cout &lt;&lt; &quot;加入牛奶！&quot; &lt;&lt; endl;
    }
};

class Tea : public AbstractDrinking {
public:
    virtual void boil() {
        cout &lt;&lt; &quot;煮昆仑老山泉！&quot; &lt;&lt; endl;
    }

    virtual void brew() {
        cout &lt;&lt; &quot;冲泡茶叶！&quot; &lt;&lt; endl;
    }

    virtual void pour_in_cup() {
        cout &lt;&lt; &quot;倒入茶杯！&quot; &lt;&lt; endl;
    }

    virtual void put_something() {
        cout &lt;&lt; &quot;加入构杞！&quot; &lt;&lt; endl;
    }
};

void do_work(AbstractDrinking *drink) {
    drink-&gt;making_drink();
    delete drink;
}

int main() {
    do_work(new Coffee);
    cout &lt;&lt; &quot;----------------------&quot; &lt;&lt; endl;
    do_work(new Tea);
    return 0;
}
/*output:
煮农夫山泉！
冲泡咖啡！
倒入咖啡杯！
加入牛奶！
----------------------
煮昆仑老山泉！
冲泡茶叶！
倒入茶杯！
加入构杞！
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="虚析构和纯虚析构" tabindex="-1"><a class="header-anchor" href="#虚析构和纯虚析构" aria-hidden="true">#</a> 虚析构和纯虚析构</h4><p>多态使用时，如果子类中有属性开辟到堆区，那么父类指针在释放时无法调用到子类的析构代码。（实测：<strong>父类指针指向子类对象时，不会调用基类和派生类的析构函数，必须将析构函数修饰为虚析构函数才会调用基类和派生类的析构函数</strong>）</p><p>解决方法：将父类中的析构函数改为<strong>虚析构</strong>或者<strong>纯虚析构</strong></p><p>虚析构和纯虚析构共性：</p><ul><li>可以解决父类指针释放子类对象</li><li>都需要有具体的函数体现</li></ul><p>虚析构和纯析构的区别</p><ul><li>如果是纯虚析构，改类属于抽象类，无法实例化对象</li></ul><p>虚析构语法：</p><p><code>virtual ~类名(){}</code></p><p>纯虚析构语法：</p><p><code>virtual ~类名() = 0</code></p><p><code>类名::~类名(){}</code></p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class Animal {
public:
    virtual void speck() = 0;

     //析构和子类的析构函数都不会被调用
    /* ~Animal() {
        cout &lt;&lt; &quot;Animal 虚析构函数调用&quot; &lt;&lt; endl;
    }*/

    /*virtual ~Animal() {
        cout &lt;&lt; &quot;Animal 虚析构函数调用&quot; &lt;&lt; endl;
    }*/

    virtual ~Animal() = 0;
};

Animal::~Animal() {
    cout &lt;&lt; &quot;Animal 纯虚析构函数&quot; &lt;&lt; endl;
}

class Dog : public Animal {
public:
    string *name;

    Dog(string name) {
        cout &lt;&lt; &quot;Dog 构造函数&quot; &lt;&lt; endl;
        this-&gt;name = new string(name);
    }

    virtual void speck() {
        cout &lt;&lt; *name &lt;&lt; &quot; specking...&quot; &lt;&lt; endl;
    }

    ~Dog() {
        cout &lt;&lt; &quot;Dog 析构函数&quot; &lt;&lt; endl;
        if (name != nullptr) {
            delete name;
            name = nullptr;
        }
    }

};

int main() {
    Animal *animal = new Dog(&quot;旺财&quot;);
    animal-&gt;speck();
    //通过父类的指针去释放，可能会导致子类对象清理不干净，造成内存泄漏
    //解决方法：给基类加一个虚析构函数
    //虚析构函数就是用来解决通过父类指针释放子类对象问题的
    delete animal;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ol><li>虚析构函数或纯虚析构函数就是用来解决通过父类指针释放子类对象问题的。</li><li>如果子类中堆区没有数据，可以不写为虚析构或纯虚析构。</li><li>拥有纯虚析构函数的类也属于抽象类</li></ol></blockquote><h4 id="多态案例三-电脑组装" tabindex="-1"><a class="header-anchor" href="#多态案例三-电脑组装" aria-hidden="true">#</a> 多态案例三 （电脑组装）</h4><p>案例描述：</p><p>电脑主要组成部分为CPU（用于计算），显卡（用于显示），内存条（用于存储）</p><p>将每个零件封装出抽象基类，并提供不同厂商生产的不同零件，例如：Intel和Apple</p><p>创建电脑类提供让电脑工作的函数，并且调用每个零件工作的接口</p><p>测试时组装三台不同的电脑工作</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

class CPU {
public:
    virtual void calculate() = 0;
};

class VideoCard {
public:
    virtual void display() = 0;
};

class Memory {
public:
    virtual void storage() = 0;
};

class IntelCPU : public CPU {
public:
    virtual void calculate() {
        cout &lt;&lt; &quot;CPU Maker of 《Intel》 begin work...&quot; &lt;&lt; endl;
    }
};

class IntelVideoCard : public VideoCard {
public:
    virtual void display() {
        cout &lt;&lt; &quot;VideoCard Maker of 《Intel》 begin work...&quot; &lt;&lt; endl;
    }
};

class IntelMemory : public Memory {
public:
    virtual void storage() {
        cout &lt;&lt; &quot;Memory Maker of 《Intel》 begin work...&quot; &lt;&lt; endl;
    }
};


class AppleCPU : public CPU {
public:
    virtual void calculate() {
        cout &lt;&lt; &quot;CPU Maker of 《Apple》 begin work...&quot; &lt;&lt; endl;
    }
};

class AppleVideoCard : public VideoCard {
public:
    virtual void display() {
        cout &lt;&lt; &quot;VideoCard Maker of 《Apple》 begin work...&quot; &lt;&lt; endl;
    }
};

class AppleMemory : public Memory {
public:
    virtual void storage() {
        cout &lt;&lt; &quot;Memory Maker of 《Apple》 begin work...&quot; &lt;&lt; endl;
    }
};

class Computer {
private:
    CPU *cpu;
    VideoCard *videoCard;
    Memory *memory;

public:
    Computer(CPU *cpu, VideoCard *videoCard, Memory *memory) {
        this-&gt;cpu = cpu;
        this-&gt;videoCard = videoCard;
        this-&gt;memory = memory;
    }

    void do_work() {
        cpu-&gt;calculate();
        videoCard-&gt;display();
        memory-&gt;storage();
    }

    ~Computer() {
        if (cpu != nullptr) {
            delete cpu;
            cpu = nullptr;
        }
        if (videoCard != nullptr) {
            delete videoCard;
            videoCard = nullptr;
        }
        if (memory != nullptr) {
            delete memory;
            memory = nullptr;
        }
    }
};

int main() {
    Computer *computer;
    computer = new Computer(new IntelCPU, new IntelVideoCard, new IntelMemory);
    computer-&gt;do_work();
    delete computer;

    cout &lt;&lt; &quot;---------------&quot; &lt;&lt; endl;
    computer = new Computer(new AppleCPU, new AppleVideoCard, new AppleMemory);
    computer-&gt;do_work();
    delete computer;

    cout &lt;&lt; &quot;---------------&quot; &lt;&lt; endl;
    computer = new Computer(new AppleCPU, new IntelVideoCard, new IntelMemory);
    computer-&gt;do_work();
    delete computer;
    return 0;
}

/*
CPU Maker of 《Intel》 begin work...
VideoCard Maker of 《Intel》 begin work...
Memory Maker of 《Intel》 begin work...
---------------
CPU Maker of 《Apple》 begin work...
VideoCard Maker of 《Apple》 begin work...
Memory Maker of 《Apple》 begin work...
---------------
CPU Maker of 《Apple》 begin work...
VideoCard Maker of 《Intel》 begin work...
Memory Maker of 《Intel》 begin work...
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、-文件操作" tabindex="-1"><a class="header-anchor" href="#五、-文件操作" aria-hidden="true">#</a> 五、 文件操作</h2><p>程序运行时产生的数据都属于临时数据，程序一旦运行结束都会被释放。</p><p>通过文件可以将数据持久化</p><p>C++中对文件操作需要包含头文件 <code>&lt;fstream&gt;</code></p><p>文件类型分为两种：</p><ul><li><strong>文本文件</strong>：文件以文本的<strong>ASCII码</strong>形式存储在计算机中。</li><li><strong>二进制文件</strong>：文件以二进制形式存储在计算机中，用户一般不能直接读懂它们。</li></ul><p>操作文件的三大类：</p><ul><li>ofstream：写操作</li><li>ifstream：读操作</li><li>fstream：读写操作</li></ul><h4 id="文本文件" tabindex="-1"><a class="header-anchor" href="#文本文件" aria-hidden="true">#</a> 文本文件</h4><h5 id="写文件" tabindex="-1"><a class="header-anchor" href="#写文件" aria-hidden="true">#</a> 写文件</h5><p><strong>步骤：</strong></p><ol><li>包含头文件：<code>#include &lt;fstream&gt;</code></li><li>创建流对象：<code>ofstream ofs</code></li><li>打开文件：<code>ofs.open(&quot;文件路径&quot;,&lt;打开方式&gt;)</code></li><li>写数据：<code>ofs&lt;&lt;&quot;写入的数据&quot;</code></li><li>关闭文件：<code>ofs.close();</code></li></ol><p><strong>文件打开方式</strong>：</p><table><thead><tr><th>打开方式</th><th>解释</th></tr></thead><tbody><tr><td>ios::in</td><td>为读文件而打开文件</td></tr><tr><td>ios::out</td><td>为写文件而打开文件</td></tr><tr><td>ios::ate</td><td>初始位置：文件尾</td></tr><tr><td>ios::app</td><td>追加方式写文件</td></tr><tr><td>ios::trunc</td><td>如果文件存在先删除，再创建</td></tr><tr><td>ios::binary</td><td>二进制方式</td></tr></tbody></table><p>注意：文件打开方式可以配合，利用 | 操作符</p><p>例如：用二进制方式写文件 <code>ios::binary |ios::out</code></p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;fstream&gt;

using namespace std;

int main() {
    fstream ofs;//fstream 或 ofstream 方法也一样
    //ofstream ofs;
    ofs.open(&quot;/Users/liuyupei/CLionProjects/TestGui/src/study_file1/test.txt&quot;, ios::out);
    ofs &lt;&lt; &quot;Name : Hu jin tao&quot; &lt;&lt; endl;
    ofs &lt;&lt; &quot;Name : Liu yu pei&quot; &lt;&lt; endl;
    ofs.close();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>文件操作必须包含 <code>fstream</code> 头文件</li><li>读文件可以利用 <code>ofstream</code> 或 <code>fstream</code> 类</li><li>打开文件的时候需要指定操作文件的路径，以及打开方式</li><li>利用 &lt;&lt; 可以向文件中写入数据</li><li>操作完毕，要关闭文件。</li></ul></blockquote><h5 id="读文件" tabindex="-1"><a class="header-anchor" href="#读文件" aria-hidden="true">#</a> 读文件</h5><ol><li>读文件与写步骤相似，但是读取方式相对较多</li></ol><p><strong>步骤：</strong></p><ol><li>包含头文件 <code>#include &lt;fstream&gt;</code></li><li>创建流对象 <code>ifstream ifs;</code></li><li>打开文件并判断文件是否打开 <code>ifs.open(&quot;file path&quot;,&lt;打开方式&gt;)</code></li><li>读文件 四种方式读取</li><li>关闭文件 ifs.close();</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;fstream&gt;
#include &lt;iostream&gt;

using namespace std;

int main() {
    ifstream ifs;
    ifs.open(&quot;/Users/liuyupei/CLionProjects/TestGui/src/study_file1/test.txt&quot;, ios::in);
    if (!ifs.is_open()) {
        cout &lt;&lt; &quot;文件打开失败！&quot; &lt;&lt; endl;
        return 1;
    }

    //char buf[1024] = {0};
    /*while (ifs &gt;&gt; buf) {//每次读取 以空格和换行分隔
        cout &lt;&lt; buf &lt;&lt; endl;
    }*/

    //char buf[1024] = {0};
    /*while (ifs.getline(buf, sizeof(buf))) {//每次读取一行（以换行分隔）
        cout &lt;&lt; buf &lt;&lt; endl;
    }*/

    /*string buf;
    while (getline(ifs, buf)) {//每次读取一行（以换行分隔）
        cout &lt;&lt; buf &lt;&lt; endl;
    }*/

    char c;
    while ((c = ifs.get()) != EOF){//每次读取一个字符
        cout &lt;&lt; c;
    }
        ifs.close();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>读取文件可以利用，ifstream 或 fstream</li><li>利用is_open函数可以判断文件是否打开成功</li><li>close 关闭文件</li></ul></blockquote><h4 id="二进制文件" tabindex="-1"><a class="header-anchor" href="#二进制文件" aria-hidden="true">#</a> 二进制文件</h4><p>以二进制的方式对文件进行读写</p><p>打开方式要指定为 <code>ios::binary</code></p><h5 id="写文件-1" tabindex="-1"><a class="header-anchor" href="#写文件-1" aria-hidden="true">#</a> 写文件</h5><p>二进制文件写文件主要利用流对象调用成员函数write</p><p>函数原型：ostream&amp; write(const char * buffer,int len);</p><p>参数解释：字符指针 buffer 指向内存中一段存储空间。len时要读写的字节数。</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;fstream&gt;
#include &lt;iostream&gt;

using namespace std;

class Person {
public:
    string name;
    int age;
};

int main() {
    ofstream ofs;
    ofs.open(&quot;/Users/liuyupei/CLionProjects/TestGui/src/study_file1/test.txt&quot;, ios::out | ios::binary);

    Person p = {.name=&quot;Hu jin tao&quot;, .age=50};

    ofs.write((const char *) &amp;p, sizeof(p));

    ofs.close();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><p>文件输出流对象 可以通过write函数，以二进制方式写数据</p></blockquote><h5 id="读文件-1" tabindex="-1"><a class="header-anchor" href="#读文件-1" aria-hidden="true">#</a> 读文件</h5><p>二进制方式读文件主要利用流对象调用成员函数 read</p><p>函数原型：<code>ifstream&amp; read(char *buffer,int len)</code></p><p>参数解释：字符指针buffer指向内存中一段存储空间，len是读写文件的字节数。</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;fstream&gt;
#include &lt;iostream&gt;

using namespace std;

class Person {
public:
    string name;
    int age;
};

int main() {
    ifstream ifs;
    ifs.open(&quot;/Users/liuyupei/CLionProjects/TestGui/src/study_file1/test.txt&quot;, ios::in | ios::binary);

    if (!ifs.is_open()) {
        cout &lt;&lt; &quot;文件打开失败！&quot; &lt;&lt; endl;
        return 1;
    }
    Person p;
    ifs.read((char *) &amp;p, sizeof(p));

    cout &lt;&lt; p.name &lt;&lt; endl;
    cout &lt;&lt; p.age &lt;&lt; endl;
    
    ifs.close();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件输入流对象 可以通过read函数，以二进制方式读文件数据</li></ul><h2 id="职工管理系统实践" tabindex="-1"><a class="header-anchor" href="#职工管理系统实践" aria-hidden="true">#</a> 职工管理系统实践</h2><h3 id="管理系统需求" tabindex="-1"><a class="header-anchor" href="#管理系统需求" aria-hidden="true">#</a> 管理系统需求</h3><p>职工管理系统可以用来管理公司内所有员工的信息</p><p>本实践主要利用C++来实现一个基于多态的职工管理系统</p><p>公司中职工分为三类：普通员工、经理、老板，显示信息时，需要显示职工编号、职工姓名、职工岗位、以及职责</p><ul><li>普通员工职责：完成经理交给的任务</li><li>经理职责：完成老板交给的任务，并下发任务给员工</li><li>老板职责：管理公司所有事务</li></ul><p>管理系统中需要实现的功能如下：</p><ul><li>退出管理程序：退出当前管理系统</li></ul><ul><li>增加职工信息：实现批量添加职工功能，将信息录入到文件中，职工信息为：职工编号、姓名、部门编号</li><li>显示职工信息：显示公司内部所有职工的信息</li><li>删除离职职工：按照编号删除指定的职工</li><li>修改职工信息：按照编号修改职工个人信息</li><li>查找职工信息：按照职工的编号或者职工的姓名进行查找相关的人员信息</li><li>按照编号排序：按照职工编号，进行排序，排序规则由用户指定</li><li>清空所有文档：清空文件中记录的所有职工信息 （清空前需要再次确认，防止误删）</li></ul><p>职工的分类为：普通员工、经理、老板</p><p>将三种职工抽象到一个类（worker）中,利用多态管理不同职工种类</p><ul><li><p>职工的属性为：职工编号、职工姓名、职工所在部门编号</p></li><li><p>职工的行为为：岗位职责信息描述，获取岗位名称</p></li></ul><blockquote><p><strong>Worker.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once

#include &lt;iostream&gt;
#include &lt;string&gt;

using namespace std;

class Worker {
public:
    int id;
    string name;
    int dept_id;

    //显示职工信息
    virtual void show_info() = 0;

    //获取岗位名称
    virtual const string &amp;get_dept_name() = 0;

    virtual ~Worker() = default;
};

const string DeptList[] = {&quot;Employee&quot;, &quot;Manager&quot;, &quot;Boss&quot;};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>boss.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once

#include &quot;Worker.h&quot;

class Boss : public Worker {
public:
    Boss(int id, string name, int dept_id);

    virtual void show_info();

    virtual const string &amp;get_dept_name();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>boss.cpp</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;boss.h&quot;

Boss::Boss(int id, string name, int dept_id) {
    this-&gt;id = id;
    this-&gt;name = name;
    this-&gt;dept_id = dept_id;
}

void Boss::show_info() {
    cout &lt;&lt; &quot;ID : &quot; &lt;&lt; this-&gt;id &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Name : &quot; &lt;&lt; this-&gt;name &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;DeptName : &quot; &lt;&lt; this-&gt;get_dept_name() &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Duty : &quot; &lt;&lt; &quot;画饼&quot; &lt;&lt; endl;
}

const string &amp;Boss::get_dept_name() {
    return DeptList[2];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>manager.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once
#include &quot;Worker.h&quot;

class Manager : public Worker {
public:
    Manager(int id, string name, int dept_id);

    virtual void show_info();

    virtual const string &amp;get_dept_name();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>manager.cpp</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;manager.h&quot;

Manager::Manager(int id, string name, int dept_id) {
    this-&gt;id = id;
    this-&gt;name = name;
    this-&gt;dept_id = dept_id;
}

void Manager::show_info() {
    cout &lt;&lt; &quot;ID : &quot; &lt;&lt; this-&gt;id &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Name : &quot; &lt;&lt; this-&gt;name &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;DeptName : &quot; &lt;&lt; this-&gt;get_dept_name() &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Duty : &quot; &lt;&lt; &quot;派发任务&quot; &lt;&lt; endl;
}

const string &amp;Manager::get_dept_name() {
    return DeptList[1];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>employee.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once
#include &quot;Worker.h&quot;

class Employee : public Worker {
public:
    Employee(int id, string name, int dept_id);

    virtual void show_info();

    virtual const string &amp;get_dept_name();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>employee.cpp</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;employee.h&quot;

Employee::Employee(int id, string name, int dept_id) {
    this-&gt;id = id;
    this-&gt;name = name;
    this-&gt;dept_id = dept_id;
}

void Employee::show_info() {
    cout &lt;&lt; &quot;ID : &quot; &lt;&lt; this-&gt;id &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Name : &quot; &lt;&lt; this-&gt;name &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;DeptName : &quot; &lt;&lt; this-&gt;get_dept_name() &lt;&lt; &#39;\\t&#39;;
    cout &lt;&lt; &quot;Duty : &quot; &lt;&lt; &quot;打螺丝&quot; &lt;&lt; endl;
}

const string &amp;Employee::get_dept_name() {
    return DeptList[0];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>WorkManager.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &quot;Worker.h&quot;
#include &lt;fstream&gt;

#define FILE_PATH &quot;/Users/liuyupei/CLionProjects/TestGui/src/study_practice1/employee.data&quot;

using namespace std;

class WorkManager {
public:
    int emp_num;
    Worker **emp_list;

    WorkManager();

    void show_menu();

    void exitSys();

    void add_emp();

    void save();

    int get_emp_num();

    void init_emp();

    void show_emp();

    int find(int id);

    void del_emp();

    void mod_emp();

    void search_emp();

    void sort_emp();

    void clear_emp();

    ~WorkManager();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>WorkManager.cpp</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;WorkManager.h&quot;
#include &quot;boss.h&quot;
#include &quot;manager.h&quot;
#include &quot;employee.h&quot;

WorkManager::WorkManager() {
    this-&gt;emp_num = get_emp_num();
    this-&gt;emp_list = nullptr;
    init_emp();
    init_emp();
}

WorkManager::~WorkManager() {
    if (this-&gt;emp_list != nullptr) {
        delete[] this-&gt;emp_list;
    }
}

void WorkManager::show_menu() {
    cout &lt;&lt; &quot;********************************************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*********  欢迎使用职工管理系统！ **********&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  0.退出管理程序  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  1.增加职工信息  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  2.显示职工信息  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  3.删除离职职工  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  4.修改职工信息  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  5.查找职工信息  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  6.按照编号排序  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;*************  7.清空所有文档  *************&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;********************************************&quot; &lt;&lt; endl;
}

void WorkManager::exitSys() {
    system(&quot;clear&quot;);
    cout &lt;&lt; &quot;Good Bye！&quot; &lt;&lt; endl;
    exit(0);
}

void WorkManager::add_emp() {
    int addNum = 0;
    cout &lt;&lt; &quot;请输入增加员工数量：&quot; &lt;&lt; endl;
    cin &gt;&gt; addNum;
    if (addNum &lt; 1) {
        cout &lt;&lt; &quot;输入有误！&quot; &lt;&lt; endl;
        return;
    }
    int newSize = this-&gt;emp_num + addNum;
    Worker **newSpace = new Worker *[newSize];//创建一个指针数组
    if (this-&gt;emp_list != nullptr) {//将原有的员工添加到新的空间
        for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
            newSpace[i] = this-&gt;emp_list[i];
        }
    }

    for (int i = 0; i &lt; addNum; ++i) {
        int id;
        string name;
        int dept_id = 0;
        cout &lt;&lt; &quot;Please Input num &quot; &lt;&lt; i + 1 &lt;&lt; &quot; Employee ID : &quot; &lt;&lt; endl;
        cin &gt;&gt; id;
        cout &lt;&lt; &quot;Please Input num &quot; &lt;&lt; i + 1 &lt;&lt; &quot; Employee Name : &quot; &lt;&lt; endl;
        cin &gt;&gt; name;

        Worker *worker = nullptr;
        do {
            cout &lt;&lt; &quot;Please Select Employee Dept:&quot; &lt;&lt; endl;
            cout &lt;&lt; &quot;1. Boss&quot; &lt;&lt; endl;
            cout &lt;&lt; &quot;2. Manager&quot; &lt;&lt; endl;
            cout &lt;&lt; &quot;3. Employee&quot; &lt;&lt; endl;
            cin &gt;&gt; dept_id;
            switch (dept_id) {
                case 1:
                    worker = new Boss(id, name, dept_id);
                    break;
                case 2:
                    worker = new Manager(id, name, dept_id);
                    break;
                case 3:
                    worker = new Employee(id, name, dept_id);
                    break;
                default:
                    cout &lt;&lt; &quot;No such The Dept, Please again enter:&quot; &lt;&lt; endl;
                    dept_id = 0;
                    break;
            }
        } while (dept_id == 0);
        newSpace[this-&gt;emp_num + i] = worker;
    }
    delete[] this-&gt;emp_list;//以及复制了原来的内容，原来的已经没用了。
    this-&gt;emp_list = newSpace;
    this-&gt;emp_num = newSize;
    this-&gt;save();
    cout &lt;&lt; &quot;Added Success! &quot; &lt;&lt; endl;
}

void WorkManager::save() {
    ofstream ofs;
    ofs.open(FILE_PATH, ios::out);
    for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
        if (this-&gt;emp_list[i] == nullptr)continue;
        ofs &lt;&lt; this-&gt;emp_list[i]-&gt;id &lt;&lt; &quot; &quot;
            &lt;&lt; this-&gt;emp_list[i]-&gt;name &lt;&lt; &quot; &quot;
            &lt;&lt; this-&gt;emp_list[i]-&gt;dept_id &lt;&lt; endl;
    }
    ofs.close();
}

int WorkManager::get_emp_num() {
    ifstream ifs;
    ifs.open(FILE_PATH, ios::in);
    if (!ifs.is_open()) {
        ifs.close();
        return 0;
    }
    int num = 0;
    int id;
    string name;
    int dept_id;
    while ((ifs &gt;&gt; id) &amp;&amp; (ifs &gt;&gt; name) &amp;&amp; (ifs &gt;&gt; dept_id)) {
        num++;
    }
    ifs.close();
    return num;
}

void WorkManager::init_emp() {
    ifstream ifs;
    ifs.open(FILE_PATH, ios::in);
    if (!ifs.is_open()) {
        this-&gt;emp_list = nullptr;
        ifs.close();
        return;
    }
    int id;
    string name;
    int dept_id;
    this-&gt;emp_list = new Worker *[this-&gt;emp_num];
    int i = 0;
    while ((ifs &gt;&gt; id) &amp;&amp; (ifs &gt;&gt; name) &amp;&amp; (ifs &gt;&gt; dept_id)) {
        switch (dept_id) {
            case 1:
                this-&gt;emp_list[i] = new Boss(id, name, dept_id);
                break;
            case 2:
                this-&gt;emp_list[i] = new Manager(id, name, dept_id);
                break;
            case 3:
                this-&gt;emp_list[i] = new Employee(id, name, dept_id);
                break;
        }
        i++;
    }
    ifs.close();
}

void WorkManager::show_emp() {
    if (this-&gt;emp_num == 0) {
        cout &lt;&lt; &quot;now no have Employee&quot; &lt;&lt; endl;
        return;
    }
    for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
        this-&gt;emp_list[i]-&gt;show_info();
    }
}

int WorkManager::find(int id) {
    if (this-&gt;emp_num == 0)return -1;
    for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
        if (this-&gt;emp_list[i]-&gt;id == id)return i;
    }
    return -1;
}

void WorkManager::del_emp() {
    if (this-&gt;emp_num == 0) {
        cout &lt;&lt; &quot;no have Employee！&quot; &lt;&lt; endl;
        return;
    }
    int id;
    cout &lt;&lt; &quot;Please enter Employee ID :&quot; &lt;&lt; endl;
    cin &gt;&gt; id;
    int index = find(id);
    if (index == -1) {
        cout &lt;&lt; &quot;No have such ID Employee!&quot; &lt;&lt; endl;
        return;
    }
    delete this-&gt;emp_list[index];//已经删除了，释放内存。注意：父类指针指向子类对象，需要将父类的析构函数修饰为虚析构或者纯虚析构函数
    for (int i = index; i &lt; this-&gt;emp_num - 1; ++i) {
        this-&gt;emp_list[i] = this-&gt;emp_list[i + 1];
    }
    this-&gt;emp_list[this-&gt;emp_num - 1] = nullptr;//这个指向已经没有意义，让他指向NULL
    this-&gt;emp_num--;
    save();
    cout &lt;&lt; &quot;Deleted Success!&quot; &lt;&lt; endl;
}

void WorkManager::mod_emp() {
    if (this-&gt;emp_num == 0) {
        cout &lt;&lt; &quot;no have Employee！&quot; &lt;&lt; endl;
        return;
    }

    cout &lt;&lt; &quot;Please enter Employee ID : &quot; &lt;&lt; endl;
    int id;
    cin &gt;&gt; id;
    int index = this-&gt;find(id);
    if (index == -1) {
        cout &lt;&lt; &quot;No have such ID Employee!&quot; &lt;&lt; endl;
        return;
    }

    string name;
    int dept_id = 0;
    cout &lt;&lt; &quot;find the Employee of &quot; &lt;&lt; id &lt;&lt; endl
         &lt;&lt; &quot;Please enter new ID of the Employee : &quot; &lt;&lt; endl;
    cin &gt;&gt; id;
    cout &lt;&lt; &quot;Please enter new Name of the Employee : &quot; &lt;&lt; endl;
    cin &gt;&gt; name;

    cout &lt;&lt; &quot;Please Select Employee Dept:&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;1. Boss&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;2. Manager&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;3. Employee&quot; &lt;&lt; endl;
    Worker *worker;
    do {
        cin &gt;&gt; dept_id;
        switch (dept_id) {
            case 1:
                worker = new Boss(id, name, dept_id);
                break;
            case 2:
                worker = new Manager(id, name, dept_id);
                break;
            case 3:
                worker = new Employee(id, name, dept_id);
                break;
            default:
                cout &lt;&lt; &quot;No such The Dept, Please again enter: &quot; &lt;&lt; endl;
                dept_id = 0;
                break;
        }
    } while (dept_id == 0);
    delete this-&gt;emp_list[index];//释放的废弃对象的内存
    this-&gt;emp_list[index] = worker;
    this-&gt;save();
    cout &lt;&lt; &quot;Modified Success!&quot; &lt;&lt; endl;
}


void WorkManager::search_emp() {
    if (this-&gt;emp_num == 0) {
        cout &lt;&lt; &quot;no have Employee！&quot; &lt;&lt; endl;
        return;
    }

    cout &lt;&lt; &quot;Please enter Search By Method : &quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;1. By ID&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;2. By Name&quot; &lt;&lt; endl;
    int search_by;
    cin &gt;&gt; search_by;
    switch (search_by) {
        case 1: {
            int id;
            cin &gt;&gt; id;
            int index = this-&gt;find(id);
            if (index == -1) {
                cout &lt;&lt; &quot;No such Id of Employee of the Employee List !&quot; &lt;&lt; endl;
                return;
            }
            this-&gt;emp_list[index]-&gt;show_info();
        }
            break;
        case 2: {
            string name;
            cin &gt;&gt; name;
            bool flag = false;
            for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
                if (this-&gt;emp_list[i]-&gt;name == name) {
                    this-&gt;emp_list[i]-&gt;show_info();
                    flag = true;
                }
            }
            if (!flag) {
                cout &lt;&lt; &quot;No such Name of Employee of the Employee List !&quot; &lt;&lt; endl;
            }
        }
            break;
        default:
            cout &lt;&lt; &quot;No such option of methods! &quot; &lt;&lt; endl;
            break;
    }
}

void WorkManager::sort_emp() {
    if (this-&gt;emp_num == 0) {
        cout &lt;&lt; &quot;no have Employee！&quot; &lt;&lt; endl;
        return;
    }

    cout &lt;&lt; &quot;Please select you want sort by method : &quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;1. asc&quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;2. desc&quot; &lt;&lt; endl;
    int sort_by;
    cin &gt;&gt; sort_by;
    if (sort_by != 1 &amp;&amp; sort_by != 2) {
        cout &lt;&lt; &quot;No such option of the sort by methods! &quot; &lt;&lt; endl;
        return;
    }
    Worker *temp;
    //冒泡排序
    if (sort_by == 1) {
        //为什么是 len-1 ? ，因为： 比如 3 1 2 ，3 和 1比较 = 1 3 2 ，然后 3 再和 2 比较 = 1 2 3。
        //因为除了第一次比较，其他的都是根据 前面比较的结果 继续比较的。
        for (int i = 0; i &lt; this-&gt;emp_num - i; ++i) {
            //为什么是 len - 1 - i ? ，因为每轮比较，未排序的值中 最大那个值，必定会走到属于他的位置
            //比如 5 1 2 3 4 //5和1比较 1 5 2 3 4 ,然后根据 前面比较的结果 继续比较 1 2 5 3 4，...，1 2 3 4 5
            //i 从 0 开始，需要比较 len - i 次，由于每次比较都会把 &quot;未排序的值中 最大那个值，必定会走到属于他的位置&quot; 那么这个就没必要比较了
            for (int j = 0; j &lt; this-&gt;emp_num - 1 - i; ++j) {
                if (this-&gt;emp_list[j]-&gt;id &gt; this-&gt;emp_list[j + 1]-&gt;id) {
                    temp = this-&gt;emp_list[j];
                    this-&gt;emp_list[j] = this-&gt;emp_list[j + 1];
                    this-&gt;emp_list[j + 1] = temp;
                }

            }
        }
    } else {
        for (int i = 0; i &lt; this-&gt;emp_num - i; ++i) {
            for (int j = 0; j &lt; this-&gt;emp_num - 1 - i; ++j) {
                if (this-&gt;emp_list[j]-&gt;id &lt; this-&gt;emp_list[j + 1]-&gt;id) {
                    temp = this-&gt;emp_list[j];
                    this-&gt;emp_list[j] = this-&gt;emp_list[j + 1];
                    this-&gt;emp_list[j + 1] = temp;
                }
            }
        }
    }
    this-&gt;save();
    cout &lt;&lt; &quot;Success ! Result: &quot; &lt;&lt; endl;
    this-&gt;show_emp();
}

void WorkManager::clear_emp() {
    cout &lt;&lt; &quot;confirm clear the Employee file ? &quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;1. Yes &quot; &lt;&lt; endl;
    cout &lt;&lt; &quot;other any. No&quot; &lt;&lt; endl;
    int confirm;
    cin &gt;&gt; confirm;
    if (confirm != 1)return;
    ofstream ofs;
    //打开模式 ios::trunc 如果存在删除文件并重新创建
    ofs.open(FILE_PATH, ios::trunc);
    ofs.close();

    if (this-&gt;emp_list == nullptr)return;
    for (int i = 0; i &lt; this-&gt;emp_num; ++i) {
        delete this-&gt;emp_list[i];
    }
    delete[] this-&gt;emp_list;
    this-&gt;emp_list = nullptr;
    this-&gt;emp_num = 0;
}

int main() {
    WorkManager wm;
    while (true) {
        wm.show_menu();
        int choice = 0;
        cin &gt;&gt; choice;
        switch (choice) {
            case 0:
                wm.exitSys();
                break;
            case 1:
                wm.add_emp();
                break;
            case 2:
                wm.show_emp();
                break;
            case 3:
                wm.del_emp();
                break;
            case 4:
                wm.mod_emp();
                break;
            case 5:
                wm.search_emp();
                break;
            case 6:
                wm.sort_emp();
                break;
            case 7:
                wm.clear_emp();
                break;
            default:
                system(&quot;clear&quot;);
                break;
        }
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="六、模版" tabindex="-1"><a class="header-anchor" href="#六、模版" aria-hidden="true">#</a> 六、模版</h2><h3 id="模版的概念" tabindex="-1"><a class="header-anchor" href="#模版的概念" aria-hidden="true">#</a> 模版的概念</h3><p>模版就是建立<strong>通用的模具</strong>，大大提高复用性。</p><p>例如生活中的模板</p><ul><li>证件照</li><li>PPT</li></ul><p><strong>模版的特点：</strong></p><ul><li>模版不可以直接使用，它只是一个框架</li><li>模版的通用并不是万能的</li></ul><h3 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板" aria-hidden="true">#</a> 函数模板</h3><ul><li>C++ 另一种编程思想称为 <strong>泛型编程</strong>，主要利用的技术就是模板。</li><li>C++ 提供了两种模板机制。 <ul><li>函数模板</li><li>类模板</li></ul></li></ul><h4 id="函数模板语法" tabindex="-1"><a class="header-anchor" href="#函数模板语法" aria-hidden="true">#</a> 函数模板语法</h4><p>函数模板作用：</p><p>建立一个通用函数，其函数返回值类型和形参类型可以不具体指定，用一个<strong>虚拟的类型</strong>来代表</p><p><strong>语法:</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>template&lt;typename T&gt;
函数声明或定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>template ： 声明穿件模板</p><p>typename ： 表示后面的符号是一种数据类型，可以用 class 代替</p><p>T ： 通用的数据类型，名称可以代替，通常为大写字母</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

void swapInt(int &amp;a, int &amp;b) {
    int temp = a;
    a = b;
    b = temp;
}

void swapDouble(double &amp;a, double &amp;b) {
    double temp = a;
    a = b;
    b = temp;
}

template&lt;typename T&gt;

void swap_tmp(T &amp;a, T &amp;b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 10, b = 20;
    double ad = 10.5, bd = 20.5;
    //swapInt(a, b);
    //swapDouble(ad, bd);
    swap_tmp&lt;int&gt;(a, b);
    swap_tmp&lt;double&gt;(ad, bd);
    swap_tmp(a, b);
    //不指定类型也可以，类型自动推导
    cout &lt;&lt; a &lt;&lt; &quot;\\t&quot; &lt;&lt; b &lt;&lt; endl;
    cout &lt;&lt; ad &lt;&lt; &quot;\\t&quot; &lt;&lt; bd &lt;&lt; endl;

    return 0;
}
/*output：
10	20
20.5	10.5
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>函数模板利用关键字 template</li><li>使用函数模板有两种方式：自动类型推导、显式指定类型</li><li>模板的目的是为了提高复用性，将类型参数化</li></ul></blockquote><h4 id="函数模板注意事项" tabindex="-1"><a class="header-anchor" href="#函数模板注意事项" aria-hidden="true">#</a> 函数模板注意事项</h4><p>注意事项：</p><ul><li>自动类型推导，必须推导出一致的数据类型T，才可以使用。</li><li>模板必须要确定出T的数据类型，才可以使用</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;class T&gt;
void mySwap(T &amp;a, T &amp;b) {
    T temp = a;
    a = b;
    b = temp;
}

template&lt;class T&gt;
void func(T &amp;a) {
    cout &lt;&lt; &quot;Call : func with Params&quot; &lt;&lt; endl;
}

template&lt;class T&gt;
void func() {
    cout &lt;&lt; &quot;Call : func no Params&quot; &lt;&lt; endl;
}

int main() {
    int a = 10;
    int b = 20;
    char c = &#39;c&#39;;
    mySwap(a, b);//正确，推导出一致的类型
    //mySwap(a, c);//错误，推导不出一致的类型。

    int d = 10;
    //func(10);//错误
    func(d);//正确
    
    func&lt;int&gt;();//指定了模板，但是没有参数的函数，必须显式指定类型
    return 0;
}

/*output：
20	
Call : func with Params
Call : func no Params
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>使用模板时必须确定出通用数据类型T，并且能够推导出一只的类型</li></ul></blockquote><h4 id="函数模板案例" tabindex="-1"><a class="header-anchor" href="#函数模板案例" aria-hidden="true">#</a> 函数模板案例</h4><p>案例描述：</p><ul><li>利用函数模板封装一个排序函数，可以对不同数据类型的数组进行排序</li><li>排序规则从小到大，排序算法为<strong>选择排序</strong></li><li>分别利用 char数组 和 int数组 进行测试</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

//template&lt;class T&gt;//可以替换成 typename 目前来说，两个没有区别
template&lt;typename T&gt;
void mySwap(T &amp;a, T &amp;b) {
    T temp = a;
    a = b;
    b = temp;
}

template&lt;typename T&gt;
void mySort(T arr[], int len) {
    int minIndex;
    for (int i = 0; i &lt; len - 1; ++i) {
        minIndex = i;
        for (int j = i + 1; j &lt; len; ++j) {
            if (arr[minIndex] &gt; arr[j]) {
                minIndex = j;
            }
        }
        mySwap(arr[minIndex], arr[i]);
    }
}

template&lt;typename T&gt;
void printArray(T arr, int len) {
    for (int i = 0; i &lt; len; ++i) {
        cout &lt;&lt; arr[i] &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;
}

int main() {
    char arr1[] = &quot;DAFBAGEH&quot;;
    int len1 = sizeof(arr1) / sizeof(char);
    int arr2[] = {6, 7, 5, 4, 7, 2, 4, 1, 9, 8};
    int len2 = sizeof(arr2) / sizeof(int);

    mySort(arr1, len1);
    mySort(arr2, len2);
    printArray(arr1, len1);
    printArray(arr2, len2);

    return 0;
}
/*output:
� A A B D E F G H 
1 2 4 4 5 6 7 7 8 9 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：模板可以提高代码复用，需要熟练掌握</p></blockquote><h4 id="普通函数与函数模板的区别" tabindex="-1"><a class="header-anchor" href="#普通函数与函数模板的区别" aria-hidden="true">#</a> 普通函数与函数模板的区别</h4><p>普通函数与函数模板的却别：</p><ul><li>普通函数调用时可以发生类型自动转换（隐式类型转换）</li><li>函数模板调用时，如果利用自动类型推导，不会发生隐式转换</li><li>如果显式类型的方式，可以发生隐式类型转换</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int myAdder1(int a, int b) {
    return a + b;
}

template&lt;typename T&gt;
T myAdder2(T a, T b) {
    return a + b;
}

int main() {
    int a = 10;
    int b = 20;
    char c = &#39;c&#39;;//99

    myAdder1(a, b);
    myAdder1(a, c);//正确，自动隐式类型转换
    cout &lt;&lt; myAdder1(a, c) &lt;&lt; endl;//109

    myAdder2(a, b);
    //myAdder2(a, c);//错误，使用自动类型推导时，不会发生隐式类型转换
    myAdder2&lt;int&gt;(a, c);//正确，如果显式指定了类型，可以发生自动类型转换
    cout &lt;&lt; myAdder2&lt;int&gt;(a, c) &lt;&lt; endl;//109
    
    return 0;
}

/*output：
109
109
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：建议 调用函数模板时，使用显式指定类型的方式，因为可以自己确定通用类型T。</p></blockquote><h4 id="普通函数与函数模板的调用规则" tabindex="-1"><a class="header-anchor" href="#普通函数与函数模板的调用规则" aria-hidden="true">#</a> 普通函数与函数模板的调用规则</h4><p>调用规则如下：</p><ol><li>如果函数模板和普通函数都可以实现，优先调用普通函数</li><li>可以使用空模板参数列表来强调调用函数模板</li><li>函数模板也可以发生重载</li><li>如果函数模板可以产生更好的匹配，优先调用函数模板</li></ol><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

void myPrint(int a, int b) {
    cout &lt;&lt; &quot;普通函数调用&quot; &lt;&lt; endl;
}

template&lt;typename T&gt;
void myPrint(T a, T b) {
    cout &lt;&lt; &quot;函数模板调用&quot; &lt;&lt; endl;
}


template&lt;typename T&gt;
void myPrint(T a, T b, T c) {
    cout &lt;&lt; &quot;函数模板重载调用&quot; &lt;&lt; endl;
}

int main() {
    int a = 10;
    int b = 20;
    int c = 30;
    myPrint(a, b);//调用普通函数
    myPrint&lt;&gt;(a, b);//通过空的模板参数列表来强制调用函数模板
    myPrint(a, b, c);//调用重载的函数模板

    char d = &#39;a&#39;;
    char e = &#39;b&#39;;
    myPrint(d, e);//如果函数模板可以产生更好的匹配，优先调用函数模板

    return 0;
}
/*output:
普通函数调用
函数模板调用
函数模板重载调用
函数模板调用
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>既让提供了函数模板，最好就不要再提供普通函数了，否则容易出现二义性</li></ul></blockquote><h4 id="模板的局限性" tabindex="-1"><a class="header-anchor" href="#模板的局限性" aria-hidden="true">#</a> 模板的局限性</h4><p>局限性：</p><ul><li>模板的通用性不是万能的。</li></ul><p><strong>例如：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>template&lt;typename T&gt;
void func(T a,T b){
  a = b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中提供的赋值操作，如果传入的 a 和 b 是一个数组，就无法实现了。</p><p>再例如：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>template&lt;typename T&gt;
void func(T a,T b){
	if(a &gt; b){
    //something...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，如果 T 的数据类型传入的是像 Person 这样自定义数据类型，也无法正常运行。</p><p>因此 C++ 为了解决这种问题，提供模板重载，可以为这些特定的类型提供<strong>具体化的模板</strong>。</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }
};

//普通函数模板
template&lt;typename T&gt;
bool myCompare(T &amp;a, T &amp;b) {
    return a == b;
}
//具体化模板，显式具体化原型和定义以template&lt;&gt;开头，并通过参数列表来指出类型
//具体化优先于常规模板
template&lt;&gt; bool myCompare(Person &amp;a,Person &amp;b){
    return a.name == b.name &amp;&amp; a.age == b.age;
}

int main() {
    int a = 10;
    int b = 20;
    bool compare = myCompare(a, b);
    cout &lt;&lt; (compare ? &quot;a == b&quot; : &quot;a != b&quot;) &lt;&lt; endl;

    Person p1(&quot;Hello&quot;, 58);
    Person p2(&quot;hello&quot;, 58);
    compare = myCompare(p1, p2);
    cout &lt;&lt; (compare ? &quot;p1 == p2&quot; : &quot;p1 != p2&quot;) &lt;&lt; endl;

    return 0;
}
/*output:
a != b
p1 == p2
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>利用具体化的模板，可以解决自定义类型的通用化</li><li>学习模板并不是为了写模板，而是在STL能够运用系统提供的模板</li></ul></blockquote><h3 id="类模板" tabindex="-1"><a class="header-anchor" href="#类模板" aria-hidden="true">#</a> 类模板</h3><h4 id="类模板语法" tabindex="-1"><a class="header-anchor" href="#类模板语法" aria-hidden="true">#</a> 类模板语法</h4><p>类模板作用：</p><ul><li>建立一个通用类，类中的成员 数据类型可以不具体制定，用一个虚拟的类型来代表。</li></ul><p>语法:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>template&lt;typename T&gt;
class...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><ul><li>template ：声明创建模板</li><li>typename ： 表明其后面的符号是一种数据类型，可以用 class 代替</li><li>T ：通用的数据类型，名称可以替换，通常为大写字母</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename NameType, typename AgeType&gt;
class Person {
public:
    NameType name;
    AgeType age;

    Person(NameType name, AgeType age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    void showPerson() {
        cout &lt;&lt; this-&gt;name &lt;&lt; &quot; &quot; &lt;&lt; this-&gt;age &lt;&lt; endl;
    }
};

int main() {
    Person&lt;string, int&gt; p1(&quot;Who&quot;, 58);
    p1.showPerson();
    Person&lt;string, string&gt; p2(&quot;Who&quot;, &quot;58岁&quot;);
    p2.showPerson();
    return 0;
}
/*output:
Who 58
Who 58岁
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>类模板和函数模板语法相似，在声明模板后面加类，此类称为类模板</p></blockquote><h4 id="类模板和函数模板的区别" tabindex="-1"><a class="header-anchor" href="#类模板和函数模板的区别" aria-hidden="true">#</a> 类模板和函数模板的区别</h4><p>类模板与函数模板区别主要有两点：</p><ol><li>类模板没有自动类型推导的使用方式</li><li>类模板在模板参数列表中可以有默认参数</li></ol><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename NameType=string, typename AgeType =int&gt;
class Person {
public:
    NameType name;
    AgeType age;

    Person(NameType name, AgeType age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    void showPerson() {
        cout &lt;&lt; this-&gt;name &lt;&lt; &quot; &quot; &lt;&lt; this-&gt;age &lt;&lt; endl;
    }
};

int main() {
    Person&lt;string, int&gt; p1(&quot;Who&quot;, 58);
    p1.showPerson();
    Person&lt;string, string&gt; p2(&quot;Way&quot;, &quot;58岁&quot;);
    p2.showPerson();
    Person&lt;&gt; p3(&quot;What&quot;, 58);//使用默认模板类型
    p3.showPerson();
    Person&lt;string&gt; p4(&quot;Where&quot;, 58);//默认模板类型列表，只指定第一个的类型
    p4.showPerson();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>类模板只能使用显式指定类型方式</li><li>类模板中模板参数列表可以有默认值</li></ul></blockquote><h4 id="类模板中成员函数创建时机" tabindex="-1"><a class="header-anchor" href="#类模板中成员函数创建时机" aria-hidden="true">#</a> 类模板中成员函数创建时机</h4><p>类模板中成员函数和普通类中成员函数创建时机是有区别的：</p><ul><li>普通类中的成员一开始就可以创建</li><li>类模板中的成员函数在调用时才创建</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

class Person1 {
public:
    void showPerson1() {
        cout &lt;&lt; &quot;Call : Person1&quot;;
    }
};

class Person2 {
public:
    void showPerson2() {
        cout &lt;&lt; &quot;Call : Person2&quot;;
    }
};

template&lt;typename T&gt;
class MyClass {
public:
    T obj;

    MyClass() {

    }

    void func1() {
        obj.showPerson1();
    }

    void func2() {
        obj.showPerson2();
    }
};

int main() {
    MyClass&lt;Person1&gt; mc;
    mc.func1();
    //mc.func2(); //编译会报错，说明函数在调用时才生成，因为它在没调用时，是不会报错的（没有提示这个方法是否合法）
    return 0;
}

/*output:
Call : Person1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>类模板中的成员并不是一开始就创建的，在调用时才会去创建（应该指的是编写时调用它）</p></blockquote><h4 id="类模板对象做函数参数" tabindex="-1"><a class="header-anchor" href="#类模板对象做函数参数" aria-hidden="true">#</a> 类模板对象做函数参数</h4><p>学习目标：</p><ul><li>类模板实例化出的对象，向函数传参方式</li></ul><p>一共有三种传入方式：</p><ol><li>指定传入的类型 <ul><li>直接显示对象的数据类型</li></ul></li><li>参数模板化 <ul><li>将对象中的参数变为模板进行传递</li></ul></li><li>整个类模板化 <ul><li>将这个对象类型 模板化进行传递</li></ul></li></ol><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename NameType, typename AgeType&gt;
class Person {
public:
    NameType name;
    AgeType age;

    Person(NameType name, AgeType age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    void showPerson() {
        cout &lt;&lt; this-&gt;name &lt;&lt; &#39; &#39; &lt;&lt; this-&gt;age &lt;&lt; endl;
    }
};

/**
 * 指定传入的类型
 * @param p
 */
void printPerson1(Person&lt;string, int&gt; p) {
    p.showPerson();
}

/**
 * 参数模板化
 * @tparam T1
 * @tparam T2
 * @param p
 */
template&lt;typename T1, typename T2&gt;
void printPerson2(Person&lt;T1, T2&gt; p) {
    p.showPerson();
    cout &lt;&lt; &quot;Type of T1 :&quot; &lt;&lt; typeid(T1).name() &lt;&lt; endl;
    cout &lt;&lt; &quot;Type of T2 :&quot; &lt;&lt; typeid(T2).name() &lt;&lt; endl;
}
/**
 * 整个类模板化
 * @tparam T
 * @param t
 */
template&lt;typename T&gt;
void printPerson3(T t) {
    t.showPerson();
    cout &lt;&lt; &quot;Type of T : &quot; &lt;&lt; typeid(T).name() &lt;&lt; endl;
}

int main() {
    Person&lt;string, int&gt; p(&quot;Who&quot;, 100);
    printPerson1(p);
    printPerson2(p);
    printPerson3(p);
    return 0;
}
/*output：
Who 100
Who 100
Type of T1 :NSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE
Type of T2 :i
Who 100
Type of T : 6PersonINSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEiE
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>通过类模板创建的对象，可以有三种方式向函数中进行传参</li><li>使用比较广泛的是第一种：传入指定类型</li></ul></blockquote><h4 id="类模板与继承" tabindex="-1"><a class="header-anchor" href="#类模板与继承" aria-hidden="true">#</a> 类模板与继承</h4><p>当类模板碰到继承时，需要注意以下几点：</p><ul><li>当子类继承的父类是一个类模板时，子类声明的时候，要指定出父类中T的类型</li><li>如果不指定，编译器无法给子类分配内存</li><li>如果想灵活指定出父类中T的类型，子类也需变为类模板</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename T&gt;
class Base {
    T t;
};

class Son : public Base&lt;int&gt; {
};

template&lt;typename T1, typename T2&gt;
class Son2 : public Base&lt;T2&gt; {
public:
    Son2() {
        cout &lt;&lt; &quot;Type of T1 : &quot; &lt;&lt; typeid(T1).name() &lt;&lt; endl;
        cout &lt;&lt; &quot;Type of T2 : &quot; &lt;&lt; typeid(T2).name() &lt;&lt; endl;
    }

};

int main() {
    Son son;
    Son2&lt;char, int&gt; son2;
    return 0;
}
/*output:
Type of T1 : c
Type of T2 : i
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>如果父类是类模板，子类需要指定出父类中T的数据类型</li><li>或者子类也作为模板，并传入模板参数给父类</li></ul></blockquote><h4 id="类模板成员函数类外实现" tabindex="-1"><a class="header-anchor" href="#类模板成员函数类外实现" aria-hidden="true">#</a> 类模板成员函数类外实现</h4><p>学习目标：</p><ul><li>能够掌握类模板中成员函数类外实现</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename T1, typename T2&gt;
class Person {
public:
    T1 name;
    T2 age;

    //Person(T1 name, T2 age);
    Person(T1, T2);

    void showPerson();
};

template&lt;typename T1, typename T2&gt;
Person&lt;T1, T2&gt;::Person(T1 name, T2 age) {
    this-&gt;name = name;
    this-&gt;age = age;
}

/**
 * 函数模板具体化，优先于模板
 */
template&lt;&gt;
void Person&lt;int, int&gt;::showPerson() {
    cout &lt;&lt; &quot;函数模板具体化：&quot; &lt;&lt; this-&gt;name &lt;&lt; &#39; &#39; &lt;&lt; this-&gt;age &lt;&lt; endl;
}

template&lt;typename T1, typename T2&gt;
void Person&lt;T1, T2&gt;::showPerson() {
    cout &lt;&lt; &quot;函数模板：&quot; &lt;&lt; this-&gt;name &lt;&lt; &#39; &#39; &lt;&lt; this-&gt;age &lt;&lt; endl;
}

int main() {
    Person&lt;int, int&gt; p1(10, 20);
    p1.showPerson();

    Person&lt;string, int&gt; p2(&quot;Who&quot;, 20);
    p2.showPerson();
    return 0;
}
/*output：
函数模板具体化：10 20
函数模板：Who 20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>类模板中成员函数 类内声明 类外实现 时，需要加上模板参数列表</li><li>类模板成员函数也可以重载（函数模板具体化）</li></ul></blockquote><h4 id="类模板分文件编写" tabindex="-1"><a class="header-anchor" href="#类模板分文件编写" aria-hidden="true">#</a> 类模板分文件编写</h4><p>学习目标：</p><ul><li>掌握类模板成员函数分文件编写产生的问题以及解决方法</li></ul><p>问题：</p><ul><li>类模板中成员函数创建时机是在调用阶段，导致分文件编写时链接不到</li></ul><p>解决：</p><ol><li>直接包含.cpp源文件</li><li>将声明和实现写到同一个文件中，并更改后缀名为 .hpp ，hpp 是约定的名字，并不是强制</li></ol><p><strong>示例：</strong></p><p>person.h</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename T1, typename T2&gt;
class Person {
public:
    T1 name;
    T2 age;

    Person(T1 name, T2 age);

    void func();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>person.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;person.h&quot;

template&lt;typename T1, typename T2&gt;
Person&lt;T1, T2&gt;::Person(T1 name, T2 age) {
    this-&gt;name = name;
    this-&gt;age = age;
}

template&lt;typename T1, typename T2&gt;
void Person&lt;T1, T2&gt;::func() {
    cout &lt;&lt; this-&gt;name &lt;&lt; &#39; &#39; &lt;&lt; this-&gt;age &lt;&lt; endl;
}

int main() {
    Person&lt;string, int&gt; p(&quot;Who&quot;, 20);
    p.func();
    return 0;
}

/*output: 
Who 20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>经过我的测试，并没有问题，，，可能是代码编辑器的问题，但还是可以试试老师的方法</p></blockquote><p>person1.hpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename T1, typename T2&gt;
class Person {
public:
    T1 name;
    T2 age;

    Person(T1 name, T2 age);

    void func();
};

template&lt;typename T1, typename T2&gt;
Person&lt;T1, T2&gt;::Person(T1 name, T2 age) {
    this-&gt;name = name;
    this-&gt;age = age;
}

template&lt;typename T1, typename T2&gt;
void Person&lt;T1, T2&gt;::func() {
    cout &lt;&lt; this-&gt;name &lt;&lt; &#39; &#39; &lt;&lt; this-&gt;age &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>person1.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;person1.hpp&quot;

int main() {
    Person&lt;string, int&gt; p(&quot;Who&quot;, 20);
    p.func();
    return 0;
}
/*output：
Who 20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结（老师说的）：</p><ul><li>主流的解决方式是第二种，将类模板成员函数写到一起，并将后缀名改为 .hpp</li></ul></blockquote><h4 id="类模板与友元" tabindex="-1"><a class="header-anchor" href="#类模板与友元" aria-hidden="true">#</a> 类模板与友元</h4><p>学习目标：</p><ul><li><p>掌握类模板配合友元函数的类内和类外实现</p></li><li><p>全局函数类内实现：直接在类内声明友元即可</p></li><li><p>全局函数类外实现：需要提前让编译器知道全局函数的存在</p></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

template&lt;typename T1, typename T2&gt;
class Person;


template&lt;typename T1, typename T2&gt;
class Person {
private:
    T1 name;
    T2 age;
public:
    Person&lt;T1, T2&gt;(T1 name, T2 age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    friend void friendFunc1(Person&lt;T1, T2&gt; p) {
        cout &lt;&lt; &quot;friendFunc1 : &quot; &lt;&lt; p.name &lt;&lt; &quot; &quot; &lt;&lt; p.age &lt;&lt; endl;
    }

    friend void friendFunc2(Person&lt;T1, T2&gt; p);
};

template&lt;typename T1, typename T2&gt;
void friendFunc2(Person&lt;T1, T2&gt; p) {
    cout &lt;&lt; &quot;friendFunc2 : &quot; &lt;&lt; p.name &lt;&lt; &quot; &quot; &lt;&lt; p.age &lt;&lt; endl;
}

int main() {
    Person&lt;string, int&gt; p(&quot;Who&quot;, 58);
    friendFunc1(p);
    //friendFunc2(p);//编译报错了，不知道为什么，难道是我的 MacBook Pro 2021 M1Pro 1TB 16寸 的编译器不支持？？经过测试和这个一样的普通类和友元是没问题的
    return 0;
}
/*output:
friendFunc1 : Who 58
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>建议全局函数做类内实现，用法简单，而且编译器可以直接识别。</li></ul></blockquote><h4 id="类模板案例" tabindex="-1"><a class="header-anchor" href="#类模板案例" aria-hidden="true">#</a> 类模板案例</h4><p>案例描述：</p><p>实现一个通用的数组类，要求如下：</p><ul><li>可以对内置数据类型以及自定义数据类型的数据进行存储</li><li>将数组中的数据存储到堆区</li><li>构造函数中可以传入数组的容量</li><li>替狗对应的拷贝函数以及 <code>operator=</code> 防止浅拷贝问题</li><li>提供尾插法和尾删法对数组中的数据进行增加和删除</li><li>可以通过下表的方式访问数组中的元素</li><li>可以获取数组中当前元素的个数和数组的容量</li></ul><p><strong>示例：</strong></p><p>MyArray.hpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once

#include &lt;iostream&gt;

using namespace std;

template&lt;typename T&gt;
class MyArray {
private:
    T *data;
    int capacity;
    int size;
public:
    MyArray(int capacity) {
        this-&gt;capacity = capacity;
        this-&gt;data = new T[this-&gt;capacity];
        this-&gt;size = 0;
    }

    MyArray(const MyArray&lt;T&gt; &amp;arr) {
        this-&gt;capacity = arr;
        this-&gt;size = arr.size;
        this-&gt;data = new T[arr.capacity];
        for (int i = 0; i &lt; this-&gt;size; ++i) {
            this-&gt;data[i] = arr.data[i];
        }
    }

    MyArray &amp;operator=(const MyArray&lt;T&gt; &amp;arr) {
        if (this-&gt;capacity == nullptr) {
            delete[] this-&gt;capacity;
            this-&gt;capacity = 0;
            this-&gt;size = 0;
        }

        this-&gt;capacity = arr.capacity;
        this-&gt;size = arr.size;
        for (int i = 0; i &lt; this-&gt;size; ++i) {
            this-&gt;data[i] = arr.data[i];
        }
        return *this;
    }

  /**
     * 运算符重载没有没有要求 参数必须在左边还是右边，针对不同的运算符应该是有 不同的写法的 （如：[]、++i、i++）
     * @param index
     * @return
     */
    T &amp;operator[](int index) {
//        if (index &gt;= this-&gt;size) {
//            T t;
//            return t;
//        }
        return this-&gt;data[index];//不考虑越界，用户自己处理
    }

    void push_back(const T &amp;val) {
        if (this-&gt;size == this-&gt;capacity) {
            return;
        }
        this-&gt;data[size] = val;
        this-&gt;size++;
    }

    void pop_back() {
        if (this-&gt;size == 0) {
            return;
        }
        this-&gt;size--;
    }

    int getCapacity() {
        return this-&gt;capacity;
    }

    int getSize() {
        return this-&gt;size;
    }

    ~MyArray() {
        if (this-&gt;data== nullptr)return;
        delete[] this-&gt;data;
        this-&gt;data = nullptr;
        this-&gt;capacity = 0;
        this-&gt;size = 0;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyArray.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;MyArray.hpp&quot;

template&lt;typename T1, typename T2&gt;
class Person {
private:
    T1 name;
    T2 age;
public:
    Person() {}

    Person(T1 name, T2 age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    void showPerson() {
        cout &lt;&lt; &quot;name : &quot; &lt;&lt; this-&gt;name &lt;&lt; &quot;,age : &quot; &lt;&lt; this-&gt;age &lt;&lt; endl;
    }
};

int main() {
    MyArray&lt;int&gt; arr(10);
    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);
    arr.push_back(40);

    for (int i = 0; i &lt; arr.getSize(); ++i) {
        cout &lt;&lt; arr[i] &lt;&lt; endl;
    }

    Person&lt;string, int&gt; p1(&quot;Who1&quot;, 51);
    Person&lt;string, int&gt; p2(&quot;Who2&quot;, 52);
    Person&lt;string, int&gt; p3(&quot;Who3&quot;, 53);
    Person&lt;string, int&gt; p4(&quot;Who4&quot;, 54);
    Person&lt;string, int&gt; p5(&quot;Who5&quot;, 55);
    Person&lt;string, int&gt; p6(&quot;Who6&quot;, 56);

    //arr.push_back(p1);//类型不一致

    MyArray&lt;Person&lt;string, int&gt;&gt; ap(10);
    ap.push_back(p1);
    ap.push_back(p2);
    ap.push_back(p3);
    ap.push_back(p4);
    ap.push_back(p5);
    ap.push_back(p6);
    for (int i = 0; i &lt; ap.getSize(); ++i) {
        ap[i].showPerson();
    }
    return 0;
}
/*output:
10
20
30
40
name : Who1,age : 51
name : Who2,age : 52
name : Who3,age : 53
name : Who4,age : 54
name : Who5,age : 55
name : Who6,age : 56
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>能够利用所学知识点实现通用数组</li></ul></blockquote><h2 id="stl-初识" tabindex="-1"><a class="header-anchor" href="#stl-初识" aria-hidden="true">#</a> STL 初识</h2><h3 id="stl的诞生" tabindex="-1"><a class="header-anchor" href="#stl的诞生" aria-hidden="true">#</a> STL的诞生</h3><ul><li>长久以来，软件界一直希望建立一种可重复利用的东西</li><li>C++的<strong>面向对象</strong>和<strong>泛型</strong>编程思想，目的就是复用性的提升</li><li>大多情况下，数据结构和算法都未能有一套标准，导致被迫从事大量重复工作</li><li>为了建立数据结构和算法的一套标准，诞生了STL</li></ul><h3 id="stl基本概念" tabindex="-1"><a class="header-anchor" href="#stl基本概念" aria-hidden="true">#</a> STL基本概念</h3><ul><li>STL(Standard Template Library , 标准模板库)</li><li>STL 从广义上分为：容器(container) 、算法(algorithm)、迭代器(iterator)</li><li><strong>容器</strong>和<strong>算法</strong>之间通过<strong>迭代器</strong>进行无缝连接</li><li>STL 几乎所有的代码都采用模板类和模板函数</li></ul><h3 id="stl六大组件" tabindex="-1"><a class="header-anchor" href="#stl六大组件" aria-hidden="true">#</a> STL六大组件</h3><p>STL大体分为六大组件，分别是：<strong>容器、算法、迭代器、仿函数、适配器（配接器）、空间配置器</strong></p><ol><li>容器：各种数据结构，如 vector、list、deque、set、map、...等，用来存放各种数据。</li><li>算法：各种常用的算法，如 sort、find、copy、for_each 等。</li><li>迭代器：扮演容器与算法之间的胶合剂。</li><li>仿函数：行为类似函数，可作为算法的某种策略。</li><li>适配器：一种用来修饰容器或者仿函数或迭代器接口的东西。</li><li>空间适配器：负责空间的配置与管理。</li></ol><h3 id="stl中容器、算法、迭代器" tabindex="-1"><a class="header-anchor" href="#stl中容器、算法、迭代器" aria-hidden="true">#</a> STL中容器、算法、迭代器</h3><p>**容器：**置物之所也</p><p><strong>STL容器</strong>就是将运用<strong>最广泛的一些数据结构实现出来</strong>。</p><p>常用的是数据结构：数组、链表、树、栈、队列、集合、映射表 等</p><p>这些容器分为<strong>序列式容器</strong>和<strong>关联式容器</strong>两种：</p><ul><li>序列式容器：强调值的排序，序列式容器中的每个元素均有固定的位置。</li><li>关联式容器：二叉树结构，各元素之间没有严格的物理上的顺序关系。</li></ul><p>**算法：**问题之解法也</p><p>有限的步骤，解决逻辑或数学上的问题，这一门学科我们叫做算法(Algorithms)</p><p>算法分为：<strong>质变算法</strong>和<strong>非质变算法</strong></p><ul><li>质变算法：是指运算过程中会更改区间内的元素的内容。例如拷贝，替换，删除等等。</li><li>非质变算法：是指运算过程中不会更改区间内的元素，例如查找、计数、遍历、寻找极值等等。</li></ul><p>**迭代器：**容器和算法之间的粘合剂</p><p>提供一种方法，使之能够依序寻访某个容器所含的各个元素，而又无需暴露该容器内部的表示方式。</p><p>每个容器都有自己专属的迭代器</p><p>迭代器使用非常类似于指针，初学阶段我们可以先理解迭代器为指针</p><p><strong>迭代器种类：</strong></p><table><thead><tr><th style="text-align:center;">种类</th><th style="text-align:center;">功能</th><th style="text-align:center;">支持运算</th></tr></thead><tbody><tr><td style="text-align:center;">输入迭代器</td><td style="text-align:center;">对数据只读访问</td><td style="text-align:center;">只读，支持++、==、!=</td></tr><tr><td style="text-align:center;">输出迭代器</td><td style="text-align:center;">对数据只写访问</td><td style="text-align:center;">只写，支持++</td></tr><tr><td style="text-align:center;">前向迭代器</td><td style="text-align:center;">读写操作，并能向前推进迭代器</td><td style="text-align:center;">读写，支持++、==、!=</td></tr><tr><td style="text-align:center;">双向迭代器</td><td style="text-align:center;">读写操作，并能向前向后操作</td><td style="text-align:center;">读写，支持++、--</td></tr><tr><td style="text-align:center;">随机访问迭代器</td><td style="text-align:center;">读写操作，可以以跳跃的方式访问任意数据，功能最强的迭代器</td><td style="text-align:center;">读写，支持++、--、[n]、-n、&lt;、&lt;=、&gt;、&gt;=</td></tr></tbody></table><p>常用的容器中迭代器种类分为双向迭代器，和随机访问迭代器。</p><h3 id="容器算法迭代器初识" tabindex="-1"><a class="header-anchor" href="#容器算法迭代器初识" aria-hidden="true">#</a> 容器算法迭代器初识</h3><p>了解STL中容器、算法、迭代器概念之后、我们上手感受一下STL的魅力</p><ul><li>STL中最常用的容器为Vector，可以理解为数组，下面我们将学习如何向这个容器中插入数据、并遍历这个容器。</li></ul><h4 id="vector-存放内置数据类型" tabindex="-1"><a class="header-anchor" href="#vector-存放内置数据类型" aria-hidden="true">#</a> Vector 存放内置数据类型</h4><p>容器：<code>vector</code></p><p>算法：<code>for_each</code></p><p>迭代器：<code>vector&lt;int&gt;::iterator</code></p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

void my_print(int val) {
    cout &lt;&lt; val &lt;&lt; endl;
}

int main() {
    //创建vector容器对象，并且通过模板参数指定容器中存放的数据的类型
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    //每一个容器都有自己的迭代器，迭代器是用来遍历容器中的元素的
    //v.begin()返回迭代器，这个迭代器指向容器中第一个数据
    //v.end()返回迭代器，这个迭代器指向容器元素的最后一个元素的下一个位置
    //vector&lt;int&gt;::iterator 拿到vector&lt;int&gt;这种容器的迭代器类型
    vector&lt;int&gt;::iterator begin = v.begin();
    vector&lt;int&gt;::iterator end = v.end();

    //第一种遍历方式：
    while (begin != end) {
        cout &lt;&lt; *begin &lt;&lt; endl;
        begin++;
    }
    cout &lt;&lt; endl;
  
    //第二种遍历方式
    for (vector&lt;int&gt;::iterator it = v.begin(); begin != v.end(); it++) {
        cout &lt;&lt; *it &lt;&lt; endl;
    }
    cout &lt;&lt; endl;
  
    //第三种遍历方式
  	//使用STL提供标准遍历算法  头文件 algorithm //不用似乎也行，但是自己电脑可以别的电脑不一定，保险起见，还是加好一点
    for_each(v.begin(), v.end(), my_print);
    return 0;
}
/*output:
10
20
30
40
50


10
20
30
40
50

10
20
30
40
50
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vector-存放自定义数据类型" tabindex="-1"><a class="header-anchor" href="#vector-存放自定义数据类型" aria-hidden="true">#</a> Vector 存放自定义数据类型</h4><p>学习目标：vector中存放自定义数据类型并打印输出</p><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age = age;
    };
};

int main() {
    Person p1(&quot;aaa&quot;, 10);
    Person p2(&quot;bbb&quot;, 20);
    Person p3(&quot;ccc&quot;, 30);
    Person p4(&quot;ddd&quot;, 40);
    Person p5(&quot;eee&quot;, 50);

    vector&lt;Person&gt; v1;//存放对象
    v1.push_back(p1);
    v1.push_back(p2);
    v1.push_back(p3);
    v1.push_back(p4);
    v1.push_back(p5);

    for (vector&lt;Person&gt;::iterator it = v1.begin(); it != v1.end(); it++) {
        cout &lt;&lt; &quot;name : &quot; &lt;&lt; it-&gt;name &lt;&lt; &quot;, age : &quot; &lt;&lt; it-&gt;age &lt;&lt; endl;
    }

    cout &lt;&lt; endl;

    vector&lt;Person *&gt; v2;//存放对象指针
    v2.push_back(&amp;p1);
    v2.push_back(&amp;p2);
    v2.push_back(&amp;p3);
    v2.push_back(&amp;p4);
    v2.push_back(&amp;p5);

    for (vector&lt;Person *&gt;::iterator it = v2.begin(); it != v2.end(); it++) {
        cout &lt;&lt; &quot;name : &quot; &lt;&lt; (*it)-&gt;name &lt;&lt; &quot;, age : &quot; &lt;&lt; (*it)-&gt;age &lt;&lt; endl;
    }
    return 0;
}
/*output:
name : aaa, age : 10
name : bbb, age : 20
name : ccc, age : 30
name : ddd, age : 40
name : eee, age : 50

name : aaa, age : 10
name : bbb, age : 20
name : ccc, age : 30
name : ddd, age : 40
name : eee, age : 50
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vector-容器嵌套容器" tabindex="-1"><a class="header-anchor" href="#vector-容器嵌套容器" aria-hidden="true">#</a> Vector 容器嵌套容器</h4><p>学习目标：容器嵌套容器，我们将所有数据进行输出遍历</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

int main() {
    vector&lt;vector&lt;int&gt;&gt; v;

    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    vector&lt;int&gt; v3;
    vector&lt;int&gt; v4;

    for (int i = 0; i &lt; 4; ++i) {
        v1.push_back(i + 1);
        v2.push_back(i + 2);
        v3.push_back(i + 3);
        v4.push_back(i + 4);
    }

    v.push_back(v1);
    v.push_back(v2);
    v.push_back(v3);
    v.push_back(v4);

    for (vector&lt;vector&lt;int&gt;&gt;::iterator it1 = v.begin(); it1 != v.end(); it1++) {
        for (vector&lt;int&gt;::iterator it2 = it1-&gt;begin(); it2 != it1-&gt;end(); it2++) {
            cout &lt;&lt; *it2 &lt;&lt; endl;
        }
        cout &lt;&lt; endl;
    }
    return 0;
}

/*output:
1
2
3
4

2
3
4
5

3
4
5
6

4
5
6
7
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stl-常用容器" tabindex="-1"><a class="header-anchor" href="#stl-常用容器" aria-hidden="true">#</a> STL 常用容器</h2><h3 id="string-容器" tabindex="-1"><a class="header-anchor" href="#string-容器" aria-hidden="true">#</a> string 容器</h3><p>本质：</p><ul><li>string 是C++风格的字符串，而string本质上是一个类</li></ul><p>string和char * 的却别</p><ul><li>char * 是一个指针</li><li>string 是一个类，类内部封装了 char * ，管理这个字符串，是一个 char * 型容器</li></ul><p><strong>特点：</strong></p><ul><li>string 类内部封装了很多成员函数</li><li><strong>例如：</strong><ul><li>查找 find</li><li>拷贝 copy</li><li>删除 delete</li><li>替换 replace</li><li>插入 insert</li></ul></li><li>string 管理 char * 所分配的内存，不用担心复制越界和区值越界，由类内部统一负责</li></ul><h4 id="string-构造函数" tabindex="-1"><a class="header-anchor" href="#string-构造函数" aria-hidden="true">#</a> string 构造函数</h4><p>构造函数原型：</p><ul><li><code>string()</code> 创建一个空的字符串 例如：string str</li><li><code>string(const char *s)</code> 使用字符串s 初始化</li><li><code>string(const string&amp; str)</code> 使用一个string对象初始化另一个string对象</li><li><code>string(int n, char c)</code> 使用n个字符c初始化</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    //创建一个空字符串
    string str1;
    cout &lt;&lt; &quot;str1 = &quot; &lt;&lt; str1 &lt;&lt; endl;

    //使用 char 数组初始化
    const char *str = &quot;Hello world&quot;;
    string str2(str);
    cout &lt;&lt; &quot;str2 = &quot; &lt;&lt; str2 &lt;&lt; endl;
    
    //使用另一个string初始化
    string str3(str2);
    cout &lt;&lt; &quot;str3 = &quot; &lt;&lt; str3 &lt;&lt; endl;

    //用n个字符初始化
    string str4(10, &#39;a&#39;);
    cout &lt;&lt; &quot;str4 = &quot; &lt;&lt; str4 &lt;&lt; endl;

    return 0;
}
/*output:
str1 = 
str2 = Hello world
str3 = Hello world
str4 = aaaaaaaaaa
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：string 的多种构造方式没有可比性，灵活使用即可</p></blockquote><h4 id="string-赋值操作" tabindex="-1"><a class="header-anchor" href="#string-赋值操作" aria-hidden="true">#</a> string 赋值操作</h4><p>功能描述：</p><ul><li>给string字符串赋值</li></ul><p>赋值的函数原型：</p><ul><li><code>string&amp; operator=(const char* s);</code> char *类型字符串赋值给当前的字符串</li><li><code>string&amp; operator=(const string &amp;); </code> 把字符串s赋值给当前的字符串</li><li><code>string&amp; operator=(char c);</code> 字符赋值给当前字符串</li><li><code>string&amp; assign(const char *s);</code> 把字符串s赋值给当前字符串</li><li><code>string&amp; assign(const char *s,int n);</code> 把字符串s的前n个字符赋值给当前字符串</li><li><code>string&amp; assign(const string &amp;s);</code> 把字符串s赋值给当前字符串</li><li><code>string&amp; assign(int n,char c); </code> 用n个字符赋值给当前字符串</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    //赋值 char *
    string str1;
    str1 = &quot;hello world&quot;;
    cout &lt;&lt; &quot;str1 : &quot; &lt;&lt; str1 &lt;&lt; endl;

    //赋值str给str
    string str2;
    str2 = str1;
    cout &lt;&lt; &quot;str2 : &quot; &lt;&lt; str2 &lt;&lt; endl;

    //赋值一个字符
    string str3;
    str3 = &#39;s&#39;;
    cout &lt;&lt; &quot;str3 : &quot; &lt;&lt; str3 &lt;&lt; endl;

    //赋值char *
    string str4;
    str4.assign(&quot;hello nihao &quot;);
    cout &lt;&lt; &quot;str4 : &quot; &lt;&lt; str4 &lt;&lt; endl;

    //赋值str
    string str5;
    str5.assign(str4);
    cout &lt;&lt; &quot;str5 : &quot; &lt;&lt; str5 &lt;&lt; endl;

    //赋值 char* 的前0 到 n 个字符，包括n
    string str6;
    str6.assign(&quot;hello nihao &quot;, 5);
    cout &lt;&lt; &quot;str6 : &quot; &lt;&lt; str6 &lt;&lt; endl;//hello

    //赋值n个字符
    string str7;
    str7.assign(10, &#39;s&#39;);
    cout &lt;&lt; &quot;str7 : &quot; &lt;&lt; str7 &lt;&lt; endl;

    //赋值str从str的pos开始
    string str8;
    str8.assign(str5, 5);
    cout &lt;&lt; &quot;str8 : &quot; &lt;&lt; str8 &lt;&lt; endl;
    return 0;
}
/*output:
str1 : hello world
str2 : hello world
str3 : s
str4 : hello nihao 
str5 : hello nihao 
str6 : hello
str7 : ssssssssss
str8 :  nihao 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-字符串拼接" tabindex="-1"><a class="header-anchor" href="#string-字符串拼接" aria-hidden="true">#</a> string 字符串拼接</h4><p>功能描述：</p><ul><li>实现在字符串末尾拼接字符串</li></ul><p>函数原型：</p><ul><li><code>string&amp; operator+=(const char *str);</code>. 拼接char *</li><li><code>string&amp; operator+=(const char c);</code>。 拼接char</li><li><code>string&amp; operator+=(const string&amp; str);</code> 拼接string</li><li><code>string&amp; append(const char *s);</code> 拼接 char *</li><li><code>string&amp; append(const char *s,int n); </code> 拼接char *s的前n个，包括n</li><li><code>string&amp; append(const string &amp;s); </code> 拼接string</li><li><code>string&amp; append(const &amp;s,int pos,int n) </code> 拼接string 从 pos开始 n个字符</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string str1 = &quot;hello&quot;;
    str1 + &quot; nihao?&quot;;
    cout &lt;&lt; &quot;str1 : &quot; &lt;&lt; str1 &lt;&lt; endl;

    string str2 = &quot;hell&quot;;
    str2 += &#39;o&#39;;
    cout &lt;&lt; &quot;str2 : &quot; &lt;&lt; str2 &lt;&lt; endl;

    string str3 = &quot;hello&quot;;
    str3 += str1;
    cout &lt;&lt; &quot;str3 : &quot; &lt;&lt; str3 &lt;&lt; endl;

    string str4 = &quot;hello&quot;;
    str4.append(&quot; Who&quot;);
    cout &lt;&lt; &quot;str4 : &quot; &lt;&lt; str4 &lt;&lt; endl;

    string str5 = &quot;hello &quot;;
    str5.append(&quot;fuck you&quot;, 2);
    cout &lt;&lt; &quot;str5 : &quot; &lt;&lt; str5 &lt;&lt; endl;

    string str6 = &quot;get out &quot;;
    str6.append(str5);
    cout &lt;&lt; &quot;str6 : &quot; &lt;&lt; str6 &lt;&lt; endl;

    string str7 = &quot;he&quot;;
    str7.append(str5, 2, 3);
    cout &lt;&lt; &quot;str7 : &quot; &lt;&lt; str7 &lt;&lt; endl;
    return 0;
}
/*output:
str1 : hello
str2 : hello
str3 : hellohello
str4 : hello Who
str5 : hello fu
str6 : get out hello fu
str7 : hello
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>字符串拼接重载版本很多，初学阶段记住几种即可</p></blockquote><h4 id="string-查找和替换" tabindex="-1"><a class="header-anchor" href="#string-查找和替换" aria-hidden="true">#</a> string 查找和替换</h4><p>功能描述：</p><ul><li>查找：查找指定字符串是否存在</li><li>替换：在指定的位置替换字符串</li></ul><p>函数原型：</p><ul><li><p><code>int find(const string &amp;str, int pos = 0) const; </code> 查找str第一次出现的位置，从pos开始找</p></li><li><p><code>int find(const char *s, int pos = 0) const;</code> 查找s第一次出现的位置，从pos开始找</p></li><li><p><code>int find(const char *s, int pos, int n) const;</code> 从pos位置查找s的前n个字符第一次出现的位置</p></li><li><p><code>int find(const char c, int pos = 0) const;</code> 查找字符c第一次出现的位置</p></li><li><p><code>int rfind(const string &amp;str, int pos = npos) const;</code> 查找str最后一次出现的位置，从pos开始找</p></li><li><p><code>int rfind(const char *s, int pos = npos) const;</code> 查找s最后一次出现的位置，从pos开始找</p></li><li><p><code>int rfind(const char *s, int pos, int n) const;</code> 从pos位置开始查找s的前n个字符最后一次出现的位置</p></li><li><p><code>int rfind(const char c, int pos = 0) const;</code> 查找c最后一次出现的位置，从pos处开始查找</p></li><li><p><code>int replace(int pos, int n, const string &amp;str);</code> 替换从pos开始n个字符为字符串str</p></li><li><p><code>int replace(int pos, int n, const char *s);</code> 替换从pos开始n个字符为字符串s</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string txt = &quot;lo&quot;;
    string str1 = &quot;hello ,Who i love you&quot;;
    cout &lt;&lt; (int) str1.find(txt, 5) &lt;&lt; endl;//13


    cout &lt;&lt; (int) str1.find(&quot;lo&quot;, 5) &lt;&lt; endl;//13

    cout &lt;&lt; (int) str1.find(&quot;lo&quot;, 5, 2) &lt;&lt; endl;//13  //pos 从被查询字符串的 pos位置开始，查找 s 的前n个字符


    cout &lt;&lt; (int) str1.find(&#39;o&#39;, 10) &lt;&lt; endl;//14


    cout &lt;&lt; (int) str1.find(&quot;lo&quot;, 5) &lt;&lt; endl;//13 pos ～ len 第一次出现的位置

    cout &lt;&lt; (int) str1.rfind(txt, 15) &lt;&lt; endl;//13  //从0 ～ pos 最后一次出现的位置 ，pos 默认值是 len
    cout &lt;&lt; (int) str1.rfind(&quot;lo&quot;, 15) &lt;&lt; endl;//13  //从0 ～ pos 最后一次出现的位置 ，pos 默认值是 len

    cout &lt;&lt; (int) str1.rfind(&quot;lova&quot;, 15, 3) &lt;&lt; endl; //从0 ～ pos 最后一次出现的位置 ，pos 默认值是 len ，n表示 s 的前n位


    cout &lt;&lt; (int) str1.rfind(&#39;o&#39;, 15) &lt;&lt; endl;//13  //从0 ～ pos 最后一次出现的位置 ，pos 默认值是 len

    string str2 = str1.replace(7, 1, &quot;Where &quot;);//替换从 pos 开始 的 n 位，如果 n小于 s.len 那么会变成 替换 或者 插入 或者 替换插入
    cout &lt;&lt; str2 &lt;&lt; endl;


    return 0;
}
/*output:
13
13
13
14
13
13
13
13
14
hello ,Where ho i love you
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>pos 一般控制的是被查询串，n 一般控制的是 查询串</li><li>替换从 pos 开始 的 n 位，如果 n小于 s.len 那么会变成 替换 或者 插入 或者 替换一部分插入一部分</li></ul></blockquote><h4 id="string-字符串比较" tabindex="-1"><a class="header-anchor" href="#string-字符串比较" aria-hidden="true">#</a> string 字符串比较</h4><p>功能描述：</p><ul><li>字符串之间的比较</li></ul><p>比较方式：</p><ul><li>字符串比较的是按字符的ASCII码对比 <ul><li>== 返回0</li><li>&gt; 返回 正</li><li>&lt; 返回 负</li></ul></li></ul><p>函数原型：</p><ul><li><code>int compare(const string &amp;str) const;</code> 字符串对象str比较</li><li><code>int compare(const char *s) const </code> 与字符串s比较</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string s1 = &quot;hello&quot;;
    string s2 = &quot;zello&quot;;

    int res = s1.compare(s2);

    cout &lt;&lt; res &lt;&lt; endl;
    return 0;
}
/*output：
-18
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>字符串对比主要是用于判断两个字符串是否相等，判断谁大谁小的意义并不是很大</p></blockquote><h4 id="string-字符串存取" tabindex="-1"><a class="header-anchor" href="#string-字符串存取" aria-hidden="true">#</a> string 字符串存取</h4><p>string中字符串村去方式有两种：</p><ul><li><code>char&amp; operator[] (int n);</code> 通过[]方式获取</li><li><code>char at(int n);</code> 通过at方法获取</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string str = &quot;hello world&quot;;
    for (int i = 0; i &lt; str.size(); ++i) {
        cout &lt;&lt; str[i] &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;
    for (int i = 0; i &lt; str.size(); ++i) {
        cout &lt;&lt; str.at(i) &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;

    str[1] = &#39;x&#39;;
    str.at(2) = &#39;x&#39;;
    cout &lt;&lt; str &lt;&lt; endl;
    return 0;
}
/*output: 
h e l l o   w o r l d 
h e l l o   w o r l d 
hxxlo world
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：string字符串中单个字符村去有两种方式，[] 或 at()</p><h4 id="string-插入和删除" tabindex="-1"><a class="header-anchor" href="#string-插入和删除" aria-hidden="true">#</a> string 插入和删除</h4><p>功能描述：</p><ul><li>对string字符串进行插入和删除字符操作</li></ul><p>函数原型：</p><ul><li><code>string&amp; insert(int pos, const char *s);</code> 插入字符串</li><li><code>string&amp; insert(int pos, const string &amp;str);</code> 插入字符串</li><li><code>string&amp; insert(int pos, int n, char c);</code> 在指定位置插入n饿字符c</li><li><code>string&amp; erase(int pos, int n = npos);</code> 删除从pos开始的n个字符</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string str = &quot;hello world&quot;;
    str.insert(6, &quot; nihao &quot;);
    str.insert(10, 5, &#39;x&#39;);
    cout &lt;&lt; str &lt;&lt; endl;
    str.erase(10, 5);
    cout &lt;&lt; str &lt;&lt; endl;
    return 0;
}
/*output：
hello  nihxxxxxao world
hello  nihao world
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>插入和删除的起始下标都是从0开始的</p></blockquote><h4 id="string-子串" tabindex="-1"><a class="header-anchor" href="#string-子串" aria-hidden="true">#</a> string 子串</h4><p>功能描述：</p><ul><li>从字符串中获取想要的子串</li></ul><p>函数原型：</p><ul><li><code>string substr(int pos = 0, int n = npos) const;</code> 返回从pos开始的n个字符组成的字符串</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    string str = &quot;abcdefg&quot;;
    string subStr = str.substr(1, 3);
    cout &lt;&lt; subStr &lt;&lt; endl;

    string email = &quot;xxxx@apple.com&quot;;
    int pos = email.find(&#39;@&#39;);
    string name = email.substr(0, pos);
    cout &lt;&lt; name &lt;&lt; endl;
    return 0;
}
/*
bcd
xxxx
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vector-容器" tabindex="-1"><a class="header-anchor" href="#vector-容器" aria-hidden="true">#</a> vector 容器</h3><h4 id="vector-基本概念" tabindex="-1"><a class="header-anchor" href="#vector-基本概念" aria-hidden="true">#</a> vector 基本概念</h4><p>功能：</p><ul><li>vector 数据结构<strong>和数组非常相似</strong>，也称为<strong>单端数组</strong></li></ul><p>vector 与普通数组的区别：</p><ul><li>不同之处在于数组是静态空间，而vector可以<strong>动态扩展</strong></li></ul><p>动态扩展：</p><ul><li><p>并不是在原空间之后连接新空间，而是找更大的内存空间，然后将原数据拷贝到新空间之后，释放空间。</p></li><li><p>vector容器的迭代器是支持随机访问的迭代器。</p></li></ul><h4 id="vector-构造函数" tabindex="-1"><a class="header-anchor" href="#vector-构造函数" aria-hidden="true">#</a> vector 构造函数</h4><p>功能描述：</p><ul><li>创建vectot容器</li></ul><p>函数原型：</p><ul><li><code>vector&lt;T&gt; v;</code><ul><li>采用模板类实现，默认构造函数</li></ul></li><li><code>vector(v.begin,v.end);</code><ul><li>拷贝 begin 到 end 的元素，包括begin和end</li></ul></li><li><code>vector(n,elem);</code><ul><li>构造函数将n个elem拷贝给vector</li></ul></li><li><code>vector(const vector &amp;vec);</code><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void printVector(vector&lt;T&gt; v) {
    for (typename vector&lt;T&gt;::iterator it = v.begin(); it != v.end(); it++) {
        cout &lt;&lt; *it &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;
}

int main() {
    vector&lt;int&gt; v1;//无参构造
    for (int i = 1; i &lt;= 10; ++i) {
        v1.push_back(i);
    }
    printVector(v1);

    vector&lt;int&gt; v2(v1.begin(), v1.end());//拷贝 begin 到 end 的元素，包括begin和end
    printVector(v2);

    vector&lt;int&gt; v3(20, 200);//构造函数将n个elem拷贝给vector
    printVector(v3);

    vector&lt;int&gt; v4(v3);//拷贝构造函数
    printVector(v4);

    return 0;
}

/*output:
1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5 6 7 8 9 10 
200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 
200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>vector的多种构造方式，没有可比性，灵活使用即可</li></ul></blockquote><h4 id="vector-赋值操作" tabindex="-1"><a class="header-anchor" href="#vector-赋值操作" aria-hidden="true">#</a> vector 赋值操作</h4><p>功能描述：</p><ul><li>给vector容器赋值</li></ul><p>函数原型：</p><ul><li><code>vector&amp; operator=(const vector &amp;vec);</code><ul><li>重载等号操作符</li></ul></li><li><code>assign(begin,end);</code><ul><li>将 begin 到 end 的数据拷贝给vector，包括begin和end</li></ul></li><li><code>assign(n,elem);</code><ul><li>将 n 哥 elem 拷贝给 vector</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);
    printVector(v1);

    vector&lt;int&gt; v2;
    v2 = v1;
    printVector(v2);

    vector&lt;int&gt; v3;
    v3.assign(v2.begin(), v2.end());
    printVector(v3);

    vector&lt;int&gt; v4;
    v4.assign(5, 10);
    printVector(v4);

    return 0;
}
/*output:
10 20 30 40 50 
10 20 30 40 50 
10 20 30 40 50 
10 10 10 10 10 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>赋值方式比较简单，使用operator 或 assign 都可以</li></ul></blockquote><h4 id="vecotr-的容量和大小" tabindex="-1"><a class="header-anchor" href="#vecotr-的容量和大小" aria-hidden="true">#</a> vecotr 的容量和大小</h4><p>功能描述：</p><ul><li>获取vector的容量和大小，并操作</li></ul><p>函数原型：</p><ul><li><code>empty();</code><ul><li>判断容器是否为空</li></ul></li><li><code>capacity();</code><ul><li>返回容器的容量</li></ul></li><li><code>size();</code><ul><li>返回容器中元素的个数</li></ul></li><li><code>resize(int num);</code><ul><li>重新指定容器的长度为num，若容器变长，则以默认值填充新位置。</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li><li><code>resize(int num,elem);</code><ul><li>重新置顶容器的长度为num，若容器变长，则已elem值填充新位置</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li></ul><p>示例：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    cout &lt;&lt; &quot;是否为空：&quot; &lt;&lt; v1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;

    v1.push_back(1);
    cout &lt;&lt; &quot;是否为空：&quot; &lt;&lt; v1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;

    for (int i = 0; i &lt; 20; ++i) {
        v1.push_back(i + 1);
    }
    cout &lt;&lt; &quot;是否为空：&quot; &lt;&lt; v1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;

    v1.resize(25);//超度长度，填充默认值：0
    printVector(v1);

    v1.resize(15);//小于长度，删除后面的元素
    printVector(v1);
    cout &lt;&lt; &quot;是否为空：&quot; &lt;&lt; v1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;

    v1.resize(20, 20);//超出长度，填充第二个参数 elem
    printVector(v1);

    v1.resize(0, 20);//小于长度，删除后面的元素，不填充元素
    printVector(v1);
    cout &lt;&lt; &quot;是否为空：&quot; &lt;&lt; v1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;

    return 0;
}
/*output:
是否为空：1
大小：0
容量：0

是否为空：0
大小：1
容量：1

是否为空：0
大小：21
容量：32

1 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 0 0 0 0 
1 1 2 3 4 5 6 7 8 9 10 11 12 13 14 
是否为空：0
大小：15
容量：32

1 1 2 3 4 5 6 7 8 9 10 11 12 13 14 20 20 20 20 20 

是否为空：1
大小：0
容量：32


Process finished with exit code 0

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vector 自动扩容示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    for (int i = 0; i &lt; 30; ++i) {
        cout &lt;&lt; &quot;v1大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
        cout &lt;&lt; &quot;v1容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;
        v1.push_back(i);
    }
    return 0;
}
/*
v1大小：0
v1容量：0

v1大小：1
v1容量：1

v1大小：2
v1容量：2

v1大小：3
v1容量：4

v1大小：4
v1容量：4

v1大小：5
v1容量：8

v1大小：6
v1容量：8

v1大小：7
v1容量：8

v1大小：8
v1容量：8

v1大小：9
v1容量：16

v1大小：10
v1容量：16

v1大小：11
v1容量：16

v1大小：12
v1容量：16

v1大小：13
v1容量：16

v1大小：14
v1容量：16

v1大小：15
v1容量：16

v1大小：16
v1容量：16

v1大小：17
v1容量：32

v1大小：18
v1容量：32

v1大小：19
v1容量：32

v1大小：20
v1容量：32

v1大小：21
v1容量：32

v1大小：22
v1容量：32

v1大小：23
v1容量：32

v1大小：24
v1容量：32

v1大小：25
v1容量：32

v1大小：26
v1容量：32

v1大小：27
v1容量：32

v1大小：28
v1容量：32

v1大小：29
v1容量：32
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>capacity 到临界点会自动扩容，2倍？</li></ul></blockquote><h4 id="vector-插入和删除" tabindex="-1"><a class="header-anchor" href="#vector-插入和删除" aria-hidden="true">#</a> vector 插入和删除</h4><p>功能描述：</p><ul><li>对vector容器进行插入、删除操作</li></ul><p>函数原型：</p><ul><li><code>void push_back(elem);</code><ul><li>尾部插入元素elem</li></ul></li><li><code>void pop_back();</code><ul><li>删除最后一个元素</li></ul></li><li><code>insert(const_iterator pos,elem);</code><ul><li>pos位置插入元素elem，pos是一个迭代器</li></ul></li><li><code>insert(const_iterator pos,int count,elem);</code><ul><li>从迭代器pos的位置开始插入count个元素elem</li></ul></li><li><code>erase(const_iterator pos)</code><ul><li>删除迭代器指向的元素</li></ul></li><li><code>erase(const_iterator start,const_iterator end);</code><ul><li>删除 迭代器start 到 迭代器end 之间的元素</li></ul></li><li><code>clear();</code><ul><li>删除容器中所有元素</li></ul></li></ul><p>示例：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;

    //尾插
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);
    cout &lt;&lt; &quot;尾插：&quot;;
    printVector(v1);

    //尾删
    v1.pop_back();
    cout &lt;&lt; &quot;尾删：&quot;;
    printVector(v1);

    //插入
    v1.insert(v1.begin(), 100);
    cout &lt;&lt; &quot;插入：&quot;;
    printVector(v1);

    //插入n个元素
    v1.insert(v1.begin(), 2, 200);
    cout &lt;&lt; &quot;插入n个元素：&quot;;
    printVector(v1);

    //指定位置插入元素
    v1.insert(v1.begin() + 5, 25);
    cout &lt;&lt; &quot;指定位置插入元素：&quot;;
    printVector(v1);

    //删除迭代器指向的元素
    v1.erase(v1.begin());
    cout &lt;&lt; &quot;删除迭代器指向的元素：&quot;;
    printVector(v1);

    //删除指定位置元素
    v1.erase(v1.begin() + 4);
    cout &lt;&lt; &quot;删除指定位置元素：&quot;;
    printVector(v1);

    //删除区间元素
    v1.erase(v1.begin(), v1.begin() + 2);
    cout &lt;&lt; &quot;删除区间元素：&quot;;
    printVector(v1);

    //清空元素
    //v1.erase(v1.begin(), v1.end());
    v1.clear();
    cout &lt;&lt; &quot;清空元素：&quot;;
    printVector(v1);

    return 0;
}

/*output：
尾插：10 20 30 40 50 
尾删：10 20 30 40 
插入：100 10 20 30 40 
插入n个元素：200 200 100 10 20 30 40 
指定位置插入元素：200 200 100 10 20 25 30 40 
删除迭代器指向的元素：200 100 10 20 25 30 40 
删除指定位置元素：200 100 10 20 30 40 
删除区间元素：10 20 30 40 
清空元素：
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vector-数据存取" tabindex="-1"><a class="header-anchor" href="#vector-数据存取" aria-hidden="true">#</a> vector 数据存取</h4><p><strong>功能描述：</strong></p><ul><li>对vector数据的存储操作</li></ul><p><strong>函数原型：</strong></p><ul><li><code>at(int idx);</code><ul><li>返回索引idx指向的元素引用</li></ul></li><li><code>operator[];</code><ul><li>返回索引idx指向的元素引用</li></ul></li><li><code>front();</code><ul><li>返回容器的第一个元素引用</li></ul></li><li><code>back();</code><ul><li>返回容器的最后一个元素引用</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);

    int &amp;i1 = v1[1];
    cout &lt;&lt; i1 &lt;&lt; endl;
    i1 = 200;
    cout &lt;&lt; v1[1] &lt;&lt; endl;

    int &amp;i3 = v1.at(2);
    cout &lt;&lt; i3 &lt;&lt; endl;
    i3 = 300;
    cout &lt;&lt; v1.at(2) &lt;&lt; endl;

    int &amp;front = v1.front();
    cout &lt;&lt; front &lt;&lt; endl;
    front = 100;
    cout &lt;&lt; v1.front() &lt;&lt; endl;

    int &amp;back = v1.back();
    cout &lt;&lt; back &lt;&lt; endl;
    back = 100;
    cout &lt;&lt; v1.back() &lt;&lt; endl;

    printVector(v1);
    
    return 0;
}
/*output:
20
200
30
300
10
100
50
100
100 200 300 40 100 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>它们返回都是引用</li></ul></blockquote><h4 id="vector-容器元素互换" tabindex="-1"><a class="header-anchor" href="#vector-容器元素互换" aria-hidden="true">#</a> vector 容器元素互换</h4><p><strong>功能描述：</strong></p><ul><li>实现两个容器内元素互换</li></ul><p><strong>函数原型：</strong></p><ul><li><code>swap(vec);</code><ul><li>和vec互换元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 1; i &lt; 10; ++i) v1.push_back(i);
    for (int i = 10; i &gt; 0; i--) v2.push_back(i);
    printVector(v1);
    printVector(v2);
    cout &lt;&lt; &quot;v1大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v1容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;
    cout &lt;&lt; &quot;v2大小：&quot; &lt;&lt; v2.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v2容量：&quot; &lt;&lt; v2.capacity() &lt;&lt; endl &lt;&lt; endl;

    v1.swap(v2);
    cout &lt;&lt; &quot;swapped：&quot; &lt;&lt; endl;
    printVector(v1);
    printVector(v2);
    cout &lt;&lt; &quot;v1大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v1容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;
    cout &lt;&lt; &quot;v2大小：&quot; &lt;&lt; v2.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v2容量：&quot; &lt;&lt; v2.capacity() &lt;&lt; endl &lt;&lt; endl;


    vector&lt;int&gt; v3;
    for (int i = 0; i &lt; 100000; ++i) v3.push_back(i);
    cout &lt;&lt; &quot;v3大小：&quot; &lt;&lt; v3.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v3容量：&quot; &lt;&lt; v3.capacity() &lt;&lt; endl &lt;&lt; endl;

    v3.resize(3);//resize后，容量capacity()并没有变
    cout &lt;&lt; &quot;v3大小：&quot; &lt;&lt; v3.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v3容量：&quot; &lt;&lt; v3.capacity() &lt;&lt; endl &lt;&lt; endl;

    vector&lt;int&gt;(v3).swap(v3);//匿名对象//这样可以实现收缩内存（容量），capacity()=3
    cout &lt;&lt; &quot;v3大小：&quot; &lt;&lt; v3.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v3容量：&quot; &lt;&lt; v3.capacity() &lt;&lt; endl &lt;&lt; endl;
    return 0;
}
/*output:
1 2 3 4 5 6 7 8 9 
10 9 8 7 6 5 4 3 2 1 
v1大小：9
v1容量：16

v2大小：10
v2容量：16

swapped：
10 9 8 7 6 5 4 3 2 1 
1 2 3 4 5 6 7 8 9 
v1大小：10
v1容量：16

v2大小：9
v2容量：16

v3大小：100000
v3容量：131072

v3大小：3
v3容量：131072

v3大小：3
v3容量：3
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>swap 可以使两个容器互换，可以达到实用的收缩内存效果。</li></ul></blockquote><h4 id="vector-预留空间" tabindex="-1"><a class="header-anchor" href="#vector-预留空间" aria-hidden="true">#</a> vector 预留空间</h4><p><strong>功能描述：</strong></p><ul><li>减少vector在动态扩容时的扩展次数</li></ul><p><strong>函数原型：</strong></p><ul><li><code>reserve(int len);</code><ul><li>容器预留len个元素长度，预留位置不初始化，元素不可访问</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    vector&lt;int&gt; v1;
    cout &lt;&lt; &quot;v1大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v1容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;
    //cout &lt;&lt; v1[2] &lt;&lt; endl;  //未初始化，不可访问
    v1.reserve(100000);
    for (int i = 0; i &lt; 100000; ++i) v1.push_back(i);
    cout &lt;&lt; &quot;v1大小：&quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;v1容量：&quot; &lt;&lt; v1.capacity() &lt;&lt; endl &lt;&lt; endl;
    return 0;
}
/*output：
v1大小：0
v1容量：0

v1大小：100000
v1容量：100000
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>如果数据量较大，或者已确定长度，可以一开始就利用reserve预留空间</li></ul></blockquote><h3 id="deque-容器" tabindex="-1"><a class="header-anchor" href="#deque-容器" aria-hidden="true">#</a> deque 容器</h3><h4 id="deque容器基本概念" tabindex="-1"><a class="header-anchor" href="#deque容器基本概念" aria-hidden="true">#</a> deque容器基本概念</h4><p><strong>功能：</strong></p><ul><li>双端数组，可以对头端进行插入删除操作</li></ul><p><strong>deque 和 vector 区别：</strong></p><ul><li>vector对于头部的插入删除效率低，数据量越大，效率越低</li><li>deque相对而言，对头部的插入删除操作速度会比vector快</li><li>vector访问元素时的速度会比deque快，这和两者内部实现有关</li><li><img src="https://cxrs.oss-cn-shenzhen.aliyuncs.com/202209021457288.jpg" alt="clip_image002-1547547642923" style="zoom:67%;"></li></ul><p><strong>deque内部工作原理：</strong></p><ul><li>deque内部有个<strong>中控器</strong>，维护每段缓冲区的内容，缓冲区中存放真实数据，中控器维护的是每个缓冲区的地址，使得使用deque时像一片连续的内存空间</li></ul><img src="https://cxrs.oss-cn-shenzhen.aliyuncs.com/202209021459586.jpg" alt="clip_image002-1547547896341" style="zoom:67%;"><ul><li>deque容器的迭代器也是支持随机访问的</li></ul><h4 id="deque-构造函数" tabindex="-1"><a class="header-anchor" href="#deque-构造函数" aria-hidden="true">#</a> deque 构造函数</h4><p><strong>功能描述：</strong></p><ul><li>deque容器构造</li></ul><p><strong>构造函数原型：</strong></p><ul><li><code>deque&lt;T&gt; ();</code><ul><li>默认构造函数</li></ul></li><li><code>deque(begin, end);</code><ul><li>拷贝 q.begin到 q.end 之间的元素给deque</li></ul></li><li><code>deque(n, elem);</code><ul><li>将n个elem拷贝给deque</li></ul></li><li><code>deque(const deque &amp;deq);</code><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>示例：</strong></p><p><strong>common.h</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;deque&gt;

using namespace std;

template&lt;typename T&gt;
void printDeque(deque&lt;T&gt; d) {
    for (typename deque&lt;T&gt;::iterator it = d.begin(); it != d.end(); it++) {
        cout &lt;&lt; *it &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>test1.cpp</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    deque&lt;int&gt; d1;
    for (int i = 0; i &lt; 10; ++i) {
        d1.push_back(i);
    }
    printDeque(d1);

    deque&lt;int&gt; d2(d1.begin(), d1.begin() + 5);
    printDeque(d2);

    deque&lt;int&gt; d3(5, 20);
    printDeque(d3);

    deque&lt;int&gt; d4(d3);
    printDeque(d4);
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 
20 20 20 20 20 
20 20 20 20 20 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>deque容器和vector容器的构造方式几乎一致，灵活使用即可。</p></blockquote><h4 id="deque-赋值操作" tabindex="-1"><a class="header-anchor" href="#deque-赋值操作" aria-hidden="true">#</a> deque 赋值操作</h4><p><strong>功能描述：</strong></p><ul><li>给deque容器赋值</li></ul><p><strong>函数原型：</strong></p><ul><li><code>deque &amp; operator=(const deque &amp;deq);</code><ul><li>重载=操作符</li></ul></li><li><code>assign(begin, end);</code><ul><li>将 begin ～ end之间的元素给deque</li></ul></li><li><code>assign(n, elem);</code><ul><li>将n个elem拷贝赋值给deque</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    deque&lt;int&gt; d1;
    for (int i = 0; i &lt; 10; ++i) {
        d1.push_back(i);
    }
    printDeque(d1);

    deque&lt;int&gt; d2 = d1;
    printDeque(d2);

    deque&lt;int&gt; d3;
    d3.assign(d2.begin() + 5, d2.end());
    printDeque(d3);

    deque&lt;int&gt; d4;
    d4.assign(5, 50);
    printDeque(d4);
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 5 6 7 8 9 
5 6 7 8 9 
50 50 50 50 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><p>deque赋值操作与vector相同，需熟练掌握</p></blockquote><h4 id="deque-的容量和大小" tabindex="-1"><a class="header-anchor" href="#deque-的容量和大小" aria-hidden="true">#</a> deque 的容量和大小</h4><p><strong>功能描述：</strong></p><ul><li>获取deque的容量和大小，并操作。</li></ul><p><strong>函数原型：</strong></p><ul><li><code>empty();</code><ul><li>返回容器是否为空</li></ul></li><li><code>size();</code><ul><li>返回容器中元素的个数</li></ul></li><li><code>resize(int num);</code><ul><li>重新指定容器的长度为num</li><li>如果容器变长，默认值填充新位置</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li><li><code>resize(int num, elem);</code><ul><li>重新指定容器的长度为num</li><li>如果容器变长，elem填充新位置</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    deque&lt;int&gt; d1;
    cout &lt;&lt; &quot;deque is empty : &quot; &lt;&lt; d1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;size  of deque : &quot; &lt;&lt; d1.size() &lt;&lt; endl;
    for (int i = 0; i &lt; 10; ++i) {
        d1.push_back(i);
    }
    cout &lt;&lt; &quot;deque is empty : &quot; &lt;&lt; d1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;size  of deque : &quot; &lt;&lt; d1.size() &lt;&lt; endl;

    printDeque(d1);
    d1.resize(5);
    printDeque(d1);
    d1.resize(10);
    printDeque(d1);

    d1.resize(5, 10);
    printDeque(d1);
    d1.resize(10, 10);
    printDeque(d1);


    return 0;
}
/*output:
deque is empty : 1
size  of deque : 0
deque is empty : 0
size  of deque : 10
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 
0 1 2 3 4 0 0 0 0 0 
0 1 2 3 4 
0 1 2 3 4 10 10 10 10 10 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deque-插入和删除" tabindex="-1"><a class="header-anchor" href="#deque-插入和删除" aria-hidden="true">#</a> deque 插入和删除</h4><p><strong>功能描述：</strong></p><ul><li>向deque容器中插入和删除数据</li></ul><p><strong>函数原型：</strong></p><ul><li><p><code>push_front(elem);</code></p><ul><li>添加一个元素到容器头部</li></ul></li><li><p><code>push_back(elem);</code></p><ul><li>添加一个元素到容器尾部</li></ul></li><li><p><code>pop_front();</code></p><ul><li>删除第一个元素</li></ul></li><li><p><code>pop_back();</code></p><ul><li>删除最后一个元素</li></ul></li><li><p><code>insert(iterator pos,elem);</code></p><ul><li>在pos位置插入elem的拷贝，返回新数据的指针</li></ul></li><li><p><code>insert(pos, n, elem);</code></p><ul><li>在pos位置插入多个elem，无返回值</li></ul></li><li><p><code>insert(pos,begin,end);</code></p><ul><li>在pos插入另一个容器的迭代器 begin ～ end 之间的数据，无返回值</li></ul></li><li><p><code>clear();</code></p><ul><li>清空容器的所有数据</li></ul></li><li><p><code>erase(begin,end);</code></p><ul><li>删除迭代器 begin ～ end 之间的元素，返回下一个数据的位置</li></ul></li><li><p><code>erase(pos);</code></p><ul><li>删除pos位置的雨啊怒，返回下一个数据的位置。</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    deque&lt;int&gt; d1;
    d1.push_back(20);
    d1.push_back(30);
    d1.push_back(40);
    d1.push_back(50);
    d1.push_front(10);
    printDeque(d1);

    d1.pop_back();
    printDeque(d1);

    d1.pop_front();
    printDeque(d1);

    d1.insert(d1.begin() + 1, 25);//插入到索引1的位置
    printDeque(d1);

    d1.insert(d1.begin() + 2, 3, 300);
    printDeque(d1);


    d1.insert(d1.begin() + 1, d1.begin() + 6, d1.end());
    printDeque(d1);

    d1.erase(d1.begin() + 1);
    printDeque(d1);
    d1.erase(d1.begin() + 2, d1.begin() + 5);
    printDeque(d1);

    d1.clear();
    printDeque(d1);
    return 0;
}
/*output: 

10 20 30 40 50 
10 20 30 40 
20 30 40 
20 25 30 40 
20 25 300 300 300 30 40 
20 40 25 300 300 300 30 40 
20 25 300 300 300 30 40 
20 25 30 40 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deque-数据存取" tabindex="-1"><a class="header-anchor" href="#deque-数据存取" aria-hidden="true">#</a> deque 数据存取</h4><p><strong>功能描述：</strong></p><ul><li>对deque中的数据的存取操作</li></ul><p><strong>函数原型：</strong></p><ul><li><code>at(int idx);</code><ul><li>返回索引idx元素的引用</li></ul></li><li><code>operator[];</code><ul><li>返回索引idx元素的引用</li></ul></li><li><code>front();</code><ul><li>返回容器中第一个元素的引用</li></ul></li><li><code>back();</code><ul><li>返回容器中最后一个元素的引用</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    deque&lt;int&gt; d1;
    d1.push_back(100);// index : 2
    d1.push_back(200);// index : 3
    d1.push_front(20);// index : 1
    d1.push_front(10);// index : 0

    printDeque(d1);

    int &amp;i1 = d1.front();
    int &amp;i2 = d1.at(1);
    int &amp;i3 = d1[2];
    int &amp;i4 = d1.back();

    i1 = 100;
    i2 = 200;
    i3 = 300;
    i4 = 400;

    printDeque(d1);
    
    return 0;
}

/*output: 
10 20 100 200 
100 200 300 400 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deque-排序" tabindex="-1"><a class="header-anchor" href="#deque-排序" aria-hidden="true">#</a> deque 排序</h4><p><strong>功能描述：</strong></p><ul><li>利用算法实现对deque容器元素排序</li></ul><p><strong>算法：</strong></p><ul><li><code>sort(iterator begin, itrator end)</code><ul><li>对begin和end区间内元素进行排序</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
#include &lt;algorithm&gt;

int main() {
    deque&lt;int&gt; d1;
    d1.push_back(20);
    d1.push_back(5);
    d1.push_back(30);
    d1.push_back(8);

    printDeque(d1);
    //升序
    sort(d1.begin(), d1.end());
    printDeque(d1);

    //降序
    sort(d1.rbegin(), d1.rend());
    printDeque(d1);
    return 0;
}
/*output:
20 5 30 8 
5 8 20 30 
30 20 8 5 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>rbegin 和 rend 应该代表的是：从右边数过来的开头和结尾</li></ul></blockquote><h3 id="stack-容器" tabindex="-1"><a class="header-anchor" href="#stack-容器" aria-hidden="true">#</a> stack 容器</h3><h4 id="stack基本概念" tabindex="-1"><a class="header-anchor" href="#stack基本概念" aria-hidden="true">#</a> stack基本概念</h4><p><strong>概念：</strong></p><ul><li>Stack是一种先进后出（First In Last Out , FILO）的数据结构，它只有一个出口</li></ul><p>栈中只有顶端的元素才可以被外界使用，因此栈不允许有遍历行为</p><ul><li>栈中存入数据称为：入栈 <code>push</code></li><li>栈中弹出数据称为：出栈 <code>pop</code></li></ul><h4 id="stack-常用接口" tabindex="-1"><a class="header-anchor" href="#stack-常用接口" aria-hidden="true">#</a> stack 常用接口</h4><p><strong>功能描述：</strong></p><ul><li>栈常用的对外开放接口</li></ul><p><strong>构造函数：</strong></p><ul><li><code>stack&lt;T&gt; stk;</code><ul><li>stack采用模板类实现，stack对象的默认构造形式（函数）</li></ul></li><li><code>stack(const stack &amp;stk)</code><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>赋值操作：</strong></p><ul><li><code>stack&amp; operator=(const stack &amp;stk);</code><ul><li>重载等号运算符</li></ul></li></ul><p><strong>数据存取：</strong></p><ul><li><code>push(elem);</code><ul><li>向栈顶添加元素</li></ul></li><li><code>pop();</code><ul><li>移除栈顶的一个元素</li></ul></li><li><code>top();</code><ul><li>返回栈顶元素</li></ul></li></ul><p><strong>状态操作：</strong></p><ul><li><code>empty();</code><ul><li>判断栈是否为空</li></ul></li><li><code>size();</code><ul><li>返回栈的大小</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;stack&gt;

using namespace std;

int main() {
    stack&lt;int&gt; stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout &lt;&lt; &quot;size of stack : &quot; &lt;&lt; stack.size() &lt;&lt; endl;

    while (!stack.empty()) {
        cout &lt;&lt; stack.top() &lt;&lt; &#39; &#39;;
        stack.pop();
    }

    cout &lt;&lt; endl &lt;&lt; &quot;size of stack : &quot; &lt;&lt; stack.size() &lt;&lt; endl;
    return 0;
}
/*output:
size of stack : 3
30 20 10 
size of stack : 0
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queue-容器" tabindex="-1"><a class="header-anchor" href="#queue-容器" aria-hidden="true">#</a> queue 容器</h3><h4 id="queue-基本概念" tabindex="-1"><a class="header-anchor" href="#queue-基本概念" aria-hidden="true">#</a> queue 基本概念</h4><p><strong>概念：</strong></p><ul><li>Queue 是一种先进先出（First In First Out , FIFO）的数据结构，它有两个出口</li></ul><p>队列容器允许从一端新增元素，另一端 移除元素</p><p>队列中只有队头和队尾才可以被外界使用，因此队列不允许有遍历行为</p><ul><li>队列中新增数据称为：入队 <code>push</code></li><li>队列中移除数据称为：出队 <code>pop</code></li></ul><h4 id="queue-常用接口" tabindex="-1"><a class="header-anchor" href="#queue-常用接口" aria-hidden="true">#</a> queue 常用接口</h4><p><strong>功能描述：</strong></p><ul><li>栈容器常用的对外接口</li></ul><p><strong>构造函数：</strong></p><ul><li><code>queue&lt;T&gt; que;</code><ul><li>queue采用模板类实现，queue对象的默认构造形式（函数）</li></ul></li><li><code>queue(const queue &amp;que);</code><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>赋值操作：</strong></p><ul><li><code>queue&amp; operator=(const queue &amp;que);</code><ul><li>重载等号操作符</li></ul></li></ul><p><strong>数据存取：</strong></p><ul><li><p><code>push(elem);</code></p><ul><li>往队尾添加元素</li></ul></li><li><p><code>pop()</code></p><ul><li>移除队头元素</li></ul></li><li><p><code>front();</code></p><ul><li>返回队头元素</li></ul></li><li><p><code>back();</code></p><ul><li>返回队尾元素</li></ul></li></ul><p><strong>状态操作：</strong></p><ul><li><code>empty();</code><ul><li>判断队列是否为空</li></ul></li><li><code>size();</code><ul><li>返回堆的大小</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;queue&gt;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }
};

int main() {
    queue&lt;Person&gt; queue;
    queue.push(Person(&quot;ZhanSan&quot;, 50));
    queue.push(Person(&quot;LiSi&quot;, 52));
    queue.push(Person(&quot;WanWu&quot;, 56));
    queue.push(Person(&quot;ZhaoLiu&quot;, 58));
    queue.push(Person(&quot;Forget Seven&quot;, 60));

    while (!queue.empty()) {
        cout &lt;&lt; &quot;front:  name : &quot; &lt;&lt; queue.front().name &lt;&lt; &quot; , age = &quot; &lt;&lt; queue.front().age &lt;&lt; endl;
        cout &lt;&lt; &quot;forget :  name : &quot; &lt;&lt; queue.back().name &lt;&lt; &quot; , age = &quot; &lt;&lt; queue.back().age &lt;&lt; endl;
        queue.pop();
        cout &lt;&lt; endl;
    }

    return 0;
}
/*output:
front:  name : ZhanSan , age = 50
back :  name : Forgot Seven , age = 60

front:  name : LiSi , age = 52
back :  name : Forgot Seven , age = 60

front:  name : WanWu , age = 56
back :  name : Forgot Seven , age = 60

front:  name : ZhaoLiu , age = 58
back :  name : Forgot Seven , age = 60

front:  name : Forgot Seven , age = 60
back :  name : Forgot Seven , age = 60
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>push 和 front 才是先进先出，push 和 back 是先进后出（和栈一样）</li></ul></blockquote><h3 id="list-容器" tabindex="-1"><a class="header-anchor" href="#list-容器" aria-hidden="true">#</a> list 容器</h3><h4 id="list-基本概念" tabindex="-1"><a class="header-anchor" href="#list-基本概念" aria-hidden="true">#</a> list 基本概念</h4><p><strong>功能：</strong></p><ul><li>存储数据的容器，内部实现是链表</li></ul><p>链表是一种物理存储单元上非连续的存储结构，数据元素的逻辑顺序是通过链表中的指针链实现的</p><p><strong>链表的组成：</strong></p><ul><li>链表由一系列结点组成</li></ul><p><strong>结点的组成：</strong></p><ul><li>一个数存储元素的<strong>数据域</strong></li><li>另一个是存储下一个结点地址的<strong>指针域</strong></li></ul><p><strong>STL中的链表是一个双向循环链表</strong></p><p>由于链表的存储方式并不是连续的内存空间，因此链表list中的迭代器只支持前移或后移，属于<strong>双向迭代器</strong></p><p><strong>list的优点：</strong></p><ul><li>采用动态内存分配，不会造成内存浪费和溢出</li><li>链表执行插入和删除操作十分方便，修改指针即可，不需要移动大量元素</li></ul><p><strong>list的缺点</strong></p><ul><li>链表灵活，但是空间（指针域）和时间（遍历）额外消耗较大</li></ul><p>List有一个重要的性质，插入操作和删除操作都不会造成原有list迭代器的实效，这在vector是不成立的。</p><p>总结：</p><ul><li>STL中 list 和 vector 是两个最常被使用的容器，各有优缺点</li></ul><h4 id="list-构造函数" tabindex="-1"><a class="header-anchor" href="#list-构造函数" aria-hidden="true">#</a> list 构造函数</h4><p><strong>功能描述：</strong></p><ul><li>创建list容器</li></ul><p><strong>函数原型：</strong></p><ul><li><code>list&lt;T&gt; lst;</code><ul><li>list采用模板类实现，对象的默认构造形式（函数）</li></ul></li><li><code>list(begin, end);</code><ul><li>构造函数将 begin ～ end 之间的元素拷贝给list</li></ul></li><li><code>list(n,elem);</code><ul><li>构造函数将 n 个 elem 拷贝给list</li></ul></li><li><code>list(const list &amp;lst);</code><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
using namespace std;

int main(){
    list&lt;int&gt; lst1;
    lst1.push_back(10);
    lst1.push_back(20);
    lst1.push_back(30);
    lst1.push_back(40);
    printList(lst1);

    list&lt;int&gt; lst2(lst1.begin(), lst1.end());//lst1.begin() + 2)  //不支持索引
    printList(lst2);

    list&lt;int&gt; lst3(10, 10);
    printList(lst3);

    list&lt;int&gt; lst4(lst3);
    printList(lst4);
    return 0;
}
/*output:
10 20 30 40 
10 20 30 40 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="赋值和交换" tabindex="-1"><a class="header-anchor" href="#赋值和交换" aria-hidden="true">#</a> 赋值和交换</h4><p><strong>功能描述：</strong></p><ul><li>给list容器赋值元素，以及交换list容器内容</li></ul><p><strong>函数原型：</strong></p><ul><li><code>assign(begin, end);</code><ul><li>添加另一个容器的 begin ～ end 之间的元素</li></ul></li><li><code>assign(n, elem);</code><ul><li>添加 n 个 elem 元素到容器</li></ul></li><li><code>list&amp; operator=(const list &amp;lst);</code><ul><li>重载等号运算符</li></ul></li><li><code>swap(lst)</code><ul><li>和参数lst交换元素。</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
using namespace std;

int main(){
    list&lt;int&gt; lst1;
    lst1.push_back(10);
    lst1.push_back(20);
    lst1.push_back(30);
    lst1.push_back(40);
    printList(lst1);

    list&lt;int&gt; lst2;
    lst2.assign(lst1.begin(), lst1.end());
    printList(lst2);

    list&lt;int&gt; lst3;
    lst3.assign(10, 10);
    printList(lst3);

    list&lt;int&gt; lst4;
    lst4 = lst3;
    printList(lst4);

    lst4.swap(lst1);
    printList(lst1);
    printList(lst4);
    return 0;
}

/*output:
10 20 30 40 
10 20 30 40 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 20 30 40 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-的容量和大小" tabindex="-1"><a class="header-anchor" href="#list-的容量和大小" aria-hidden="true">#</a> list 的容量和大小</h4><p><strong>功能描述：</strong></p><ul><li>查看list容器的容量、大小等状态</li></ul><p><strong>函数原型：</strong></p><ul><li><code>size();</code><ul><li>返回容器中元素个数</li></ul></li><li><code>empty();</code><ul><li>判断容器是否为空</li></ul></li><li><code>resize(int num);</code><ul><li>重新指定容器的长度为num，若容器变长，则以默认值填充新位置。</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li><li><code>resize(int num,elem);</code><ul><li>重新置顶容器的长度为num，若容器变长，则已elem值填充新位置</li><li>如果容器变短，则末尾超出容器长度的元素被删除</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
using namespace std;

int main(){
    list&lt;int&gt; lst1;
    cout &lt;&lt; &quot;lst1 is empty : &quot; &lt;&lt; lst1.empty() &lt;&lt; endl;
    lst1.push_back(10);
    lst1.push_back(20);
    lst1.push_back(30);
    lst1.push_back(40);
    lst1.push_back(50);
    cout &lt;&lt; &quot;lst1 is empty : &quot; &lt;&lt; lst1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;size of lst1 : &quot; &lt;&lt; lst1.size() &lt;&lt; endl;
    printList(lst1);

    lst1.resize(3);
    printList(lst1);
    lst1.resize(5);
    printList(lst1);

    lst1.resize(3, 50);
    printList(lst1);
    lst1.resize(10, 50);
    printList(lst1);

    return 0;
}
/*output:
lst1 is empty : 1
lst1 is empty : 0
size of lst1 : 5
10 20 30 40 50 
10 20 30 
10 20 30 0 0 
10 20 30 
10 20 30 50 50 50 50 50 50 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-插入和删除" tabindex="-1"><a class="header-anchor" href="#list-插入和删除" aria-hidden="true">#</a> list 插入和删除</h4><p><strong>功能描述：</strong></p><ul><li>list 容器插入删除数据</li></ul><p><strong>函数原型：</strong></p><ul><li><code>push_back(elem);</code><ul><li>添加到尾部</li></ul></li><li><code>pop_back();</code><ul><li>删除尾部元素</li></ul></li><li><code>push_front(elem);</code><ul><li>添加到头部</li></ul></li><li><code>pop_front();</code><ul><li>删除头部元素</li></ul></li><li><code>insert(iterator pos, elem);</code><ul><li>在索引pos处插入elem,返回新数据的位置（迭代器）</li></ul></li><li><code>insert(pos, n, elem);</code><ul><li>在索引pos处插入n个elem</li></ul></li><li><code>insert(pos,begin,end);</code><ul><li>在索引pos处插入其他自己或其他容器的迭代器之间的内容</li></ul></li><li><code>clear();</code><ul><li>删除所有元素</li></ul></li><li><code>erase(begin,end);</code><ul><li>删除begin ～ end之间的元素</li></ul></li><li><code>erase(pos)</code><ul><li>删除索引pos处的元素，返回下一个数据的位置（迭代器）</li></ul></li><li><code>remove(elem)</code><ul><li>删除容器中所有与elem值相匹配的元素</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

using namespace std;

int main() {
    list&lt;int&gt; lst;
    lst.push_back(20);
    lst.push_back(30);
    lst.push_front(10);
    lst.push_front(5);
    printList(lst);

    lst.pop_front();
    printList(lst);

    lst.pop_back();
    printList(lst);

    list&lt;int&gt;::iterator it = lst.begin();
    lst.insert(++it, 15);
    printList(lst);

    lst.insert(++it, 3, 30);
    printList(lst);

    lst.insert(lst.begin(), lst.begin(), lst.end());
    printList(lst);

    it = lst.erase(lst.begin());//下一个数据的迭代器
    printList(lst);
    cout &lt;&lt; *it &lt;&lt; endl;//15

    lst.remove(30);
    printList(lst);
    it = lst.begin();
    ++it;
    lst.erase(--it, ++it);
    printList(lst);

    return 0;
}
/*output:
5 10 20 30 
10 20 30 
10 20 
10 15 20 
10 15 20 30 30 30 
10 15 20 30 30 30 10 15 20 30 30 30 
15 20 30 30 30 10 15 20 30 30 30 
15
15 20 10 15 20 
20 10 15 20 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-数据存取" tabindex="-1"><a class="header-anchor" href="#list-数据存取" aria-hidden="true">#</a> list 数据存取</h4><p><strong>功能描述：</strong></p><ul><li>存取容器中的元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>front();</code><ul><li>返回第一个元素的引用</li></ul></li><li><code>back();</code><ul><li>返回最后一个元素的引用</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

using namespace std;

int main() {
    list&lt;int&gt; lst;
    lst.push_back(20);
    lst.push_back(30);
    lst.push_front(10);
    lst.push_front(5);
    //int &amp;i = lst.front();
    cout &lt;&lt; &quot;element of front in the lst : &quot; &lt;&lt; lst.front() &lt;&lt; endl;
    cout &lt;&lt; &quot;element of back in the lst : &quot; &lt;&lt; lst.back() &lt;&lt; endl;
    return 0;
}
/*output:
element at front in the lst : 5
element at back in the lst : 30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-反转和排序" tabindex="-1"><a class="header-anchor" href="#list-反转和排序" aria-hidden="true">#</a> list 反转和排序</h4><p><strong>功能描述：</strong></p><ul><li>将容器中的元素反转</li><li>对容器内的元素进行排序</li></ul><p><strong>函数原型：</strong></p><ul><li><code>reverse();</code><ul><li>反转链表</li></ul></li><li><code>sort();</code><ul><li>链表排序</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

using namespace std;

bool myCompare(int a, int b) {
    return a &gt; b;
}

int main() {
    list&lt;int&gt; lst;
    lst.push_back(20);
    lst.push_back(5);
    lst.push_back(10);
    lst.push_back(8);
    printList(lst);

    lst.reverse();
    printList(lst);

    lst.sort();//默认是升序排序
    printList(lst);

    lst.sort(myCompare);//降序排序
    printList(lst);

    lst.reverse();//也可以使用reverse来反转
    printList(lst);

    return 0;
}
/*output：
20 5 10 8 
8 10 5 20 
5 8 10 20 
20 10 8 5 
5 8 10 20 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>sort是list的成员函数，默认是升序排序，可以使用reverse来变成降序排序</li><li>也可以<strong>自定义对比函数</strong>来实现降序排序 或 <strong>自定义类型排序</strong></li></ul></blockquote><h3 id="set-multiset-容器" tabindex="-1"><a class="header-anchor" href="#set-multiset-容器" aria-hidden="true">#</a> set / multiset 容器</h3><h4 id="set基本概念" tabindex="-1"><a class="header-anchor" href="#set基本概念" aria-hidden="true">#</a> set基本概念</h4><p><strong>简介：</strong></p><ul><li>所有元素都会在插入时自动被排序</li></ul><p><strong>本质：</strong></p><ul><li>set / multiset 属于<strong>关联式容器</strong>，底层实现是二叉树</li></ul><p><strong>set 和 multiset 区别：</strong></p><ul><li>set不允许容器中有重复的元素</li><li>multiset 允许容器中有重复元素</li></ul><h4 id="set-构造和赋值" tabindex="-1"><a class="header-anchor" href="#set-构造和赋值" aria-hidden="true">#</a> set 构造和赋值</h4><p><strong>功能描述：</strong></p><ul><li>创建set容器以及赋值</li></ul><p><strong>构造：</strong></p><ul><li><p><code>set&lt;T&gt; st;</code></p><ul><li>默认构造函数</li></ul></li><li><p><code>set(const set &amp;st);</code></p><ul><li>拷贝构造函数</li></ul></li></ul><p><strong>赋值：</strong></p><ul><li><code>set&amp; operator=(const set &amp;st);</code><ul><li>重载等号操作符</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    set&lt;int&gt; st1;
    st1.insert(40);
    st1.insert(30);
    st1.insert(20);
    st1.insert(50);
    st1.insert(10);
    printSet(st1);

    set&lt;int&gt; st2(st1);
    printSet(st2);


    set&lt;int&gt; st3 = st2;
    printSet(st3);
    return 0;
}
/*output:
10 20 30 40 50 
10 20 30 40 50 
10 20 30 40 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>set 容器插入数据时使用insert</li><li>set 容器插入的数据会自动排序</li></ul></blockquote><h4 id="set-大小和交换" tabindex="-1"><a class="header-anchor" href="#set-大小和交换" aria-hidden="true">#</a> set 大小和交换</h4><p><strong>功能描述：</strong></p><ul><li>获取 set 容器大小</li><li>交换set容器内容</li></ul><p><strong>函数原型：</strong></p><ul><li><code>size();</code><ul><li>返回元素个数</li></ul></li><li><code>empty();</code><ul><li>判断容器是否为空</li></ul></li><li><code>swap(st);</code><ul><li>交换两个集合内容</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    set&lt;int&gt; st1;
    st1.insert(40);
    st1.insert(30);
    st1.insert(20);
    st1.insert(50);
    st1.insert(10);
    printSet(st1);

    cout &lt;&lt; &quot;st1 is empty : &quot; &lt;&lt; st1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;size of st1 : &quot; &lt;&lt; st1.size() &lt;&lt; endl;

    set&lt;int&gt; st2;
    st2.insert(70);
    st2.insert(60);
    st2.insert(90);
    printSet(st2);

    st1.swap(st2);
    printSet(st1);
    printSet(st2);
    return 0;
}
/*output:
10 20 30 40 50 
st1 is empty : 0
size of st1 : 5
60 70 90 
60 70 90 
10 20 30 40 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-插入和删除" tabindex="-1"><a class="header-anchor" href="#set-插入和删除" aria-hidden="true">#</a> set 插入和删除</h4><p><strong>功能描述：</strong></p><ul><li>插入数据和删除数据</li></ul><p><strong>函数原型：</strong></p><ul><li><code>insert(elem);</code><ul><li>插入元素</li></ul></li><li><code>clear();</code><ul><li>清空所有元素</li></ul></li><li><code>erase(iterator pos);</code><ul><li>删除pos迭代器指向的元素，返回下一个元素位置的迭代器</li></ul></li><li><code>erase(iterator begin, iterator end);</code><ul><li>删除 begin ～ end 之间的元素，返回下一个元素位置的迭代器</li></ul></li><li><code>erase(elem);</code><ul><li>删除元素中值为elem的元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    set&lt;int&gt; st1;
    st1.insert(40);
    st1.insert(30);
    st1.insert(20);
    st1.insert(50);
    st1.insert(10);
    printSet(st1);//10 20 30 40 50

    st1.erase(++st1.begin());//st1.begin() + 2 //不支持随机访问
    printSet(st1);

    auto first = st1.begin();
    auto last = st1.begin();
    int i = 0;
    while (i &lt; 2) {
        last++;
        i++;
    }

    st1.erase(first, last);//0 ~ 2
    printSet(st1);

    st1.erase(50);
    printSet(st1);

    st1.clear();
    printSet(st1);

    return 0;
}

/*output:
10 20 30 40 50 
10 30 40 50 
40 50 
40 

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-查找和统计" tabindex="-1"><a class="header-anchor" href="#set-查找和统计" aria-hidden="true">#</a> set 查找和统计</h4><h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4><ul><li>查找数据</li><li>统计数据</li></ul><p><strong>函数原型：</strong></p><ul><li><code>find(key);</code><ul><li>查找key是否存在，若存在返回该key的位置的迭代器</li><li>若不存在，返回set.end();</li></ul></li><li><code>count(key);</code><ul><li>统计key元素的个数</li><li>（只会是0 或 1，因为set会自动排序和去重）</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    set&lt;int&gt; st1;
    st1.insert(40);
    st1.insert(30);
    st1.insert(20);
    st1.insert(50);
    st1.insert(10);

    cout &lt;&lt; &quot;count of element 30 in st1 : &quot; &lt;&lt; st1.count(30) &lt;&lt; endl;
    cout &lt;&lt; &quot;count of element 100 in st1 : &quot; &lt;&lt; st1.count(100) &lt;&lt; endl;

    set&lt;int&gt;::iterator it;
    it = st1.find(30);
    cout &lt;&lt; &quot;find element : &quot; &lt;&lt; *it &lt;&lt; endl;
    it = st1.find(5);
    cout &lt;&lt; &quot;find element : &quot; &lt;&lt; *it &lt;&lt; endl;
    
    return 0;
}
/*output:
count of element 30 in st1 : 1
count of element 100 in st1 : 0
find element : 30
find element : 0
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-和-multiset的区别" tabindex="-1"><a class="header-anchor" href="#set-和-multiset的区别" aria-hidden="true">#</a> set 和 multiset的区别</h4><p><strong>区别：</strong></p><ul><li>set 不可以插入重复数据，而 multiset 可以</li><li>set 插入数据的同时会返回插入结果，表示是否成功</li><li>multiset 不会检测数据，因此可以插入重复数据</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    set&lt;int&gt; st1;
    pair&lt;set&lt;int&gt;::iterator, bool&gt; it = st1.insert(10);
    cout &lt;&lt; *it.first &lt;&lt; endl; //first 指向插入元素的指针
    cout &lt;&lt; it.second &lt;&lt; endl;//second 插入是否成功
    it = st1.insert(10);
    cout &lt;&lt; *it.first &lt;&lt; endl; //first 指向插入元素的指针
    cout &lt;&lt; it.second &lt;&lt; endl;//second 插入是否成功

    cout &lt;&lt; &quot;-------multiset---------&quot; &lt;&lt; endl;
    multiset&lt;int&gt; mst;
    multiset&lt;int&gt;::iterator it2 = mst.insert(10);
    it2 = mst.insert(10);
    it2 = mst.insert(20);
    it2 = mst.insert(10);
    cout &lt;&lt; *it2 &lt;&lt; endl &lt;&lt; endl;
    for (multiset&lt;int&gt;::iterator it = mst.begin(); it != mst.end(); it++) {
        cout &lt;&lt; *it &lt;&lt; endl;
    }

    return 0;
}
/*output:
10
1
10
0
-------multiset---------
10

10
10
10
20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>set 插入数据有会返回 一个对 <code>pair&lt;set&lt;int&gt;::iterator, bool&gt; it</code>， <ul><li><code>it.first</code> ： 存入值的迭代器（指针）</li><li><code>it.second</code> ：插入是否成功</li></ul></li><li>不允许插入重复数据使用 set</li><li>运行插入重复数据使用 multiset</li><li><strong>它们两个都会自动排序</strong></li></ul></blockquote><h4 id="pair-对组" tabindex="-1"><a class="header-anchor" href="#pair-对组" aria-hidden="true">#</a> pair 对组</h4><p><strong>功能描述：</strong></p><ul><li>成对的数据，可以用对组</li></ul><p><strong>两种创建方式：</strong></p><ul><li><code>pair&lt;type, type&gt; p(value1, value2);</code></li><li><code>pair&lt;type, type&gt; p = make_pair(value1, value2);</code></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    pair&lt;int, string&gt; p1(10, &quot;Hello&quot;);
		pair&lt;string, int&gt; p2=make_pair(&quot;Hello&quot;, 20);

    cout &lt;&lt; p1.first &lt;&lt; &#39;-&#39; &lt;&lt; p1.second &lt;&lt; endl;
    cout &lt;&lt; p2.first &lt;&lt; &#39;-&#39; &lt;&lt; p2.second &lt;&lt; endl;

    return 0;
}
/*output:
10-Hello
Hello-20
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>两种方式都可以创建对组，记住一种即可</li></ul></blockquote><h4 id="set-容器排序" tabindex="-1"><a class="header-anchor" href="#set-容器排序" aria-hidden="true">#</a> set 容器排序</h4><p><strong>目标：</strong></p><ul><li>set容器默认排序规则为从小到大，掌握如何改变排序规则</li></ul><p><strong>主要技术点：</strong></p><ul><li>利用仿函数，可以改变排序规则</li></ul><p><strong>示例一：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

class MyCompare {
public:
    bool operator()(int a, int b) {
        return a &gt; b;
    }
};

int main() {
    set&lt;int&gt; s1; //默认排序规则：从小到大
    s1.insert(30);
    s1.insert(4);
    s1.insert(40);
    s1.insert(1);
    printSet(s1);

    set&lt;int, MyCompare&gt; s2;//自定义排序规则，利用反函数
    s2.insert(30);
    s2.insert(4);
    s2.insert(40);
    s2.insert(1);

    for (set&lt;int, MyCompare&gt;::iterator it = s2.begin(); it != s2.end(); it++) {
        cout &lt;&lt; *it &lt;&lt; &#39; &#39;;
    }
    cout &lt;&lt; endl;

    return 0;
}
/*output：
1 4 30 40 
40 30 4 1 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例二（存放自定义类型）：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }
};

class PersonCompare {
public:
    bool operator()(const Person &amp;a, const Person &amp;b) {
        return a.age &gt; b.age;
    }
};

int main() {
    set&lt;Person, PersonCompare&gt; s1;
    s1.insert(Person(&quot;Person1&quot;, 20));
    s1.insert(Person(&quot;Person2&quot;, 10));
    s1.insert(Person(&quot;Person3&quot;, 40));
    s1.insert(Person(&quot;Person4&quot;, 6));

    for (typename set&lt;Person, PersonCompare&gt;::iterator it = s1.begin(); it != s1.end(); it++) {
        cout &lt;&lt; it-&gt;name &lt;&lt; &#39;-&#39; &lt;&lt; it-&gt;age &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>对于自定义数据类型，set 必须置顶排序规则才可以插入数据</li></ul></blockquote><h3 id="map-multimap-容器" tabindex="-1"><a class="header-anchor" href="#map-multimap-容器" aria-hidden="true">#</a> map / multimap 容器</h3><h4 id="map-基本概念" tabindex="-1"><a class="header-anchor" href="#map-基本概念" aria-hidden="true">#</a> map 基本概念</h4><p><strong>简介：</strong></p><ul><li>map中所有元素都是pair</li><li>pair中的第一个元素为key（键值），起到索引作用，第二个元素为value（实值）</li><li>所有元素都会根据元素的键值自动排序</li></ul><p><strong>本质：</strong></p><ul><li>map / multimap 属于<strong>关联式容器</strong>，底层是二叉树实现。</li></ul><p><strong>优点：</strong></p><ul><li>map/ multimap 可以根据key快速找到对应的value</li></ul><p><strong>map 和 multimap 的区别：</strong></p><ul><li>map 不允许容器中有重复的key值元素</li><li>multimap 允许容器中有重复的key值元素</li></ul><h4 id="map-构造和赋值" tabindex="-1"><a class="header-anchor" href="#map-构造和赋值" aria-hidden="true">#</a> map 构造和赋值</h4><p><strong>功能描述：</strong></p><ul><li>创建容器</li></ul><p><strong>函数原型：</strong></p><p><strong>构造：</strong></p><ul><li><code>map&lt;T1,T2&gt; mp;</code><ul><li>map 默认构造函数参数</li></ul></li><li><code>map(const map &amp;mp);</code><ul><li>拷贝构造函数</li></ul></li><li><code>map&amp; operator=(const map &amp;mp);</code><ul><li>重载等号运算符</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main(){
    map&lt;int, int&gt; m1;
    m1.insert(pair&lt;int, int&gt;(10, 100));
    m1.insert(pair&lt;int, int&gt;(5, 50));
    m1.insert(make_pair(20, 200));
    printMap(m1);

    map&lt;int, int&gt; m2(m1);
    printMap(m2);

    map&lt;int, int&gt; m3 = m2;
    printMap(m3);
    return 0;
}
/*output：
5-50
10-100
20-200
5-50
10-100
20-200
5-50
10-100
20-200
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>map 中所有元素都是成对出现的，插入数据的时候要使用对组</li></ul></blockquote><h4 id="map-大小和交换" tabindex="-1"><a class="header-anchor" href="#map-大小和交换" aria-hidden="true">#</a> map 大小和交换</h4><p><strong>描述：</strong></p><ul><li>获取map容器大小</li><li>两个map交换数据</li></ul><p><strong>函数原型：</strong></p><ul><li><code>size();</code><ul><li>返回元素个数</li></ul></li><li><code>empty();</code><ul><li>判断容器是否为空</li></ul></li><li><code>swap(st);</code><ul><li>交换两个容器数据</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main(){
    map&lt;int, int&gt; m1;
    m1.insert(pair&lt;int, int&gt;(10, 100));
    m1.insert(pair&lt;int, int&gt;(5, 50));
    m1.insert(make_pair(20, 200));
    cout &lt;&lt; &quot;m1 is empty : &quot; &lt;&lt; m1.empty() &lt;&lt; endl;
    cout &lt;&lt; &quot;size of m1 : &quot; &lt;&lt; m1.size() &lt;&lt; endl;

    map&lt;int, int&gt; m2;
    m2.insert(make_pair(1, 10));
    m2.insert(make_pair(2, 20));

    m1.swap(m2);
    cout &lt;&lt; &quot;-----M1-----&quot; &lt;&lt; endl;
    printMap(m1);
    cout &lt;&lt; &quot;-----M2-----&quot; &lt;&lt; endl;
    printMap(m2);

    return 0;
}
/*output:
m1 is empty : 0
size of m1 : 3
-----M1-----
1-10
2-20
-----M2-----
5-50
10-100
20-200
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map-插入和删除" tabindex="-1"><a class="header-anchor" href="#map-插入和删除" aria-hidden="true">#</a> map 插入和删除</h4><p><strong>描述：</strong></p><ul><li>map 插入数据</li><li>map 删除数据</li></ul><p>函数原型：</p><ul><li><code>insert(elem);</code><ul><li>插入数据</li></ul></li><li><code>clear();</code><ul><li>清空数据</li></ul></li><li><code>erase(pos);</code><ul><li>删除迭代器pos指向的元素，返回下一个元素</li></ul></li><li><code>erase(begin, end);</code><ul><li>删除迭代器 begin ～ end 之间的元素，返回下一个位置的迭代器</li></ul></li><li><code>erase(key);</code><ul><li>删除容器中值为key的元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    map&lt;int, int&gt; m1;
    m1.insert(pair&lt;int, int&gt;(10, 100));
    m1.insert(map&lt;int, int&gt;::value_type(5, 50));
    m1.insert(make_pair(20, 200));
    printMap(m1);

    cout &lt;&lt; endl;
    m1.erase(m1.begin());
    printMap(m1);

    cout &lt;&lt; endl;
    m1.erase(20);
    printMap(m1);

    cout &lt;&lt; endl;
    m1.erase(m1.begin(), m1.end());
    m1.clear();
    printMap(m1);

    return 0;
}

/*output:
5-50
10-100
20-200

10-100
20-200

10-100


*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map-查找和统计个数" tabindex="-1"><a class="header-anchor" href="#map-查找和统计个数" aria-hidden="true">#</a> map 查找和统计个数</h4><p>描述：</p><ul><li>查找和统计个数</li></ul><p>函数原型：</p><ul><li><code>find(key);</code><ul><li>查找key的位置的迭代器，如果没有返回 map.end();</li></ul></li><li><code>count(key);</code><ul><li>统计key为key的元素个数</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

int main() {
    map&lt;int, int&gt; m1;
    m1.insert(pair&lt;int, int&gt;(10, 100));
    m1.insert(map&lt;int, int&gt;::value_type(5, 50));
    m1.insert(make_pair(20, 200));

    map&lt;int, int&gt;::iterator it = m1.find(10);
    cout &lt;&lt; it-&gt;first &lt;&lt; endl;
    it = m1.find(100);
    cout &lt;&lt; it-&gt;first &lt;&lt; endl;//0

    unsigned long count_ten = m1.count(10);
    cout &lt;&lt; &quot;count of ten in the map : &quot; &lt;&lt; count_ten &lt;&lt; endl;
    return 0;
}
/*output:
10
0
count of ten in the map : 1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>count 对于map结果只会是0 或 1 （map不允许有重复的key）</li></ul></blockquote><h4 id="map-容器排序" tabindex="-1"><a class="header-anchor" href="#map-容器排序" aria-hidden="true">#</a> map 容器排序</h4><p><strong>目标：</strong></p><ul><li>map容器默认排序规则是根据key值 从小到大排序</li><li>利用 <strong>仿函数</strong> 如何改变排序规则</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

class MyCompare {
public:
    bool operator()(int a, int b) const {
        return a &gt; b;
    }
};

int main() {
    map&lt;int, int, MyCompare&gt; m1;
    m1.insert(pair&lt;int, int&gt;(10, 100));
    m1.insert(map&lt;int, int&gt;::value_type(5, 50));
    m1.insert(make_pair(20, 200));


    for (map&lt;int, int&gt;::const_iterator it = m1.begin(); it != m1.end(); it++) {
        cout &lt;&lt; it-&gt;first &lt;&lt; &#39;-&#39; &lt;&lt; it-&gt;second &lt;&lt; endl;
    }


    return 0;
}
/*output：
20-200
10-100
5-50
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>利用仿函数可以指定排序规则</li><li>对于自定义数据类型，map必须指定排序规则，同set容器</li></ul></blockquote><h2 id="stl-函数对象" tabindex="-1"><a class="header-anchor" href="#stl-函数对象" aria-hidden="true">#</a> STL 函数对象</h2><h3 id="函数对象" tabindex="-1"><a class="header-anchor" href="#函数对象" aria-hidden="true">#</a> 函数对象</h3><h4 id="函数对象概念" tabindex="-1"><a class="header-anchor" href="#函数对象概念" aria-hidden="true">#</a> 函数对象概念</h4><p><strong>概念：</strong></p><ul><li><strong>重载函数调用操作符</strong>的类，其对象常用<strong>函数对象</strong></li><li><strong>对象</strong>重载的()时，行为类似函数调用，也叫做<strong>仿函数</strong>。</li></ul><p><strong>本质：</strong></p><p>函数对象（仿函数）是一个类，不是一个函数</p><h4 id="函数对象使用" tabindex="-1"><a class="header-anchor" href="#函数对象使用" aria-hidden="true">#</a> 函数对象使用</h4><p><strong>特点：</strong></p><ul><li>函数对象在使用时，可以像普通函数那样调用，可以有参数，可以有返回值</li><li>函数对象超出普通函数的概念，函数对象可以有自己的状态</li><li>函数对象可以作为参数传递</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

//函数对象在使用时，可以像普通函数那样调用，可以有参数，可以有返回值
class MyAdd {
public:
    int operator()(int a, int b) {
        return a + b;
    }
};

//函数对象可以有自己的状态
class MyPrint {
public:
    int count;

    MyPrint() {
        count = 0;
    }

    template&lt;class T&gt;
    void operator()(T v) {
        cout &lt;&lt; v &lt;&lt; endl;
        count++;//统计函数调用次数
    }
};

template &lt;typename T&gt;
void doPrint(MyPrint &amp;p,T val) {
    p(val);
}

int main() {
    cout &lt;&lt; MyAdd()(10, 20) &lt;&lt; endl;
    MyAdd myAdd;
    cout &lt;&lt; myAdd(10, 20) &lt;&lt; endl;
    
    MyPrint p;
    p(&quot;Hello1&quot;);
    p(&quot;Hello2&quot;);
    p(&quot;Hello3&quot;);
    cout &lt;&lt; &quot;call count : &quot; &lt;&lt; p.count &lt;&lt; endl;
    
    doPrint(p, &quot;How are you?&quot;);
    cout &lt;&lt; &quot;call count : &quot; &lt;&lt; p.count &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>仿函数写法非常灵活，同时也可以作为参数进行传递</li></ul></blockquote><h3 id="谓词" tabindex="-1"><a class="header-anchor" href="#谓词" aria-hidden="true">#</a> 谓词</h3><h4 id="谓词概念" tabindex="-1"><a class="header-anchor" href="#谓词概念" aria-hidden="true">#</a> 谓词概念</h4><p><strong>概念：</strong></p><ul><li>返回 bool 类型的仿函数称为 <strong>谓词</strong></li><li>如果 operator() 接受一个参数，叫做一元谓词</li><li>如果 operator() 接受两个参数，叫做二元谓词</li></ul><h4 id="一元谓词" tabindex="-1"><a class="header-anchor" href="#一元谓词" aria-hidden="true">#</a> 一元谓词</h4><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

struct IsTrue {
    bool operator()(int a){
        return !!!!!!!a;
    }
};

int main() {
    cout &lt;&lt; IsTrue()(0) &lt;&lt; endl;
    return 0;
}
/*output:
1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><p>参数只有一个的谓词，称为一元谓词</p></blockquote><h4 id="二元谓词" tabindex="-1"><a class="header-anchor" href="#二元谓词" aria-hidden="true">#</a> 二元谓词</h4><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;

struct Compare {
    bool operator()(int a, int b){
        return a &gt; b;
    }
};

int main() {
    cout &lt;&lt; Compare()(20, 10) &lt;&lt; endl;
    return 0;
}
/*output:
1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><p>参数只有两个的谓词，称为二元谓词</p></blockquote><h3 id="内建函数对象" tabindex="-1"><a class="header-anchor" href="#内建函数对象" aria-hidden="true">#</a> 内建函数对象</h3><h4 id="内建函数对象概念" tabindex="-1"><a class="header-anchor" href="#内建函数对象概念" aria-hidden="true">#</a> 内建函数对象概念</h4><ul><li>STL内置了一些函数对象</li></ul><p><strong>分类：</strong></p><ul><li>算术仿函数</li><li>关系仿函数</li><li>逻辑仿函数</li></ul><p><strong>用法：</strong></p><ul><li>这些仿函数所产生的对象，用法和一般函数完全相同</li><li>使用内建函数对象，需要引入头文件 <code>#include &lt;functional&gt;</code></li></ul><h4 id="算术仿函数" tabindex="-1"><a class="header-anchor" href="#算术仿函数" aria-hidden="true">#</a> 算术仿函数</h4><p><strong>功能描述：</strong></p><ul><li>实现四则运算</li><li>其中negate是一元运算，其他都是二元运算</li></ul><p><strong>仿函数原型：</strong></p><ul><li><code>template &lt;class T&gt; T plus&lt;T&gt;</code><ul><li>加</li></ul></li><li><code>template &lt;class T&gt; T minus&lt;T&gt;</code><ul><li>减</li></ul></li><li><code>template &lt;class T&gt; T multiplies&lt;T&gt;</code><ul><li>乘</li></ul></li><li><code>template &lt;class T&gt; T divides&lt;T&gt;</code><ul><li>除</li></ul></li><li><code>template &lt;class T&gt; T modulus&lt;T&gt;</code><ul><li>取模（余）</li></ul></li><li><code>template &lt;class T&gt; T negate&lt;T&gt;</code><ul><li>正变负</li><li>负变正</li><li>0不变</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
#include &lt;functional&gt;
int main() {
    negate&lt;int&gt; neg;
    cout &lt;&lt; neg(1) &lt;&lt; endl;
    cout &lt;&lt; neg(0) &lt;&lt; endl;

    plus&lt;int&gt; p;
    cout &lt;&lt; p(10, 20) &lt;&lt; endl;
    return 0;
}
/*output:
-1
0
30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>使用内建函数对象时，需要引入头文件 <code>#include &lt;functional&gt;</code></li></ul></blockquote><h4 id="关系仿函数" tabindex="-1"><a class="header-anchor" href="#关系仿函数" aria-hidden="true">#</a> 关系仿函数</h4><p><strong>功能描述：</strong></p><ul><li>实现关系对比</li></ul><p><strong>仿函数原型：</strong></p><ul><li><code>template &lt;class T&gt; bool equal&lt;T&gt;</code><ul><li>等于</li></ul></li><li><code>template &lt;class T&gt; bool not_equal_to&lt;T&gt;</code><ul><li>不等于</li></ul></li><li><code>template &lt;class T&gt; bool greater&lt;T&gt;</code><ul><li>大于</li></ul></li><li><code>template &lt;class T&gt; bool greater_equal&lt;T&gt;</code><ul><li>大于等于</li></ul></li><li><code>template &lt;class T&gt; bool less&lt;T&gt;</code><ul><li>小于</li></ul></li><li><code>template &lt;class T&gt; bool less_equal&lt;T&gt;</code><ul><li>小于等于</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
#include &lt;functional&gt;
#include &lt;vector&gt;

class MyCompare {
public:
    bool operator()(int a, int b) {
        return a &gt; b;
    }
};

int main() {
    vector&lt;int&gt; v;
    v.push_back(30);
    v.push_back(19);
    v.push_back(22);
    v.push_back(32);
    v.push_back(25);

    for (auto it = v.begin(); it != v.end(); it++)cout &lt;&lt; *it &lt;&lt; &#39; &#39;;
    cout &lt;&lt; endl;

    //sort(v.begin(), v.end(), MyCompare());
    sort(v.begin(), v.end(), greater&lt;int&gt;());
    for (auto it = v.begin(); it != v.end(); it++)cout &lt;&lt; *it &lt;&lt; &#39; &#39;;
    cout &lt;&lt; endl;
    return 0;
}
/*output: 
30 19 22 32 25 
32 30 25 22 19 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逻辑仿函数" tabindex="-1"><a class="header-anchor" href="#逻辑仿函数" aria-hidden="true">#</a> 逻辑仿函数</h4><p><strong>功能描述：</strong></p><ul><li>实现逻辑运算</li></ul><h4 id="函数原型" tabindex="-1"><a class="header-anchor" href="#函数原型" aria-hidden="true">#</a> 函数原型：</h4><ul><li><code>template &lt;class T&gt; T logical_and&lt;T&gt;</code></li><li><code>template &lt;class T&gt; T logical_or&lt;T&gt;</code></li><li><code>template &lt;class T&gt; T logical_not&lt;T&gt;</code></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;common.h&quot;
#include &lt;functional&gt;
#include &lt;vector&gt;

int main() {
    logical_and&lt;bool&gt; and1;
    cout &lt;&lt; and1(1, 1) &lt;&lt; endl;
    cout &lt;&lt; and1(0, 1) &lt;&lt; endl;
    //...
    return 0;
}
/*output:
1
0
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>逻辑仿函数实际应用较少，了解即可</li></ul></blockquote><h2 id="stl-常用算法" tabindex="-1"><a class="header-anchor" href="#stl-常用算法" aria-hidden="true">#</a> STL 常用算法</h2><p><strong>概述：</strong></p><ul><li>算法主要是头文件 <code>&lt;algorithm&gt; &lt;functional&gt; &lt;numeric&gt;</code> 组成</li><li><code>&lt;algorithm&gt;</code><ul><li>是所有STL头文件中最大的一个，范围涉及比较、交换、查找、遍历、复制、修改等等算法</li></ul></li><li><code>&lt;numeric&gt;</code><ul><li>提及很小，只包含几个在序列上面进行简单数学运算的模板函数</li></ul></li><li><code>&lt;functional&gt;</code><ul><li>定义了一些模板类，用以声明函数对象</li></ul></li></ul><h3 id="常用遍历算法" tabindex="-1"><a class="header-anchor" href="#常用遍历算法" aria-hidden="true">#</a> 常用遍历算法</h3><p><strong>学习目标：</strong></p><ul><li>掌握常用的遍历算法</li></ul><p>算法简介：</p><ul><li><code>for_each</code><ul><li>遍历容器</li></ul></li><li><code>transform</code><ul><li>搬运容器到另一个容器中</li></ul></li></ul><h5 id="for-each" tabindex="-1"><a class="header-anchor" href="#for-each" aria-hidden="true">#</a> for_each</h5><p><strong>功能描述：</strong></p><ul><li>实现遍历容器</li></ul><p><strong>函数原型：</strong></p><p><code>for_each(iterator begin,iterator end,_func);</code></p><ul><li>遍历算法，遍历容器元素</li><li>begin开始迭代器</li><li>end结束迭代器</li><li>_func 回调：函数或函数对象</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

void print1(int val){
    cout &lt;&lt; val&lt;&lt;&#39; &#39;;
}

class Print2{
public:
    void operator()(int val){
        cout &lt;&lt; val &lt;&lt; &#39; &#39;;
    }
};

int main() {
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    for_each(v.begin(), v.end(), print1);//函数
    cout &lt;&lt; endl;
    for_each(v.begin(), v.end(), Print2());//函数对象
    cout &lt;&lt; endl;
    return 0;
}

/*output：
10 20 30 40 50 
10 20 30 40 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>for_each 在实际开发中是最常用的遍历算法，需要熟练掌握</li></ul></blockquote><h4 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h4><p><strong>功能描述：</strong></p><ul><li>搬运容器另一个容器中</li></ul><p><strong>函数原型：</strong></p><ul><li><code>tansform(iterator begin1, iterator end1, iterator begin2, _func);</code><ul><li>beg1 源容器开始迭代器</li><li>end1 源容器结束迭代器</li><li>beg2 目标容器开始迭代器</li><li>_func 回调：函数或函数对象</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

class Tansform {
public:
    int operator()(int val) {
        return  val;
    }
};

class Print {
public:
    template&lt;typename T&gt;
    void operator()(T val) {
        cout &lt;&lt; val &lt;&lt; &#39; &#39;;
    }
};

int main() {
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    vector&lt;int&gt; target;
    target.resize(v.size());//目标容器需要提前开辟空间

    transform(v.begin(), v.end(), target.begin(), Tansform());

    for_each(v.begin(), v.end(), Print());
    cout &lt;&lt; endl;
    for_each(target.begin(), target.end(), Print());
    cout &lt;&lt; endl;
    return 0;
}


/*output:
10 20 30 40 50 
10 20 30 40 50 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>搬运目标容器必须提前开辟空间，否则无法正常搬运</li></ul></blockquote><h3 id="常用查找算法" tabindex="-1"><a class="header-anchor" href="#常用查找算法" aria-hidden="true">#</a> 常用查找算法</h3><h4 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h4><p><strong>功能描述：</strong></p><ul><li>查找指定元素，找到返回指定位置的迭代器，找不到返回结束迭代器 end()</li></ul><p><strong>函数原型：</strong></p><ul><li><code>find(iterator begin, iterator end,value);</code></li><li>按值查找元素，找到返回指定位置的迭代器，找不到返回结束迭代器 end()</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>value 查找的元素</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;


int main() {
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);
    v.push_back(50);

    vector&lt;int&gt;::iterator it = find(v.begin(), v.end(), 20);
    cout &lt;&lt; *it &lt;&lt; endl;
    it = find(v.begin(), v.end(), 21);
    cout &lt;&lt; *it &lt;&lt; endl;
    cout &lt;&lt; (it == v.end()) &lt;&lt; endl;
    return 0;
}
/*output:
20
0
1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="find-if" tabindex="-1"><a class="header-anchor" href="#find-if" aria-hidden="true">#</a> find_if</h4><p><strong>功能描述：</strong></p><ul><li>根据条件查找元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>find_if(iterator begin,iterator end, _Pred);</code><ul><li>根据条件查找元素，找到返回指定位置的迭代器，否则返回end迭代器</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>_Pred 函数或谓词（返回bool类型的仿函数）</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

class Person {
public:
    Person(string name, int age) {
        this-&gt;name = name;
        this-&gt;age = age;
    }

    string name;
    int age;

    bool operator==(const Person &amp;p) const {
        return this-&gt;name == p.name &amp;&amp; this-&gt;age == p.age;
    }
};

bool condition(const Person &amp;p) {
    return p.age &gt; 50;
}

class Conditional {
public:
    bool operator()(const Person &amp;p) {
        return p.age &gt; 50;
    }
};

ostream &amp;operator&lt;&lt;(ostream &amp;out, const Person &amp;p) {
    out &lt;&lt; p.name &lt;&lt; &#39;-&#39; &lt;&lt; p.age;
    return out;
}

int main() {
    vector&lt;Person&gt; v;
    Person p1(&quot;Hello1&quot;, 50);
    Person p2(&quot;Hello2&quot;, 51);
    Person p3(&quot;Hello3&quot;, 52);
    Person p4(&quot;Hello4&quot;, 53);
    Person p5(&quot;Hello5&quot;, 54);

    v.push_back(p1);
    v.push_back(p2);
    v.push_back(p3);
    v.push_back(p4);
    v.push_back(p5);

    vector&lt;Person&gt;::iterator it = find(v.begin(), v.end(), p2);
    cout &lt;&lt; *it &lt;&lt; endl;
    it = find(v.begin(), v.end(), Person(&quot;&quot;, 1));
    //找不到
    if (it == v.end()) cout &lt;&lt; &quot;no find!&quot; &lt;&lt; endl;
    else cout &lt;&lt; *it &lt;&lt; endl;

    it = find_if(v.begin(), v.end(), condition);
    cout &lt;&lt; *it &lt;&lt; endl;
    it = find_if(v.begin(), v.end(), Conditional());
    cout &lt;&lt; *it &lt;&lt; endl;

    return 0;
}

/*output:
Hello2-51
no find!
Hello2-51
Hello2-51
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>find_if 根据条件查询更加灵活，提供仿函数可以改变不同的策略</li></ul></blockquote><h4 id="adjacent-find" tabindex="-1"><a class="header-anchor" href="#adjacent-find" aria-hidden="true">#</a> adjacent_find</h4><p><strong>功能描述：</strong></p><ul><li>查找第一个相邻重复元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>adjacent_find(iterator begin, iterator end);</code><ul><li>查找相邻重复元素，返回相邻元素的第一个位置的迭代器</li><li>begin 开始迭代器</li><li>end 结束迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;


int main() {
    vector&lt;int&gt; v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(5);
    v.push_back(2);
    v.push_back(4);
    v.push_back(4);
    v.push_back(3);
    v.push_back(3);

    //查找相邻重复元素
    vector&lt;int&gt;::iterator it = adjacent_find(v.begin(), v.end());
    if (it == v.end()) {
        cout &lt;&lt; &quot;找不到!&quot; &lt;&lt; endl;
    }
    else {
        cout &lt;&lt; &quot;找到相邻重复元素为:&quot; &lt;&lt; *it &lt;&lt; endl;
        cout &lt;&lt; &quot;找到相邻重复元素为:&quot; &lt;&lt; *(++it) &lt;&lt; endl;
        cout &lt;&lt; &quot;找到相邻重复元素为:&quot; &lt;&lt; *(++it) &lt;&lt; endl;
    }
    return 0;
}
/*output:
找到相邻重复元素为:4
找到相邻重复元素为:4
找到相邻重复元素为:3
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="binary-search" tabindex="-1"><a class="header-anchor" href="#binary-search" aria-hidden="true">#</a> binary_search</h4><p><strong>功能描述：</strong></p><ul><li>在有序列表中查找指定元素是否存在</li></ul><p><strong>函数原型：</strong></p><ul><li><code>bool binary_search(iterator begin, iterator end, value);</code><ul><li>在有序列表中查找指定元素是否存在，<strong>无序列表不可用</strong></li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>value 查找的元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;


int main() {
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }

    bool e = binary_search(v.begin(), v.end(), 5);
    cout &lt;&lt; e &lt;&lt; endl;
    e = binary_search(v.begin(), v.end(), 10);
    cout &lt;&lt; e &lt;&lt; endl;
    return 0;
}
/*output：
1
0
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>二分查找效率很高，但查找的容器必须是有序列表</li></ul></blockquote><h4 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h4><p><strong>功能描述：</strong></p><ul><li>统计元素个数</li></ul><p><strong>函数原型：</strong></p><ul><li><code>count(iterator begin,iterator end,value);</code><ul><li>统计元素出现次数</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>value 要统计的元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;


int main() {
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(20);
    v.push_back(20);
    v.push_back(30);
    v.push_back(10);

    int c = count(v.begin(), v.end(), 20);
    cout &lt;&lt; c &lt;&lt; endl;
    c = count(v.begin(), v.end(), 30);
    cout &lt;&lt; c &lt;&lt; endl;
    return 0;
}
/*output:
3
1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>统计自定义类型，需要重载运算符 <code>operator==</code></li></ul></blockquote><h4 id="count-if" tabindex="-1"><a class="header-anchor" href="#count-if" aria-hidden="true">#</a> count_if</h4><p><strong>功能描述：</strong></p><ul><li>根据条件统计元素的个数</li></ul><p><strong>函数原型：</strong></p><ul><li><code>count_if(iterator begin,iterator end,_Pred);</code><ul><li>根据条件统计元素的个数</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>_Pred 函数 或 谓词</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

class Greater5 {
public:
    bool operator()(int a) {
        return a &gt; 5;
    }
};

bool greater_five(int a) {
    return a &gt; 5;
}

int main() {
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }
    int c = count_if(v.begin(), v.end(), greater_five);
    cout &lt;&lt; c &lt;&lt; endl;
    c = count_if(v.begin(), v.end(), Greater5());
    cout &lt;&lt; c &lt;&lt; endl;
    return 0;
}
/*output:
4
4
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用排序算法" tabindex="-1"><a class="header-anchor" href="#常用排序算法" aria-hidden="true">#</a> 常用排序算法</h3><p><strong>学习目标：</strong></p><ul><li>掌握常用的排序算法</li></ul><p><strong>算法简介：</strong></p><ul><li><code>sort</code><ul><li>对容器内元素进行排序</li></ul></li><li><code>random_shuffle</code><ul><li>洗牌，指定范围内的元素 随机调整次序</li></ul></li><li><code>merge</code><ul><li>容器元素合并，并存储到另一个容器中</li></ul></li><li><code>reverse</code><ul><li>反转指定范围的元素</li></ul></li></ul><h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h4><p><strong>功能描述：</strong></p><ul><li>队容器内元素进行排序</li></ul><p><strong>函数原型：</strong></p><ul><li><code>sort(iterator begin, iterator end, _Pred);</code><ul><li>对容器内元素进行排序</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>_Pred 函数 或 谓词</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v;
    v.push_back(10);
    v.push_back(12);
    v.push_back(5);
    v.push_back(12);
    v.push_back(8);
    
    sort(v.begin(), v.end());
    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    sort(v.begin(), v.end(), greater&lt;int&gt;());
    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}
/*output:
5 8 10 12 12 
12 12 10 8 5 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>sort 属于开发中最常用的算法之一，需要熟练掌握</li></ul></blockquote><h4 id="random-shuffle" tabindex="-1"><a class="header-anchor" href="#random-shuffle" aria-hidden="true">#</a> random_shuffle</h4><p><strong>功能描述：</strong></p><ul><li>洗牌 ，指定范围内的元素随机调整次序</li></ul><p><strong>函数原型：</strong></p><ul><li><code>random_shuffle(iterator begin, iterator end);</code><ul><li>指定范围内的元素，随机调整次序</li><li>begin 开始迭代器</li><li>end 结束迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;
#include &lt;ctime&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    srand((unsigned int) time(nullptr));
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    random_shuffle(v.begin(), v.end());

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
6 0 3 5 7 8 4 1 2 9 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：</p><ul><li>random_shuffle 洗牌算法比较实用，使用时记得加随机种子</li></ul></blockquote><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h4><p><strong>功能描述：</strong></p><ul><li>两个容器元素合并，并存储到另一个容器</li></ul><p><strong>函数原型：</strong></p><ul><li><code>merge(iterator begin1, iterator end1,iterator begin2, iterator end2,iterator dest);</code></li><li>两个容器元素合并，并存储到另一个容器</li><li>begin1 容器1开始迭代器</li><li>end1 容器1结束迭代器</li><li>begin2 容器2开始迭代器</li><li>end2 容器2结束迭代器</li><li>dest 目标容器</li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    vector&lt;int&gt; v3;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
        v2.push_back(i + 1);
    }
    v2.push_back(20);
    v2.push_back(5);
    v2.push_back(7);
    v2.push_back(9);
    v2.push_back(15);

    v3.resize(v1.size() + v2.size());
    merge(v1.begin(), v1.end(), v2.begin(), v2.end(), v3.begin());

    for_each(v1.begin(), v1.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    for_each(v2.begin(), v2.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    for_each(v3.begin(), v3.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}
/*output：
0 1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 10 20 5 7 9 15 
0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 20 5 7 9 15 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>看教程说的是必须有序的，经过测试并不是，如果是有序的它会自动排序，无序的不会自动排序</li></ul></blockquote><h4 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h4><p><strong>功能描述：</strong></p><ul><li>将容器内元素反转</li></ul><p><strong>函数原型：</strong></p><ul><li><code>reverse(iterator begin, iterator end);</code><ul><li>将容器内元素反转</li><li>begin 开始迭代器</li><li>end 结束迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    reverse(v.begin(), v.end());

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
9 8 7 6 5 4 3 2 1 0 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用拷贝和替换算法" tabindex="-1"><a class="header-anchor" href="#常用拷贝和替换算法" aria-hidden="true">#</a> 常用拷贝和替换算法</h3><p><strong>学习目标：</strong></p><ul><li>掌握常用的拷贝和替换算法</li></ul><p><strong>算法简介：</strong></p><ul><li><code>copy</code> // 容器内指定范围的元素拷贝到另一容器中</li><li><code>replace</code> // 将容器内指定范围的旧元素修改为新元素</li><li><code>replace_if </code> // 容器内指定范围满足条件的元素替换为新元素</li><li><code>swap</code> // 互换两个容器的元素</li></ul><h4 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> copy</h4><p><strong>功能描述：</strong></p><ul><li>容器内指定范围的元素拷贝到另一容器</li></ul><p><strong>函数原型：</strong></p><ul><li><code>copy(iterator begin, iterator end, iterator dest);</code><ul><li>容器内指定范围的元素拷贝到另一容器</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>dest 目标容器开始迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
    }

    for_each(v1.begin(), v1.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    v2.resize(v1.size());
    copy(v1.begin(), v1.end(), v2.begin());

    for_each(v2.begin(), v2.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 5 6 7 8 9 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li><strong>注意：目标容器必须提前开辟空间</strong></li></ul></blockquote><h4 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h4><p><strong>功能描述：</strong></p><ul><li>将容器指定范围内的旧元素替换为新元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>replace(iterator begin, iterator end, oldvalue , newvalue);</code><ul><li>将区间内的旧元素，替换成新元素</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>oldvalue 旧元素</li><li>newvalue 新元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    replace(v.begin(), v.end(), 5, 500);

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}

/*output:
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 500 6 7 8 9 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="replace-if" tabindex="-1"><a class="header-anchor" href="#replace-if" aria-hidden="true">#</a> replace_if</h4><p><strong>功能描述：</strong></p><ul><li>将区间范围内满足条件的元素，替换成指定元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>replace_if(iterator begin, iterator end, _Pred, newvalue);</code><ul><li>将区间范围内满足条件的元素，替换成指定元素</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>_Pred 函数 或 谓词</li><li>newvalue 替换的新元素</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

class GreaterFive{
public:
    bool operator()(int a){
        return a &gt; 5;
    }
};

int main() {
    vector&lt;int&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(i);
    }

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;

    replace_if(v.begin(), v.end(), GreaterFive(), -1);

    for_each(v.begin(), v.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 
0 1 2 3 4 5 -1 -1 -1 -1 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swap" tabindex="-1"><a class="header-anchor" href="#swap" aria-hidden="true">#</a> swap</h4><p><strong>功能描述：</strong></p><ul><li>互换两个容器的元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>swap(container c1, contiainer c2);</code><ul><li>互换两个容器的元素</li><li>c1 容器</li><li>c2 容器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void my_print(T v) {
    cout &lt;&lt; v &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
        v2.push_back(i + 100);
    }
    v1.push_back(10);
    v1.push_back(10);
    v1.push_back(10);
    v1.push_back(10);

    for_each(v1.begin(), v1.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    for_each(v2.begin(), v2.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    cout &lt;&lt; &quot;capacity of v1 : &quot; &lt;&lt; v1.capacity() &lt;&lt; &quot; , size of v1 : &quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;capacity of v2 : &quot; &lt;&lt; v2.capacity() &lt;&lt; &quot; , size of v2 : &quot; &lt;&lt; v2.size() &lt;&lt; endl;

    swap(v1, v2);
    cout &lt;&lt; endl &lt;&lt; &quot;after changed : &quot; &lt;&lt; endl &lt;&lt; endl;
    for_each(v1.begin(), v1.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    for_each(v2.begin(), v2.end(), my_print&lt;int&gt;);
    cout &lt;&lt; endl;
    cout &lt;&lt; &quot;capacity of v1 : &quot; &lt;&lt; v1.capacity() &lt;&lt; &quot; , size of v1 : &quot; &lt;&lt; v1.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;capacity of v2 : &quot; &lt;&lt; v2.capacity() &lt;&lt; &quot; , size of v2 : &quot; &lt;&lt; v2.size() &lt;&lt; endl;
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9 10 10 10 10 
100 101 102 103 104 105 106 107 108 109 
capacity of v1 : 16 , size of v1 : 14
capacity of v2 : 16 , size of v2 : 10

after changed : 

100 101 102 103 104 105 106 107 108 109 
0 1 2 3 4 5 6 7 8 9 10 10 10 10 
capacity of v1 : 16 , size of v1 : 10
capacity of v2 : 16 , size of v2 : 14
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>swap交换容器时 类型必须一致，大小、容量 可以不一致</li></ul></blockquote><h3 id="常用算术生成算法" tabindex="-1"><a class="header-anchor" href="#常用算术生成算法" aria-hidden="true">#</a> 常用算术生成算法</h3><p><strong>学习目标：</strong></p><ul><li>掌握常用的算术生成算法</li></ul><p><strong>注意：</strong></p><ul><li>算术生成算法属于小型算法，使用时包含的头文件为 <code>#include &lt;numeric&gt;</code></li></ul><h4 id="accumulate" tabindex="-1"><a class="header-anchor" href="#accumulate" aria-hidden="true">#</a> accumulate</h4><p><strong>功能描述：</strong></p><ul><li>计算区间内 容器元素累计总和</li></ul><p><strong>函数原型：</strong></p><ul><li><code>accumulate(iterator begin, iterator end, value);</code><ul><li>计算容器元素累计总和</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>value 初始值</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;numeric&gt;
#include  &lt;vector&gt;

using namespace std;

int main(){
    vector&lt;int&gt; v;//5050
    for (int i = 1; i &lt;= 100; ++i) {
        v.push_back(i);
    }
    int total = accumulate(v.begin(), v.end(), 50);
    cout &lt;&lt; &quot;total : &quot; &lt;&lt; total &lt;&lt; endl;
    return 0;
}
/*output：
5100
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li><p>需要引入头文件 ：<code>numeric</code></p></li><li><p>累加元素值的和</p></li></ul></blockquote><h4 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill</h4><p><strong>功能描述：</strong></p><ul><li>向容器中填充指定元素</li></ul><p><strong>函数原型：</strong></p><ul><li><code>fill(iterator begin,iterator end, value);</code><ul><li>向容器中填充元素</li><li>begin 开始迭代器</li><li>end 结束迭代器</li><li>value 填充的值</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include  &lt;vector&gt;

using namespace std;

void my_print(int a){
    cout &lt;&lt; a &lt;&lt; &#39; &#39;;
}

int main(){
    vector&lt;int&gt; v;
    v.resize(10);
    fill(v.begin(), v.end(), 100);
    for_each(v.begin(), v.end(), my_print);
    cout &lt;&lt; endl;
    return 0;
}

/*output：
100 100 100 100 100 100 100 100 100 100 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用集合算法" tabindex="-1"><a class="header-anchor" href="#常用集合算法" aria-hidden="true">#</a> 常用集合算法</h3><p><strong>学习目标：</strong></p><ul><li>掌握常用的集合算法</li><li>交集：A 和 B 集合都存在的元素</li><li>并集：相当于 A 和 B 集合合并后去重</li><li>差集： <ul><li>A 与 B 的差集 <ul><li>A存在但B不存在的元素</li></ul></li><li>B 与 A 的差集 <ul><li>B存在但A不存在的元素</li></ul></li></ul></li></ul><p><strong>算法简介：</strong></p><ul><li><p><code>set_intersection</code></p><ul><li>求两个容器的交集</li></ul></li><li><p><code>set_union</code></p><ul><li>求两个容器的并集</li></ul></li><li><p><code>set_difference</code></p><ul><li>求两个容器的差集</li></ul></li><li><p><strong>求并集的两个集合必须的有序序列</strong>，经过测试并非如此 确实如此，会出现重复的元素,或者缺少元素</p></li></ul><h4 id="set-intersection" tabindex="-1"><a class="header-anchor" href="#set-intersection" aria-hidden="true">#</a> set_intersection</h4><p><strong>功能描述：</strong></p><ul><li>求两个容器的交集</li></ul><p><strong>函数原型：</strong></p><ul><li><code>set_intersection(iterator begin1,iterator end1,iterator begin2,iterator end2,iterator dest)</code><ul><li>求两个容器的交集</li><li>begin1 容器1开始迭代器</li><li>end1 容器1结束迭代器</li><li>begin2 容器2开始迭代器</li><li>end2 容器2结束迭代器</li><li>dest 目标容器开始迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

void my_print(int a) {
    cout &lt;&lt; a &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
    }
    v2.push_back(6);
    v2.push_back(3);
    v2.push_back(5);
    v2.push_back(7);
    v2.push_back(9);
    vector&lt;int&gt; dest;
    dest.resize(min(v1.size(), v2.size()));

    //返回交集最后一个元素的迭代器
    vector&lt;int&gt;::iterator end = set_intersection(v1.begin(), v1.end(), v2.begin(), v2.end(), dest.begin());

    for_each(dest.begin(), end, my_print);
    return 0;
}

/*output：
6 7 9 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>求交集的两个集合必须是有序序列 。如例所示：3 5 不见了</li><li>目标容器开辟空间需要取两个容器较小的大小</li><li>set_intersection 返回值即是交集中最后一个元素的位置</li></ul></blockquote><h4 id="set-union" tabindex="-1"><a class="header-anchor" href="#set-union" aria-hidden="true">#</a> set_union</h4><p><strong>功能描述：</strong></p><ul><li>求两个集合的并集</li></ul><p><strong>函数原型：</strong></p><ul><li><code>set_union(iterator begin,iterator end1,iterator begin2,iterator end2,iterator dest);</code><ul><li>求两个集合的并集</li><li>begin1 容器1开始迭代器</li><li>end1 容器1结束迭代器</li><li>begin2 容器2开始迭代器</li><li>end2 容器2结束迭代器</li><li>dest 目标容器开始迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

void my_print(int a) {
    cout &lt;&lt; a &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
    }
    v2.push_back(10);
    v2.push_back(9);
    v2.push_back(5);
    v2.push_back(7);
    v2.push_back(3);

    vector&lt;int&gt; dest;
    dest.resize(max(v1.size() , v2.size()));

    //返回并集最后一个元素的迭代器
    vector&lt;int&gt;::iterator end = set_union(v1.begin(), v1.end(), v2.begin(), v2.end(), dest.begin());

    for_each(dest.begin(), end, my_print);
    return 0;
}

/*output：
0 1 2 3 4 5 6 7 8 9 10 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>目标容器开辟空间大小需要为两个容器相加</li><li>set_union返回值既是并集中最后一个元素的位置</li></ul></blockquote><h4 id="set-difference" tabindex="-1"><a class="header-anchor" href="#set-difference" aria-hidden="true">#</a> set_difference</h4><p><strong>功能描述：</strong></p><ul><li>求两个集合的差集</li></ul><p><strong>函数原型：</strong></p><ul><li><code>set_difference(iterator begin1,iterator end2,iterator begin2,iterator end2,iterator dest)</code><ul><li>求两个集合的差集</li><li>begin1 容器1开始迭代器</li><li>end1 容器1结束迭代器</li><li>begin2 容器2开始迭代器</li><li>end2 容器2结束迭代器</li><li>dest 目标容器开始迭代器</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

void my_print(int a) {
    cout &lt;&lt; a &lt;&lt; &#39; &#39;;
}

int main() {
    vector&lt;int&gt; v1;
    vector&lt;int&gt; v2;
    for (int i = 0; i &lt; 10; ++i) {
        v1.push_back(i);
    }
    v2.push_back(3);
    v2.push_back(5);
    v2.push_back(7);
    v2.push_back(9);
    v2.push_back(10);

    vector&lt;int&gt; dest;
    dest.resize(v1.size() + v2.size());

    //A 与 B 的差集
    vector&lt;int&gt;::iterator end1 = set_difference(v1.begin(), v1.end(), v2.begin(), v2.end(), dest.begin());

    //B 与 A 的差集
    vector&lt;int&gt;::iterator end2 = set_difference(v2.begin(), v2.end(), v1.begin(), v1.end(), dest.begin());

    for_each(dest.begin(), end1, my_print);
    cout &lt;&lt; endl;
    for_each(dest.begin(), end2, my_print);
    cout &lt;&lt; endl;
    return 0;
}


/*output：
10 1 2 4 6 8 
10 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：</strong></p><ul><li>目标容器开辟空间需要从<strong>两个容器取较大值</strong></li><li>set_difference返回值既是差集中最后一个元素的位置</li></ul></blockquote><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><h3 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h3><ul><li>您可能会写一个名为 xyz() 的函数，在另一个可用的库中也存在一个相同的函数 xyz()。这样，编译器就无法判断您所使用的是哪一个 xyz() 函数。</li><li>因此，引入了<strong>命名空间</strong>这个概念，专门用于解决上面的问题，它可作为附加信息来区分不同库中相同名称的函数、类、变量等。使用了命名空间即定义了上下文。本质上，命名空间就是定义了一个范围。</li><li>我们举一个计算机系统中的例子，一个文件夹(目录)中可以包含多个文件夹，每个文件夹中不能有相同的文件名，但不同文件夹中的文件可以重名。</li></ul><p><strong>示例1：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

namespace first_namespace {
    void func() {
        cout &lt;&lt; &quot;first func()&quot; &lt;&lt; endl;
    }
}
namespace second_namespace {
    void func() {
        cout &lt;&lt; &quot;second func()&quot; &lt;&lt; endl;
    }
}

int main() {
    first_namespace::func();
    second_namespace::func();
    return 0;
}
/*output:
first func()
second func()
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-指令" tabindex="-1"><a class="header-anchor" href="#using-指令" aria-hidden="true">#</a> using 指令</h3><p><strong>功能描述：</strong></p><ul><li><p>可以使用 <code>using namespace &lt;namespace&gt;</code>指令来指定使用的命名空间</p></li><li><p>指定命名空间后，访问命名空间内的成员不再用 <code>&lt;namespace&gt;::</code> 为前缀。</p></li><li><p>也可以使用 <code>unsing &lt;namespace&gt;::&lt;attribute&gt;</code> 来指定使用命名空间中的某一个属性。</p></li></ul><p><strong>示例2:</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

namespace first_namespace {
    void func() {
        cout &lt;&lt; &quot;first func()&quot; &lt;&lt; endl;
    }
}
namespace second_namespace {
    void func() {
        cout &lt;&lt; &quot;second func()&quot; &lt;&lt; endl;
    }
}
using namespace second_namespace;
int main() {
    func();
    first_namespace::func();
    second_namespace::func();
    return 0;
}
/*
second func()
first func()
second func()
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例3 :</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using std::cout;
using std::endl;

namespace first_namespace {
    int a = 10;
    int b = 20;
}
namespace second_namespace {
    int a = 30;
    int b = 40;
}

using first_namespace::a;//10
using second_namespace::b;//40
int main() {
    cout &lt;&lt; a &lt;&lt; endl;
    cout &lt;&lt; b &lt;&lt; endl;
    return 0;
}
/*
10
40
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套命名空间" tabindex="-1"><a class="header-anchor" href="#嵌套命名空间" aria-hidden="true">#</a> 嵌套命名空间</h3><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using std::cout;
using std::endl;

namespace grandpa {
    int a = 10;
    namespace daddy {
        int b = 20;
        namespace son {
            int c = 30;
        }
    }
}

using namespace grandpa;
using namespace grandpa::daddy;
int main() {
    cout &lt;&lt; a &lt;&lt; endl;
    cout &lt;&lt; b &lt;&lt; endl;
    cout &lt;&lt; daddy::son::c &lt;&lt; endl;
    return 0;
}
/*output:
10
20
30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同名命名空间" tabindex="-1"><a class="header-anchor" href="#同名命名空间" aria-hidden="true">#</a> 同名命名空间</h3><p><strong>描述：</strong></p><ul><li>同名的命名空间会合并</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using std::cout;
using std::endl;

namespace hello {
  	 using namespace std;//这样也是可以的
    int a = 10;
}

namespace hello{
    int b = 20;
}

namespace hello{
    int c = 30;
}

int main() {
    cout &lt;&lt; hello::a &lt;&lt; endl;
    cout &lt;&lt; hello::b &lt;&lt; endl;
    cout &lt;&lt; hello::c &lt;&lt; endl;
    using namespace hello;

    cout &lt;&lt; a &lt;&lt; endl;
    cout &lt;&lt; b &lt;&lt; endl;
    cout &lt;&lt; c &lt;&lt; endl;
    return 0;
}
/*output:
10
20
30
10
20
30
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名命名空间" tabindex="-1"><a class="header-anchor" href="#匿名命名空间" aria-hidden="true">#</a> 匿名命名空间</h3><p><strong>描述：</strong></p><ul><li>匿名命名空间就是一个没有名字的命名空间</li></ul><p><strong>有什么用？</strong></p><ul><li>匿名命名空间里面的内容只能被本文件调用，其他文件引用。</li><li>匿名命名空间中的变量特点和全局变量一样，而函数特点像是添加了static的功能一样。也是仅在本文件使用。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;
namespace {
	  using namespace std;//这样也是可以的
    int a = 100;
}

int main() {
    cout &lt;&lt; a &lt;&lt; endl;
    return 0;
}
/*output:
100
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><h3 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h3><ul><li>异常是程序在执行期间产生的问题。C++ 异常是指在程序运行时发生的特殊情况，比如尝试除以零的操作。</li><li>异常提供了一种转移程序控制权的方式。C++ 异常处理涉及到三个关键字：<strong>try、catch、throw</strong>。 <ul><li><strong>throw:</strong> 当问题出现时，程序会抛出一个异常。这是通过使用 <strong>throw</strong> 关键字来完成的。</li><li><strong>catch:</strong> 在您想要处理问题的地方，通过异常处理程序捕获异常。<strong>catch</strong> 关键字用于捕获异常。</li><li><strong>try:</strong> <strong>try</strong> 块中的代码标识将被激活的特定异常。它后面通常跟着一个或多个 catch 块。</li></ul></li></ul><p><strong>模版：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>try
{
   // 保护代码
}catch( ExceptionName e1 )
{
   // catch 块
}catch( ExceptionName e2 )
{
   // catch 块
}catch( ExceptionName eN )
{
   // catch 块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using std::cout;
using std::endl;

double division(int a, int b) {
    if (b == 0) {
        //抛出一个类型为 const char* 的异常。
        throw &quot;Division by zero condition!&quot;;
    }
    if (b == 2) {
        throw 2;
    }
    return (a / b);
}

int main() {
    try {
        cout &lt;&lt; division(1, 1) &lt;&lt; endl;
        cout &lt;&lt; division(1, 0) &lt;&lt; endl;
        cout &lt;&lt; division(1, 1) &lt;&lt; endl;
    } catch (const char *msg) {//捕获到一个  const char* 异常，
        cout&lt;&lt;&quot;err msg : &quot; &lt;&lt; msg &lt;&lt; endl;
    } catch(const int code){
        cout&lt;&lt;&quot;err code : &quot; &lt;&lt; code &lt;&lt; endl;
    }
    try {
        cout &lt;&lt; division(1, 2) &lt;&lt; endl;
        cout &lt;&lt; division(1, 0) &lt;&lt; endl;
        cout &lt;&lt; division(1, 1) &lt;&lt; endl;
    } catch (const char *msg) {
        cout&lt;&lt;&quot;err msg : &quot; &lt;&lt; msg &lt;&lt; endl;
    } catch(const int code){//捕获到一个  const int  异常，
        cout&lt;&lt;&quot;err code : &quot; &lt;&lt; code &lt;&lt; endl;
    }
    return 0;
}
/*output:
1
err msg : Division by zero condition!
err code : 2
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-标准异常" tabindex="-1"><a class="header-anchor" href="#c-标准异常" aria-hidden="true">#</a> C++ 标准异常</h3><p><strong>描述：</strong></p><ul><li>C++ 提供了一系列标准的异常，定义在 <strong>&lt;exception&gt;</strong> 中，我们可以在程序中使用这些标准的异常。它们是以父子类层次结构组织起来的，如下所示：</li></ul><p><img src="https://cxrs.oss-cn-shenzhen.aliyuncs.com/202209130231113.png" alt="exceptions_in_cpp"></p><p>下表是对上面层次结构中出现的每个异常的说明：</p><table><thead><tr><th style="text-align:left;">异常</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>std::exception</strong></td><td style="text-align:left;">该异常是所有标准 C++ 异常的父类。</td></tr><tr><td style="text-align:left;">std::bad_alloc</td><td style="text-align:left;">该异常可以通过 <strong>new</strong> 抛出。</td></tr><tr><td style="text-align:left;">std::bad_cast</td><td style="text-align:left;">该异常可以通过 <strong>dynamic_cast</strong> 抛出。</td></tr><tr><td style="text-align:left;">std::bad_exception</td><td style="text-align:left;">这在处理 C++ 程序中无法预期的异常时非常有用。</td></tr><tr><td style="text-align:left;">std::bad_typeid</td><td style="text-align:left;">该异常可以通过 <strong>typeid</strong> 抛出。</td></tr><tr><td style="text-align:left;"><strong>std::logic_error</strong></td><td style="text-align:left;">理论上可以通过读取代码来检测到的异常。</td></tr><tr><td style="text-align:left;">std::domain_error</td><td style="text-align:left;">当使用了一个无效的数学域时，会抛出该异常。</td></tr><tr><td style="text-align:left;">std::invalid_argument</td><td style="text-align:left;">当使用了无效的参数时，会抛出该异常。</td></tr><tr><td style="text-align:left;">std::length_error</td><td style="text-align:left;">当创建了太长的 std::string 时，会抛出该异常。</td></tr><tr><td style="text-align:left;">std::out_of_range</td><td style="text-align:left;">该异常可以通过方法抛出，例如 std::vector 和 std::bitset&lt;&gt;::operator<a href=""></a>。</td></tr><tr><td style="text-align:left;"><strong>std::runtime_error</strong></td><td style="text-align:left;">理论上不可以通过读取代码来检测到的异常。</td></tr><tr><td style="text-align:left;">std::overflow_error</td><td style="text-align:left;">当发生数学上溢时，会抛出该异常。</td></tr><tr><td style="text-align:left;">std::range_error</td><td style="text-align:left;">当尝试存储超出范围的值时，会抛出该异常。</td></tr><tr><td style="text-align:left;">std::underflow_error</td><td style="text-align:left;">当发生数学下溢时，会抛出该异常。</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;exception&gt;

using namespace std;

void hello() {
    throw runtime_error(&quot;Hello&quot;);
}

int main() {
    try {
        hello();
    } catch (runtime_error e) {
        cout &lt;&lt; e.what() &lt;&lt; endl;
    }
    return 0;
}
/*output:
Hello
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h3><p>描述：</p><ul><li>您可以通过继承和重载 <strong>exception</strong> 类来定义新的异常。下面的实例演示了如何使用 std::exception 类来实现自己的异常：</li></ul><h4 id="异常规格说明" tabindex="-1"><a class="header-anchor" href="#异常规格说明" aria-hidden="true">#</a> 异常规格说明</h4><p>异常规格说明的目的是为了让函数使用者知道该函数可能抛出的异常有哪些。 可以在函数的声明中列出这个函数可能抛掷的所有异常类型。</p><ul><li>例如：<code>void fun() throw(A，B，C，D);</code></li><li>2、若无异常接口声明，则此函数可能抛任何类型的异常。</li></ul><p><strong>示例1</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;exception&gt;

using namespace std;

class MyException : public exception {
public:
    const char *what() const throw() {
        return &quot;Exception By Custom ！&quot;;
    }
};

void test() {
    throw MyException();
}

int main() {
    try {
        test();
    } catch (MyException &amp;e) {
        cout &lt;&lt; e.what() &lt;&lt; endl;
    }
}
/*output:
Exception By Custom ！
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义异常消息" tabindex="-1"><a class="header-anchor" href="#自定义异常消息" aria-hidden="true">#</a> 自定义异常消息</h4><p><strong>示例2</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;exception&gt;

using namespace std;

class MyException : public exception {
private:
    string message;
public:

    MyException(string message) : message(message) {}

    const char *what() const throw() {
        return message.c_str();
    }
};

void test() throw(MyException) {
    throw MyException(&quot;自定义异常消息啊&quot;);
}

int main() {
    try {
        test();
    } catch (MyException &amp;e) {
        cout &lt;&lt; e.what() &lt;&lt; endl;
    }
}
/*output:
自定义异常消息啊
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="信号处理" tabindex="-1"><a class="header-anchor" href="#信号处理" aria-hidden="true">#</a> 信号处理</h2><h3 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h3><ul><li>信号由操作系统传给系统的终端，会提早终止一个程序，在 UNIX、LINUX、Mac OS X 或 Windows 系统上 可以通过按 Ctrl+C 产生中断。</li><li>有些信号不能被程序捕获，但是下表所列信号可以在程序中捕获，并可以基于信号采取适当的动作。这些信号是定义在 C++ 头文件 &lt;csignal&gt; 中。</li></ul><table><thead><tr><th style="text-align:left;">信号</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">SIGABRT</td><td style="text-align:left;">程序的异常终止，如调用 <strong>abort</strong>。</td></tr><tr><td style="text-align:left;">SIGFPE</td><td style="text-align:left;">错误的算术运算，比如除以零或导致溢出的操作。</td></tr><tr><td style="text-align:left;">SIGILL</td><td style="text-align:left;">检测非法指令。</td></tr><tr><td style="text-align:left;">SIGINT</td><td style="text-align:left;">程序终止(interrupt)信号。</td></tr><tr><td style="text-align:left;">SIGSEGV</td><td style="text-align:left;">非法访问内存。</td></tr><tr><td style="text-align:left;">SIGTERM</td><td style="text-align:left;">发送到程序的终止请求。</td></tr></tbody></table><h3 id="signal-函数" tabindex="-1"><a class="header-anchor" href="#signal-函数" aria-hidden="true">#</a> signal 函数</h3><p><strong>功能描述：</strong></p><ul><li>C++ 信号处理库提供了 signal 函数，用来补货突发事件。</li></ul><p><strong>函数原型：</strong></p><ul><li><code>void (*signal (int sig, void (*handler)(int)))(int); </code><ul><li>signal 函数名称</li><li>sig 中断信号：SIGINT、SIGABRT、SIGFPE、SIGILL、SIGSEGV、SIGTERM、SIGHUP</li><li>handler 指向信号处理函数的指针，回调函数。</li><li>返回值： <code>void (*)(int)</code> 是一个函数，不知道有什么作用</li></ul></li></ul><h3 id="raise-函数" tabindex="-1"><a class="header-anchor" href="#raise-函数" aria-hidden="true">#</a> raise() 函数</h3><p>功能描述：</p><ul><li>您可以使用函数 <strong>raise()</strong> 生成信号，该函数带有一个整数信号编号作为参数，语法如下：</li><li><code>int raise (signal sig); </code><ul><li><strong>sig</strong> 是要发送的信号的编号，这些信号包括：SIGINT、SIGABRT、SIGFPE、SIGILL、SIGSEGV、SIGTERM、SIGHUP。</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;signal.h&gt;
#include &lt;unistd.h&gt;

using namespace std;

void signalHandler(int signum) {
    cout &lt;&lt; &quot;Interrupt signal (&quot; &lt;&lt; signum &lt;&lt; &quot;) received. &quot; &lt;&lt; endl;
    // 清理并关闭
    // 终止程序
    exit(signum);
}

int main() {
    int i = 0;
    // 注册信号 SIGINT 和信号处理程序
    signal(SIGINT, signalHandler);
    while(++i){
        cout &lt;&lt; &quot;Going to sleep....&quot; &lt;&lt; endl;
        if( i == 3 ){
            raise( SIGINT);
        }
        sleep(1);
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式" aria-hidden="true">#</a> Lambda表达式</h2><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><ul><li><p>C++11 提供了对匿名函数的支持,称为 Lambda 函数(也叫 Lambda 表达式)。</p></li><li><p>Lambda 表达式把函数看作对象。Lambda 表达式可以像对象一样使用，比如可以将它们赋给变量和作为参数传递，还可以像函数一样对其求值。</p></li><li><p>Lambda 表达式本质上与函数声明非常类似。</p></li></ul><p>Lambda 表达式具体形式如下: <code>[capture](parameters) mutable -&gt;return-type{statement}</code></p><ul><li>例如：<code>[](int x, int y){ return x &lt; y ; }</code></li></ul><p>如果没有返回值可以表示为：<code>[capture](parameters){body}</code></p><ul><li>例如：<code>[]{ ++global_x; } </code></li></ul><p>在一个更为复杂的例子中，返回类型可以被明确的指定如下：</p><ul><li><p><code>[](int x, int y) -&gt; int { int z = x + y; return z + x; }</code></p></li><li><p><code>capture </code> 捕捉参数列表。捕捉列表总是出现在 lambda 表达式的开始处。事实上，[] 是 lambda 引出符。编译器根据该引出符判断接下来的代码是否是 lambda 函数。捕捉列表能够捕捉上下文中的变量供 lambda 函数使用。</p><ul><li><code>[]</code>：不捕获任何变量；</li><li><code>[=]</code>：以值捕获所有变量；</li><li><code>[&amp;]</code>：以引用捕获所有变量；</li><li><code>[x]</code>：仅以值捕获x，其它变量不捕获；</li><li><code>[&amp;x]</code>：仅以引用捕获x，其它变量不捕获；</li><li><code>[=, &amp;x]</code>：默认以值捕获所有变量，但是x是例外，通过引用捕获；</li><li><code>[&amp;, x]</code>：默认以引用捕获所有变量，但是x是例外，通过值捕获；</li><li><code>[this]</code>：通过引用捕获当前对象（其实是复制指针）； <ul><li>只有在类中可以使用</li></ul></li><li><code>[*this]</code>：通过传值方式捕获当前对象； <ul><li>只有在类中可以使用</li></ul></li></ul></li><li><p><code>mutable</code>：mutable 修饰符。默认情况下，lambda 函数总是一个 const 函数，mutable 可以取消其常量性。在使用该修饰符时，参数列表不可省略（即使参数为空）。</p></li><li><p><code>-&gt;return_type</code>：返回类型。用追踪返回类型形式声明函数的返回类型。出于方便，<strong>不需要返回值的时候也可以连同符号 -&gt; 一起省略</strong>。此外，<strong>在返回类型明确的情况下，也可以省略该部分，让编译器对返回类型进行推导</strong>。</p></li><li><p><code>{statement}</code>：函数体。内容与普通函数一样，不过除了可以使用参数之外，还可以使用所有捕获的变量。</p></li></ul><blockquote><p>在 lambda 函数的定义式中，参数列表和返回类型都是可选部分，而捕捉列表和函数体都可能为空，C++ 中最简单的 lambda 函数只需要声明为：<code>[]{};</code></p></blockquote><p><strong>示例：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

class Person {
public:
    string name;
    int age;

    Person() {
        [this]() {};
        [*this]() {};
        [=]() {};
        [&amp;]() {};
    }
};

int main() {
    //int (*pFunction)(int, int) = [](int a, int b) {
    auto pf1 = [](int a, int b) {//像这种已知 比较长且繁琐的类型，可以使用auto来让编译器自动推导
        return a + b;
    };
    cout &lt;&lt; pf1(10, 20) &lt;&lt; endl;

    int a = 10;
    int b = 20;
    auto pf2 = [a](int c, int d) -&gt; int {
        //b + 10; //error
        return a + c + d;
    };
    cout &lt;&lt; pf2(20, 30) &lt;&lt; endl;//100


    auto pf3 = [a](int c) mutable {
        //a = 100; //表达式无法修改通过复制形式捕捉的变量
        // 因为函数调用运算符的重载方法是const属性的。有时候，你想改动传值方式捕获的值，那么就要使用mutable
        a = 100;
    };
    pf3(100);
    cout &lt;&lt; a &lt;&lt; endl;//10

    [&amp;, a]() {};
    [=, &amp;a]() {};
    [&amp;, a]() -&gt; int { return 10 + 20; };//显式返回值
    [=, &amp;a]() { return 10 + 20; };//省略返回值类型，由编译器推导

    return 0;
}
/*output:
30
60
10
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>另外有一点需要注意</strong>。对于[=]或[&amp;]的形式，lambda 表达式可以直接使用 this 指针。但是，对于[]的形式，如果要使用 this 指针，必须显式传入：</p><ul><li><code>[this]() { this-&gt;someFunc(); }();</code></li></ul><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="c-中的引用传递" tabindex="-1"><a class="header-anchor" href="#c-中的引用传递" aria-hidden="true">#</a> C++中的引用传递</h3><blockquote><p>问题来源于一个提示：</p><p>Clang-Tidy: The const qualified parameter ‘str’ is copied for each invocation; consider making it a reference</p></blockquote><p><strong>问题描述</strong>：</p><p>当我传入一个对象时，编译器提示我加入const，后又提示我加入引用符，查了一下才明白缘由。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code> Person(const Person &amp;p, const Person &amp;p1) {
		//someting...
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原因分析</strong>：</p><p>在C++可以使用引用传递作为函数的形参传入函数，相较于值传递的方式，引用传递能够节省函数使用时的内存分配，<strong>不需要像值传递一样拷贝实参</strong>。对于普通的数据类型可能看出引用的优势，<strong>但是如果函数的传入参数是一个十分复杂的结构体或者类，那么引用传递可以节省很大的内存开销</strong>。</p><p>然而，由于引用传递是双向的，当在函数中对于形参的数据进行改变后，实参的值也会进行相应的改变。</p><p><strong>如果我们既不想改变传入参数的值，也不想因为值传递产生太大的开销，那么可以尝试一下使用常引用</strong> <code>const Person &amp;p</code></p><p>这样做很有好处的，<strong>用引用可以减少数值传递过程中的时间，而const则保证这个传过来的值在使用时不被改变</strong>。</p><h3 id="从属类型" tabindex="-1"><a class="header-anchor" href="#从属类型" aria-hidden="true">#</a> 从属类型</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class ClassA {
public:
 class foo {
 };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class ClassA {
public:
 typedef int foo;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当foo是ClassA的内部类或者是内部的一个typedef的时候,foo就是一个从属类型(denpend type)。</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
void printVec(vector&lt;T&gt; v) {
    //vector&lt;T&gt;::iterator terator可能是C的一个静态成员变量或者是C的一个从属类型,
    // 编译器默认是将它解析为一个变量的,所以需要用typename告诉编译器这是一个类型:
    //iterator的定义typedef __wrap_iter&lt;pointer&gt; iterator;
    for (typename vector&lt;T&gt;::iterator it = v.begin(); it != v.end(); it++) {

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>vector&lt;T&gt;::iterator</code> terator可能是C的一个静态成员变量或者是C的一个从属类型，<strong>编译器默认是将它解析为一个变量</strong>,所以需要用typename告诉编译器这是一个类型:</p><p>iterator的定义 : <code>typedef __wrap_iter&lt;pointer&gt; iterator;</code></p><ul><li>在这里 class 不能代替 typename</li></ul></blockquote><h3 id="class-和-struct-的区别" tabindex="-1"><a class="header-anchor" href="#class-和-struct-的区别" aria-hidden="true">#</a> class 和 struct 的区别</h3><blockquote><ul><li>struct 结构体成员和成员函数在默认情况下的访问级别是公有的（public）</li><li>class 类的成员和成员函数在默认情况下的访问级别是私有的（private）</li></ul></blockquote><p><strong>概念：</strong></p><ul><li>class和struct的语法基本相同，从声明到使用都很类似，但是struct的约束要比class多，理论上 struct 能做的 class 都能做，但 class 能做的 struct不一定能做</li></ul><p><strong>类型：</strong></p><ul><li>struct是值类型，class是引用类型，因此它们具有所有值类型和引用类型之间的差异</li></ul><p><strong>效率：</strong></p><ul><li>由于堆栈的执行效率要比堆的执行效率高，但是堆栈资源有限，不适合处理逻辑复杂的大对象，因此struct常用来处理作为基类型对待的小对象，而class来处理大对象</li></ul><p><strong>关系：</strong></p><ul><li>struct 不仅能继承也能被继承，而且可以实现接口，不过class可以完全扩展。</li><li>内部结构有区别，struct只能添加带参数的构造函数，不能使用abstract和protected等修饰符，不能初始化实例。</li></ul><blockquote><ul><li>在表示诸如点、矩阵等主要存储数据的轻量级对象时，首选struct</li><li>在表示数据量大，逻辑复杂的大对象时，首选class</li><li>在表现抽象和多级别的抽象层次时，class是最佳选择</li></ul></blockquote><h3 id="其他函数" tabindex="-1"><a class="header-anchor" href="#其他函数" aria-hidden="true">#</a> 其他函数</h3><h4 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep" aria-hidden="true">#</a> Sleep</h4><p>Linux 用 <strong>#include &lt;unistd.h&gt;</strong> 和 <strong>sleep()</strong>，Windos 用 <strong>#include &lt;windows.h&gt;</strong> 和 <strong>Sleep()</strong>。</p><p>功能：执行挂起一段时间，也就是等待一段时间在继续执行</p><p>用法：<strong>Sleep(时间)</strong></p><p><strong>注意：</strong></p><ul><li>（1）Sleep 是区分大小写的，有的编译器是大写，有的是小写。</li><li>（2）Sleep 括号里的时间，在 Windows 下是以毫秒为单位，而 Linux 是以秒为单位。</li></ul><h3 id="其他关键字" tabindex="-1"><a class="header-anchor" href="#其他关键字" aria-hidden="true">#</a> 其他关键字</h3><h4 id="auto" tabindex="-1"><a class="header-anchor" href="#auto" aria-hidden="true">#</a> auto</h4><p><strong>性质：</strong></p><ul><li>auto可以在声明变量的时候根据变量初始值的类型自动为此变量选择匹配的类型，类似的关键字还有decltype</li><li>auto的自动类型推断发生在编译期，所以使用auto并不会造成程序运行时效率的降低</li><li>与其他变量区别： <ul><li>auto声明的变量必须要初始化，否则编译器不能判断变量的类型。</li><li>auto不能被声明为返回值，auto不能作为形参，auto不能被修饰为模板参数</li></ul></li></ul><p><strong>注意：</strong></p><ul><li>auto 变量必须在定义时初始化，这类似于const关键字。</li><li>auto变量必须始终为定义后的那种类型。</li></ul>`,1362),v=[d];function a(t,r){return n(),e("div",null,v)}const c=i(s,[["render",a],["__file","CPP.html.vue"]]);export{c as default};
