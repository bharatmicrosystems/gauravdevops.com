import json
import os
from datetime import datetime, timedelta
from threading import Thread
import time
import pandas as pd

# Read the csv and assign to a schedule dataframe
posts = pd.read_csv('medium.csv')

# Iterate over the dataframe rows and schedule jobs initially
job_id = 1
list_of_posts = []
for row in posts.itertuples(index=True, name='Pandas'):
    post = {"title": row.title, "subtitle": row.subtitle,
            "image_id": row.image_id, "link": row.link, "published": row.published, "read": row.read, "published_on": row.published_on}
    list_of_posts.append(post)

posts_json = json.dumps(list_of_posts)
posts_js = "var myObj = JSON.parse('"+posts_json+"');"
posts_file = open("posts.js", "w")
posts_file.write(posts_js)
posts_file.close()