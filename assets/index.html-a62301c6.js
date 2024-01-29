import{_ as n,o as s,c as a,a as e}from"./app-521e935c.js";const p={},t=e(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="一、设计模式的目的" tabindex="-1"><a class="header-anchor" href="#一、设计模式的目的" aria-hidden="true">#</a> 一、设计模式的目的</h2><ul><li><strong>编写软件过程中，程序员面临着来自 耦合性、内聚性 以及 可维护性、可扩展性、重用性、灵活性 等多方面的挑战</strong><ol><li>代码重用性（即：相同功能的代码，不用多次编写）</li><li>可读性（即：编程规范性，便于其他程序员的阅读和理解）</li><li>可扩展性（即：当需要新增功能时，非常方便）</li><li>可靠性（即：当我们新增功能后，对原来的功能没有影响）</li><li>使程序呈现<strong>高内聚、低耦合</strong>的特性</li></ol></li></ul><h2 id="二、-设计模式常用的七大原则" tabindex="-1"><a class="header-anchor" href="#二、-设计模式常用的七大原则" aria-hidden="true">#</a> 二、 设计模式常用的七大原则</h2><ol><li><h3 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h3><ul><li><h4 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h4><ol><li>对类来说，即一个类应该只负责一项职责。如类A负责两个不同职责：职责1、职责2，当职责1需求变更而改变A时，可能造成职责2执行错误，所以需要将类A的粒度分解为A1、A2</li></ol></li><li><h4 id="单一原则注意事项与细节" tabindex="-1"><a class="header-anchor" href="#单一原则注意事项与细节" aria-hidden="true">#</a> 单一原则注意事项与细节</h4><ol><li><p>降低类的复杂度，一个类只负责一项职责</p></li><li><p>提高类的可读性、可维护性</p></li><li><p>降低变更引起的风险</p></li><li><p>通常情况下，<strong>我们应当单一职责原则</strong>，只有逻辑足够简单，才可以在代码级违反单一职责原则。只有类中方法数量足够少，才可以在方法级别保持单一职责原则</p></li></ol></li><li><h4 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h4><ul><li><p>方案一</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 1、在方式1的run方法中，违反了单一职责原则
 * 2、解决方法非常简单，根据交通工具运行方法不同，分解成不同的类即可
 *
 * @Auther: liuyupei
 * @Date: 2021/3/20 23:46
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingleResponsibility1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Vehicle</span> vehicle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;摩托车&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;汽车&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;飞机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle <span class="token operator">+</span> <span class="token string">&quot;在公路上运行...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方案二</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul></li></ul></li></ol><p>/** * 1、准守单一职责原则 * 2、但是这样做的改动很大 * * @Auther: liuyupei * @Date: 2021/3/20 23:53 */ public class SingleResponsibility2 { public static void main(String[] args) { RoadVehicle roadVehicle = new RoadVehicle(); roadVehicle.run(&quot;摩托车&quot;); roadVehicle.run(&quot;汽车&quot;);</p><pre><code>           AirVehicle airVehicle = new AirVehicle();
           airVehicle.run(&quot;飞机&quot;);
   
           WaterVehicle waterVehicle = new WaterVehicle();
           waterVehicle.run(&quot;轮船&quot;);
   
       }
   }
   
   class RoadVehicle {
       public void run(String vehicle) {
           System.out.println(vehicle + &quot;在公路运行...&quot;);
       }
   }
   
   class AirVehicle {
       public void run(String vehicle) {
           System.out.println(vehicle + &quot;在天空运行...&quot;);
       }
   }
   
   class WaterVehicle {
       public void run(String vehicle) {
           System.out.println(vehicle + &quot;在天空运行...&quot;);
       }
   }
   \`\`\`
   
 - 方案三
 
   \`\`\`java
</code></pre><p>/** * 1、这种修改方法对原来的类没有做大修改，知识增加方法</p><ul><li><p>2、这里虽然没有在类级别上遵守单一职责原则。但是在方法级别上遵守了</p><ul><li>@Auther: liuyupei</li><li>@Date: 2021/3/21 00:00 */ public class SingleResponsibility3 { public static void main(String[] args) { Vehicle2 vehicle2 = new Vehicle2(); vehicle2.runRoad(&quot;摩托车&quot;); vehicle2.runRoad(&quot;汽车&quot;); vehicle2.runAir(&quot;飞机&quot;); vehicle2.runWater(&quot;轮船&quot;); } }</li></ul><p>class Vehicle2 {</p><pre><code>  public void runRoad(String vehicle) {
      System.out.println(vehicle + &quot;在公路上运行...&quot;);
  }

  public void runAir(String vehicle) {
      System.out.println(vehicle + &quot;在飞机上运行...&quot;);
  }

  public void runWater(String vehicle) {
      System.out.println(vehicle + &quot;在海上运行...&quot;);
  }
</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="2"><li><h3 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h3><ul><li><h4 id="基本介绍-1" tabindex="-1"><a class="header-anchor" href="#基本介绍-1" aria-hidden="true">#</a> 基本介绍</h4><ol><li><p>客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上。依赖的接口中，不应该有用不到的方法</p></li><li><p>UML类图</p><p><img src="https://i.loli.net/2021/03/21/gSP7ZN45sfrIEaC.png" alt="图片 1.png"></p></li></ol></li><li><h4 id="应用实例-1" tabindex="-1"><a class="header-anchor" href="#应用实例-1" aria-hidden="true">#</a> 应用实例</h4><ul><li><p>演示传统方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 1、类 A 通过接口 Interface1 依赖类 B，类 C 通过接口 Interface1 依赖类 D，如果接口 Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法。
 * 2、按隔离原则应当这样处理：将接口 Interface1 拆分为独立的几个接口
 *
 * @Auther: liuyupei
 * @Date: 2021/3/21 00:44
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Segregation</span> <span class="token keyword">extends</span> <span class="token class-name">D</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A类通过接口依赖B类</span>
        a<span class="token punctuation">.</span><span class="token function">depend2</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">depend3</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">D</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">C</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//C类通过接口依赖D类</span>
        c<span class="token punctuation">.</span><span class="token function">depend4</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">depend5</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">operation4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">operation5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B 实现了 operation1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B 实现了 operation2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B 实现了 operation3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B 实现了 operation4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B 实现了 operation5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D 实现了 operation1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D 实现了 operation2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D 实现了 operation3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D 实现了 operation4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D 实现了 operation5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * A 类通过接口 Interface1 依赖(使用) B 类，但是只会用到 1,2,3 方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend2</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend3</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * C 类通过接口 Interface1  依赖(使用) D 类，但是只会用到 1,4,5 方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend4</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend5</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">operation5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>改进</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul></li></ul></li></ol><p>/** * 1、这里我们拆分成 3 个接口，类 A 和类 C 分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则 * * @Auther: liuyupei * @Date: 2021/3/21 00:44 */ public class Segregation extends D { public static void main(String[] args) { B b = new B(); A a = new A(); a.depend1(b);//A类通过接口依赖B类 a.depend2(b); a.depend3(b);</p><pre><code>           D d = new D();
           C c = new C();
           c.depend1(d);//C类通过接口依赖D类
           c.depend4(d);
           c.depend5(d);
       }
   }
   
   interface Interface1 {
       void operation1();
   }
   
   interface Interface2 {
       void operation2();
   
       void operation3();
   }
   
   interface Interface3 {
       void operation4();
   
       void operation5();
   }
   
   class B implements Interface1,Interface2 {
       @Override
       public void operation1() {
           System.out.println(&quot;B 实现了 operation1&quot;);
       }
   
       @Override
       public void operation2() {
           System.out.println(&quot;B 实现了 operation2&quot;);
       }
   
       @Override
       public void operation3() {
           System.out.println(&quot;B 实现了 operation3&quot;);
       }
   }
   
   
   class D implements Interface1,Interface3 {
       @Override
       public void operation1() {
           System.out.println(&quot;D 实现了 operation1&quot;);
       }
       @Override
       public void operation4() {
           System.out.println(&quot;D 实现了 operation4&quot;);
       }
   
       @Override
       public void operation5() {
           System.out.println(&quot;D 实现了 operation5&quot;);
       }
   }
   
   /**
    * A 类通过接口 Interface1 依赖(使用) B 类，但是只会用到 1,2,3 方法
    */
   class A {
       public void depend1(Interface1 i) {
           i.operation1();
       }
   
       public void depend2(Interface2 i) {
           i.operation2();
       }
   
       public void depend3(Interface2 i) {
           i.operation3();
       }
   }
   
   /**
    * C 类通过接口 Interface1  依赖(使用) D 类，但是只会用到 1,4,5 方法
    */
   class C {
       public void depend1(Interface1 i) {
           i.operation1();
       }
   
       public void depend4(Interface3 i) {
           i.operation4();
       }
   
       public void depend5(Interface3 i) {
           i.operation5();
       }
   }
   \`\`\`
</code></pre><ol start="3"><li><h3 id="依赖倒转原则" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则" aria-hidden="true">#</a> 依赖倒转原则</h3><ul><li><h4 id="基本介绍-2" tabindex="-1"><a class="header-anchor" href="#基本介绍-2" aria-hidden="true">#</a> 基本介绍</h4><ol><li><p>高层模块不应该依赖低层模块，二者都应该依赖其抽象。（ 调用者为高层,被调用者为低层。其抽象指的是 接口或者抽象类 ）</p></li><li><p>抽象不应该依赖细节，细节应该依赖抽象。（类似 抽象 不应该依赖 实现，实现 应该依赖 抽象）</p></li><li><p>依赖倒转(倒置)的中心思想是面向接口编程</p></li><li><p>依赖倒转原则是基于这样的设计理念：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构比以细节为基础的架构要稳定的多。在 Java 中，抽象指的是接口或抽象类，细节就是具体的实现类</p></li><li><p>使用接口或抽象类的目的是制定好规范，而不涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成</p></li></ol></li><li><h4 id="依赖倒转原则的注意事项和细节" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则的注意事项和细节" aria-hidden="true">#</a> 依赖倒转原则的注意事项和细节</h4><ol><li><p>低层模块尽量都要有抽象类或接口，或者两者都有，程序稳定性更好</p></li><li><p>变量的声明类型尽量是抽象类或接口, 这样我们的变量引用和实际对象间，就存在一个缓冲层，利于程序扩展和优化（依赖关系传递的三种方式）</p></li><li><p>继承时遵循里氏替换原则</p></li></ol></li><li><h4 id="应用实例-2" tabindex="-1"><a class="header-anchor" href="#应用实例-2" aria-hidden="true">#</a> 应用实例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependencyInversion</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     person<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Email</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">&quot;电子邮件信息：Hello,World&quot;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* 接收消息
*
* 1、简单，比较容易想到
* 2、如果我们获取的对象是微信、短信等等，需要新增类，同时Person也要新增相应的接收方法
* 3、解决思路：引入一个抽象的接口IReceive，表示接收者，这样Person类与接口IReceive发生依赖。因为 Email、WeiXin 等等 属于接收范围，他们各自实现IReceive 接口就可以了，
* 这样我们就符合依赖倒转原则
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">Email</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h4 id="依赖关系传递的三种方式和应用实例" tabindex="-1"><a class="header-anchor" href="#依赖关系传递的三种方式和应用实例" aria-hidden="true">#</a> 依赖关系传递的三种方式和应用实例</h4><ol><li><p>通过接口传递实现依赖</p></li><li><p>通过构造器传递依赖</p></li><li><p>通过setter方法传递依赖</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependencyPass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AppleTV</span> appleTV <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppleTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//通过接口传递实现依赖</span>
        <span class="token comment">/*OpenAndClose openAndClose = new OpenAndClose();
        openAndClose.open(appleTV);*/</span>

        <span class="token comment">//通过构造器传递依赖</span>
        <span class="token comment">/*OpenAndClose openAndClose = new OpenAndClose(appleTV);
        openAndClose.open();*/</span>

        <span class="token comment">//通过setter方法传递依赖</span>
        <span class="token class-name">OpenAndClose</span> openAndClose <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token function">setItv</span><span class="token punctuation">(</span>appleTV<span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AppleTV</span> <span class="token keyword">implements</span> <span class="token class-name">ITV</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Apple TV 打开了......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 方式1：通过接口传递实现依赖
 */</span>

<span class="token comment">/*
interface IOpenAndClose{
    void open(ITV itv);//抽象方法接收接口
}

class OpenAndClose implements IOpenAndClose{
    @Override
    public void open(ITV itv) {
        itv.play();
    }
}*/</span>

<span class="token doc-comment comment">/**
 * 方式2：通过构造方法传递
 */</span>

<span class="token comment">/*interface IOpenAndClose{
    void open();
}
class OpenAndClose implements IOpenAndClose{
    private ITV itv;

    public OpenAndClose(ITV itv) {
        this.itv = itv;
    }

    @Override
    public void open() {
        this.itv.play();
    }
}*/</span>

<span class="token doc-comment comment">/**
 * 方式3：通过setter方法c传递
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">setItv</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> itv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ITV</span> itv<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setItv</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> itv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>itv <span class="token operator">=</span> itv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>itv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><h3 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h3></li><li><h3 id="开闭原则-ocp" tabindex="-1"><a class="header-anchor" href="#开闭原则-ocp" aria-hidden="true">#</a> 开闭原则(ocp)</h3></li><li><h3 id="迪米特法则" tabindex="-1"><a class="header-anchor" href="#迪米特法则" aria-hidden="true">#</a> 迪米特法则</h3></li><li><h3 id="合成复用原则" tabindex="-1"><a class="header-anchor" href="#合成复用原则" aria-hidden="true">#</a> 合成复用原则</h3></li></ol>`,13),i=[t];function c(o,l){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","index.html.vue"]]);export{d as default};
