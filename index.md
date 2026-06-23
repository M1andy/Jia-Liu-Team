---
---

# 实验室简介

实验室主要研究目标分为通用人工智能和专用人工智能，
前者包括多模态大模型、几何特征学习和生成式模型，
后者包括医疗健康计算、无人机视觉感知和水下目标感知。
具体来说，实验室的主要研究领域包括图像匹配、图像分割、目标检测、图像增强、少/零样本学习、持续学习、半监督学习、图像生成、多模态学习及医学影像等方面。

{% include section.html %}

## 新闻公告

{% include list.html data="posts" component="news-item" %}

{%
  include button.html
  link="news"
  text="查看全部新闻"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% include section.html %}

## 实验室介绍

{% capture text %}

近三年（2022年至2026年）实验室发表多篇CCF-A类，CCF-B类论文。

主持国家自然科学基金原创探索项目1项，国家自然科学基金面上项目3项，
国家自然科学基金青年项目2项，辽宁省自然科学基金2项，中央高校基本科研业务费资助项目等纵向项目；
同时，主持CCF-腾讯犀牛鸟科研基金、中电科企业委托课题等横向项目。

{%
  include button.html
  link="research"
  text="查看实验室近年论文发表情况"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/publications/2022/Segment_Magnify_and_Reiterate_Detecting_Camouflaged_Objects_the_Hard_Way.png"
  link="research"
  title="实验室研究成果"
  text=text
%}

{% capture text %}


目前（2026年）在校博士研究生4名，在校硕士研究生15名。

本实验室秉承"全面发展，科研育人"理念，着力培养兼具学术素养与综合能力的新时代人才。
科研方面，通过多导师指导、定期组会研讨及专题培训，助力学生深耕专业领域，
近年人均参与发表高水平学术论文1-2篇，成果丰硕，
同时大力支持研究生参加国内外学术会议，通过学术报告、海报展示等形式与领域专家深度交流，有效拓展学术视野。

{%
  include button.html
  link="team"
  text="查看实验室团队"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/groups/family-4.jpg"
  link="team"
  title="团队介绍"
  text=text
%}

{% include section.html %}

## 实验室生活

实验室倡导"科研健康两不误"，定期组织登山、踏青等团建活动，设有年度运动基金支持羽毛球、健身等多样化活动，营造温暖有活力的团队氛围。

{% capture content %}

{% include card.html image="images/groups/hiking-1.jpg" link="life/activities" title="活动" description="记录实验室团建、登山、运动等活动。" %}
{% include card.html image="images/groups/family-4.jpg" link="life/graduation" title="毕业" description="记录毕业合照、答辩和送别时刻。" %}
{% include card.html image="images/groups/family-2.jpg" link="life/conferences" title="会议" description="记录学术会议、报告交流和海报展示。" %}

{% endcapture %}

{% include grid.html content=content %}
