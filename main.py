import requests

url = "https://api.themoviedb.org/3/movie/changes?page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWFmNGM2NzhlMDU2MTI1OGI1NTIwOGQwYTQ3OTI0ZSIsIm5iZiI6MTc0MTA3OTI4Ni4zMjcwMDAxLCJzdWIiOiI2N2M2YzJmNjU5OGUyMTMwNGEwNGUyZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oVjV09uFNtTXNJGI_I-mD4ouxLDgBLmi5koAThBLJaI"
}

response = requests.get(url, headers=headers)

print(response.text)


url = "https://api.themoviedb.org/3/person/changes?page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWFmNGM2NzhlMDU2MTI1OGI1NTIwOGQwYTQ3OTI0ZSIsIm5iZiI6MTc0MTA3OTI4Ni4zMjcwMDAxLCJzdWIiOiI2N2M2YzJmNjU5OGUyMTMwNGEwNGUyZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oVjV09uFNtTXNJGI_I-mD4ouxLDgBLmi5koAThBLJaI"
}

response = requests.get(url, headers=headers)

print(response.text)


url = "https://api.themoviedb.org/3/tv/changes?page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWFmNGM2NzhlMDU2MTI1OGI1NTIwOGQwYTQ3OTI0ZSIsIm5iZiI6MTc0MTA3OTI4Ni4zMjcwMDAxLCJzdWIiOiI2N2M2YzJmNjU5OGUyMTMwNGEwNGUyZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oVjV09uFNtTXNJGI_I-mD4ouxLDgBLmi5koAThBLJaI"
}

response = requests.get(url, headers=headers)

print(response.text)