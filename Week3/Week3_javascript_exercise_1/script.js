let article = {
  title: 'Why Accessibilty Matters in UI UX Design',
  date: 'May 25, 2023',
  description: "Accessibility is a word that is often thrown around inthe design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it's important."
}

let article2 = {
  title: "Generate Dummy Data for Testing Your Software",
  date: 'Feb 28 2011',
  description: 'Target Integration deals with a lot of CRM applications like vTiger, CiviCRM etc and every now and then we need to test either a new CRM addon or a custom CRM Application for a business. In order to make sure that we don’t do experiments with real user data we use a free script made available by generatedata.com'
}


let title = document.getElementById('title')
let date = document.getElementById('date')
let description = document.getElementById('description')

title.innerText = article.title
date.innerText = article.date
description.innerText = article.description


let title2 = document.getElementById('title2')
let date2 = document.getElementById('date2')
let description2 = document.getElementById('description2')

title2.innerText = article2.title
date2.innerText = article2.date
description2.innerText = article2.description
