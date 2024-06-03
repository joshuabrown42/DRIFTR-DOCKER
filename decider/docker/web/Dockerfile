FROM python:3.12-bullseye

# install dir
WORKDIR /opt/decider

# local config
RUN mkdir config

# make non-root app user
RUN adduser --no-create-home --system --shell /bin/false decider && \
    usermod --lock decider && \
    groupadd decider && \
    usermod -aG decider decider

# for CRLF -> LF
RUN apt-get update && \
    apt-get install dos2unix=7.4.1-1 && \
    apt-get install -y rsync=3.2.3-4+deb11u1 && \
    apt-get clean

# setup venv
COPY ["./decider/requirements-pre.txt", "./decider/requirements.txt", "./"]
RUN python3 -m venv venv && \
    . ./venv/bin/activate && \
    pip install --no-cache-dir -r requirements-pre.txt && \
    pip install --no-cache-dir -r requirements.txt

# app files
COPY ["./decider/app", "./app"]
COPY ["./decider/decider.py", "./decider/docker/web/root_files/*", "./"]

# compress static js/css/etc
RUN find app/static/ -type f -not -name "*.gz" -exec gzip -9fk {} +

# perform CRLF -> LF
RUN dos2unix entrypoint.sh

# own app files + run (uWSGI drops up)
RUN chown -R decider:decider .
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]