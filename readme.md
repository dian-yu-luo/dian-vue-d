
# 背单词功能
使用的是sm-2 算法
算法如下

$$
l=e^{-\frac{t}{a}} 
$$

## 基本规则
## 常用变量
1. l表示单词的保留的记忆内容.l越高,说明记得越牢固,否则表示忘得越多
2. t 距离上一次背诵时间
3. a 表示难度系数,会根据本次背诵的情况进行调整,如果背诵觉得比较难,那么a的值就会减少,遗忘的速度就比较快,如果,觉得比较简单,那么遗忘的速度就比较慢,a的值就比较大,体现在函数曲线中曲线比较缓慢
## 算法流程介绍
1. 获得单词列表
2. 初始化
   需要对不再数据库中的单词进行初始化,插入单词的初始难度,手动设置的优先级,简单笔记,背诵时间,
3. 从数据库中获得单词的全部信息包括如下内容

   * 单词的难度(计算得出)
   * 单词优先级(手动评分且允许更改)
   * 单词笔记(门类众多,用文档型数据库方法保存)
4. 按照难度,排列单词,如果难度相同,按照优先级排列
5. 背诵,队列归前端处理,当背完一个单词,获得单词的背诵次数(count)来判断单词的难度(如果背诵的次数比较多说明单词比较难,否则是比较简单的),同时更新单词,设置一个函数
$$
a=f(a,count) 来更新a的值
$$
并且需要更改的数据库

内容包括
单词日志
   * 单词背诵时间
   * 单词背诵的次数(相当于难度)

单词信息

   * 今天的日期(精确到日)
1. 


## 数据库的表设计
wordlevel
分成三个字段
单词,优先级,难度,需要按天更新难度
update = 更新的点字是什么