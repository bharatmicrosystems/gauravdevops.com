import json
import os
from datetime import datetime, timedelta
from threading import Thread
import time
import pandas as pd
import urllib.parse

# Read the csv and assign to a schedule dataframe
posts = pd.read_csv('medium.csv', encoding="UTF-8")

# Iterate over the dataframe rows and schedule jobs initially
job_id = 1
list_of_posts = []
txt = ""
sitemap = ""
for row in posts.itertuples(index=True, name='Pandas'):
    link = urllib.parse.quote_plus(row.link.replace("https://medium.com/",""))
    link = "blog.html?slug=" + link
    txt = txt + "<div class=\"item mb-5\">  <div class=\"media\">      <div class=\"media-body\">      <h3 class=\"title mb-1\"><a href=\"" + link + "\" target=\"_blank\">" + row.title + "</a></h3> <div class=\"meta mb-1\"><span class=\"date\">Published " + row.published + "</span><span class=\"time\">" + row.read + "</span></div>           <div class=\"intro\"><p>" + row.subtitle + "</p><p><img class=\"mr-3 img-fluid d-none d-md-flex\" src=\"https://miro.medium.com/max/875/" + row.image_id + "\" alt=\"image\"></p>" + row.description + "</div>      <a class=\"more-link\" href=\"" + row.link + "\" target=\"_blank\">Read more &rarr;</a>    </div><!--//media-body-->  </div><!--//media--></div><!--//item-->"
    sitemap = sitemap + "  <url>\n    <loc>https://gauravdevops.com/"+link+"</loc>\n    <priority>0.5</priority>\n    <changefreq>weekly</changefreq>\n  </url>"

with open('index.template', 'r') as file:
    data = file.read().replace('<div class="container" id="blog_container">', '<div class="container" id="blog_container">'+txt)

with open('sitemap.template', 'r') as file:
    sitemap_data = file.read().replace("placeholder",sitemap)

posts_file = open("../../index.html", "wb")
posts_file.write(data.encode('utf8'))
posts_file.close()

sitemap_file = open("../../sitemap.xml", "wb")
sitemap_file.write(sitemap_data.encode('utf8'))
sitemap_file.close()