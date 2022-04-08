from pymongo import MongoClient
import json

f = open('config.json')
config = json.load(f)
f.close()
client = MongoClient(config['domain'], config['port'])