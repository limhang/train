import requests
from lxml import etree

# r = requests.get('http://esf.sz.fang.com/')

# r = requests.get('http://esf.sh.fang.com/')

r = [requests.get('http://esf.sz.fang.com/'),requests.get('http://esf.sh.fang.com/')]

output =open('房产信息.md','w')

for info in r:
	# print(info.url)
	html = etree.HTML(info.text)
	#step 1 选取想找的代码块
	result = html.xpath('//div[@class="newcardR clearfix"]')
	#step 2 对代码块进行逐层分析，找到对应的数据
	money = result[0].xpath('./dl[2]/dd/p[2]/b')[0].text

	count = result[0].xpath('./dl[1]/dd/p[2]/b')[0].text
	if info.url == 'http://esf.sz.fang.com/':
		location = '深圳二手房价格'
	else:
		location = '上海二手房价格'
	output.write(location + ' ' + money + '元     ' + '上周成交量' + ' ' + count + '套')
	print (location + ' ' + money + '元     ' + '上周成交量' + ' ' + count + '套')
output.close()

# ==============解析的以下代码===============
# <div class="newcardR clearfix">
            
#       <dl style="margin:0 80px 0 0px;">
      
#       		<dt class="newcardRdt dealNum"></dt>
# 			<dd>
# 		        <p>
		            
# 		            <span class="newcardRfir">上周成交量</span>
# 		            <i class="redUpword">↑</i>
# 		            <span>61.12%</span>
		            
# 		         </p>   
# 		         <p class="setNum"> 
		             
# 		            <b>804</b>套
		             
# 		         </p> 
# 			</dd>
#         </dl>
            
#         <dl style="margin:0 80px 0 0px;">
                  
#             <dt class="newcardRdt dealPrice"></dt>
#                 <dd>
#             		<p>
#               			<span class="newcardRfir">2月参考均价</span>
#                 		<i class="redUpword">↑</i>
#                 		<span>4.71%</span>
                
#           			</p> 
#              		<p class="setNum">
#                   		<b>50335</b>元/㎡           
#              		</p>
#                 </dd>
#         </dl>
# </div>





