---
title: 团队介绍
nav:
  order: 2
  tooltip: 团队详细介绍
---

# 团队介绍

实验室同时倡导“科研健康两不误”，设立年度运动基金支持羽毛球、健身等多样化活动，实验室定期组织登山、踏青等团建，营造活力氛围。团队注重德育与人文关怀，师生关系融洽，形成“严谨而不失温度”的协作模式，助力学生在学术能力、身心素质与团队精神上同步成长。

# {% include icon.html icon="fa-solid fa-users" %}教师

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'associate-professor'" %}

{% include section.html %}

# {% include icon.html icon="fa-solid fa-users" %}博士生

{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

# {% include icon.html icon="fa-solid fa-users" %}硕士生

{% include list.html data="members" component="portrait" filter="role == 'undergrad'" %}

{% include section.html %}

# {% include icon.html icon="fa-solid fa-users" %}往届学生

{% include list.html data="members" component="portrait" filter="role =~ /^pass/" %}

{% include section.html %}

# {% include icon.html icon="fa-solid fa-users" %}团队合照

{% capture content %}

{% include figure.html image="images/groups/family-1.jpg" caption="实验室团建" %}
{% include figure.html image="images/groups/family-3.jpg" caption="2024届实验室毕业合照" %}
{% include figure.html image="images/groups/hiking-1.jpg" caption="实验室同学组织爬山" %}
{% include figure.html image="images/groups/family-2.jpg" caption="实验室团建" %}
{% include figure.html image="images/groups/family-4.jpg" caption="2024届实验室毕业合照" %}
{% include figure.html image="images/groups/hiking-2.jpg" caption="实验室同学组织爬山" %}

{% endcapture %}

{% include grid.html style="rect" content=content %}
