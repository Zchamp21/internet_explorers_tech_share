""" database access
docs:
* http://initd.org/psycopg/docs/
* http://initd.org/psycopg/docs/pool.html
* http://initd.org/psycopg/docs/extras.html#dictionary-like-cursor
"""

from contextlib import contextmanager
import logging
import os

from flask import current_app

import psycopg2
from psycopg2.pool import ThreadedConnectionPool
from psycopg2.extras import DictCursor

pool = None

def setup():
  global pool
  DATABASE_URL = os.environ['DATABASE_URL']
  current_app.logger.info(f"creating db connection pool")
  pool = ThreadedConnectionPool(1, 5, dsn=DATABASE_URL, sslmode='require')


@contextmanager
def get_db_connection():
  try:
    connection = pool.getconn()
    yield connection
  finally:
    pool.putconn(connection)


@contextmanager
def get_db_cursor(commit=False):
  with get_db_connection() as connection:
    cursor = connection.cursor(cursor_factory=DictCursor)
    try:
      yield cursor
      if commit:
        connection.commit()
    finally:
      cursor.close()


def add_message(name, message):
  with get_db_cursor(True) as cur:
    cur.execute('INSERT INTO quill_data (name, message) VALUES (%s, %s);',
                (name, message))
    
def get_messages():
  with get_db_cursor(False) as cur:
    cur.execute('SELECT * from quill_data order by id asc')
    return cur.fetchall()
  
def update_messages(newMessage, id):
  with get_db_cursor(True) as cur:
    cur.execute('update quill_data set message=%s where id=%s',
                (newMessage, id,))