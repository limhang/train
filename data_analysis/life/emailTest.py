#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.header import Header

# 第三方 SMTP 服务
mail_host="smtp.163.com"  #设置服务器
mail_user=""    #用户名
mail_pass=""   #口令 


sender = ''
receivers = ['']  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱

message = MIMEText('主要使用python监控美味不用等，然后提醒我什么时候下单，这个不要封我，orz', 'plain', 'utf-8')
message['From'] = Header("我的苹果电脑", 'utf-8')
message['To'] =  Header("美味不用等", 'utf-8')

subject = 'hang_test'
message['Subject'] = Header(subject, 'utf-8')


try:
    smtpObj = smtplib.SMTP() 
    smtpObj.connect(mail_host,25)    # 25 为 SMTP 端口号
    smtpObj.login(mail_user,mail_pass)
    smtpObj.sendmail(sender, receivers, message.as_string())
    print ("邮件发送成功")
except Exception as e:
    print ("Error: %s"%e)
