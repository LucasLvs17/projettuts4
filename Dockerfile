FROM python:3.9-slim-buster

RUN apt-get clean && apt-get update && apt-get install -y build-essential git
RUN pip3.9 install --upgrade pip setuptools wheel

RUN git clone --recursive https://github.com/skvark/opencv-python.git /opencv-python

RUN ENABLE_HEADLESS=1 pip wheel /opencv-python --verbose

ENV FLASK_ENV=production

ADD . /srv/
RUN rm -r /srv/Example
ADD Example/srv /srv/
WORKDIR /srv

EXPOSE 5000
#VOLUME /srv/logs

CMD [ "python3.9", "-m" , "flask", "run", "--host=0.0.0.0"]
