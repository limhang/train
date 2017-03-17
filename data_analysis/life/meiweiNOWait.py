import requests
import json
import time
#最坑的地方在于，城市这个变动的数据值保存在cooike中,就是cookie的zhaopingou_select_city


url = 'http://c-api.mwee.cn/wx_queue/shop/detail'

payload = {'shopId':'127113'}



r = requests.post(url,data=payload)
binary = r.content.decode()

data = json.loads(binary)

print(data)
out = data['data']['queueInfo']['queueList'][1]['name']
print(out)
# data = json.loads(binary)

