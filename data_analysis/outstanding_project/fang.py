import requests
import json
from lxml import etree
import datetime

headers = {'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36','Cookie':'global_cookie=i9q1iec3rpublc5el1daawjz410iyr1q8v1; new_search_uid=e480dd05ea3d2e9fc186a8ce90cbaa46; searchLabelN=1_1486544693_8107%5B%3A%7C%40%7C%3A%5Dac7b6679e914726e85a9e26788d7f9e2; searchConN=1_1486544693_8850%5B%3A%7C%40%7C%3A%5D0c31118da430ffb5861c7963327c77ab; SoufunSessionID_Shop=GetCookie~1_1486546414_12661~%25b1%25b1%25be%25a9_ConditionCount~; SKHRecordsSZ=%25e8%258e%25b2%25e5%25a1%2598%257c%255e2017%252f2%252f20%2b9%253a47%253a04%257c%255e0; sf_source=; s=; showAdsz=1; logGuid=a332d910-ea21-46ba-81c3-d3629764ec09; polling_imei=d4c4bd88a1b1ef4e; __utmt_t0=1; __utmt_t1=1; __utmt_t2=1; city=wh; __utma=147393320.1906539403.1486201044.1488771432.1488777953.15; __utmb=147393320.12.10.1488777953; __utmc=147393320; __utmz=147393320.1488416925.13.13.utmcsr=lijiang.fang.com|utmccn=(referral)|utmcmd=referral|utmcct=/; unique_cookie=U_2xrgi52gclgfz6ksk40sykz2o2vizxk2jvc*9'}

output =open('caogao.m','a')

now = datetime.datetime.now()

writeTime = now.strftime('%Y-%m-%d %H:%M:%S')  
output.write('==========' + writeTime + '==========')
output.write("\n") # 换行

def getUserInfo(url):
	r = requests.get(url,headers=headers)
	html = etree.HTML(r.text)
	for num in range(1,30):
		div_class = "list_D03_%(info).2d"%{'info':num}
		class_name = "//dl[contains(@id,\"%(info)s\")]"%{'info':div_class} 
		result = html.xpath(class_name) # 与 result = html.xpath('//dl[contains(@id,"list_D03_01")]') 等同
		# ====调试的时候使用====勿删====print(result[0].xpath('string(.)'))
		
		#因为有些条数据没有span这个元素所以可以抓取错误。。。
		try:
			result_train_try = result[0].xpath('./dd[1]/div[1]/div[1]/span[1]')[0].text
		# print(result_train_try)
		except Exception as e:
			result_train = '无'
		else:
			result_train = result_train_try

		result_area = result[0].xpath('./dd[1]/div[2]/p[1]')[0].text
		result_price = result[0].xpath('./dd[1]/div[3]/p[1]/span[1]')[0].text
		result_price_ave = result[0].xpath('./dd[1]/div[3]/p[2]')[0].text
		result_title = result[0].xpath('./dd[1]/p[3]/span[1]')[0].text

		# print('名称：' + result_title + '---------' + result_area + '平方米' + result_price + '万' + result_train)
		
		output.write('名称：' + result_title + '---------' + result_area + '平方米' + result_price + '万' + result_train + '========' + result_price_ave)
		output.write("\n") # 换行


for page in range(1,100):
	url_1 = 'http://esf.wh.fang.com/house/i3'
	url = url_1 + str(page) + '/'
	getUserInfo(url)

output.close()





