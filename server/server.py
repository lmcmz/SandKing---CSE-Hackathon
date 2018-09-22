from flask import Flask,jsonify, url_for
from flask_restful import reqparse, request
from enum import Enum, unique, IntEnum
import json
import webcms3 as wb3

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
	orderList = list()
	return jsonify(orderList)

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