#使用get发送请求，并且添加参数

#urllib和urllib2的区别与联系(http://blog.csdn.net/dolphin_h/article/details/45296353)

#urllib和urllib2在python3中已经融合了参考：(http://stackoverflow.com/questions/34740288/importerror-no-module-named-urllib2-python-3)

#最新写法(https://zhidao.baidu.com/question/1445864973574728140.html)

import urllib.parse
import urllib.request
url = "http://www.baidu.com/s"
data = {
	'wd' : '航的小站'
}
data = urllib.parse.urlencode(data)
full_url = url + '?' + data
print(full_url)
req = urllib.request.Request(full_url)
response = urllib.request.urlopen(req)
print(response.read().decode('UTF-8'))
