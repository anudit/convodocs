# convodocs

## Docsearch Indexing
```
docker run -it --env-file=.env.local -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```