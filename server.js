const express = require('express')
const http = require('http')
const fs = require('fs')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const server = http.createServer(app)

app.use(webpackDevMiddleware(webpack(webpackConfig)))

function readFiles(dirname, onFileContent, onError) {
	fs.readdir(dirname, function(err, filenames) {
		if (err) {
			onError(err);
			return;
		}
		filenames.forEach(function(filename) {
			fs.readFile(dirname + filename, 'utf-8', function(err, content) {
				if (err) {
					onError(err);
					return;
				}
				onFileContent(filename, content);
			});
		});
	});
}

let data = {};
readFiles('raw-data/', function(filename, content) {
	let waypointStrArr = content.split('\n')
    let waypoints = []
	waypointStrArr.forEach(waypointStr => {
        let waypointArr = waypointStr.split('	')
        let waypointObj = {
            time_stamp: waypointArr[0],
            lat: waypointArr[1],
            lng: waypointArr[2],
            alt: waypointArr[3]
        }

        waypoints.push(waypointObj)
	})
    let splitName = filename.split('_')
    data[filename] = {
        device_id: splitName[1],
        session_id: splitName[2].substr(0, splitName[2].indexOf('.')),
        waypoints: waypoints
    }

}, function(err) {
	throw err;
});


app.get('/click', (req, res) => {
    res.json(data)
})

app.use(express.static(__dirname + '/public'))

server.listen(3000, () => console.log('Listening on 3000'))
