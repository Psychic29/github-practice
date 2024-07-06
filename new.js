# Welcome to the Dev Tools Console!
#
# You can use Console to explore the Elasticsearch API. See the Elasticsearch API reference to learn more:
# https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html
#
# Here are a few examples to get you started.


DELETE /users

PUT /users
{
  "mappings": {
    "properties": {
      "name": {
        "type": "keyword",
        "normalizer": "lowercase"
      },
      "email": {
        "type": "keyword",
        "normalizer": "lowercase"
      }
    }
  },
  "settings": {
    "analysis": {
      "normalizer": {
        "lowercase": {
          "type": "custom",
          "char_filter": [],
          "filter": ["lowercase"]
        }
      }
    }
  }
}

POST _reindex
{
  "source": {
    "index": "old_users"
  },
  "dest": {
    "index": "users"
  }
}




PUT /users/_doc/1
{
  "name": "Bob Johnson",
  "email": "Bob@gmail.com",
  "hobbies": ["Science", "Music", "Drawing"],
  "imageName": "Bobby"
}

PUT /users/_doc/2
{
  "name": "Charlie Brown",
  "email": "Charlie@gmail.com",
  "hobbies": ["Science", "Music", "Drawing"],
  "imageName": "Charlie"
}

PUT /users/_doc/3
{
  "name": "Alice Smith",
  "email": "Alice@gmail.com",
  "hobbies": ["Science", "Music", "Drawing"],
  "imageName": "Alice"
}


GET users/_mapping

GET users/_search
{
  "query": {
    "match_all": {}
  }
}

GET users/_search
{
  "query": {
    "match": {"hobbies" : "science"}
  }
}

GET users/_search
{
  "query": {
    "match": {"name" : "Charlie Brown"}
  }
}

GET users/_search
{
  "query": {
    "multi_match": {
      "query": "Charlie Brown",
      "fields": ["name", "email"]
    }
  }
}

GET users/_search
{
  "query": {
    "bool": {
      "should": [
        {
          "wildcard": {
            "name": "*bob*"
          }
        },
        {
          "wildcard": {
            "email": "*bob*"
          }
        }
      ]
    }
  }
}


# Create an index
PUT /my-index

DELETE /my-index
# Add a document to my-index
POST /my-index/_doc
{
    "id": "park_rocky-mountain",
    "title": "Rocky Mountain",
    "description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra."
}


# Perform a search in my-index
GET /my-index/_search?q="rocky mountain"
