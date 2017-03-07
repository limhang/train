import requests
import json
from lxml import etree
import MySQLdb
import time

url_1 = 'https://www.lagou.com/jobs/positionAjax.json?px=default&city='
url_2 = '&needAddtionalResult=false&kd='
headers = {'Host':'www.lagou.com','User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36','Cookie':'user_trace_token=20170208130109-9aaa0404-edbb-11e6-8f61-5254005c3644; LGUID=20170208130109-9aaa0719-edbb-11e6-8f61-5254005c3644; JSESSIONID=F3F361CEED0ACD3F17112753569325C6; _putrc=00C6A03A01332BEB; login=true; unick=%E6%9D%8E%E6%98%8E%E8%88%AA; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; hasDeliver=152; PRE_UTM=; PRE_HOST=; PRE_SITE=; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2Fjobs%2Flist_iOS%3Fpx%3Ddefault%26city%3D%25E6%25B7%25B1%25E5%259C%25B3; _gat=1; TG-TRACK-CODE=index_navigation; SEARCH_ID=4d90963f818446059da0cbf0bdf0b2ba; index_location_city=%E5%B9%BF%E5%B7%9E; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1488005231,1488419706,1488419773,1488504600; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1488510382; _ga=GA1.2.372407027.1486530069; LGSID=20170303104240-11e969ec-ffbb-11e6-a9fb-525400f775ce; LGRID=20170303110621-6110009b-ffbe-11e6-918d-5254005c3644'}

jobs = ['iOS','Android','php','java','python','C++','web']
citys = ['北京','上海','深圳','杭州','广州','成都','武汉']
citys_utf8 = {'北京':'beijing','上海':'shanghai','深圳':'shenzhen','杭州':'hangzhou','广州':'guangzhou','成都':'chengdu','武汉':'wuhan'}

def getCityInfo(city):
	result_job = {}
	for job in jobs:
		url = url_1 + city + url_2 + job
		r = requests.get(url,headers=headers)
		binary = r.content
		data = json.loads(binary)
		count = str(data['content']['positionResult']['totalCount'])
		createTime = time.strftime('%Y-%m-%d',time.localtime(time.time()))
		city_utf8 = 'utf8'
		city_utf8 = citys_utf8[city]
		mysqlBlock(city_utf8,job,count,createTime)


def mysqlBlock(location,job,num,insertTime):
	sqli="insert into lagou values(%s,%s,%s,%s)"
	cursor.execute(sqli,(location,job,num,insertTime))

host="localhost"
user='root'
passwd='9981aa'
db='justTest'
conn=MySQLdb.connect(host,user,passwd,db)
cursor=conn.cursor()

# cursor.execute("create table lagou(location varchar(40) ,job varchar(20), num varchar(30), createTiem varchar(40))")

for city in citys:
	cityResult = getCityInfo(city)

cursor.close()
conn.commit()
conn.close()

	