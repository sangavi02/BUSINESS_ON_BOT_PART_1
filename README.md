# BUSINESS_ON_BOT_PART_1

I created a REST service that can fetch bank details , using the data given in the API’s query parameters and also used the .csv file given The service is written in NodeJS. Then I used the Postman API Platform to send requests and recieved the response in JSON format Finally , deployed it on Heroku .

 1.Branch API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.
## Endpoint:
> /api/branch?q=<>
## REQUEST URL :
> /api/branch?q=RTGS&limit=1&offset=1
## SUCCESS RESPONSE :
> localhost:3300/api/branches/autocomplete?q=RTGS&limit=1&offset=1

> {"branches": [{"ifsc": "ABNA0000001","bank_id": "110","branch": "RTGS-HO",      "address": "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013","city": "MUMBAI","district": "GREATER BOMBAY","state": "MAHARASHTRA"}]}

2. Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
## Endpoint:
> /api/search?q=<>
## REQUEST URL :
> /api/search?q=Mumbai&limit=2&offset=1
## SUCCESS RESPONSE :
>{"branches": [{"ifsc": "ABHY0065002","bank_id": "60","branch": "ABHYUDAYA NAGAR","address": "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033","city": "MUMBAI","district": "GREATER MUMBAI",      "state": "MAHARASHTRA"},{"ifsc": "ABHY0065003","bank_id": "60","branch": "BAIL BAZAR","address": "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070","city": "MUMBAI","district": "GREATER MUMBAI","state": "MAHARASHTRA"}]}
