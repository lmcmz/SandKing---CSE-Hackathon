from flask import Flask,jsonify, url_for
from flask_restful import reqparse, request
from enum import Enum, unique, IntEnum
import json
import webcms3 as wb3

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
	# static course (hardcode)
	course = {"COMP9321" : "","COMP9319": "","COMP2511": "" ,"COMP9444" : "","COMP1511":""}
	json_string = json.dumps(course)
	json_dic = json.loads(json_string)
	json_dic['COMP9321']="https://webcms3.cse.unsw.edu.au/static/uploads/coursepic/COMP9321/18s2/1a4f74bd93b3b133abbb68b259a1b426034178501c84233457f1edf7d999a1b5/report-3050965_1280.jpg"
	json_dic['COMP9319']="https://techhalls.com/wp-content/uploads/2018/06/videoblocks-data-compression-animated-word-cloud-text-design-animation_hs1obcmpl_thumbnail-full02-1200x675.png"
	json_dic['COMP2511']="https://edward-designer.com/web/wp-content/uploads/2013/09/php8.jpg"
	json_dic['COMP9444']="https://rossintelligence.com/wp-content/uploads/2018/01/1_vKJ11OU-TiaIJ-2PDawJqQ-1024x724.jpeg"
	json_dic['COMP1511']="https://i.ytimg.com/vi/rBu_quzdZN4/maxresdefault.jpg"
	return jsonify(json_dic)

@app.route("/banner", methods=['GET'])
def banner():
	society_banner = {"Arc" : "","CSE Hackathon" : ""}
	json_string = json.dumps(society_banner)
	json_dic = json.loads(json_string)
	json_dic['Arc']= "http://bluesat.com.au/wp-content/uploads/2015/11/Arc-Clubs-Logo-White-on-Black.jpg"
	josn_dic['CSE Hackathon']="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/39948242_2029429077090054_8917549650752307200_o.jpg?_nc_cat=0&oh=ef7ffc53f6411268764142c9bb314217&oe=5C2881AD"
	return jsonify(json_dic)

@app.route("/<cID>", methods=['GET'])
def detail(cID):
	orderList = list()
	return jsonify(orderList)

@app.route("/download/<cID>", methods=['GET','POST'])
def download(cID):
	orderList = list()
	content = request.json
	result = wb3.download(content['zid'], content['zPassword'], cID)
	return jsonify(orderList)

if __name__ == "__main__":
	app.config['JSON_AS_ASCII'] = False
	app.debug = True
	app.run()