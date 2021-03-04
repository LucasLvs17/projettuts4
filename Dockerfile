FROM python:3.9-slim-buster

RUN ENABLE_HEADLESS=1 pip wheel /opencv-python --verbose

ENV FLASK_ENV=production

ADD . /srv/
RUN rm -r /srv/Example
ADD Example/srv /srv/
WORKDIR /srv

EXPOSE 5000
#VOLUME /srv/logs

CMD [ "python3.9", "-m" , "flask", "run", "--host=0.0.0.0"]
