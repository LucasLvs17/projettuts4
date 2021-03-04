import yaml
from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/test/', methods=['get', 'post'])
def config_save():
    videolive = request.form["videolive"]
    loglevel = request.form["loglevel"]
    detection = request.form["detection"]
    streaming = request.form["streaming"]
    recording = request.form["recording"]
    jeealert = request.form["jeedomAlerting"]
    period = request.form["purgeTime"]

    data = {
        'videolive': videolive,
        'loglevel': loglevel,
        'detection': detection,
        'streaming': streaming,
        'recording': recording,
        'jeealert': jeealert,
        'RetentionPeriod': period,
    }

    file = open("Example/srv/config/config.dyn", 'w')

    yaml.dump(data, file, sort_keys=False)

    return redirect('/')


if __name__ == '__main__':
    app.run()
