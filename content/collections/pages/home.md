---
id: home
blueprint: pages
title: Home
template: template/home
author: a253c262-369b-4372-99d7-40e0989db330
updated_by: a253c262-369b-4372-99d7-40e0989db330
updated_at: 1661088443
replicator_field:
  -
    title: 'Mehmet Ali Ayvaz'
    button_text: Hakkımda
    button_link: 'entry::b55f66eb-0a3b-40fc-9e8a-9464f99835aa'
    template: components/home-intro
    type: page_content
    enabled: true
    background: img/bg/bg-1.jpg
  -
    title: Blog
    description: 'Son Yazılar'
    button_text: 'Tümünü Gör'
    button_link: 'entry::a67bef60-c7ca-4c66-a4b0-a34aa4d2a3a6'
    template: components/home-blog
    type: page_content
    enabled: true
  -
    title: Fotoğraflar
    description: 'Hobi olarak fotoğrafçılıkla uğraşıyorum. Tümünü gör diyerek çektiğim tüm fotoğraflara ulaşabilirsiniz.'
    button_text: 'Tümünü Gör'
    button_link: 'entry::e2b44307-0660-4557-88b8-fbdacf9adb45'
    template: components/home-photos
    type: page_content
    enabled: true
    galery:
      - img/article/default-1.png
      - img/article/default-2.png
      - img/article/default-3.png
      - img/article/default-4.png
      - img/article/default-5.png
  -
    content: |-
      <h2 class="mb-5 text-3xl font-semibold text-white">Sosyal Medya</h2>
      <ul class="font-light text-white">
        <li><a href="#" target="blank">github.com/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">linkedin.com/in/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">medium.com/@mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">instagram.com/mhmtaliayvaz</a></li>
        <li><a href="#" target="blank">twitter.com/mhmtaliayvaz</a></li>
        <li><a href="#" target="blank">youtube.com/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">pexels.com/@mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">instagram.com/siyahdiyafram</a></li>
        <li><a href="#" target="blank">mehmetaliayvaz61@gmail.com</a></li>
      </ul>
    template: components/home-contact
    type: page_content
    enabled: true
    background: img/bg/bg-2.jpg
page_content:
  -
    title: 'Kişisel Blog'
    background: img/bg/bg-1.jpg
    button_text: Hakkımda
    button_link: 'entry::b55f66eb-0a3b-40fc-9e8a-9464f99835aa'
    template: components/home-intro
    type: page_content
    enabled: true
    section_template: components/home-intro
    description: 'Bu websitenin kaynak kodlarına <a href="https://github.com/mehmetaliayvaz/personal-blog" target="blank" style="font-weight: 600;">buraya </a> tıklayarak ulaşabilirsiniz.'
  -
    title: Blog
    button_text: 'Tümünü Gör'
    button_link: 'entry::a67bef60-c7ca-4c66-a4b0-a34aa4d2a3a6'
    template: components/home-blog
    type: page_content
    enabled: true
    section_template: components/home-blog
    description: 'Son Yazılar'
  -
    title: Fotoğraflar
    description: 'Hobi olarak fotoğrafçılıkla uğraşıyorum. Tümünü gör diyerek çektiğim tüm fotoğraflara ulaşabilirsiniz.'
    galery:
      - img/article/default-1.png
      - img/article/default-2.png
      - img/article/default-3.png
      - img/article/default-4.png
      - img/article/default-5.png
    button_text: 'Tümünü Gör'
    button_link: 'entry::e2b44307-0660-4557-88b8-fbdacf9adb45'
    template: components/home-photos
    type: page_content
    enabled: true
    section_template: components/home-photos
  -
    background: img/bg/bg-2.jpg
    content: |-
      <h2 class="mb-5 text-3xl font-semibold text-white">Sosyal Medya</h2>
      <ul class="font-light text-white">
        <li><a href="#" target="blank">github.com/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">linkedin.com/in/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">medium.com/@mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">instagram.com/mhmtaliayvaz</a></li>
        <li><a href="#" target="blank">twitter.com/mhmtaliayvaz</a></li>
        <li><a href="#" target="blank">youtube.com/mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">pexels.com/@mehmetaliayvaz</a></li>
        <li><a href="#" target="blank">instagram.com/siyahdiyafram</a></li>
        <li><a href="#" target="blank">mehmetaliayvaz61@gmail.com</a></li>
      </ul>
    template: components/home-contact
    type: page_content
    enabled: true
    section_template: components/home-contact
published: true
---
