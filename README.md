# Flight Finder

> React / Redux application using the Ryanair API

https://enda.ie/sandbox/flight-finder

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Add document to elastic
 curl -XPOST 'https://XXXXX:XXXXXXX@alder-1482452.us-east-1.bonsaisearch.net/flights/flight/?pretty' -H 'Content-Type: application/json' -d'
                            {
                                "user" : "kimchy",
                                "post_date" : "2009-11-15T14:12:12",
                                "message" : "trying out Elasticsearch"
                            }
                            '