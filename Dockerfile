FROM python:3

WORKDIR /urs/src/app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python3", "app.py"]