#-*- coding:utf-8 -*-
import http.client
import urllib
import requests
import json
import time

url = 'http://c-api.mwee.cn/wx_queue/shop/detail'
payload = {'shopId':'127113'}

host  = "106.ihuyi.com"
sms_send_uri = "/webservice/sms.php?method=Submit"
 
#用户名是登录ihuyi.com账号名（例如：cf_demo123）
account  = "C18696979"
#密码 查看密码请登录用户中心->验证码、通知短信->帐户及签名设置->APIKEY
password = "7e46204054e54435141546124df8b4af"
 
def send_sms(text, mobile):
    params = urllib.parse.urlencode({'account': account, 'password' : password, 'content': text, 'mobile':mobile,'format':'json' })
    headers = {"Content-type": "application/x-www-form-urlencoded", "Accept": "text/plain"}
    conn = http.client.HTTPConnection(host, port=80, timeout=30)
    conn.request("POST", sms_send_uri, params, headers)
    response = conn.getresponse()
    response_str = response.read().decode()
    conn.close()
    return response_str
 

if __name__ == '__main__':
 
    mobile = "15899870524"
    text = "您的验证码是：000000。请不要把验证码泄露给其他人。"

    r = requests.post(url,data=payload)
    binary = r.content.decode()
    data = json.loads(binary)
    out = data['data']['queueInfo']['queueList'][1]['name']
    print(out)
    if out == '中桌(晚市)':
        print(send_sms(text, mobile))
 