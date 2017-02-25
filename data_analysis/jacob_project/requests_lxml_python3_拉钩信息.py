import requests
from lxml import etree

r = requests.get('https://www.lagou.com/zhaopin/iOS/?labelWords=label')
# https://www.lagou.com/zhaopin/iOS/?labelWords=label
# https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF?city=%E6%B7%B1%E5%9C%B3&cl=false&fromSearch=true&labelWords=&suginput=

html = etree.HTML(r.text)

result = html.xpath('//div[@class="tab-wrapper"]')

count = result[0].xpath('./a[1]/span')[0].text

print (count)