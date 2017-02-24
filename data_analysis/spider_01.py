#最基本的spider使用
import requests
url = "http://news.163.com/rank/"
response = requests.get(url)
content = requests.get(url).content
print(content.decode("gbk"))
